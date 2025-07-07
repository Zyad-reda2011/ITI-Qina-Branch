export default class Product {
  constructor(nm, price) {
    if(this.constructor==Product){
        throw "this clas is abstract class"
    }
    this.name = nm;
    this.price = price;
  }

  getDetails() {
    console.log(this.name, this.price);
  }
}

