import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react'
import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-left: 10rem;
  margin-bottom: 15rem;
  margin-top: 2.5rem;
  margin-right: 10rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`

export const LeftSide = styled.div`
 max-width: 60%;
 min-width: 30rem;
`

export const LeftSideHeader = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => props.theme.colors['base-subtitle']};
  margin-bottom: 0.9375rem;
`

export const AddressContainer = styled.div`
  background: ${props => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const AddressContainerHeader = styled.div`
  display: flex; 
`

export const MapPinIcon = styled(MapPinLine)`
  color: ${props => props.theme.colors['yellow-dark']};
`

export const AddressTitleAndSubtitle = styled.div`
  margin-left: 0.5rem;
`

export const AddressTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-subtitle']};
  margin-bottom: 0.125rem;
`

export const AddressSubtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem; /* S */
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-text']};
  margin-bottom: 2rem;
`

export const AddressForm = styled.form`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem; /* S */
  font-weight: 400; /* Regular */   
  
  input {
    color: ${props => props.theme.colors['base-text']};
    background: ${props => props.theme.colors['base-input']};
    padding: 0.75rem;
    border-radius: 4px;
    border: solid 1px ${props => props.theme.colors['base-button']};
  }

  input:focus {
    border: solid 1px ${props => props.theme.colors['yellow-dark']}!important;
    outline: none;
  }

  input::placeholder {
    color: ${props => props.theme.colors['base-label']};
  }
`

export const FirstInputLine = styled.div`
  margin-bottom: 1rem;

  input {
    max-width: 35%;
  }
`
export const SecondInputLine = styled.div`
  margin-bottom: 1rem;

  input {
    width: 100%;
  }
`
export const ThirdInputLine = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  input {
    width: 100%; 
  } 
`
export const AddressLine2Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const AddressLine2Input = styled.input`
`;

export const AddressLine2Span = styled.span`
`;

export const OptionalSpan = styled.span`
  font-size: 0.75rem;
  font-style: italic;
`;

export const AddressLine2Placeholder = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  padding: 0.75rem;  
  color: ${props => props.theme.colors['base-label']};
`;

export const FourthInputLine = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;

  input {
    width: 100%;
    
    &[placeholder="State"] {
      width: 35%;
    }
  }
`

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px;
  margin-top: 0.75rem;
`

export const PaymentContainerHeader = styled.div`
  display: flex;
`

export const DollarIcon = styled(CurrencyDollar)`
  color: ${props => props.theme.colors['purple']};
`

export const PaymentTitleAndSubtitle = styled.div`
  margin-left: 0.5rem;
`

export const PaymentContainerTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-subtitle']};
  margin-bottom: 0.125rem;
`

export const PaymentContainerSubtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem; /* S */
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-text']};
  margin-bottom: 2rem;
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400; /* Regular */
    color: ${props => props.theme.colors['base-text']};
    background: ${props => props.theme.colors['base-button']};
    border: solid 1px ${props => props.theme.colors['base-button']};
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors['base-hover']};
    }
  }

  button:focus {
  border: solid 1px ${props => props.theme.colors['purple-dark']};
  background: ${props => props.theme.colors['purple-light']}; 
  }  
`

export const CreditCardBtn = styled.button` 
`

export const DebitCardBtn = styled.button` 
`

export const CashBtn = styled.button` 
`

export const CreditCardIcon = styled(CreditCard)`
  color: ${props => props.theme.colors['purple']};
`

export const BankIcon = styled(Bank)`
  color: ${props => props.theme.colors['purple']};
`

export const MoneyIcon = styled(Money)`
  color: ${props => props.theme.colors['purple']};
`

export const RightSide = styled.div`
  max-width: 40%;
  min-width: 20rem;
`

export const RightSideContent = styled.div`
  background-color: ${props => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 2.5rem;
`

export const RightSideHeader = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => props.theme.colors['base-subtitle']};
  margin-bottom: 0.9375rem;
`

export const EmptyCartMessage = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-subtitle']};  
`

export const EmptyCartFirstP = styled.div`
  margin-bottom: 0.125rem; 
`

export const EmptyCartSecondP = styled.div`
  font-size: 0.875rem; /* S */
  color: ${props => props.theme.colors['base-text']};
  margin-bottom: 2rem;
`

export const CartItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  padding: 0.5rem 0.25rem;  
`

export const CoffeeImage = styled.img`
  height: 4rem;
  margin-right: 1.25rem;
`

export const NameAndButtons = styled.div`
`

export const Name = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400; /* Regular */  
  color: ${props => props.theme.colors['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const Price = styled.div`
  margin-left: auto; /* right alignment */
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;   
  color: ${props => props.theme.colors['base-text']};  
`

export const PriceNumber = styled.div`
`

export const QuantSelAndRemoveBtn = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25px;

  padding: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-text']};
  background: ${props => props.theme.colors['base-button']};
  border-radius: 6px;
  cursor: pointer;
  border: none;  
`

export const TrashIcon = styled(Trash)`
  color: ${props => props.theme.colors['purple']};
`

export const GrayLine = styled.div`
  border-top: 1px solid ${props => props.theme.colors['base-button']};
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export const TotalContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400; /* Regular */
  color: ${props => props.theme.colors['base-text']};
`

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0.84375rem;
`

export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0.75rem;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors['base-subtitle']};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const CheckoutBtn = styled.button`
  color: ${props => props.theme.colors['white']};
  background: ${props => props.theme.colors['yellow']};
  padding: 0.75rem 0.5rem;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 6px;

  &:hover {
    background: ${props => props.theme.colors['yellow-dark']};
  }
`






