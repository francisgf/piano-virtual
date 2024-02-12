import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasicModule } from './modules/pian-clasic/clasic/clasic.module';
import { MenuModule } from './modules/menu/menu.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClasicModule,
    MenuModule

  ]
})
export class AppModule { }
