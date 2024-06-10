import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

interface CallItem {
  label: string;
  number: string;
}

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage {
  items: CallItem[] = [
    { label: 'SAMU (15)', number: '15' },
    { label: 'Police (17)', number: '17' },
    { label: 'Pompiers (18)', number: '18' },
    { label: 'Numéro d\'urgence européen (112)', number: '112' },
    { label: 'Urgences pour les personnes sourdes et malentendantes (114)', number: '114' },
    { label: 'Enfance maltraitée (119)', number: '119' },
    { label: 'Violences conjugales (3919)', number: '3919' },
    { label: 'Viols Femmes Informations (0800 130 000)', number: '0800 130 000' },
    { label: 'Violences Femmes Info (0800 235 236)', number: '0800 235 236' },
    { label: 'S.O.S Suicide (01 45 39 40 00)', number: '01 45 39 40 00' },
    { label: 'Allô Enfance en Danger (119)', number: '119' },
    { label: 'Drogues Info Service (0800 23 13 13)', number: '0800 23 13 13' },
    { label: 'Sida Info Service (0800 840 800)', number: '0800 840 800' },
    { label: 'Tabac Info Service (3989)', number: '3989' },
    { label: 'SOS Médecins (3624)', number: '3624' },
    { label: 'Secours en Mer (196)', number: '196' },
    { label: 'Accueil des SDF (115)', number: '115' },
    { label: 'Violences Scolaires (3020)', number: '3020' },
    { label: 'Pédophilie (0800 235 236)', number: '0800 235 236' },
    { label: 'Jeunes Violences Écoute (0808 807 700)', number: '0808 807 700' },
  ];

  filteredItems: CallItem[] = [...this.items];

  constructor(private callNumberService: CallNumber) {}

  public callNumber(number: string) {
    this.callNumberService.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  filterList(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => item.label.toLowerCase().includes(searchTerm));
  }
}
