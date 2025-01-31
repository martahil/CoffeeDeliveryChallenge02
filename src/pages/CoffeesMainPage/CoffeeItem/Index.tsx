import { CoffeeItemContainer, Image, Description, Name, Tag, Price, DollarSign, PriceNumber, QuantitySelector, PlusButton, MinusButton, PriceAndQuantity, ShoppingCartSimpleIcon, CartWrapper, TagWrapper } from "./styles";

import { useState } from "react";
import { useCart } from "../../../../src/contexts/CartContext";

interface CoffeeItemProps {
  id: number;
  imageSrc: string;
  imageAlt: string;
  tag: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export function CoffeeItem({
  id,
  imageSrc,
  imageAlt,
  tag,
  name,
  description,
  price,
  /*quantity,*/ }: CoffeeItemProps) {
  const isHawaiian = name === "Hawaiian";

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAddToCart() {
    addToCart({ id, name, price, quantity, imageSrc, imageAlt });
  }

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
      <Name style={{
        fontFamily: isHawaiian ? "Bahiana" : "Baloo 2",
        fontWeight: isHawaiian ? 400 : "bold",
      }}
      >
        {/* font-weight: 400; /* Regular */}
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
          <MinusButton onClick={decrease}>-</MinusButton>
          {/* <input type="number" value={quantity} /> */}
          <span>{quantity}</span>
          <PlusButton onClick={increase}>+</PlusButton>
        </QuantitySelector>
        <CartWrapper onClick={handleAddToCart}><ShoppingCartSimpleIcon size={22} /></CartWrapper>
      </PriceAndQuantity>
    </CoffeeItemContainer>
  )
}


