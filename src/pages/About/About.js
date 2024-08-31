import React from 'react';
import './about.css';
import Me from '../../images/photo-of-me.jpg'

function About () {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
        <h1>About Me</h1>
        <img src={Me} alt="Ollie wearing a blue sweater, on a beige backdrop"></img>
        <h2>Early Life</h2>
        <p id="early-life">
            Ollie/Honey was born in Ewa Beach on the island of Oahu. They were adopted by a single lesbian when they were two weeks old. 
        </p>
{/* something else about my early life goes here  */}
        <h2>Career Path</h2>
          <p id="career-path"> Ollie is a queer, (trans)genderfluid (they/them), afro-latinx 22 year old Software Developer and Cozy Gamer
                who specializes in front-end development and UI/UX design!
                They are proficient in several different coding languages and frameworks including HTML, CSS, JavaScript,
                Node.js, React.js, Express.js, Tailwind CSS and Bootstrap. They are also working towards proficiency in C#.
                Ollie/Honey is also well-versed in many graphic design softwares including, Adobe Illustrator, Adobe Photoshop, Figma and Canva.
          </p>
        <h2>Gamer and Streamer</h2>
          <p id="gamer-and-streamer">
            Ollie started their gaming/streaming path in 2021. At the time they weren't even sure where it was going to lead, but they really enjoyed it.
            They loved their community and made good friends. They even got to participate in a charity livestream for an organization called Somos Familia Valle.
            At the end of 2021 they decided to take a small break from streaming. They had burned themselves out very quickly and were dealing with some personal issues at the time.
            Unfortunately, that small break turned into a two year long hiatus from streaming. Even though they knew a hiatus was what they needed, they still missed it. They missed the community,
            their friends and they found they really enjoyed creating content for others. So in 2023, they decided that once they were done with their Software Development bootcamp they would start streaming again and they did!
            They rebranded a bit, using their now honed skills in graphic design they revamped their stream overlays, Twitch graphics, Twitter and Youtube banners. 
            They made a strong schedule so that they wouldn't get burnt out. 
            While building their community from the ground up was rough, they had several streaming friends and supporters from 2021 that were there to greet them when they returned. 
            Now they stream on weekends under the name HoneyBrownSugar and they couldn't be happier to back in the swing of things. 
          </p>
          <p id="sign-off"> 
            If you have any questions or would like to collaborate, please don't hesitate to get in touch! You can find Ollie/Honey's contact information in the header, or for links to their social media pages you can go to the Contact page of this site.
          </p>
        </div>
      </div>
    </section>
  );
};


export default About;