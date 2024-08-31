import React from 'react';
import consoleVideo1 from '../images/console.webm';
import quizScreenshot from '../images/quiz-screenshot.png';
import spookyJC from '../images/Spooky-JC-Overlay.png';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  // Sample data for featured projects
  const featuredProjects = [
    {
      title: 'Coding Quiz',
      tools: 'HTML5, CSS3, JavaScript',
      description: 'A short quiz with a series of questions that touch on some basic HTML, CSS and JavaScript concepts.',
      imageUrl: quizScreenshot, 
    },
    {
      title: 'Halloween Themed Just Chatting Overlay',
      tools: 'Canva, Adobe Photoshop, Adobe Express',
      description: 'A spooky version of my Just Chatting overlay for my Twitch channel scenes.',
      imageUrl: spookyJC,
    },
    // Add more featured projects as needed
  ];

  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Hi! My name is Oliver "Ollie" Terry-Morales</h1>
        <p>
          I am a passionate developer with expertise in web development. Explore my work and projects below.
        </p>
      </section>

      <section className="my-experience">
        <h2>My Experience</h2>
        <div className="experiences-list">

        </div>
      </section>
      {/* Featured Work Section */}
      <section className="featured-work">
        <h2>Featured Work</h2>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tools}</p>
            </div>
          ))}
        </div>
        <div className="view-all-projects">
          <Link to="/WebApps">
            <button>View All Projects</button>
          </Link>
        </div>
      </section>

      {/* Code Snippets and Video Clips Section */}
      {/*TODO: use <video> tag instead of iframe*/}
      <section className="code-snippets">
        <h2>Code Snippets and Video Clips</h2>
        <div className="code-snippet">
          <img src="/snippet1.jpg" alt="Code Snippet 1" />
        </div>
        <div className="console-video">
          <h1>Console Videos</h1>
          <h3>Console video for a sample database for an employee tracker</h3>
          <video controls autoPlay>
            <source src={consoleVideo1} type="video/webm" />
            {/* Add additional source elements for different formats if needed */}
            Your browser does not support the video tag.
          </video>
          <a href="https://github.com/otmorales23/example-employee-tracker">Employee Tracker GitHub Repository</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
