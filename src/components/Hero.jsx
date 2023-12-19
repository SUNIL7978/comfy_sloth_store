import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/componentwrapper/Hero";
import herobcg from "../assets/images/HeroBcg.png";
import herobcg2 from "../assets/images/Herobcg2.png";

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>Thoughtful Design, Joyful Living.</h1>
        <p>
          Dream It And We'll Create It Want the perfect coffee table or sofa,
          made just for you? With custom design and detailed craftsmanship, we
          can craft a bespoke piece, exactly the way you want it.
        </p>
        <Link to='/products' className='btn hero-btn'>
          SHOP NOW
        </Link>
      </article>
      <article className='img-container'>
        <img src={herobcg} alt='Nice table' className='main-img' />
        <img src={herobcg2} alt='Look good' className='accent-img' />
      </article>
    </Wrapper>
  );
};
export default Hero;
