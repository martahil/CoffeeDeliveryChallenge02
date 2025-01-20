import { CoffeeItemContainer, Image, Description, Name, Tag, Price, DollarSign, PriceNumber, QuantitySelector, PlusButton, MinusButton, PriceAndQuantity, ShoppingCartSimpleIcon, CartWrapper } from "./styles";
import traditionalEspresso from "../../assets/coffee-images/traditional-espresso.svg"

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <Image>
        <img src={traditionalEspresso} alt="Traditional Espresso" />
      </Image>
      <Tag>
        <p>TRADITIONAL</p>
      </Tag>
      <Name>
        <p>Traditional Espresso</p>
      </Name>
      <Description>
        <p>The classic coffee made with<br></br> hot water and ground beans</p>
      </Description>
      <PriceAndQuantity>
        <Price>
          <DollarSign>
            $&nbsp;
          </DollarSign>
          <PriceNumber>
            9.90
          </PriceNumber>
        </Price>
        <QuantitySelector>
          <MinusButton>-</MinusButton>
          <input type="number" value="1" />
          <PlusButton>+</PlusButton>
        </QuantitySelector>
        <CartWrapper><ShoppingCartSimpleIcon size={22} /></CartWrapper>
      </PriceAndQuantity>
    </CoffeeItemContainer>
  )
}