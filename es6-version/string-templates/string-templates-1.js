let customer = {name: 'Мірон'};
let order = {amount: 21, product: 'малако', unitPrice: 12000}
let message = `Вітаю ${customer.name}, хочаш набыць ${order.amount} ${order.product} за \$${order.amount * order.unitPrice}?`;
console.log(message);