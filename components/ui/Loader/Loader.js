import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Container = styled.div`
    width: 100%;
    height: 50vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SVG = styled.svg.attrs({
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg"
  })`
    max-width: 60px;
    max-height: 60px; 

    & path {
        fill: ${({theme}) => theme.colors.primary};
    }
  `;

const Loader = () => {
    const ref = useRef();

    useEffect(() => {        
        gsap.timeline({repeat: -1})
        .to(ref.current, {duration: 1, rotate: 360, ease: "power1.inOut"});
    }, []);

    return (
    <Container>
        <SVG ref={ref} >
        <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
        <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
        </path>
    </SVG>
    </Container>
)};

export default Loader;