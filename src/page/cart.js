class ExtensionArray extends Array {
  Sum(key) {
    return this.list.reduce((a, b) => a + (b[`${key}`] || 0), 0);
  }
}

class Cart {
  list = [];

  add(item) {
    this.list.push(item);

    this.onNotify();
  }

  remove(index) {
    this.list.splice(index, 0);

    this.onNotify();
  }

  getTotalPrice() {
    return this.list.Sum("price");
  }
}
var CartInstance = new Cart();

export default CartInstance;
