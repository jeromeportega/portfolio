import styled from 'styled-components';
import { MDBRow } from 'mdbreact';

export const BioContainer = styled.div`
    height: 100vh;
    background-color: #333;

    .bio-col {
        text-align: center;
    }

    .bio-card-image {
        height: 100px;
    }

    .smaller-text {
        font-size: 12px;
    }
`;

export const BufferRow = styled(MDBRow)`
    height: 50px;
`;
