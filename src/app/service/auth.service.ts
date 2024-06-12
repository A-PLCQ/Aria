import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  async register(email: string, password: string, fullName: string, address: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user?.uid;
      await this.firestore.collection('users').doc(uid).set({
        uid,
        email,
        fullName,
        address
      });
      this.router.navigate(['/tabs']); // Redirige vers la page d'accueil après une inscription réussie
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/tabs']); // Redirige vers la page d'accueil après une connexion réussie
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/auth']); // Redirige vers la page de login après la déconnexion
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}
