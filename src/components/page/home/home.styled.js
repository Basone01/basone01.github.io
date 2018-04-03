import styled, { keyframes } from 'styled-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-self: stretch;

    @media only screen and (max-width: 768px) {
        font-size: 0.5rem;
        padding: 0 2em;
        transform: translateY(-60px);
    }
    @media only screen and (max-width: 384px) {
        font-size: 0.5rem;
        padding: 0 0.5em;
        transform: translateY(-50px);
    }
`;

const ProfilePic = styled.img`
    border-radius: 50%;
    width: 180px;
    height: 180px;
    border: 5px solid var(--black);
    margin-bottom: 1em;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
        width: 120px;
        height: 120px;
    }
    @media only screen and (max-width: 384px) {
        width: 90px;
        height: 90px;
    }
`;

export { ProfilePic, Section};
