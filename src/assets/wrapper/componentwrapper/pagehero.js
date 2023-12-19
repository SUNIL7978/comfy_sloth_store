import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  margin-top: 1rem;
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default Wrapper;
