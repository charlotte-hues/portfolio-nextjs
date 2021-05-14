import styled from 'styled-components'

import Modal from '../../../ui/Modal/Modal';
import Button, {Gap} from '../../../ui/Inputs/Button'
import Arrow from '../../../ui/Icons/ArrowIcon';


const Bold = styled.span`
  color: ${({theme}) => theme.colors.highlight};
  font-weight: 900;
  cursor: text;
  user-select: all;
  line-height: 2rem;
`

export const SuccessModal = (props) => (
    <Modal 
    show={props.show} 
    header="Message Sent"
    onSubmit={props.handleSuccessConfirm}
    onCancel={props.handleSuccessConfirm}
    footer={<Button invert submit>OKAY</Button>}
    >
      Thanks for getting in touch, I'll get back to you as soon as possible.
    </Modal> 
  );

export const ErrorModal = (props) => (
    <Modal 
    show={props.show} 
    header="Problem Sending Message"
    onSubmit={props.handleErrorConfirm}
    onCancel={props.handleErrorConfirm}
    footer={<Button submit invert>OKAY</Button>}
    >
      Your message hasn't sent, please try again.
      <br/>
      <br/>
      Alternatively, you can email me directly at: <Bold>{
      String( 'hues.charlotte^gmail.com' ).replace('^', '@') }
      </Bold> 
      <br/>
      <br/>
      <Button secondary submit onClick={() => window.open( String( `mailto:hues.charlotte^gmail.com?subject=Hello%20Charlotte&body=${mailToFormatter(contactForm.message.value)}` ).replace('^', '@'))} >
        Email me
        <Gap/>
        <Arrow size="1.5rem" right/>
      </Button>
    </Modal> 
  );