import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { QUERIES}  from '../../constants'; 
import dividerMobile from '../../images/pattern-divider-mobile.svg'; 
import dividerDesktop from '../../images/pattern-divider-desktop.svg'; 
import DiceIcon from '../../images/icon-dice.svg';
import styles from './Card.module.css';
import axios from "axios";

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
  position: relative ;
  box-shadow: 30px 50px 80px rgba(0,0,0,0.100202);


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

const DiceButton = styled.button`
  background-color:var(--neon-green);
  width: calc(64 /16 * 1rem);
  height: calc(64 /16 * 1rem);;
  border-radius: 50% ;
  position: absolute ;
  bottom: -63px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: box-shadow .2s ease-in-out;
  border: none;

  &:hover {
    box-shadow: 0px 0px 40px var(--neon-green); 
  }
`; 

const Dice = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`; 


const Card = () => {
  const [data, setData] = useState(''); 
  const [buttonClick, setButtonClick] = useState(1); 

  useEffect(() => {

    

    async function fetchData() {
      const url =  "https://api.adviceslip.com/advice"; 
      const result = await axios.get(`${url}?cb=${Date.now()}`); 
      const data = result.data.slip; 
      setData(data); 
    }
   
    fetchData();

  }, [buttonClick]); 

  const handleClick = () => {
     setButtonClick(buttonClick + 1); 
  }


  return (
    <Wrapper>
      <Title>advice #{data.id}</Title>
      <Quote>{data.advice}</Quote>
      <Divider className={styles.mobileDivider} src={dividerMobile} alt='divider decoration' />  
      <Divider className={styles.desktopDivider} src={dividerDesktop} alt='divider decoration' /> 
      <DiceButton onClick={() => handleClick()}>
        <Dice src={DiceIcon} />
      </DiceButton>
    </Wrapper>
  )
}


export default Card; 