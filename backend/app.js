require('dotenv').config();
const session = require('express-session');
const axios = require('axios');
const express = require('express')
const { Pool } = require("pg");
const cors = require('cors');

const app = express()
const PORT = 3000

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(session({
  secret: process.env.SECRET_SESSION, 
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

app.get('/', (req, res) => {
})

app.get('/login', (req, res) => {
  const state = Math.random().toString(36).substring(2);
  req.session.state = state;

  const authUrl = `https://auth.hackclub.com/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/callback&response_type=code&scope=openid profile email slack_id&state=${state}`;
  res.redirect(authUrl);
});

app.get('/oauth/callback', async (req, res) => {
  const { code, state } = req.query;

  if (state !== req.session.state) return res.status(403).send("Invalid state");

  try {
    const tokenResp = await axios.post(
      'https://auth.hackclub.com/oauth/token',
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        redirect_uri: 'http://localhost:3000/oauth/callback',
        grant_type: 'authorization_code'
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const access_token = tokenResp.data.access_token;

    const userResp = await axios.get('https://auth.hackclub.com/api/v1/me', {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    req.session.user = userResp.data;
    console.log(req.session.user);

    res.redirect('http://localhost:5173');
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).send("OAuth failed");
  }
});

app.get('/me', (req, res) => {
  if (!req.session.user) return res.status(401).send("Not logged in");
  res.json(req.session.user);
});

app.get('/offlineAdmin', (req, res) => {
  if (req.session.user?.identity?.slack_id !== process.env.SLACK_ID) {
    return res.status(403).json({ ok: false });
  } else {
    res.json({ ok: true });
  }
  
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})