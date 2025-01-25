import { LogoHeader } from "./Headers/LogoHeader"
import { ThemeProvider } from 'styled-components'
import { SummaryHeader } from "./Headers/SummaryHeader"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"
import { CoffeeList } from "./pages/CoffeesMainPage/CoffeeList/Index"
import { Checkout } from "./pages/CheckoutPage/Index"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LogoHeader />
      {/* <SummaryHeader /> */}
      {/* <CoffeeList /> */}

      <Checkout />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
