import styled from "styled-components";
import { QUERIES}  from '../constants'; 
import dividerMobile from '../images/pattern-divider-mobile.svg'; 
import dividerDesktop from '../images/pattern-divider-desktop.svg'; 

const Wrapper = styled.div`
  background-color: var(--dark-grayish-blue);
  max-width:540px;
  width: 100%;
  border-radius: 10px;
  text-align: center ;
  padding: 0 calc(24 / 16 * 1rem); 
  display: grid;
  justify-items: center ;
  align-items: center ;


  @media ${QUERIES.tabletAndUp} {
    border-radius: 15px;
    padding: 0  calc(48 / 16 * 1rem); 
  }

`;

const Title = styled.h3`
  color: var(--neon-green);
  text-transform: uppercase ;
  font-size: calc(11 / 16 * 1rem);
  font-weight: 800 ;
  letter-spacing: calc(3.5 / 16 * 1rem);
  padding-top: calc(40 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    padding-top: calc(48 / 16 * 1rem);
    font-size: calc(13 / 16 * 1rem);
    letter-spacing: calc(4 / 16 * 1rem);
  }
`;

const Quote = styled.q`
   color: var(--light-cyan);
   font-size : calc(24 / 16 * 1rem);
   font-weight: 800 ;
   letter-spacing: calc(-0.25 / 16  * 1rem) ;
   padding: calc(24 / 16 * 1rem) 0; 
   line-height: calc(33 / 16 * 1rem) ;
   


   @media ${QUERIES.tabletAndUp} {
    font-size : calc(28 / 16 * 1rem);
    letter-spacing: calc(-0.3 / 16  * 1rem) ;
    padding-top: calc(24 / 16 * 1rem);
    padding-bottom:  calc(40 / 16 * 1rem);
    padding-left: 0;
    padding-right: 0;
    line-height: calc(38 / 16 * 1rem) ;
  }
`; 

const Divider = styled.img`
  padding-bottom: calc(64 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: calc(72 / 16 * 1rem);
  }
`; 



const Card = () => {

  return (
    <Wrapper>
      <Title>advice #117</Title>
      <Quote>It is easy to sit up and take notice, what's difficult is getting up and taking action.</Quote>
      <Divider src={dividerMobile} alt='divider decoration' /> 
    </Wrapper>
  )
}


export default Card; 