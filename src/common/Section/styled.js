import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.white};
    margin: 10px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    grid-gap: 20px;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    margin: 0;
    padding: 0;
    transition: filter 0.3s;
    
    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        filter: brightness(100%);
        cursor: default;
    }
`;