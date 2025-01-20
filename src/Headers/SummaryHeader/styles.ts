import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import styled from 'styled-components'

export const SummaryHeaderContainer = styled.main` 
  display: flex; /* Define layout de grid */
  grid-template-columns: 1fr 1fr;  
  justify-content: space-between;
  gap: 3.5rem; 
  /* margin-top: 5.875rem;
  margin-bottom : 6.75rem; */
`
export const HighlightsSection = styled.div`
  margin-top: 5.875rem;
  margin-left: 10rem;
`

export const CoffeeImg = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  /* margin-left: 3.5rem; */
  margin-right: 10rem;
  margin-top: 5.75rem;
  margin-bottom : 5.75rem;
`

export const Title = styled.div`  
  margin-bottom: 1rem;  
  white-space: nowrap;

  p {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${props => props.theme.colors['base-title']};
  }
`

export const Subtitle = styled.div`  
  font-size: 1.25rem;
  font-weight: 400; /* Regular */
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors['base-title']};
  height: 3.25rem;
  white-space: nowrap;
`

export const FeaturesSection = styled.div`  
  display: grid;
  //grid-template-columns: 1fr 1fr;
  grid-template-columns: auto auto;
  /* justify-content: space-between; */
  height: 5.25rem;
  margin-top: 4.125rem;
  
  p {
    font-size: 1rem;
    font-weight: 400; /* Regular */
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors['base-text']};
    white-space: nowrap;
  }
`

export const ShoppingCartItem = styled.div`  
  display: flex; 
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`
export const ShoppingCartSimpleIcon = styled(ShoppingCartSimple)`  
  color: ${props => props.theme.colors['background']};  
`
export const CartWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['yellow-dark']};
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
`

export const PackageItem = styled.div`  
  display: flex; 
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  margin-left: 2.5rem;
`
export const PackageIcon = styled(Package)`
  color: ${props => props.theme.colors['background']};
`
export const PackageWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['base-text']};
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
`

export const TimerItem = styled.div`  
  display: flex; 
  align-items: center;
  gap: 0.75rem;
`
export const TimerIcon = styled(Timer)`
  color: ${props => props.theme.colors['background']};
`
export const TimerWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['yellow']};
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
`

export const CoffeeItem = styled.div`  
  display: flex; 
  align-items: center;
  gap: 0.75rem;
  margin-left: 2.5rem;
`
export const CoffeeIcon = styled(Coffee)`
  color: ${props => props.theme.colors['background']};
`
export const CoffeeWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['purple']};
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
`