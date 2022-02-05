// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <li className="list">Home</li>
    </Link>
    <Link to="/about">
      <li className="list">About</li>
    </Link>
  </div>
)

export default Header
