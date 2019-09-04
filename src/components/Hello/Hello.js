import React from 'react';
import style from './Hello.module.css';
import Bounce from 'react-reveal/Bounce';
import myFotoByHello from './myfoto.jpg';


const Hello = () => {

    return (
        <div id={'hello'} className={style.main}>
            <Bounce>
                <div className={style.container}>
                    <div>
                        <p className={style.info} >Hello! My name is Aleksey Gaikevich! I`m a front-end developer!</p>
                    </div>
                    <div className={style.img}>
                        <img src={myFotoByHello} alt='' />
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default Hello;