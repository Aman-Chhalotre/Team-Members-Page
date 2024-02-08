
import './App.css'
import Development from './component/Development'
import Management from './component/Management'
import Sales_and_Marketing from './component/Sales_and_Marketing'

function App() {

  return (
    <>
      <div className='app'>
        <div id='company_name'>
          <div>
            <h1>VeriTech Team Members</h1>
          </div>
          <div id='desc'>
            <h5>Welcome to VeriTech Software IT Services, where a dedicated team of professionals works together to bring innovation, creativity and expertise to software industry get to know the individuals who make our company thrive.</h5>
          </div>
          <div id='mot'>
            <h2>Meet Our Team</h2>
          </div>
        </div>
        <Management />
        <Development />
        <Sales_and_Marketing />
      </div>
    </>
  )
}

export default App
