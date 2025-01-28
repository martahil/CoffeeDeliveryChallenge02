import { Routes, Route } from 'react-router-dom'
import { CoffeeList } from './pages/CoffeesMainPage/CoffeeList/Index';
import { Checkout } from './pages/CheckoutPage/Index';
import { OrderConfirmed } from './pages/OrderConfirmedPage/Index'
import { DefaultLayout } from './layouts/Default.Layout/Index';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<CoffeeList />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orderconfirmed' element={<OrderConfirmed />} />
      </Route>
    </Routes>

  );
}