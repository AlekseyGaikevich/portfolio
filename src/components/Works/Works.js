import React from 'react';
import style from './Works.module.css';
import Bounce from 'react-reveal/Bounce';

const Works = () => {
    let state = [
        {
            link: 'https://tut.by',
            name: 'TodoList',
            technology: 'React, CSS, Bootstrap'
        },
        {
            link: 'https://onliner.by',
            name: 'TodoList',
            technology: 'React, Redux, Redux Thunk, API, CSS'
        },
        {
            link: 'https://dev.by',
            name: 'Social Network',
            technology: 'React, Redux, Redux Thunk, API, CSS'
        }
    ];

    const work = state.map(e => {
        return (
            <a href={e.link} className={style.infoContainer}>
                <div className={style.box}>
                    <div>
                        <p>{e.name}</p>
                        <p>{e.technology}</p>
                    </div>
                </div>
            </a>

        );
    });

    return (
        <div id={'works'} className={style.works}>
            <Bounce>
                <div className={style.container}>
                    <div>
                        My works
                    </div>
                    <div className={style.images}>
                        {work}
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default Works;