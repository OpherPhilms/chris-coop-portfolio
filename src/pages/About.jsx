function About() {
    return ( //I'm so happy with how the profile image turned out, I don't think it will translate super well to mobile though.
      <div className="about-container">
                <div className="profile-img">
              <img src="/images/profile-image.png" alt="Chrissy Poo image" />
            </div>
        <h2>About Me</h2>
        <p>
          Hi there! I'm Christopher Cooper and I'm a creative content producer with a strong visual storytelling background, demonstrated by a large TikTok following and extensive video production experience (camera work, editing, on-screen). My passion for impactful digital experiences, honed through work with non-profits and freelance editing, now fuels my studies as a digital media and web design student at UCF. I'm integrating creative skills with HTML, CSS, JavaScript, and React to design innovative, user-focused interactive experiences.
        </p>
<br></br>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li><b>Content Creation:</b> Writing, Editing, Content Strategy, Video Production</li>
          <li><b>Video & Visuals:</b> Video Editing, Visual Design</li>
          <li><b>Web & Interactive:</b> Web Design, HTML, CSS, JavaScript, React</li>
          <li><b>Marketing & Management:</b> Content Marketing, Brand Marketing, Project Management</li>
          <li><b>Graphic Design</b></li>
        </ul>
      </div>
    );
  }

  export default About;