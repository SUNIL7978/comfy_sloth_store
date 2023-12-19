import Wrapper from "../assets/wrapper/PageWrapper/ErrorPage";
import error from "../assets/images/Error.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <img src={error} alt='404 not found' />
        <h3>The requested url,Page was not found on server </h3>
        <Link to='/' className='btn'>
          Back to Home
        </Link>
      </section>
    </Wrapper>
  );
};
export default ErrorPage;
