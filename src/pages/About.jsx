import React from 'react';

const About = () => (
  <main className="wrapper">
    <h2 className="section-heading">About Me</h2>
    <p>
      Passionate computer science student and former industrial engineer with
      expertise in problem-solving, software development, and educational
      support. I combine technical proficiency with business acumen, drawing
      from diverse experience across education, marketing, programming, and
      supply chain coordination.
    </p>

    <div className="about-content">
      <h3 className="sub-section-title">Education</h3>
      <ul className="info-list">
        <li>
          <strong>Master’s Degree in Computer Science</strong> (Expected
          December 2026) <br />
          Cal State Fullerton, California
        </li>
        <li>
          <strong>Associate’s Degree in Computer Science</strong> (Completed){' '}
          <br />
          Chaffey College, California
        </li>
        <li>
          <strong>Bachelor’s Degree in Industrial Engineering</strong>{' '}
          (Completed) <br />
          University of North Sumatera, Indonesia
        </li>
      </ul>

      <h3 className="sub-section-title">Technical Skills</h3>
      <div className="skills-section">
        <p>
          <strong>Programming Languages:</strong> Python, JavaScript, Swift,
          React Native
        </p>
        <p>
          <strong>Web Development:</strong> HTML, CSS
        </p>
        <p>
          <strong>Development Tools:</strong> Git, Postman
        </p>
      </div>

      <h3 className="sub-section-title">Core Competencies</h3>
      <p>
        Problem-solving, Software development, Educational support, Supply chain
        coordination
      </p>

      <h3 className="sub-section-title">Location</h3>
      <p>
        <strong>Current:</strong> Chino Hills, California
      </p>
      <p>
        <strong>Origin:</strong> Indonesia
      </p>

      <h3 className="sub-section-title">Contact Information</h3>
      <p>
        <strong>Email:</strong> johanliman@gmail.com
      </p>
      <p>
        <strong>Phone:</strong> (909) 325-0371
      </p>
    </div>
  </main>
);

export default About;
