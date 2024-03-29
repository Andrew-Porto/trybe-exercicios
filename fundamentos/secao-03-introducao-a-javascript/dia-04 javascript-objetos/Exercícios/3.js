let order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(key) {
  // Adicione abaixo as informações necessárias.
  return "Olá, " +
    order.order.delivery.deliveryPerson +
    ", entrega para:" +
    order.name +
    ", Telefone:" +
    order.phoneNumber +
    ", R." +
    order.address.street +
    ", Nº:" +
    order.address.number +
    ", AP:" +
    order.address.apartment;
}

customerInfo(order);

console.log(customerInfo(order));

function orderModifier(newKey) {
  // Adicione abaixo as informações necessárias.
  let client = order.name = 'Andrew Porto';
  let newTotal = order.payment.total = '50';
  let pizza = Object.keys(order.order.pizza);

  return 'Olá, ' + client + ', o valor total de seu pedido de ' + pizza[0] + ', ' + pizza[1] + ' e ' + order.order.drinks.coke.type +' é R$ '+ newTotal +',00.';
}

orderModifier(order);

console.log(orderModifier(order));