// src/app/pages/account/account.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user: any;

  constructor(private authService: AuthService, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData() {
    const currentUser = await this.authService.getCurrentUser();
    if (currentUser) {
      const userDoc = await this.firestore.collection('users').doc(currentUser.uid).ref.get();
      this.user = userDoc.data();
    }
  }

  logout() {
    this.authService.logout();
  }
}
