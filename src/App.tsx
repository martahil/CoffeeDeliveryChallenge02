import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import { LogoHeader } from "./Headers/LogoHeader"
import { SummaryHeader } from "./Headers/SummaryHeader"
import { CoffeeList } from "./pages/CoffeesMainPage/CoffeeList/Index"
import { Checkout } from "./pages/CheckoutPage/Index"
import { OrderConfirmed } from "./pages/OrderConfirmedPage/Index"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        {/* <LogoHeader /> */}

        {/* <SummaryHeader />
        <CoffeeList /> */}

        {/* <Checkout /> */}

        {/* <OrderConfirmed /> */}
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
