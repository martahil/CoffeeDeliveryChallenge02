import { useState } from "react";

import { useCart } from "../../../../src/contexts/CartContext";
import { handleQuantityChange } from "../../../contexts/CoffeeQuantityChange";

import { CoffeeItemContainer, Image, Description, Name, Tag, Price, DollarSign, PriceNumber, QuantitySelector, PlusButton, MinusButton, PriceAndQuantity, ShoppingCartSimpleIcon, CartWrapper, TagWrapper } from "./styles";

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
  }: CoffeeItemProps) {
  const isHawaiian = name === "Hawaiian";

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function increase() {
    handleQuantityChange('increase', quantity, setQuantity);
  }

  function decrease() {
    handleQuantityChange('decrease', quantity, setQuantity);
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
          <span>{quantity}</span>
          <PlusButton onClick={increase}>+</PlusButton>
        </QuantitySelector>
        <CartWrapper onClick={handleAddToCart}><ShoppingCartSimpleIcon size={22} /></CartWrapper>
      </PriceAndQuantity>
    </CoffeeItemContainer>
  )
}


