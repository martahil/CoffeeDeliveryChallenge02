import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
 width: 256px;
 background: ${props => props.theme.colors['base-card']};
 display: flex;
 align-items: center;
 flex-direction: column;
 border-radius: 6px 36px;
 margin-bottom: 1.25rem;
`

export const Image = styled.div`
  display: flex;
  align-items: center;      
  margin-top: -15px;
`

export const Tag = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: bold;
  color: ${props => props.theme.colors['yellow-dark']};
  background: ${props => props.theme.colors['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  margin-top: 0.75rem;
`
export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 0.25rem;
`

export const Name = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  color: ${props => props.theme.colors['base-subtitle']};
  padding-top: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem; /* S */
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-label']};
  text-align: center;
  padding-top: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

`

export const PriceAndQuantity = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2.0625rem;
  padding-bottom: 1.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  padding: 0.21875rem 0;
`

export const DollarSign = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-text']};
`

export const PriceNumber = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: bolder; /* ExtraBold */
  color: ${props => props.theme.colors['base-text']};
`

export const QuantitySelector = styled.div`
  background: ${props => props.theme.colors['base-button']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  margin-left:0.5rem;
  border-radius: 6px;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400; /* Regular */
    color: ${props => props.theme.colors['base-title']};
    background: none;
    border: none;
    padding: 0.1875rem 0.4375rem;
    display: flex;
    text-align: center; 
    line-height: normal; 
  }

  button {
    width: 0.875rem;
    height: 0.875rem;
    color: ${props => props.theme.colors['purple']};
    background: none;
    border: none;
    cursor: pointer;
  }
`

export const MinusButton = styled(Minus)`
  color: ${props => props.theme.colors['purple']};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors['purple-dark']};
  }
`

export const PlusButton = styled(Plus)`
  color: ${props => props.theme.colors['purple']};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors['purple-dark']};
  }
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${props => props.theme.colors['base-card']};
`
export const CartWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['purple-dark']};
  width: 38px;
  height: 38px;
  border-radius: 6px;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors['purple']};
  }

  &:active {
    background: ${props => props.theme.colors['yellow-dark']};
  }
`