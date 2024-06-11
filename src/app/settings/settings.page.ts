import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})  
export class

// export class SettingsPage {
//   user!: User; // Utilisation de l'opérateur '!' pour indiquer que la propriété 'user' sera initialisée plus tard

//   constructor(private authService: AuthService) {}

//   async ionViewWillEnter() {
//     try {
//       this.user = await this.authService.getUserData();
//     } catch (error) {
//       console.error('Error getting user data:', error);
//     }
//   }

//   async updateProfile() {
//     try {
//       const { fullName, address } = this.user;
//       await this.authService.updateUserData(fullName, address);
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   }

//   async logout() {
//     try {
//       await this.authService.logout();
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   }
// }
