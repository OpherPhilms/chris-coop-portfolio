function Projects() {
    return (
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="project">
          <h3>1. Komodo Dance Team Music Videos</h3>
          <div className="project-images">
            <div className="img-container">
              <img src="/images/komodo-highnoon.jpg" alt="Komodo High Noon Video Preview" />
            </div>
            <div className="img-container">
              <img src="/images/komodo-bigone.jpg" alt="Komodo The Big One Video Preview" />
            </div>
          </div>
          <p>These videos were both made for Komodo, a local dance team. These each served as intro videos to their dance sets at state competitions and won them the award of fan-favorite video both years.</p>
          <p>
            <a href="https://www.youtube.com/watch?v=Q2S4MGMPhy4&ab_channel=OpherPhilms" target="_blank" rel="noopener noreferrer">Watch High Noon Video</a>
            {" | "}
            <a href="https://www.youtube.com/watch?v=3FGxhpf0SgI&ab_channel=OpherPhilms" target="_blank" rel="noopener noreferrer">Watch The Big One Video</a>
          </p>
        </div>

        <div className="project">
          <h3>2. Flea - Social Media Concept Site</h3>
          <div className="project-images">
            <div className="img-container">
              <img src="/images/flea-mockup.png" alt="Flea Concept Site Preview" />
            </div>
          </div>
          <p>Flea is a fictional social media platform I designed, developed entirely using Wix, Procreate, and Adobe Suite tools. All branding, interface work, illustration, animation, etc. was done by me.</p>
          <p>
            <a href="https://opherlikespie.wixsite.com/flea" target="_blank" rel="noopener noreferrer">Visit Flea Concept Site</a>
          </p>
        </div>

        <div className="project">
          <h3>3. UniBuddi - College Social App Prototype</h3>
          <div className="project-images">
            <div className="img-container">
              <img src="/images/unibuddi-preview.png" alt="UniBuddi App Preview" />
            </div>
          </div>
          <p>UniBuddi is a lo-fi prototype for a student networking app concept created during my coursework. It connects students in the same classes with shared interests to make friends, form study groups, and collaborate more easily.</p>
          <p>
            <a href="https://www.figma.com/proto/oId8rTtYzqH0M9yfye3Ida/Lab-8-Lo-Fi?node-id=305-2370&node-type=canvas&t=N6VTENnx8v8UUbnK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=305%3A2370&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">View Figma Prototype</a>
          </p>
        </div>
      </div>
    );
  }

  export default Projects;