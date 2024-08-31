import React from 'react';
import './home.css';

const Home = () => {
  // Sample data for featured projects
  const featuredProjects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: '/project1.jpg', // Replace with actual image URL
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: '/project2.jpg', // Replace with actual image URL
    },
    // Add more featured projects as needed
  ];

  const goToWebAppsPage = function() {
    window.location.assign("/WebApps");
  };

  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a passionate developer with expertise in web development. Explore my work and projects below.
        </p>
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
            </div>
          ))}
        </div>
        <div className="view-all-projects">
          <button onClick={goToWebAppsPage}>View All Projects</button>
        </div>
      </section>

      {/* Code Snippets and Video Clips Section */}
      <section className="code-snippets">
        <h2>Code Snippets and Video Clips</h2>
        {/* Add code snippets and video clips here */}
        {/* You can use images or video embeds */}
        {/* Example: */}
        <div className="code-snippet">
          <img src="/snippet1.jpg" alt="Code Snippet 1" />
        </div>
        <div className="video-clip">
          {/*TODO: use <video> tag instead of iframe*/}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* Add more code snippets and video clips as needed */}
      </section>
    </div>
  );
};

export default Home;
