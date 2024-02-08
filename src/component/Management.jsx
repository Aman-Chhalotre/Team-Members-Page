import React from 'react'
import '../css/Management.css'
import image from '../assets/image/image.png'

function Management() {
    return (
        <>
            <div id='management-main'>
                <div className='department_name1'>
                    <h3 >Leadership/Management Team</h3>
                    </div>
                <div id='management-members'>

                    <div id='management-box1'>
                        <div className='management-member'>
                            <img src={image} alt="image" />
                            <div>
                                <h3>Founder name</h3>
                                <h5>Founder/CEO</h5>
                            </div>
                        </div>

                        <div className='management-member'>
                            <img src={image} alt="image" />
                            <div>
                                <h3>Founder name</h3>
                                <h5>Founder/CEO</h5>
                            </div>
                        </div>
                    </div>

                    <div id='management-box2'>
                        <div className='management-member'>
                            <img src={image} alt="image" />
                            <div>
                                <h3>VP name</h3>
                                <h5>VP, Development & Growth</h5>
                            </div>
                        </div>

                        <div className='management-member'>
                            <img src={image} alt="image" />
                            <div>
                                <h3>VP name</h3>
                                <h5>VP, Sales & Marketing</h5>
                            </div>
                        </div>

                        <div className='management-member'>
                            <img src={image} alt="image" />
                            <div>
                                <h3>VP name</h3>
                                <h5>VP, Finance & Operation</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Management