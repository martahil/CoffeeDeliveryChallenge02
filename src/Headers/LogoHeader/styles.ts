import styled from 'styled-components'

import { ShoppingCartSimple } from 'phosphor-react'

export const LogoHeaderContainer = styled.main`  
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 2rem 10rem 2rem 10rem;  
  gap: 1rem;
`

export const LeftLogo = styled.button`  
  justify-self: start;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 5.3rem;
    height: 2.5rem; 
  }
`

export const Location = styled.div`  
  display: flex;
  justify-self: end;
  height: 2.375rem;
  gap: 0.75rem;
  position: relative;
`

export const ShoppingCartSimpleIcon = styled(ShoppingCartSimple)`
  color: ${props => props.theme.colors['yellow-dark']};
`

export const CartWrapper = styled.button`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['yellow-light']};
  min-width: 2.375rem; 
  border-radius: 6px;
  border: none;
  cursor: pointer;
`

export const City = styled.div`  
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  border-radius: 6px;  
  gap: 0.25rem;
  padding: 0.5rem;
  color: ${props => props.theme.colors['purple-dark']};
  background: ${props => props.theme.colors['purple-light']};;

  h1 {
    font-family: 'Roboto';
    font-size: 0.875rem; /* S */
    font-weight: 400; /* Regular */
    white-space: nowrap;
  }
`

export const CartCounter = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -25%;
  right: -5%;

  border-radius: 999px;
  width: 1.25rem;
  height: 1.25rem;
  background: ${props => props.theme.colors['yellow-dark']};
  color: ${props => props.theme.colors.white};

  h1 {
    font-family: 'Roboto';
    font-size: 0.75rem; /* S */
    font-weight: bold;
  }
`
