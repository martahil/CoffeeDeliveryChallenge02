import { CartWrapper, CoffeeIcon, CoffeeImg, CoffeeItem, CoffeeWrapper, FeaturesSection, HighlightsSection, PackageIcon, PackageItem, PackageWrapper, ShoppingCartItem, ShoppingCartSimpleIcon, Subtitle, SummaryHeaderContainer, TimerIcon, TimerItem, TimerWrapper, Title, TitleAndSubtitle } from "./styles";
import coffee from '../../assets/Coffee.svg'

export function SummaryHeader() {
  return (
    <SummaryHeaderContainer>
      <HighlightsSection>
        <Title>
          <p style={{ height: "3.875rem" }}>Find the perfect coffee</p>
          <p style={{ height: "3.875rem" }}>for any time of the day</p>
        </Title>
        <Subtitle>
          <p>With Coffee Delivery, you get your coffee anywhere, anytime</p>
        </Subtitle>

        <FeaturesSection>
          <ShoppingCartItem>
            <CartWrapper>
              <ShoppingCartSimpleIcon size={16} />
            </CartWrapper>
            <p>Simple and secure purchase</p>
          </ShoppingCartItem>
          <PackageItem>
            <PackageWrapper>
              <PackageIcon size={16} />
            </PackageWrapper>
            <p>Packaging keeps the perfect</p>
          </PackageItem>
          <TimerItem>
            <TimerWrapper>
              <TimerIcon size={16} />
            </TimerWrapper>
            <p>Fast and tracked delivery</p>
          </TimerItem>
          <CoffeeItem>
            <CoffeeWrapper>
              <CoffeeIcon size={16} />
            </CoffeeWrapper>
            <p>The coffee arrives fresh to you</p>
          </CoffeeItem>
        </FeaturesSection>
      </HighlightsSection>

      <CoffeeImg>
        <img src={coffee} alt="Coffee" />
      </CoffeeImg>
    </SummaryHeaderContainer>
  )
}