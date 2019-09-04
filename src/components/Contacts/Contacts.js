import React from 'react';
import style from './Contacts.module.css';
import Bounce from 'react-reveal/Bounce';

const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contacts}>
            <Bounce>
                <div className={style.container}>
                    <span className={style.title}>Contacts</span>
                    <form className={style.wrapper}>
                        <input className={style.area} placeholder='Name' />
                        <input className={style.area} placeholder='E-mail' />
                        <textarea className={style.messageArea} placeholder="Your message"></textarea>
                        <button className={style.btnSubmit} type="submit">Send</button>
                    </form>
                </div>
            </Bounce>
        </div>
    );
};

export default Contacts;