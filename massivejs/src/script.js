class Product {
    constructor(nameOfProduct, amount, status, price, summ) {
      this.nameOfProduct = nameOfProduct;
      this.amount = amount;
      this.status = status;
      this.price = price;
      this.summ = summ;
    }
  
    static sortProduct(a) {
      if (a.status == false) return -1; 
      if (a.status == true) return 1; 
    }
  
    static showProduct(a) {
      return a.nameOfProduct;
    }
  }
   
  let shopList = [
    new Product('apple', 2, true, 5, 50),
    new Product('cheese', 4, true, 10, 40),
    new Product('water', 100, false, 1, 0),
    new Product('wine', 10, true, 40, 400),
    new Product("pineaple", 3, false, 30, 0)
  ];
  
shopList.sort(Product.sortProduct);
console.log(shopList.map(Product.showProduct));
let newProduct = new Product('chocolate', 2, false, 5, 10);

shopList.push(newProduct);
shopList.sort(Product.sortProduct);
console.log(shopList.map(Product.showProduct));










