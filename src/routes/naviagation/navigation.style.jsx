import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.div`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

