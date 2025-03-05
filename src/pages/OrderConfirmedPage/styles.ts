import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors['base-text']};
  margin-bottom: 5rem;
  margin-top: 5rem;
`

export const OrderConfirmedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 72.5rem;
  margin: 0 auto;  
  white-space: nowrap;
`

export const LeftSide = styled.div`
`

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: bolder;
  color: ${props => props.theme.colors['yellow-dark']};
  margin-bottom: 0.25rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-subtitle']};
  margin-bottom: 2.375rem;
`

export const OrderMainInfoContainer = styled.div`
  display: inline-block; 
  padding: 0.0655rem; 
  border-radius: 10px 30px 10px 30px;
  background: linear-gradient(to right, #DBAC2C 0%, #8047F8 100%);
`;

export const OrderMainInfo = styled.div`
  background-color: ${props => props.theme.colors['background']}; 
  border-radius: 10px 30px 10px 30px;
  padding: 2.5rem; 
`;

export const AddressSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 2rem;
`

export const MapPinIcon = styled(MapPin)`
  color: ${props => props.theme.colors['background']};
`
export const MapPinWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['purple']};
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
`

export const AddressContent = styled.div`
`

export const StreetAddressLine = styled.div`
  display: flex;
`

export const DeliveryToTxt = styled.p`
  font-size: 1rem;
  font-weight: 400; /* Regular */
`

export const Street = styled.span`
  font-size: 1rem;
  font-weight: bold; 
`

export const AddressLine2 = styled.span`
`

export const CityAndStateLine = styled.span`
  font-size: 1rem;
  font-weight: 400; /* Regular */
`

export const DeliverySection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 2rem;
`

export const TimerIcon = styled(Timer)`
  color: ${props => props.theme.colors['background']};
`
export const TimerWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['yellow']};
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
`

export const DeliveryContent = styled.div`
`

export const DeliveryEstimateTxt = styled.p`
  font-size: 1rem;
  font-weight: 400; /* Regular */
`

export const DeliveryEstimateTime = styled.p`
  font-size: 1rem;
  font-weight: bold; 
`

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const DollarIcon = styled(CurrencyDollar)`
  color: ${props => props.theme.colors['background']};
`
export const DollarWrapper = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors['yellow-dark']};
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
`

export const PaymentContent = styled.div`
`

export const PaymentOnDeliveryTxt = styled.p`
  font-size: 1rem;
  font-weight: 400; /* Regular */
`

export const PaymentOption = styled.span`
  font-size: 1rem;
  font-weight: bold; 
`

export const RightSide = styled.div`
  width: 30.75rem;
  height: 18.3125rem;
  margin-left: 6.375rem;
`




