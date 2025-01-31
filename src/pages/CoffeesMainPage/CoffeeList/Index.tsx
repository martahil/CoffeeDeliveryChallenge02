import { CoffeesContainer, CoffeeSelector } from "./styles";
import { CoffeeItem } from '../CoffeeItem/Index'

import traditionalEspresso from '../../../assets/coffee-images/traditional-espresso.svg'
import american from '../../../assets/coffee-images/american.svg'
import creamyEspresso from '../../../assets/coffee-images/creamy-espresso.svg'
import icedEspresso from '../../../assets/coffee-images/iced-espresso.svg'
import cafeAuLait from '../../../assets/coffee-images/cafe-au-lait.svg'
import latte from '../../../assets/coffee-images/latte.svg'
import cappuccino from '../../../assets/coffee-images/cappuccino.svg'
import macchiato from '../../../assets/coffee-images/macchiato.svg'
import mocha from '../../../assets/coffee-images/mocha.svg'
import hotChocolate from '../../../assets/coffee-images/hot-chocolate.svg'
import cuban from '../../../assets/coffee-images/cuban.svg'
import hawaiian from '../../../assets/coffee-images/hawaiian.svg'
import arabic from '../../../assets/coffee-images/arabic.svg'
import irishCoffee from '../../../assets/coffee-images/irish-coffee.svg'

export function CoffeeList() {
  const coffeeList = [
    {
      id: 1,
      imageSrc: traditionalEspresso,
      imageAlt: "Traditional Espresso",
      tag: ["TRADITIONAL"],
      name: "Traditional Espresso",
      description: "The classic coffee made with hot water and ground beans",
      price: 9.90,
      quantity: 1
    },
    {
      id: 2,
      imageSrc: american,
      imageAlt: "American",
      tag: ["TRADITIONAL"],
      name: "American",
      description: "Espresso with hot water, milder than traditional",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 3,
      imageSrc: creamyEspresso,
      imageAlt: "Creamy Espresso",
      tag: ["TRADITIONAL"],
      name: "Creamy Espresso",
      description: "Traditional espresso topped with creamy foam",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 4,
      imageSrc: icedEspresso,
      imageAlt: "Iced Espresso",
      tag: ["TRADITIONAL", "ICED"],
      name: "Iced Espresso",
      description: "A drink made with espresso and ice cubes",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 5,
      imageSrc: cafeAuLait,
      imageAlt: "Café au Lait",
      tag: ["TRADITIONAL", "MILK-BASED"],
      name: "Café au Lait",
      description: "A half-and-half mix of traditional espresso and steamed milk",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 6,
      imageSrc: latte,
      imageAlt: "Latte",
      tag: ["TRADITIONAL", "MILK-BASED"],
      name: "Latte",
      description: "An espresso with double steamed milk and creamy foam",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 7,
      imageSrc: cappuccino,
      imageAlt: "Cappuccino",
      tag: ["TRADITIONAL", "MILK-BASED"],
      name: "Cappuccino",
      description: "A cinnamon-topped drink with espresso, steamed milk, and foam",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 8,
      imageSrc: macchiato,
      imageAlt: "Macchiato",
      tag: ["TRADITIONAL", "MILK-BASED"],
      name: "Macchiato",
      description: "Espresso blended with a touch of steamed milk and foam",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 9,
      imageSrc: mocha,
      imageAlt: "Mocha",
      tag: ["TRADITIONAL", "MILK-BASED"],
      name: "Mocha",
      description: "Espresso with chocolate syrup, steamed milk, and foam",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 10,
      imageSrc: hotChocolate,
      imageAlt: "Hot Chocolate",
      tag: ["SPECIAL", "MILK-BASED"],
      name: "Hot Chocolate",
      description: "A drink made with chocolate melted into hot milk and coffee",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 11,
      imageSrc: cuban,
      imageAlt: "Cuban",
      tag: ["SPECIAL", "ALCOHOLIC -BASED", "ICED"],
      name: "Cuban",
      description: "An iced drink with espresso, rum, heavy cream, and mint",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 12,
      imageSrc: hawaiian,
      imageAlt: "Hawaiian",
      tag: ["SPECIAL"],
      name: "Hawaiian",
      description: "A sweetened drink made with coffee and coconut milk",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 13,
      imageSrc: arabic,
      imageAlt: "Arabic",
      tag: ["SPECIAL"],
      name: "Arabic",
      description: "A drink made with Arabica coffee beans and spices",
      price: 9.90,
      quantity: 1,
    },
    {
      id: 14,
      imageSrc: irishCoffee,
      imageAlt: "Irish Coffee",
      tag: ["SPECIAL", "ALCOHOLIC -BASED"],
      name: "Irish Coffee",
      description: "A coffee drink with Irish whiskey, sugar, and whipped cream",
      price: 9.90,
      quantity: 1,
    },
  ]

  return (
    <CoffeesContainer>
      <h1>Our Coffees</h1>

      <CoffeeSelector>
        {coffeeList.map(coffee => (
          <CoffeeItem key={coffee.id} {...coffee} />
        ))}

        {/*<CoffeeItem 
          imageSrc={traditionalEspresso}
          imageAlt="Traditional Espresso"
          tag={["TRADITIONAL"]}
          id={1}
          name="Traditional Espresso"
          description="The classic coffee made with hot water and ground beans"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={american}
          imageAlt="American"
          tag={["TRADITIONAL"]}
          id={2}
          name="American"
          description="Espresso with hot water, milder than traditional"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={creamyEspresso}
          imageAlt="Creamy Espresso"
          tag={["TRADITIONAL"]}
          id={3}
          name="Creamy Espresso"
          description="Traditional espresso topped with creamy foam"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={icedEspresso}
          imageAlt="Iced Espresso"
          tag={["TRADITIONAL", "ICED"]} 
          id={4}
          name="Iced Espresso"
          description="A drink made with espresso and ice cubes"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={cafeAuLait}
          imageAlt="Café au Lait"
          tag={["TRADITIONAL", "MILK-BASED"]} 
          id={5}
          name="Café au Lait"
          description="A half-and-half mix of traditional espresso and steamed milk"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={latte}
          imageAlt="Latte"
          tag={["TRADITIONAL", "MILK-BASED"]} 
          id={6}
          name="Latte"
          description="An espresso with double steamed milk and creamy foam"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={cappuccino}
          imageAlt="Cappuccino"
          tag={["TRADITIONAL", "MILK-BASED"]} 
          id={7}
          name="Cappuccino"
          description="A cinnamon-topped drink with espresso, steamed milk, and foam"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={macchiato}
          imageAlt="Macchiato"
          tag={["TRADITIONAL", "MILK-BASED"]} 
          id={8}
          name="Macchiato"
          description="Espresso blended with a touch of steamed milk and foam"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={mocha}
          imageAlt="Mocha"
          tag={["TRADITIONAL", "MILK-BASED"]} 
          id={9}
          name="Mocha"
          description="Espresso with chocolate syrup, steamed milk, and foam"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={hotChocolate}
          imageAlt="Hot Chocolate"
          tag={["SPECIAL", "MILK-BASED"]} 
          id={10}
          name="Hot Chocolate"
          description="A drink made with chocolate melted into hot milk and coffee"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={cuban}
          imageAlt="Cuban"
          tag={["SPECIAL", "ALCOHOLIC -BASED", "ICED"]}
          id={11} 
          name="Cuban"
          description="An iced drink with espresso, rum, heavy cream, and mint"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={hawaiian}
          imageAlt="Hawaiian"
          tag={["SPECIAL"]} 
          id={12}
          name="Hawaiian"
          description="A sweetened drink made with coffee and coconut milk"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={arabic}
          imageAlt="Arabic"
          tag={["SPECIAL"]} 
          id={13}
          name="Arabic"
          description="A drink made with Arabica coffee beans and spices"
          price={9.90}
          quantity={1}
        />
        <CoffeeItem 
          imageSrc={irishCoffee}
          imageAlt="Irish Coffee"
          tag={["SPECIAL", "ALCOHOLIC -BASED"]} 
          id={14}
          name="Irish Coffee"
          description="A coffee drink with Irish whiskey, sugar, and whipped cream"
          price={9.90}
          quantity={1}
        />*/}
      </CoffeeSelector>
    </CoffeesContainer>
  )
}