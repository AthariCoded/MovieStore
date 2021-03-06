import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 8rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  padding-top: 10px;
  margin: 10px;
  &.active {
    color: ${(props) => props.theme.red};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  img {
    width: 40%;
    float: left;
    margin: 20px;
    border: 10px solid #f1faee;
    border-radius: 25px;
  }
  p {
    vertical-align: middle;
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  margin-top: 30px;
  border: 10px solid #f1faee;
  border-radius: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    }
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;
