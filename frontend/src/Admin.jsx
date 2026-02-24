import { Color } from 'ogl';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/offlineAdmin", {
            credentials: "include",
        })
        .then(res => {
            if (res.status === 403) {
                navigate("/");
                return null;
            }
            return res.json();
        })
        .then(data => {
            if (data?.ok) {
                setLoading(false);
            }
        })
        .catch(err => {
            console.error(err);
            navigate("/");
        });
    }, [navigate]);

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            <h1 className='test'></h1>
        </div>
    )
}