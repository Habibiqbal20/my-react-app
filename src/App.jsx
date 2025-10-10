import { use, useState } from 'react'
import './index.css'

export default function App() {
  const listItem = ['Home', 'About', 'Project', 'Contact'];
  const [active, setActive] = useState('Home')
  return (
    <>
    <nav>
      <div className="logo">
        <a href="">Habib Iqbal.</a>
      </div>
      <ul>
      {listItem.map((item) => (
        <li
        key={item}
        className={active === item ? 'active' : ''}
        onClick={() => setActive((item))}
        >
          <a href="#">{item}</a>
        </li>
      ))}
      </ul>
    </nav>
    </> 
  )
}
