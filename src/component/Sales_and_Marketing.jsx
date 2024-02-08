import React from 'react'
import '../css/Sales_and_Marketing.css'
import image from '../assets/image/image.png'

function Sales_and_Marketing() {
  return (
    <>
      <div id='sales-main'>
        <div className='department_name3'>
        <h3>Sales & Marketing Team</h3>
        </div>
        <div id='sales-members'>

          <div id='sales-box1'>
            <div className='sales-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Employee Name</h3>
                <h5>Team Lead</h5>
              </div>
            </div>

            <div className='sales-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Employee Name</h3>
                <h5>Sales Officer</h5>
              </div>
            </div>

            <div className='sales-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Employee Name</h3>
                <h5>Sales Officer</h5>
              </div>
            </div>
          </div>

          <div id='sales-box2'>
            <div className='sales-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Employee Name</h3>
                <h5>Marketing Officer</h5>
              </div>
            </div>

            <div className='sales-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Employee Name</h3>
                <h5>Marketing Officer</h5>
              </div>
            </div>

            <div className='sales-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Employee Name</h3>
                <h5>Marketing Officer</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sales_and_Marketing