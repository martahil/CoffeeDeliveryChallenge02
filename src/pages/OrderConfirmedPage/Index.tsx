import { AddressContent, AddressSection, CityAndStateLine, DeliveryContent, DeliveryEstimateTime, DeliveryEstimateTxt, DeliverySection, DeliveryToTxt, DollarIcon, DollarWrapper, LeftSide, MapPinIcon, MapPinWrapper, OrderConfirmedContainer, OrderMainInfo, OrderMainInfoContainer, PaymentContent, PaymentOnDeliveryTxt, PaymentOption, PaymentSection, RightSide, Street, StreetAddressLine, Subtitle, TimerIcon, TimerWrapper, Title } from "./styles";
import orderConfirmedImg from '../../assets/order-confirmed-illustration.svg'

export function OrderConfirmed() {

  return (
    <OrderConfirmedContainer>
      <LeftSide>
        <Title>Woohoo! Order confirmed</Title>
        <Subtitle>Now just wait, and your coffee will soon arrive to you</Subtitle>

        <OrderMainInfoContainer> {/* This extra container was created to make the border gradient color possible */}
          <OrderMainInfo>
            <AddressSection>
              <MapPinWrapper>
                <MapPinIcon size={16} />
              </MapPinWrapper>
              <AddressContent>
                <StreetAddressLine>
                  <DeliveryToTxt>Delivery to&nbsp;</DeliveryToTxt>
                  <Street>João Daniel Martinelli Street, 102</Street>
                </StreetAddressLine>
                <CityAndStateLine>Farrapos, Porto Alegre, Rio Grande do Sul (RS)</CityAndStateLine>
              </AddressContent>
            </AddressSection>

            <DeliverySection>
              <TimerWrapper>
                <TimerIcon size={16} />
              </TimerWrapper>
              <DeliveryContent>
                <DeliveryEstimateTxt>Delivery Estimate</DeliveryEstimateTxt>
                <DeliveryEstimateTime>20 min - 30 min</DeliveryEstimateTime>
              </DeliveryContent>
            </DeliverySection>

            <PaymentSection>
              <DollarWrapper>
                <DollarIcon size={16} />
              </DollarWrapper>
              <PaymentContent>
                <PaymentOnDeliveryTxt>Payment on delivery</PaymentOnDeliveryTxt>
                <PaymentOption>Credit Card</PaymentOption>
              </PaymentContent>
            </PaymentSection>
          </OrderMainInfo>
        </OrderMainInfoContainer>
      </LeftSide>

      <RightSide>
        <img src={orderConfirmedImg} alt="Illustration of a delivery person on a motorcycle" />
      </RightSide>
    </OrderConfirmedContainer >
  )
}


