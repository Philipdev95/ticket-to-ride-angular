import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ticketsEurope = [
    { from: 'Amsterdam', to: 'Pamplona', points: 7, selected: false},
    { from: 'Amsterdam', to: 'Wilno', points: 12, selected: false},
    { from: 'Angora', to: 'Kharkov', points: 10, selected: false},
    { from: 'Athina', to: 'Angora', points: 5, selected: false},
    { from: 'Athina', to: 'Wilno', points: 11, selected: false},
    { from: 'Barcelona', to: 'Bruxelles', points: 8, selected: false},
    { from: 'Barcelona', to: 'Munchen', points: 8, selected: false},
    { from: 'Berlin', to: 'Bucuresti', points: 8, selected: false},
    { from: 'Berlin', to: 'Moskva', points: 12, selected: false},
    { from: 'Berlin', to: 'Roma', points: 9, selected: false},
    { from: 'Brest', to: 'Marseille', points: 7, selected: false},
    { from: 'Brest', to: 'Petrograd', points: 20, selected: false},
    { from: 'Brest', to: 'Venezia', points: 8, selected: false},
    { from: 'Bruxelles', to: 'Danzig', points: 9, selected: false},
    { from: 'Budapest', to: 'Sofia', points: 5, selected: false},
    { from: 'Cadiz', to: 'Stockholm', points: 21, selected: false},
    { from: 'Edinburgh', to: 'Athina', points: 21, selected: false},
    { from: 'Edinburgh', to: 'Paris', points: 7, selected: false},
    { from: 'Essen', to: 'Kyiv', points: 10, selected: false},
    { from: 'Frankfurt', to: 'Kobenhavn', points: 5, selected: false},
    { from: 'Frankfurt', to: 'Smolensk', points: 13, selected: false},
    { from: 'Kobenhavn', to: 'Erzurum', points: 21, selected: false},
    { from: 'Kyiv', to: 'Petrograd', points: 6, selected: false},
    { from: 'Kyiv', to: 'Sochi', points: 8, selected: false},
    { from: 'Lisboa', to: 'Danzig', points: 20, selected: false},
    { from: 'London', to: 'Berlin', points: 7, selected: false},
    { from: 'London', to: 'Wien', points: 10, selected: false},
    { from: 'Madrid', to: 'Dieppe', points: 8, selected: false},
    { from: 'Madrid', to: 'Zurich', points: 8, selected: false},
    { from: 'Marseille', to: 'Essen', points: 8, selected: false},
    { from: 'Palermo', to: 'Constantinople', points: 8, selected: false},
    { from: 'Palermo', to: 'Moskva', points: 20, selected: false},
    { from: 'Paris', to: 'Wien', points: 8, selected: false},
    { from: 'Paris', to: 'Zagrab', points: 7, selected: false},
    { from: 'Riga', to: 'Bucuresti', points: 10, selected: false},
    { from: 'Roma', to: 'Smyrna', points: 8, selected: false},
    { from: 'Rostov', to: 'Erzurum', points: 5, selected: false},
    { from: 'Sarajevo', to: 'Sevestopol', points: 8, selected: false},
    { from: 'Smolensk', to: 'Rostov', points: 8, selected: false},
    { from: 'Sofia', to: 'Smyrna', points: 5, selected: false},
    { from: 'Stockholm', to: 'Wien', points: 11, selected: false},
    { from: 'Venezia', to: 'Constantinople', points: 10, selected: false},
    { from: 'Warszawa', to: 'Smolensk', points: 6, selected: false},
    { from: 'Zagrab', to: 'Brindisi', points: 6, selected: false},
    { from: 'Zurich', to: 'Brindisi', points: 6, selected: false},
    { from: 'Zurich', to: 'Budapest', points: 6, selected: false}
  ]

  saveLocalstorage (locStoStr, jsobj) {
    localStorage.setItem(locStoStr, JSON.stringify(jsobj))
  }

  clearLocalstorage () {
    localStorage.clear();
  }
  title = 'Ticket to ride calculator';

  ngOnInit(): void {
    // check localstorage
    if (!localStorage.getItem('tickets')) {
      localStorage.setItem('tickets', JSON.stringify(this.ticketsEurope))
    } else {
      this.ticketsEurope = JSON.parse(localStorage.getItem('tickets'))
    }
  }
}
