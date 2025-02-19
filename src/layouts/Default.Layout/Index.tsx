import { Outlet } from "react-router-dom";

import { LogoHeader } from "../../Headers/LogoHeader/index";
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LogoHeader />
      <Outlet />
    </LayoutContainer>
  )
}