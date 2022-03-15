import styled from "styled-components";


const Wrapper = styled.footer`
font-size: calc(11 / 16 * 1rem); 
color: var(--light-cyan);
& a {
  color: var(--attribution);
  text-transform: capitalize ;
}
`;


const Footer = ({name})  => {
  return (
    <Wrapper>  
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
       Coded by <a href="#">{name}</a>. 
    </Wrapper>
  )
}


export default Footer;
