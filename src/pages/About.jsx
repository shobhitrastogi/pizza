import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
const About = () => {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum at et ullam mollitia voluptatibus, atque voluptatum! Facilis fugiat id velit at in, labore, harum pariatur quis hic eveniet nostrum ipsum exercitationem nihil ex vero autem molestiae unde ut sequi quam, voluptates illum quo? Distinctio ipsam possimus debitis hic sapiente iste deleniti a expedita incidunt temporibus, laudantium minus voluptate nam magnam excepturi illo necessitatibus rem optio sit, neque adipisci cum nisi. Nemo obcaecati beatae sint nesciunt soluta quibusdam, rerum atque expedita sit error aperiam alias ea ad reiciendis tempora quasi quo mollitia distinctio voluptate ratione. Ducimus ipsam ab amet qui sit?</p>
        </div>
    </div>
  )
}

export default About