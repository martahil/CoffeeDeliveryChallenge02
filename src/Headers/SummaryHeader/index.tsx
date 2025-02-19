import { CartWrapper, CoffeeIcon, CoffeeImg, CoffeeItem, CoffeeWrapper, FeaturesSection, HighlightsSection, PackageIcon, PackageItem, PackageWrapper, ShoppingCartItem, ShoppingCartIcon, Subtitle, SummaryHeaderContainer, TimerIcon, TimerItem, TimerWrapper, Title, TitleAndSubtitle } from "./styles";
import coffee from '../../assets/coffee.svg'

export function SummaryHeader() {
  return (
    <SummaryHeaderContainer>
      <HighlightsSection>
        <Title>
          <h1 style={{ height: "3.875rem" }}>Find the perfect coffee</h1>
          <h1 style={{ height: "3.875rem" }}>for any time of the day</h1>
        </Title>
        <Subtitle>
          <span>With Coffee Delivery, you get your coffee anywhere, anytime</span>
        </Subtitle>

        <FeaturesSection>
          <ShoppingCartItem>
            <CartWrapper>
              <ShoppingCartIcon size={16} weight="fill" />
            </CartWrapper>
            <p>Simple and secure purchase</p>
          </ShoppingCartItem>
          <PackageItem>
            <PackageWrapper>
              <PackageIcon size={16} weight="fill" />
            </PackageWrapper>
            <p>Packaging keeps the perfect</p>
          </PackageItem>
          <TimerItem>
            <TimerWrapper>
              <TimerIcon size={16} weight="fill" />
            </TimerWrapper>
            <p>Fast and tracked delivery</p>
          </TimerItem>
          <CoffeeItem>
            <CoffeeWrapper>
              <CoffeeIcon size={16} weight="fill" />
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