import React from 'react';
import style from './Footer.module.css';
import Bounce from 'react-reveal/Bounce';

const Footer = () => {

    return (
        <div className={style.footer}>
            <Bounce>
                <div className={style.container}>
                    <span className={style.forName}>Aleksey Gaikevich</span>
                    <span className={style.telephone}>+375 29 319 85 12</span>
                    <span className={style.email}>alekseygaikevich@gmail.com</span>
                    <div className={style.icons}>
                        <div className={style.icon}>
                            <a href="https://vk.com/id359618324">
                                <i className="fa fa-vk" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://www.instagram.com/alekseigaikevich/?hl=ru">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://t.me/alekseygaikevich">
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://www.linkedin.com/in/aleksey-gaikevich-39062618b/">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://github.com/AlekseyGaikevich">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default Footer;