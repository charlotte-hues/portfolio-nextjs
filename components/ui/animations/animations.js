import gsap from 'gsap';
import { Transition } from 'react-transition-group'

export const MountTransition = ({show, children}) => {
  return (
    <Transition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        in={show}
        addEndListener={(node, done) => {
          gsap.to(node, {
            duration: 0.7,
            autoAlpha: show ? 1 : 0,
            onComplete: done
          });
        }}
        >
          {children}
        </Transition>
  )
};
