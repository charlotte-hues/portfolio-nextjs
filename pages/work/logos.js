import React from "react";
import styled from "styled-components";
import Head from 'next/head';

import ProjectCard from "../../components/ui/project/ProjectCard";
import logofolioData from "../../components/sections/Work/logos/logofolioData";
import {useTheme} from '../../styles/ThemeContext';

const IconSetContainer = styled(ProjectCard)`
  display: flex;
  position: relative;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px;
  background-color: #e5e5e5;
  background-color: ${props => props.background};
  transition: ${({theme}) => theme.transition.background};
`;

const LogoContainer = styled.div`
  display: flex;
  width: 160px;
  height: 60px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 80px 20px 150px;
  position: relative;
  fill: ${props => props.fillColor};
  transition: fill 1s easeOut;
`;

const Detail = styled.div`
  position: absolute;
  width: auto;
  height: 40px;
  margin: 10px 15px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  color: ${(props) => props.detailColor};
  font-size: 0.75em;
  font-weight: 900;  
`

const SmallLogoContainer = styled.div`
  height: 24px;
`

const Logo = ({data, theme}) => {
  const dark = theme === "dark";
  const CurrLogo = data.logo;
  const SmallLogo = data.icon;

  const background = dark ? data.colors.light : data.colors.dark;
  const fill = dark ? data.colors.dark : data.colors.light;
  const detail = dark ? data.colors.dark : `${data.colors.light}99`;


  return (
    <IconSetContainer  background={background}>
      <LogoContainer >
        <CurrLogo fill={fill}/>
      </LogoContainer>
      <Detail detailColor={detail}>
        <SmallLogoContainer>
          <SmallLogo small fill={detail} />
        </SmallLogoContainer>
        {data.client.toUpperCase()}
      </Detail>
    </IconSetContainer>
  )
};

const LogosProject = () => {
  const {theme} = useTheme();
  
  const Logos = () => {    
    const logos = Object.keys(logofolioData)
    .map(logoName => { 
      return (
        <Logo key={logoName} data={logofolioData[logoName]} theme={theme} />
      );
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  
    return logos
  };

  return (<>
    <Head>
        <meta
            name="description"
            content="A collection of logos created by Charlotte Hughes for various companies"
          />
          <title>Logo Collection</title>
        </Head>
  <Logos/>
  </>);
};

export default LogosProject;