import React from "react";

import Menu from '../../../sections/Menu/Menu';
import { MountTransition } from '../../../ui/animations/animations';

const SideMenu = ({ isOpen, close }) => {

  return (
        <MountTransition show={isOpen} >
            <Menu close={close}/>
        </MountTransition>
  );
};

export default SideMenu;
