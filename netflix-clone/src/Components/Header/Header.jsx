import React, { useEffect, useState } from 'react'
import Logo from './assets/images/netflix_logo.png'
import './assets/css/Header.css'

function Header() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        
                <div className={`nav ${show && "nav_black"}`}>
                    <div className="logoHeader">
                        <img className="logo" src={Logo} alt="" />
                    </div>
                    <div className="rightButton">
                        <button>English</button>
                        <button>Sign in</button>
                    </div>
                </div>
            
    )
}

export default Header
