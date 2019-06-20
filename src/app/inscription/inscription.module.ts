import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InscriptionPage } from './inscription.page';
import { HeaderComponent } from '../components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: InscriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InscriptionPage,
    HeaderComponent
  ]
})
export class InscriptionPageModule {}
