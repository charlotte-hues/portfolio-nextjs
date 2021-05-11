import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import styled from 'styled-components';
import gsap from 'gsap';

import device from '../../shared/device/device';
import { MountTransition } from '../animations/animations';

const ModalContainer = styled.div`
    z-index: 100;
    position: fixed;
    top: 22vh;
    left: 10%;
    width: 80%;
    background: ${({theme}) => theme.colors.primary};
    padding: 0.5rem 1rem 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 8px;
    color: ${({theme}) => theme.colors.background};

    footer {
        width: 100%;
        margin-top: 3rem;
    }

    @media ${device.laptop} {
        left: calc(50% - 20rem);
        width: 40rem;
    }
`

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.75);
    z-index: 50;
`

const ModalOverlay = ({ header, footer, children, onSubmit, onCancel}) => {

  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {duration: 0.5, opacity: 1})
  }, []);

  const content = (
      <div style={{opacity: 0, zIndex: 100 }} ref={ref}>
      <Backdrop onClick={onCancel}/>
      <ModalContainer>
        <header >
          <h2>{header}</h2>
        </header>
        <form
          onSubmit={
            onSubmit ? onSubmit : event => event.preventDefault()
          }
        >
            {children}
          <footer>
            {footer}
          </footer>
        </form>
      </ModalContainer>
      </div>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = props => {
  return (
     <MountTransition show={props.show} >    
        <ModalOverlay {...props} />    
     </MountTransition>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  header: PropTypes.string,
  cancel: PropTypes.func,
  footer: PropTypes.element,
};

export default Modal;