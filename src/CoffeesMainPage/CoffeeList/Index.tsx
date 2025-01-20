import { CoffeesContainer } from "./styles";
import { CoffeeItem } from '../CoffeeItem/Index'

export function CoffeeList() {
  return (
    <CoffeesContainer>
      <h1>Our Coffees</h1>
      <CoffeeItem />
    </CoffeesContainer>
  )
}