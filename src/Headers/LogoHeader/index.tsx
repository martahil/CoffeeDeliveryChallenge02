import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext'

import { LeftLogo, LogoHeaderContainer, Location, City, ShoppingCartIcon, CartWrapper, CartCounter } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'

interface LogoHeaderProps {
  isFixed?: boolean;
}

export function LogoHeader({ isFixed = false }: LogoHeaderProps) {
  const navigate = useNavigate();
  const { cart } = useCart();
  const isOrderConfirmedPage = location.pathname === '/orderconfirmed';
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isCartEmpty = totalItems === 0;

  function handleCart() {
    if (!isCartEmpty && !isOrderConfirmedPage) {
      navigate('/checkout');
    }
  }

  function handleMainPageLogoBtn() {
    navigate('/');
  }

  return (
    <LogoHeaderContainer style={{ position: isFixed ? 'fixed' : 'static', top: 0, width: '100%', zIndex: 1000 }}>
      <LeftLogo onClick={handleMainPageLogoBtn}>
        <img src={logo} alt="Logo" />
      </LeftLogo>

      <Location>
        <City>
          <MapPin size={22} weight="fill" />
          <h1>New York, NY</h1>
        </City>
        <CartWrapper onClick={handleCart} isDisabled={isCartEmpty || isOrderConfirmedPage}>
          <ShoppingCartIcon size={22} weight="fill" />
        </CartWrapper>
        <CartCounter>
          <h1>{totalItems}</h1>
        </CartCounter>
      </Location>

    </LogoHeaderContainer>
  )
}