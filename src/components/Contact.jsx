import Wrapper from "../assets/wrapper/componentwrapper/contact";

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Whether it is designed with an industrial or artisanal aesthetic,
            furniture supports human activity. The role of the furniture in the
            execution of a design is vital since it improves the aesthetic
            appeal of the space.
          </p>
          <form
            className='contact-form'
            action='https://formspree.io/f/mdorrjlv'
            method='POST'
          >
            <input
              type='email'
              placeholder='plese email us'
              className='form-input'
              name='email'
              required
            />
            <button type='submit' className='submit-btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
