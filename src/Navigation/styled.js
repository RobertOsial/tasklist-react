import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.color.teal};
`;

export const Navbar = styled.ul`
display: flex;
list-style-type: none;
`;

export const NavItem = styled.li`
margin-right: 20px;
`;

export const StyledNavLink = styled(Link)`
color: white;
text-decoration: none;

&:focus {
    font-weight: bold;
}
`;