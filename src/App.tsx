function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Victor Chironachi</h1>
        <p className="contact">
          Cahul, MD | <a href="tel:+37368264178">+373 682 641 78</a> | <a href="mailto:victoraschironachi@email.com">victoraschironachi@email.com</a>
        </p>
      </header>

      <section className="summary">
        <h2>Professional Summary</h2>
        <p>
          Detail-oriented aspiring engineer with a strong foundation in Robotics and 3D Design. 
          Currently expanding expertise in software development and programming logic. 
          Proven ability to solve complex technical problems through creative design and hardware integration. 
          Passionate about building functional prototypes and mastering emerging technologies.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-group">
          <h3>Technical</h3>
          <ul className="skill-list">
            <li className="skill-tag">3D Modeling (CAD)</li>
            <li className="skill-tag">Robotics Assembly</li>
            <li className="skill-tag">Circuit Design</li>
            <li className="skill-tag">Python</li>
            <li className="skill-tag">C++</li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>Soft Skills</h3>
          <ul className="skill-list">
            <li className="skill-tag">Creative Problem Solving</li>
            <li className="skill-tag">Rapid Learning</li>
            <li className="skill-tag">Collaborative Teamwork</li>
            <li className="skill-tag">Adaptability</li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>Languages</h3>
          <ul className="skill-list">
            <li className="skill-tag">Romanian (Fluent)</li>
            <li className="skill-tag">Russian (Fluent)</li>
            <li className="skill-tag">English (Proficient)</li>
          </ul>
        </div>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <span className="role">Junior Robotics Technician</span>
            <span className="date">2023 – 2024</span>
          </div>
          <div className="company">TechNova Solutions</div>
          <ul>
            <li>Assisted in the assembly and calibration of automated robotic arms for industrial testing.</li>
            <li>Collaborated with the design team to refine 3D-printed components, reducing material waste by 15%.</li>
            <li>Troubleshot hardware connectivity issues to ensure seamless integration with control software.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <span className="role">Design Intern</span>
            <span className="date">2022 – 2023</span>
          </div>
          <div className="company">Creative Dynamics</div>
          <ul>
            <li>Drafted detailed 3D models for prototype parts using industry-standard design software.</li>
            <li>Maintained and operated high-precision 3D printers, ensuring all output met quality benchmarks.</li>
            <li>Documented technical specifications for internal hardware projects.</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="experience-item">
          <div className="experience-header">
            <span className="role">Bachelor of Computer Science</span>
            <span className="date">Graduated 2025</span>
          </div>
          <div className="company">Hardware Institute of Technology</div>
          <p>Relevant Coursework: Microprocessors, Digital Logic, Algorithms, and Structural Mechanics.</p>
          <p><strong>Notable Project:</strong> Developed a sensor-based obstacle avoidance robot as a capstone project.</p>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications & Interests</h2>
        <div className="skill-group">
          <h3>Certifications</h3>
          <p>Advanced 3D Design & Prototyping (2024)</p>
        </div>
        <div className="skill-group">
          <h3>Interests</h3>
          <ul className="skill-list">
            <li className="skill-tag">Open-source hardware development</li>
            <li className="skill-tag">Competitive coding</li>
            <li className="skill-tag">Drone photography</li>
          </ul>
        </div>
      </section>

      <footer>
        <p style={{ opacity: 0.5, marginTop: '5rem', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Victor Chironachi. Built with React & TypeScript.
        </p>
      </footer>
    </div>
  )
}

export default App
