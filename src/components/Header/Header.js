import React from 'react';
import style from './Header.module.css';
import Bounce from 'react-reveal/Bounce';


let state = [
  { name: 'Main', id: '#hello' },
  { name: 'Skills', id: '#skills' },
  { name: 'Works', id: '#works' },
  { name: 'Contacts', id: '#contacts' },
];

const nameLinks = state.map(e => {
  return (
    <div className={style.nav}>
        <a href={e.id}>
          {e.name}
        </a>      
    </div>
  )
});

const Header = () => {
  return <div className={style.header}>
    <Bounce>
      <div className={style.container}>
        {nameLinks}
      </div>
    </Bounce>
  </div>
}

export default Header;