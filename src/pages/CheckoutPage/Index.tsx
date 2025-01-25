import { AddressForm, AddressSubtitle, AddressTitle, AddressContainer, CashBtn, CheckoutContainer, CreditCardBtn, DebitCardBtn, LeftSide, LeftSideHeader, PaymentContainer, PaymentContainerSubtitle, PaymentContainerTitle, PaymentOptions, FirstInputLine, SecondInputLine, ThirdInputLine, FourthInputLine, MapPinIcon, AddressContainerHeader, MapPinWrapper, TitleAndSubtitle, PaymentTitleAndSubtitle, PaymentContainerHeader, AddressTitleAndSubtitle, DollarIcon, CreditCardIcon, BankIcon, MoneyIcon, Optional, AddressLine2, T1, T2, AddressLineContainer, AddressLineInput, PlaceholderContainer, AddressLineSpan, OptionalSpan, AddressLine2Container, AddressLine2Input, AddressLine2Span, AddressLine2Placeholder, RightSide, RightSideHeader, RemoveButton, CoffeeImage, Subtotal, Shipping, Total, CheckoutBtn, Name, TrashIcon, DollarSign, Price, PriceNumber, TotalContainer, NameAndPrice, QuantSelAndRemoveBtn, CartItems, NameAndButtons, RightSideContent, GrayLine } from "./styles";
import { QuantitySelector, MinusButton, PlusButton } from "../CoffeesMainPage/CoffeeItem/styles";
import traditionalEspresso from '../../assets/coffee-images/traditional-espresso.svg'
import latte from '../../assets/coffee-images/latte.svg'

import { useState } from "react";

export function Checkout() {

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <CheckoutContainer>
      <LeftSide>
        <LeftSideHeader>
          <p>Complete your order</p>
        </LeftSideHeader>
        <AddressContainer>
          <AddressContainerHeader>
            <MapPinIcon size={22} />
            <AddressTitleAndSubtitle>
              <AddressTitle>
                <p>Delivery Address</p>
              </AddressTitle>
              <AddressSubtitle>
                <p>Provide the address where you wish to receive your order</p>
              </AddressSubtitle>
            </AddressTitleAndSubtitle>
          </AddressContainerHeader>

          <AddressForm>
            <FirstInputLine>
              <input type="text" placeholder={'ZIP Code'} required />
            </FirstInputLine>
            <SecondInputLine>
              <input type="text" placeholder={'Street Address'} required />
            </SecondInputLine>
            <ThirdInputLine>
              <input type="text" placeholder={'House/Apartment Number'} required />
              {/* <input type="text" placeholder={`Address Line 2 optional`} /> */}

              <AddressLine2Container>
                <AddressLine2Input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                />
                {!inputValue && (
                  <AddressLine2Placeholder>
                    <AddressLine2Span>Address Line 2</AddressLine2Span>
                    <OptionalSpan>optional</OptionalSpan>
                  </AddressLine2Placeholder>
                )}
              </AddressLine2Container>
            </ThirdInputLine>
            <FourthInputLine>
              <input type="text" placeholder={'Neighborhood'} required />
              <input type="text" placeholder={'City'} required />
              <input type="text" placeholder={'State'} required />
            </FourthInputLine>
          </AddressForm>
        </AddressContainer>

        <PaymentContainer>
          <PaymentContainerHeader>
            <DollarIcon size={22} />
            <PaymentTitleAndSubtitle>
              <PaymentContainerTitle>
                <p>Payment</p>
              </PaymentContainerTitle>
              <PaymentContainerSubtitle>
                <p>Payment is made upon delivery. Choose your preferred payment method:</p>
              </PaymentContainerSubtitle>
            </PaymentTitleAndSubtitle>
          </PaymentContainerHeader>

          <PaymentOptions>
            <CreditCardBtn>
              <CreditCardIcon size={16} />
              CREDIT CARD
            </CreditCardBtn>
            <DebitCardBtn>
              <BankIcon size={16} />
              DEBIT CARD
            </DebitCardBtn>
            <CashBtn>
              <MoneyIcon size={16} />
              CASH
            </CashBtn>
          </PaymentOptions>
        </PaymentContainer>
      </LeftSide>

      <RightSide>
        <RightSideHeader>
          <p>Chosen Coffees</p>
        </RightSideHeader>

        <RightSideContent>
          <CartItems>
            <CoffeeImage src={traditionalEspresso} alt="Traditional Espresso" />

            <NameAndButtons>
              <Name>Traditional Espresso</Name>
              <QuantSelAndRemoveBtn>
                <QuantitySelector style={{ margin: '0' }}>
                  <MinusButton>-</MinusButton>
                  <input type="number" /*value={quantity}*/ value={1} />
                  <PlusButton>+</PlusButton>
                </QuantitySelector>
                <RemoveButton>
                  <TrashIcon size={16} />
                  REMOVE</RemoveButton>
              </QuantSelAndRemoveBtn>
            </NameAndButtons>

            <Price>
              <PriceNumber>
                $&nbsp;9.90
              </PriceNumber>
            </Price>
          </CartItems>

          <GrayLine></GrayLine>

          <CartItems>
            <CoffeeImage src={latte} alt="Traditional Espresso" />

            <NameAndButtons>
              <Name>Latte</Name>
              <QuantSelAndRemoveBtn>
                <QuantitySelector style={{ margin: '0' }}>
                  <MinusButton>-</MinusButton>
                  <input type="number" /*value={quantity}*/ value={1} />
                  <PlusButton>+</PlusButton>
                </QuantitySelector>
                <RemoveButton>
                  <TrashIcon size={16} />
                  REMOVE</RemoveButton>
              </QuantSelAndRemoveBtn>
            </NameAndButtons>

            <Price>
              <PriceNumber>
                $&nbsp;19.80
              </PriceNumber>
            </Price>
          </CartItems>

          <GrayLine></GrayLine>

          <TotalContainer>
            <Subtotal>
              <p>Subtotal</p>
              <PriceNumber>
                $&nbsp;29.70
              </PriceNumber>
            </Subtotal>
            <Shipping>
              <p>Shipping</p>
              <PriceNumber>
                $&nbsp;3.50
              </PriceNumber>
            </Shipping>
            <Total>
              <p>Total</p>
              <PriceNumber>
                $&nbsp;33.20
              </PriceNumber>
            </Total>
          </TotalContainer>

          <CheckoutBtn>CHECKOUT</CheckoutBtn>
        </RightSideContent>
      </RightSide>
    </CheckoutContainer>
  )
}


