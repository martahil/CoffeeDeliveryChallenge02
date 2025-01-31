export function handleQuantityChange(action: 'increase' | 'decrease', quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>) {
  if (action === 'increase') {
    setQuantity(prev => prev + 1);
  } else if (action === 'decrease') {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  }
}