let order = {amount: 21, product: 'малако', unitPrice: 2};
function getPrice(order) {
  return order.unitPrice * order.amount;
}
let message = `хочаце набыць ${order.amount} ${order.product} за $${getPrice(order)}?`;
console.log(message);