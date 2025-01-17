import { LeftLogo, LogoHeaderContainer, Location, City, ShoppingCartSimpleIcon, CartWrapper, CartCounter } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin } from 'phosphor-react'

export function LogoHeader() {
  return (
    <LogoHeaderContainer>
      <LeftLogo>
        <img src={logo} alt="Logo" />
      </LeftLogo>

      <Location>
        <City>
          <MapPin size={22} />
          <h1>New York, NY</h1>
        </City>
        <CartWrapper>
          <ShoppingCartSimpleIcon size={22} />
        </CartWrapper>
        <CartCounter>
          <h1>3</h1>
        </CartCounter>
      </Location>

    </LogoHeaderContainer>
  )
}