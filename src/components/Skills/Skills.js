import React from 'react';
import style from './Skills.module.css';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {

    let state = [
        {
            skill: 'HTML5',
            color: "rgb(158, 158, 158)"
        },
        {
            skill: 'CSS3',
            color: "rgb(158, 158, 158)"
        },
        {
            skill: 'Javascript',
            color: "rgb(158, 158, 158)"

        },
        // {
        //     skill: 'Typescript',
        //     color: "rgb(158, 158, 158)"
        // },
        {
            skill: 'React',
            color: "rgb(158, 158, 158)"
        },
        {
            skill: 'Redux ',
            color: "rgb(158, 158, 158)"
        },
        {
            skill: 'REST API',
            color: "rgb(158, 158, 158)"
        }
        // {
        //     skill: 'NodeJS',
        //     color: "rgb(158, 158, 158)"
        // },
        // {
        //     skill: 'MongoDB',
        //     color: "rgb(158, 158, 158)"
        // }
    ];

    const skill = state.map(el =>
        <div className={style.box} style={{ color: el.color }}>
            {el.skill}
        </div>
    );

    return (
        <div id={'skills'} className={style.skills}>
            <Bounce>
                <div className={style.container}>
                    <div className={style.margin}>
                        My skills
                </div>
                    <div className={style.images}>
                        {skill}
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default Skills;