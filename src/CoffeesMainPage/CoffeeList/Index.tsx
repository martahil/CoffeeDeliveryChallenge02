import { CoffeesContainer, CoffeeSelector } from "./styles";
import { CoffeeItem } from '../CoffeeItem/Index'

export function CoffeeList() {
  return (
    <CoffeesContainer>
      <h1>Our Coffees</h1>

      <CoffeeSelector>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </CoffeeSelector>
    </CoffeesContainer>

  )
}