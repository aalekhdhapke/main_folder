import "./about.css"
const AboutPage = ({ about }) => {
    console.log(about); 
    return <div>    <section className="about-section">
    <div className="about-container">
     
      <div className="about-content">
        <h2 className="about-name">Aalekh Dhapke</h2>
        <p className="about-role"> Full Stack developer</p>
        <p className="about-bio">
          I am a passionate web developer with experience in creating
          responsive and user-friendly websites. I specialize in modern
          front-end frameworks and love designing smooth user experiences.
        </p>

      </div>
    </div>
  </section></div>;
};

export default AboutPage;
