import styled from "styled-components";
import GlobalStyles  from './GlobalStyles';
import { QUERIES}  from './constants';

import Card from './components/Card';
import Footer from './components/Footer';

const Wrapper = styled.div`
  --dark-blue: hsl(218, 23%, 16%); 
  --attribution: hsl(228, 45%, 44%); 
  --light-cyan: hsl(193, 38%, 86%);
  --neon-green: hsl(150, 100%, 66%);
  --grayish-blue: hsl(217, 19%, 38%); 
  --dark-grayish-blue: hsl(217, 19%, 24%); 
  
  min-height: 100% ;
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 30px ;
  background-color: var(--dark-blue);
  padding: 0 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 0;
  }
`; 





function App() {
  return  (
  <Wrapper>
   <Card />
   <Footer name='oscar rodriguez' />
   <GlobalStyles />
  </Wrapper>
  )
}

export default App;
