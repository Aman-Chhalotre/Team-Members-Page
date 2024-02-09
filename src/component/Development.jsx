import React from 'react'
import '../css/Development.css'
import image from '../assets/image/image.png'


function Development() {
  return (
    <>
      <div id='development-main'>
        <div className='department_name2'>
          <h3>Development Team</h3>
        </div>
        <div id='development-members'>

          <div id='development-box1'>

            <div className='development-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Developer name</h3>
                <h5>Team Lead, SE</h5>
              </div>
            </div>

            <div className='development-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Developer name</h3>
                <h5>Software Engineer</h5>
              </div>
            </div>

            

          </div>

          <div id='development-box2'>

            <div className='development-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Developer name</h3>
                <h5>Software Engineer</h5>
              </div>
            </div>

            

            <div className='development-member'>
              <img src={image} alt="image" />
              <div>
                <h3>Developer name</h3>
                <h5>Software Engineer</h5>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Development