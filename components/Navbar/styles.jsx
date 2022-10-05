import styled from 'styled-components';

export const Nav = styled.nav`
    padding: 2rem 0 1rem 0;
    ul {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        list-style: none;
        justify-content: center;
        li {
            font-size: 2rem;
            cursor: pointer;
        }
    }
`
export const Alink = styled.a`
    color: ${({ tab }) => (tab ? 'coral' : 'black')};
                text-decoration: none;
`