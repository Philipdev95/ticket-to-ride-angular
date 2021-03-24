import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ticketsEurope = [
    { from: 'Amsterdam', to: 'Pamplona', points: 7, selected: false, completed: true},
    { from: 'Amsterdam', to: 'Wilno', points: 12, selected: false, completed: true},
    { from: 'Angora', to: 'Kharkov', points: 10, selected: false, completed: true},
    { from: 'Athina', to: 'Angora', points: 5, selected: false, completed: true},
    { from: 'Athina', to: 'Wilno', points: 11, selected: false, completed: true},
    { from: 'Barcelona', to: 'Bruxelles', points: 8, selected: false, completed: true},
    { from: 'Barcelona', to: 'Munchen', points: 8, selected: false, completed: true},
    { from: 'Berlin', to: 'Bucuresti', points: 8, selected: false, completed: true},
    { from: 'Berlin', to: 'Moskva', points: 12, selected: false, completed: true},
    { from: 'Berlin', to: 'Roma', points: 9, selected: false, completed: true},
    { from: 'Brest', to: 'Marseille', points: 7, selected: false, completed: true},
    { from: 'Brest', to: 'Petrograd', points: 20, selected: false, completed: true},
    { from: 'Brest', to: 'Venezia', points: 8, selected: false, completed: true},
    { from: 'Bruxelles', to: 'Danzig', points: 9, selected: false, completed: true},
    { from: 'Budapest', to: 'Sofia', points: 5, selected: false, completed: true},
    { from: 'Cadiz', to: 'Stockholm', points: 21, selected: false, completed: true},
    { from: 'Edinburgh', to: 'Athina', points: 21, selected: false, completed: true},
    { from: 'Edinburgh', to: 'Paris', points: 7, selected: false, completed: true},
    { from: 'Essen', to: 'Kyiv', points: 10, selected: false, completed: true},
    { from: 'Frankfurt', to: 'Kobenhavn', points: 5, selected: false, completed: true},
    { from: 'Frankfurt', to: 'Smolensk', points: 13, selected: false, completed: true},
    { from: 'Kobenhavn', to: 'Erzurum', points: 21, selected: false, completed: true},
    { from: 'Kyiv', to: 'Petrograd', points: 6, selected: false, completed: true},
    { from: 'Kyiv', to: 'Sochi', points: 8, selected: false, completed: true},
    { from: 'Lisboa', to: 'Danzig', points: 20, selected: false, completed: true},
    { from: 'London', to: 'Berlin', points: 7, selected: false, completed: true},
    { from: 'London', to: 'Wien', points: 10, selected: false, completed: true},
    { from: 'Madrid', to: 'Dieppe', points: 8, selected: false, completed: true},
    { from: 'Madrid', to: 'Zurich', points: 8, selected: false, completed: true},
    { from: 'Marseille', to: 'Essen', points: 8, selected: false, completed: true},
    { from: 'Palermo', to: 'Constantinople', points: 8, selected: false, completed: true},
    { from: 'Palermo', to: 'Moskva', points: 20, selected: false, completed: true},
    { from: 'Paris', to: 'Wien', points: 8, selected: false, completed: true},
    { from: 'Paris', to: 'Zagrab', points: 7, selected: false, completed: true},
    { from: 'Riga', to: 'Bucuresti', points: 10, selected: false, completed: true},
    { from: 'Roma', to: 'Smyrna', points: 8, selected: false, completed: true},
    { from: 'Rostov', to: 'Erzurum', points: 5, selected: false, completed: true},
    { from: 'Sarajevo', to: 'Sevestopol', points: 8, selected: false, completed: true},
    { from: 'Smolensk', to: 'Rostov', points: 8, selected: false, completed: true},
    { from: 'Sofia', to: 'Smyrna', points: 5, selected: false, completed: true},
    { from: 'Stockholm', to: 'Wien', points: 11, selected: false, completed: true},
    { from: 'Venezia', to: 'Constantinople', points: 10, selected: false, completed: true},
    { from: 'Warszawa', to: 'Smolensk', points: 6, selected: false, completed: true},
    { from: 'Zagrab', to: 'Brindisi', points: 6, selected: false, completed: true},
    { from: 'Zurich', to: 'Brindisi', points: 6, selected: false, completed: true},
    { from: 'Zurich', to: 'Budapest', points: 6, selected: false, completed: true}
  ]
  toastMsg:string = 'It´s done.'
  players = [
    {
      id: 0,
      name: 'Player 1',
      show: true,
      totalPoints: 0,
      routes: [],
      playerTickets: [],
      longestPath: false,
      colorId: null,
      stations: 0
    }
  ]
  
  saveLocalstorage () {
    try {
      localStorage.setItem('data', JSON.stringify(this.players))
      localStorage.setItem('tickets', JSON.stringify(this.ticketsEurope))
      localStorage.setItem('lastSavedData', (new Date().getTime().toString()))
      this.openToast('Data saved. You´re welcome!')
    } catch (err) {
      this.openToast('Issue with saving data, data has been reset. Sorry not sorry.')
      this.clearLocalstorage()
    }
  }

  clearLocalstorage () {
    this.openToast('Clearing all data and refreshing')
    localStorage.clear()
    setTimeout(() => {
      window.location.reload(true)
    }, 1000)
  }

  closeToast() {
    try {
      document.querySelector('#toast').classList.remove('show')
    } catch (er) {
      console.log(er)
    } 
  }

  openToast(msg:string) {
    this.toastMsg = msg
    document.querySelector('#toast').classList.add('show')
    setTimeout(() => this.closeToast(), 4000)
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
