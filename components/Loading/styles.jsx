import styled, { keyframes } from 'styled-components';

export const LoadingSpinner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,50%);
    width: 5rem;
    height: 5rem;
    border: .5rem solid lightgray;
    border-top: .5rem solid coral;
    border-radius: 50%;
    animation: rotation .5s ease-in infinite;
    
    @keyframes rotation {
        0%{
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    `
