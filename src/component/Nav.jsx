import { useState } from 'react'
import '../assets/main.css'


export default function Nav() {
  const listItem = ['Home', 'About', 'Project', 'Contact'];
  const [active, setActive] = useState('Home');
  const [menuBtn, setMenuBtn] = useState('menu-btn');
  const [listOpen, setListOpen] = useState('list');
  function toggleClassMenuBtn() {
    setMenuBtn(prev =>
      prev === 'menu-btn' ? 'menu-btn cross' : 'menu-btn'
    );
    setListOpen(prevList =>
      prevList === 'list' ? 'list open' : 'list'
    );
  };
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 750px)').matches
  );
  const mediaQuery = window.matchMedia('(max-width: 750px)');
  const handleChange = (e) => {
    setIsMobile(e.matches);
  };
  mediaQuery.addEventListener('change', handleChange);
  return (
    <nav>
      <div className="main">
        <div className="logo">
          <h1>
            <a href="">Habib Iqbal.</a>
          </h1>
        </div>
        <div className={listOpen}>
          <ul className={isMobile ? 'mobile' : ''}>
            {listItem.map((item) => (
              <li
                key={item}
                className={active === item ? 'active' : ''}
                onClick={() => setActive((item))}
              >
                <a onClick={() => (window.location.href = '#' + item.toLowerCase())}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={menuBtn} onClick={toggleClassMenuBtn}>
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </nav>

  )
}