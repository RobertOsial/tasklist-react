import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 10px;

    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }
F
    &:active {
        filter: brightness(120%);
    }
`;