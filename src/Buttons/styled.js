import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    margin: 0 0 0 20px;
    transition: filter 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;