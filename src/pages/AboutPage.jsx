import Wrapper from "../assets/wrapper/PageWrapper/AboutPage";
import { PageHero } from "../components";
import About from "../assets/images/About_us.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='section page section-center'>
        <img src={About} alt='about furniture e-commerce website store' />
        <article>
          <div className='title'>
            <h2>About Us</h2>
            <div className='underline'></div>
          </div>
          <p>
            We design for those who want to experience this joy all around them.
            Our products are created with an intention, a purpose, and a
            meaningful thought so that they can spark conversations and help
            people tell their stories through their homes.
          </p>
          <p>
            We help curate spaces that reignite memories from family
            celebrations, laughter from dinner parties, and nostalgia about
            childhoods gone by. We design for homes that evoke a feeling. We
            design for homes that reflect a life of joy.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
export default AboutPage;
