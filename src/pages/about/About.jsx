import Header from '../../components/Header.jsx'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In autem praesentium laudantium quidem ex illo laborum tenetur laboriosam labore pariatur!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, esse! elit. Sed voluptate dolores autem nobis maxime iusto, voluptatibus eligendi exercitationem blanditiis tempora? Dolorem inventore quos recusandae accusamus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi soluta ullam magnam ducimus odio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ducimus. adipisci deleniti earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore molestiae doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fuga.</p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum saepe, omnis ducimus eligendi assumenda? adipisicing elit. Sed voluptate dolores autem nobis maxime iusto, voluptatibus eligendi exercitationem blanditiis tempora? Dolorem inventore quos recusandae accusamus!</p>
            <p>Lorem ipsum dolor sit, Sit quasi soluta ullam magnam ducimus odio adipisci deleniti earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur molestiae esse cum at.</p>
           </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate dolores autem nobis maxime iusto, voluptatibus eligendi exercitationem blanditiis tempora? Dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus fugiat suscipit recusandae nesciunt laboriosam. Similique? inventore quos recusandae accusamus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi soluta ullam magnam ducimus odio adipisci deleniti earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aspernatur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore molestiae doloribus!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About