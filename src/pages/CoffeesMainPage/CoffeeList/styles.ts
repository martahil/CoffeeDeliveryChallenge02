import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  padding-bottom: 9.8125rem;
  width: 100%;
  max-width: 72.5rem;
  margin: 0 auto;

  h1 {
    margin-top: 2rem;
    margin-bottom: 2.125rem;
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: bolder; /* ExtraBold */
  }
`

export const CoffeeSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 32px;  
  width: 100%;
  max-width: 72.5rem;
  margin: 0 auto;  
`