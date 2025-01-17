import { LogoHeader } from "./Headers/LogoHeader"
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LogoHeader />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
