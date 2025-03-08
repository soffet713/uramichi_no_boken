import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We are a passionate team of outdoor enthusiasts dedicated to sharing
            the magic of the mountains with hikers of all levels. We craft
            unforgettable hiking experiences in breathtaking landscapes, from
            the rugged peaks of the Rockies to the serene trails of the
            Appalachians. Our expert guides are not only knowledgeable about the
            terrain but also passionate about creating a safe and enriching
            journey for every adventurer.
          </p>
          <p>
            We are committed to preserving the natural beauty of the mountains
            and minimizing our impact on the environment. We practice Leave No
            Trace principles, support local communities, and promote responsible
            tourism practices.
          </p>
          <a href="#services" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
