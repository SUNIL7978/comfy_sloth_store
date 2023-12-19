import { services } from "../Utils/constants";
import Wrapper from "../assets/wrapper/componentwrapper/Services";

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h1>
            Custom Furniture <br /> Built Only For You
          </h1>
          <p>
            We reserve the right to modify the contents of this site at any
            time, but we have no obligation to update any information on our
            site. You agree that it is your responsibility to monitor changes to
            our site.
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default Services;
