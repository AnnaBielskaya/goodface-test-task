export const bundleDiscounts = [
  { range: "10-24", price: 3.0, min: 10 },
  { range: "25-49", price: 2.8, min: 25 },
  { range: "50-99", price: 2.5, min: 50 },
  { range: "100+", price: 2.25, min: 100 },
];

export const getPricePerIP = (quantity: number): number => {
  for (let i = bundleDiscounts.length - 1; i >= 0; i--) {
    if (quantity >= bundleDiscounts[i].min) {
      return bundleDiscounts[i].price;
    }
  }
  return bundleDiscounts[0]?.price || 0;
};
