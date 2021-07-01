import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliDetalisPageRoutingModule } from './peli-detalis-routing.module';

import { PeliDetalisPage } from './peli-detalis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliDetalisPageRoutingModule
  ],
  declarations: [PeliDetalisPage]
})
export class PeliDetalisPageModule {}
