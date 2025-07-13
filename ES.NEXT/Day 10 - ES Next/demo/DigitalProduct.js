 import p from "./Product.js"
 
 export class DigitalProduct extends p 
 {
  constructor(nm, p, sizeFile) 
  {
    super(nm, p);
    this.sizeFile = sizeFile;
  }
  download()
  {
    console.log(this.name,this.sizeFile);
    
  }

   getDetails() {
    console.log("test");
    
  }
}


export function test(){
    console.log("hiiiii");
    
}