import React from 'react'
import styled from "styled-components"

const StyledPizzaSheet = styled.main`
    width: 230px;
    min-height: 260px;
    background-color: rgba(59, 130, 246);
    border-radius: 50% 10% 50% 0;
    position: absolute;
    z-index: 3;
    left: -15%;
    top: -10%;z-index: 9;
    animation: glow 1.5s ease-in-out infinite;
    box-shadow: 10px 10px 5px 0px rgba(59 ,130 ,246,.1),10px 10px 5px 0px rgba(59 ,130 ,246,.2),10px 10px 5px 0px rgba(59 ,130 ,246,.1), ;
-webkit-box-shadow: 10px 10px 5px 0px rgba(59 ,130 ,246,.2);
-moz-box-shadow: 10px 10px 5px 0px rgba(59 ,130 ,246,.2); 
`;

const HeroTextStyle = styled.main`
    left: 40%;
    top: 30%;
`;


const WritePizza = () => {
  return (
    <div>
        <StyledPizzaSheet>
        </StyledPizzaSheet>
        <HeroTextStyle style={{position: "absolute", zIndex: 10,}}>William Dreams</HeroTextStyle>
    </div>
  )
}

export default WritePizza