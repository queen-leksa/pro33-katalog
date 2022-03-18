import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent {
  goods: {
    name:string,
    price:number,
    img:string
  }[] = []

  categories:string[] = ["shoes", "clothes"]
  catImg:{[n:string]:string} = {
    "shoes": "fa-solid fa-socks",
    "clothes": "fa-solid fa-shirt"
  }


  getGoods(self = this) {
    self.goods = [];
    let path:string = "https://fakerapi.it/api/v1/products?_price_max=50000.00&_categories_type=string&_quantity=6";

    fetch(path)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        result.data.forEach(function(el:any):void {
          self.goods.push({
            name: el.name,
            price: el.price,
            img: el.images[0].url
          })
        });
      })
  }
}
