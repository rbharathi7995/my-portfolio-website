import myPic from '../../assets/profile.jpeg'
import './HeroSection.css'
export function HeroSection(){
    return(
      <>
      <section id="home" className="hero">     

      <div className="hero-text">
            <h1> Hi, I'm Ramoju Bharathi 👋</h1>
            <h3> Aspiring Full Stack Developer</h3>  
             <p>I enjoy building modern and user-friendly web applications.
            </p>       

          <div className="hero-button">
            <button><a href="#projects" className="projects-button">View Projects</a></button>
            <button><a href="#contact" className="contact-button">Contact me</a></button>
          </div>
     </div>

     <div className="hero-image">
       <img className="myPic" src={myPic} />
     </div>
       </section>
      </>


    )
}