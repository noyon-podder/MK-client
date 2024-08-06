export const formatPrice = (price: number | undefined | null) => {
  if (price === undefined || price === null || isNaN(price)) {
    return "0";
  }
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
