import './App.css'
import FaultyTerminal from './components/FaultyTerminal';
import { Routes, Route, Link, useLocation } from "react-router-dom";


function Home() {

  return (

    <div className='BGCon'>
      <FaultyTerminal
        className='BG'
        scale={1}
        gridMul={[2, 1]}
        digitSize={1.5}
        scanlineIntensity={0.3}
        glitchAmount={1}
        flickerAmount={1}
        chromaticAberration={0.05}
        curvature={0.2}
        tint="#00ff00"
      />

      <div className="overlay" onClick={modal}></div>

      <div className="faqCon">
        <button className='faq' onClick={modal}>?</button>
      </div>


      <div className="modCon">
        <div className="mod">


          <div className="top">
            <h1 className='faqTitle'>Frequently Asked Questions</h1>
            <button className='close' onClick={modal}>X</button>
          </div>

          <div className="questions">
            <button className='q' onClick={toggleFAQ}>
              <div className='q-header'>
                Who can submit?
                <span className='arrow'>▼</span>
              </div>
              <span className='hiddenDesc'>Offline is open to all Hack Clubbers. All teenagers 18 and under, anywhere in the world can participate.</span>
            </button>
            

            <button className='q' onClick={toggleFAQ}>
              <div className='q-header'>
                Can i use AI to help make my project?
                <span className='arrow'>▼</span>
              </div>
              <span className='hiddenDesc'>No AI is allowed to help make your project at all.</span>
            </button>

            <button className='q' onClick={toggleFAQ}>
              <div className='q-header'>
                How many projects can i make?
                <span className='arrow'>▼</span>
              </div>
              <span className='hiddenDesc'>You're only allowed to make one project for this YSWS.</span>
            </button>

            <button className='q' onClick={toggleFAQ}>
              <div className='q-header'>
                What are the rewards?
                <span className='arrow'>▼</span>
              </div>
              <span className='hiddenDesc'>Check out the <span className='chsh'>Shop!</span></span>
            </button>

            <button className='q' onClick={toggleFAQ}>
              <div className='q-header'>
                What are the requirements for each project?
                <span className='arrow'>▼</span>
              </div>
              <span className='hiddenDesc'>
                <ul> 
                  <li>Have open-source code on Github with commits every hour.</li><br></br>
                  <li>No AI usage at all.</li><br></br>
                  <li>Reflect the hours and work spent on the project accurately. don't commit fraud!</li>
                </ul>
              </span>
            </button>

            <button className='q' onClick={toggleFAQ}>
              <div className='q-header'>
                What is fraud?
                <span className='arrow'>▼</span>
              </div>
              <span className='hiddenDesc'>Fraud is deliberately misrepresenting the work that you have done on your project. This includes (but is not limited to):<br></br><br></br>

              <ul>
                <li>Using bots or placing something on your keyboard to inflate your Hackatime hours</li><br></br>
                <li>Submitting projects or code that you did not make</li><br></br>
                <li>Submitting projects that you have previously submitted to other events</li><br></br>
              </ul>
              If you're found to be committing fraud, Depending on the severity, you may be banned from Hackatime and consequentially all Hack Club events.</span>
            </button>
          </div>

        </div>
      </div>



    <div className="allCon">

      <h1 className='title'>Offline</h1>
      <p className='desc'>Make an app that works when you're offline and syncs back once you're online and get internet related rewards</p>

      <button className='btn' onClick={submit}>Submit</button>

    </div>

    </div>

  )
}

function Shop() {

  return (

    <div className='BGCon'>
    <FaultyTerminal
      className='BG'
      scale={1}
      gridMul={[2, 1]}
      digitSize={1.5}
      scanlineIntensity={0.3}
      glitchAmount={1}
      flickerAmount={1}
      chromaticAberration={0.05}
      curvature={0.2}
      tint="#00ff00"
    />

    <div className="shop"></div>


    </div>
  )
}

function shop() {
}

function chosen(e) {
  const current = e.currentTarget;

  document.querySelectorAll(".nav-item").forEach(item => {
    if (item !== current) item.classList.remove('chosen');
  });

  current.classList.add('chosen');
}

function submit() {
  window.location.href = "https://forms.fillout.com/t/pER8jUKEhWus";
}


function modal() {
  const modCon = document.querySelector('.modCon');
  const overlay = document.querySelector('.overlay');

  if (modCon.style.display == 'flex') {
    modCon.style.display = 'none';
    overlay.style.display = 'none';

  } else {
    modCon.style.display = 'flex';
    overlay.style.display = 'flex';
  }
}

function toggleFAQ(e) {
  const current = e.currentTarget;

  document.querySelectorAll('.q').forEach(q => {
    if (q !== current) q.classList.remove('open');
  });

  current.classList.toggle('open');
}

export default function App() {

  return (
    <>
      <nav className="nvb">
        <Link to="/" className={location.pathname === "/" ? "home nav-item chosen" : "home nav-item"} onClick={chosen}>Home</Link>
        <Link to="/shop" className={location.pathname === "/shop" ? "shop nav-item chosen" : "shop nav-item"} onClick={chosen}>Shop</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}
