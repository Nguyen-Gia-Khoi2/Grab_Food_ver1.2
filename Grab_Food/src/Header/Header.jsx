import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import Logo from '../assets/Logo.png';
import ScrollLogo from '../assets/Logo2.svg'; // New logo for scroll
import Carticon from '../assets/Carticon.png';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={style.chobao}>
            <div className={`${style.Container} ${scrolled ? style.scrolled : ''}`}>
                <div className={`${style.Header} ${scrolled ? style.scrolled : ''}`}>
                    <div className={style.Logo}>
                        <img className={style.Logo_image} src={scrolled ? ScrollLogo : Logo} alt="logo" />
                    </div>
                    <div className={style.ButtonsContainer}>
                        {/* Cart button */}
                        <div className={style.btnCart}>
                            <a>
                                <button className={style.Cart}>
                                    <img className={style.Cartimage} src={Carticon} alt="" />
                                </button>
                            </a>
                        </div>
                        {/* Register/Login button */}
                        <div className={style.btnRegis_Login}>
                            <a>
                                <button className={style.Regis_login}>đăng ký/đăng nhập</button>
                            </a>
                        </div>
                        
                        <div className={style.dropdown}>
                            <span className={style.text_vn_en}>VN</span>
                                <div className={style.dropdown_content}>
                                    <a className={style.VN}>Tiếng Việt</a>
                                    <a className={style.EN}>English</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default Header;
