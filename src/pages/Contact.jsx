import React from 'react'
import '../styles/Contact.css'
import PizzaLeft from '../assets/pizzaLeft.jpg'
const Contact = () => {
  return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
            <div className="rightSide">
                <h1>Contact us</h1>
                <form action="" id='contact-form' method='POST'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' placeholder='Enter full name...'/>                    
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter Your Email...'/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required id="" cols="30" rows="6" placeholder='Enter Message .... ' ></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
  )
}

export default Contact