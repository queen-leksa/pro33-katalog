import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { AjaxComponent } from './ajax/ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: MainComponent},
      {path: "goods", component: ProductComponent},
      {path: "ajax", component: AjaxComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
