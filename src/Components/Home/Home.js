import "./Home.css"

import Time from "../Time/Time";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="container-fluid home">
        <div className="container home-content">
          <div className="time"><Time /></div>
          <h1>Hi, I'm a </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Software Developer',
                  'MERN Stack Developer',
                  'React Developer',
                  'Web Developer',
                  'Javascript Developer'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    
  )
}

export default Home
