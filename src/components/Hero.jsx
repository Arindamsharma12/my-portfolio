import { useEffect, useState } from "react";
import { FaFacebook,FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GiSpy } from "react-icons/gi";
const Hero = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize=()=>setWindowWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return ()=>window.removeEventListener('resize',handleResize)
    },[])
  return (
    <section id="home">
      <img src="src/images/Notification.gif" alt="" className="Noti" />
      <div className="intro">
        <h3>Hello It's Me!</h3>
        <h1>Arindam Sharma <GiSpy color="#673ab7"/></h1>
        <p>
          And I am a <span>frontend developer</span>
        </p>
        <div className="icons">
          <FaFacebook size={(window.innerWidth > 1200)?40:30}/>
          <FaGithub size={(window.innerWidth > 1200)?40:30}/>
          <FaLinkedin size={(window.innerWidth > 1200)?40:30}/>
          <FaInstagram size={(window.innerWidth > 1200)?40:30}/>
        </div>
      </div>

      <img src="src/images/cover-photo.png" alt="" className="profile" />
    </section>
  );
};

export default Hero;
