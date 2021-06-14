import Head from 'next/head';
import {useRouter} from 'next/router'
import styled from 'styled-components';
import Link from "next/link";


import Arrow from '../../ui/Icons/ArrowIcon';

import allWork from './allWork';
import ProjectFooter from './ProjectFooter';

const LinkContainer = styled.div`
    margin: 40px 0 20px;
    text-align: center;
    
    a {        
        color: ${({theme}) => theme.colors.primary};
        fill: ${({theme}) => theme.colors.primary};
        opacity: 0.8;
        font-weight: 900;
        transition: opacity 0.3s ease;
        display: flex;
        justify-content: center;
        :hover {
            opacity: 1;
        }
    }
`;

function useProjectWrapper (children) { 
    
    const location = useRouter();

    const pathName = location.asPath.replace('/work/','')
    const currentIndex = allWork.findIndex(p => p.pathName === pathName);

    console.log(currentIndex)

    const nextProjectIndex = (curIndex) => {
        return curIndex + 1 < allWork.length ? curIndex + 1 : 0;
      };

    return (
        <>
        <Head>
        <meta
            name="description"
            content={allWork[currentIndex].metaDescription}
          />
          <title>{allWork[currentIndex].metaTitle}</title>
        </Head>
        {children}
        <ProjectFooter project={allWork[nextProjectIndex(currentIndex)]} />
        </>
    )
}

export default useProjectWrapper;