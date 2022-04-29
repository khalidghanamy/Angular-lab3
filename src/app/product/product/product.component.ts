import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myProduct = new Product()
  form_input:string= 'save';
  index=0;
  error="please fill inputs"
  isError=false
  searchData=''
  hideImages=false
  buttonText='show images'
  key=''

  myProducts:Product[]=[

    new Product('https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg',1,'dep1','egypt-11','2020/5/10',55,2.5),
    new Product('https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg',2,'eep1','egypt-11-50','2020/5/10',55,3),
    new Product('https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg',3,'eep1','egypt','2020/5/10',55,3.5),
    new Product('https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg',4,'aep1','egypt','2020/5/10',55,2.5),
    new Product('https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg',5,'aop1','egypt','2020/5/10',55,4),
  ]
  
  constructor() { }

  showImage(){
    
    if (this.hideImages==false ) {
      
      this.hideImages=true
      this.buttonText='hide images'
    }
    else if(this.hideImages==true){
      this.hideImages=false
      this.buttonText='show images'

    }
  

  }

  ngOnInit(): void {
  }
  
  isEdite=false;

  addNewProduct(){
    if(this.myProduct.id==-1||
      this.myProduct.product_name==''||
      this.myProduct.code==''||
      this.myProduct.availableDate==null||
      this.myProduct.price==0
       ){
        this.isError=true
        setTimeout(() => {
          this.isError=false
        }, 1000);
        return;
      }
      this.myProduct.id= this.myProducts.length+1
      this.myProducts.push(this.myProduct)
      this.myProduct=new Product()
      this.form_input='save'
      this.isError=false


  }
  deleteProduct(id:number){
    // this.isError=false

    
  let  Product_delete = this.myProducts.findIndex(item=>item.id==id)
  this.myProducts.splice(Product_delete,1)
  console.log(Product_delete );
  
  }
  updateProduct(id:number){
    // this.isError=false

    this.form_input='Edite'
    this.isEdite=true
    let Product_update = this.myProducts.findIndex(item=>item.id==id)
   this.myProduct={...this.myProducts[Product_update]}
   this.index=Product_update;
  
  }

  save_updateProduct(){
    // this.isError=false

    this.myProducts[this.index]=this.myProduct
    this.isEdite=false
  }                  

}

