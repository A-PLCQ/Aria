// src/app/pages/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page'; // Vérifie le chemin d'importation

@NgModule({
  declarations: [AuthPage], // Vérifie l'importation correcte de AuthPage
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  providers: [], // Ajoute les services si nécessaire
})
export class AuthPageModule {}
