import { LeftLogo, LogoHeaderContainer, Location, City, ShoppingCartSimpleIcon, CartWrapper, CartCounter } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'

import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'


export function LogoHeader() {
  const navigate = useNavigate();
  const { cart } = useCart();

  function handleCart() {
    navigate('/checkout');
  }

  function handleMainPageLogoBtn() {
    navigate('/');
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <LogoHeaderContainer>
      <LeftLogo onClick={handleMainPageLogoBtn}>
        <img src={logo} alt="Logo" />
      </LeftLogo>

      <Location>
        <City>
          <MapPin size={22} />
          <h1>New York, NY</h1>
        </City>
        <CartWrapper onClick={handleCart}>
          <ShoppingCartSimpleIcon size={22} />
        </CartWrapper>
        <CartCounter>
          <h1>{totalItems}</h1>
        </CartCounter>
      </Location>

    </LogoHeaderContainer>
  )
}