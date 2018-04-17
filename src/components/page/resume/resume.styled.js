import styled from 'styled-components';
import { HeadingText } from 'components/shared/';

export const Image = styled.img`
    border-radius: 50%;
    box-shadow: 0 0 0.25em var(--white);
    border: 3px solid var(--white);
    @media screen and (max-width: 384px) {
        width:100px;
    }
`;

