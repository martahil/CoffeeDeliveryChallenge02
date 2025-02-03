import React from 'react';
import { useState } from "react";
import { useCheckout } from '../../contexts/ClientDataContext';

import { AddressForm, AddressSubtitle, AddressTitle, AddressContainer, CashBtn, CheckoutContainer, CreditCardBtn, DebitCardBtn, LeftSide, LeftSideHeader, PaymentContainer, PaymentContainerSubtitle, PaymentContainerTitle, PaymentOptions, FirstInputLine, SecondInputLine, ThirdInputLine, FourthInputLine, MapPinIcon, AddressContainerHeader, PaymentTitleAndSubtitle, PaymentContainerHeader, AddressTitleAndSubtitle, DollarIcon, CreditCardIcon, BankIcon, MoneyIcon, OptionalSpan, AddressLine2Container, AddressLine2Input, AddressLine2Span, AddressLine2Placeholder, RightSide, RightSideHeader, RemoveButton, CoffeeImage, Subtotal, Shipping, Total, CheckoutBtn, Name, TrashIcon, Price, PriceNumber, TotalContainer, QuantSelAndRemoveBtn, CartItems, NameAndButtons, RightSideContent, GrayLine, EmptyCartMessage, EmptyCartSecondP, EmptyCartFirstP } from "./styles";
import { QuantitySelector, MinusButton, PlusButton } from "../CoffeesMainPage/CoffeeItem/styles";

import { useCart } from "../../../src/contexts/CartContext";
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { address, updateAddress } = useCheckout();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleCheckoutMainPageBtn() {
    const isAddressIncomplete = [
      address.zipCode,
      address.streetAddress,
      address.houseNumber,
      address.neighborhood,
      address.city,
      address.state
    ].some(field => !field || field.trim() === '');

    if (cart.length === 0) {
      navigate('/');
      return
    }

    if (isAddressIncomplete) {
      alert('Please fill in all the required fields of the address form.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    navigate('/orderconfirmed', { state: { paymentMethod } });
  }

  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrease = (itemId: number) => {
    const item = cart.find(item => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  }

  const handleDecrease = (itemId: number) => {
    const item = cart.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 3.50;
  const total = subtotal + shipping;

  const [paymentMethod, setPaymentMethod] = useState('');

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

          <AddressForm onSubmit={handleSubmit}>
            <FirstInputLine>
              <input
                type="text"
                placeholder={'ZIP Code'}
                value={address.zipCode}
                onChange={(e) => updateAddress({ zipCode: e.target.value })}
                required />
            </FirstInputLine>
            <SecondInputLine>
              <input
                type="text"
                placeholder={'Street Address'}
                value={address.streetAddress}
                onChange={(e) => updateAddress({ streetAddress: e.target.value })}
                required />
            </SecondInputLine>
            <ThirdInputLine>
              <input
                type="text"
                placeholder={'House/Apartment Number'}
                value={address.houseNumber}
                onChange={(e) => updateAddress({ houseNumber: e.target.value })}
                required />
              {/* <input type="text" placeholder={`Address Line 2 optional`} /> */}

              <AddressLine2Container>
                <AddressLine2Input
                  type="text"
                  value={address.addressLine2}
                  onChange={(e) => updateAddress({ addressLine2: e.target.value })}
                // value={inputValue}
                // onChange={handleChange}
                />
                {!address.addressLine2 && (
                  <AddressLine2Placeholder>
                    <AddressLine2Span>Address Line 2</AddressLine2Span>
                    <OptionalSpan>optional</OptionalSpan>
                  </AddressLine2Placeholder>
                )}
                {/* {!inputValue && (
                  <AddressLine2Placeholder>
                    <AddressLine2Span>Address Line 2</AddressLine2Span>
                    <OptionalSpan>optional</OptionalSpan>
                  </AddressLine2Placeholder>
                )} */}
              </AddressLine2Container>
            </ThirdInputLine>
            <FourthInputLine>
              <input
                type="text"
                placeholder={'Neighborhood'}
                value={address.neighborhood}
                onChange={(e) => updateAddress({ neighborhood: e.target.value })}
                required />
              <input
                type="text"
                placeholder={'City'}
                value={address.city}
                onChange={(e) => updateAddress({ city: e.target.value })}
                required />
              <input
                type="text"
                placeholder={'State'}
                value={address.state}
                onChange={(e) => updateAddress({ state: e.target.value })}
                required />
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
            <CreditCardBtn onClick={() => setPaymentMethod('Credit Card')}>
              <CreditCardIcon size={16} />
              CREDIT CARD
            </CreditCardBtn>
            <DebitCardBtn onClick={() => setPaymentMethod('Debit Card')}>
              <BankIcon size={16} />
              DEBIT CARD
            </DebitCardBtn>
            <CashBtn onClick={() => setPaymentMethod('Cash')}>
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

          {cart.length === 0 ? (
            <EmptyCartMessage>
              <EmptyCartFirstP>Your cart is empty.</EmptyCartFirstP>
              <EmptyCartSecondP>Click on the button to continue shopping.</EmptyCartSecondP>
            </EmptyCartMessage>
          ) : (
            cart.map((item) => (
              <React.Fragment key={item.id}>
                <CartItems>
                  <CoffeeImage src={item.imageSrc} alt={item.imageAlt} />
                  <NameAndButtons>
                    <Name>{item.name}</Name>
                    <QuantSelAndRemoveBtn>
                      <QuantitySelector style={{ margin: '0' }}>
                        <MinusButton onClick={() => handleDecrease(item.id)}>-</MinusButton>
                        <span>{item.quantity}</span>
                        <PlusButton onClick={() => handleIncrease(item.id)}>+</PlusButton>
                      </QuantitySelector>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        <TrashIcon size={16} />
                        REMOVE</RemoveButton>
                    </QuantSelAndRemoveBtn>
                  </NameAndButtons>
                  <Price>
                    <PriceNumber>
                      $&nbsp;{item.price}
                    </PriceNumber>
                  </Price>
                </CartItems>
                <GrayLine></GrayLine>

              </React.Fragment>
            ))
          )}

          {cart.length > 0 && (
            <TotalContainer>
              <Subtotal>
                <p>Subtotal</p>
                <PriceNumber>
                  $&nbsp;{subtotal.toFixed(2)}
                </PriceNumber>
              </Subtotal>
              <Shipping>
                <p>Shipping</p>
                <PriceNumber>
                  $&nbsp;{shipping.toFixed(2)}
                </PriceNumber>
              </Shipping>
              <Total>
                <p>Total</p>
                <PriceNumber>
                  $&nbsp;{total.toFixed(2)}
                </PriceNumber>
              </Total>
            </TotalContainer>
          )}

          <CheckoutBtn type="submit" onClick={handleCheckoutMainPageBtn}>
            {cart.length === 0 ? "MAIN PAGE" : "CHECKOUT"}
          </CheckoutBtn>
        </RightSideContent>
      </RightSide>
    </CheckoutContainer>
  )
}


