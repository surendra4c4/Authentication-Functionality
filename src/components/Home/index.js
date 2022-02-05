// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const Home = props => (
  <>
    <Header />
    <div className="home-class">
      <h1>Home Route</h1>
      <LogoutButton props={props} />
    </div>
  </>
)

export default Home
