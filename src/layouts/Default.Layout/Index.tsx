import { Outlet, useLocation } from "react-router-dom";

import { LogoHeader } from "../../Headers/LogoHeader/index";
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <LayoutContainer>
      <LogoHeader isFixed={isHomePage} />
      <Outlet />
    </LayoutContainer>
  )
}