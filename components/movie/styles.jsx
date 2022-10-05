import styled from 'styled-components';

export const MovieWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
        max-width: 100%;
        border-radius: 1.2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0 .4rem 1.2rem;
        transition: all 0.3s;
    &:hover {
        transform: scale(1.02) translateY(-.5rem);
    }
    }
    h4 {
        font-size: 1.8rem;
        text-align: center;
    }
`