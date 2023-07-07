import React, { useEffect, useState } from "react"
import {styled} from "styled-components"
import { IconChevronUp } from "@tabler/icons-react";

const BtnStyled = styled.button`
    width: 400px;
    position: fixed;
    bottom: 2rem;
    right: -8rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    z-index: 9;

    &.visible {
        opacity: 1;
        visibility: visible;
    }
`;

const ScrollTopBtn = () => {
    const [isVisible, SetIsVisible] = useState(false);
    const handleScrollToTop =()=>{
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        SetIsVisible(scrollTop > 120)
    }

    const scrollToTop = () =>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollToTop)
        return ()=>{
            window.removeEventListener('scroll', handleScrollToTop)
        }
    },[])
  return (
    <BtnStyled className={`scrolltopbtn ${isVisible ? "visible":''}`}>
        <button className=" bg-blue-500 p-1"><IconChevronUp size='2rem' color="white" onClick={()=>{scrollToTop()}} /></button>
    </BtnStyled>
  )
}

export default ScrollTopBtn