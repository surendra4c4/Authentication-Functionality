// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = props => (
  <>
    <Header />
    <div className="home-class">
      <h1>About Route</h1>
      <LogoutButton props={props} />
    </div>
  </>
)

export default About
