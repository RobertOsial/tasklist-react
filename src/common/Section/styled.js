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

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        margin: 10px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;