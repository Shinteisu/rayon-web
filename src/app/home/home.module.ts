import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HeaderComponent } from '../components/header/header.component';
import { CarrousselComponent } from '../components/carroussel/carroussel.component';
import { SmPreviewComponent } from '../components/sm-preview/sm-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    CarrousselComponent,
    SmPreviewComponent
  ]
})
export class HomePageModule {}
