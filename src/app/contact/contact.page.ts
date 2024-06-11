import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  // Liste des contacts avec les sons d'appel préenregistrés
  contacts = [
    { label: 'Contact 1', soundPath: 'assets/sounds/contact1.mp3' },
    { label: 'Contact 2', soundPath: 'assets/sounds/contact2.mp3' },
    // Ajoutez d'autres contacts ici
  ];

  filteredContacts: any[] = [];


  constructor() { }

  ngOnInit() {
    this.filteredContacts = [...this.contacts];
  }

  // Fonction pour jouer le son d'appel préenregistré
  playSound(soundPath: string) {
    let audio = new Audio(soundPath);
    audio.play();
  }

  // Fonction pour filtrer la liste des contacts
  filterContacts(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact => contact.label.toLowerCase().includes(searchTerm));
  }
}
