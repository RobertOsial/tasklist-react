import { Wrapper, Navbar, NavItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar>
        <NavItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/autor">o autorze</StyledNavLink>
        </NavItem>
      </Navbar>
    </Wrapper>
  );
}

export default Navigation;