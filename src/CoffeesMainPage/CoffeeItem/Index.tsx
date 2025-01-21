import { CoffeeItemContainer, Image, Description, Name, Tag, Price, DollarSign, PriceNumber, QuantitySelector, PlusButton, MinusButton, PriceAndQuantity, ShoppingCartSimpleIcon, CartWrapper, TagWrapper } from "./styles";

interface CoffeeItemProps {
  imageSrc: string;
  imageAlt: string;
  tag: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  //onQuantityChange: (newQuantity: number) => void;
}

export function CoffeeItem({
  imageSrc,
  imageAlt,
  tag,
  name,
  description,
  price,
  quantity, }: CoffeeItemProps) {

  return (
    <CoffeeItemContainer>
      <Image>
        <img src={imageSrc} alt={imageAlt} />
      </Image>
      <TagWrapper>
        {tag.map((t, index) => (
          <Tag key={index}>{t}</Tag>
        ))}
      </TagWrapper>
      <Name>
        <p>{name}</p>
      </Name>
      <Description>
        <p>{description}</p>
      </Description>
      <PriceAndQuantity>
        <Price>
          <DollarSign>
            $&nbsp;
          </DollarSign>
          <PriceNumber>
            {price}
          </PriceNumber>
        </Price>
        <QuantitySelector>
          <MinusButton>-</MinusButton>
          <input type="number" value={quantity} />
          <PlusButton>+</PlusButton>
        </QuantitySelector>
        <CartWrapper><ShoppingCartSimpleIcon size={22} /></CartWrapper>
      </PriceAndQuantity>
    </CoffeeItemContainer>
  )
}


