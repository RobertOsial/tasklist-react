import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Task = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    align-items: center;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}  
`;

export const ContentLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};

    &:hover {
        filter: brightness(60%);
        color: ${({ theme }) => theme.color.teal}
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 25px;
    height: 25px;

    ${({ toggleTaskDone }) => toggleTaskDone && css`
        background: ${({ theme }) => theme.color.green};
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.red};
    `}

    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }
`;