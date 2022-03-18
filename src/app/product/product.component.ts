import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  goods: {
    name: string,
    img: string,
    price: number
  }[] =
  [
    {
      name: "Chuck Taylor All Star Mono Low-Top",
      img: "assets/img/m5039.jpg",
      price: 9100
    },
    {
      name: "Cozy Utility Chuck Taylor All Star",
      img: "assets/img/172014.jpg",
      price: 8700
    },
    {
      name: "Converse X Drkshdw Drkstar Low Top",
      img: "assets/img/172347.jpg",
      price: 21100
    },
  ]
}
