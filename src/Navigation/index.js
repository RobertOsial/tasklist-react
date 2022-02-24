import { Wrapper, Navbar, NavItem, NavLink } from "./styled";

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar>
        <NavItem>
          <NavLink to="/zadania">Zadania</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/autor">o autorze</NavLink>
        </NavItem>
      </Navbar>
    </Wrapper>
  );
}

export default Navigation;