import styled from 'styled-components';

import device from '../../../hoc/device/device';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5% 0;

    @media ${device.laptop} {
        flex-direction: row;
  }
`;

export default FlexContainer;