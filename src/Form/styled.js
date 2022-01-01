import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width:${({ theme }) => theme.breakpoint.maxMobile}px) {
        grid-template-columns: 1fr;
    };
`
export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

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