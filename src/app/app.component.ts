import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  
  maps:any = [
    {
      name: 'Europe',
      id: 0,
      tickets: [
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
    },
    {
      name: 'North America',
      id: 1,
      tickets: [
        { from: 'Boston', to: 'Miami', points: 12, selected: false, completed: true},
        { from: 'Calgary', to: 'Phoenix', points: 13, selected: false, completed: true},
        { from: 'Calgary', to: 'Salt Lake City', points: 7, selected: false, completed: true},
        { from: 'Chicago', to: 'New Orleans', points: 7, selected: false, completed: true},
        { from: 'Chicago', to: 'Santa Fe', points: 9, selected: false, completed: true},
        { from: 'Dallas', to: 'New York', points: 11, selected: false, completed: true},
        { from: 'Denver', to: 'El Paso', points: 4, selected: false, completed: true},
        { from: 'Denver', to: 'Pittsburgh', points: 11, selected: false, completed: true},
        { from: 'Duluth', to: 'El Paso', points: 10, selected: false, completed: true},
        { from: 'Duluth', to: 'Houston', points: 8, selected: false, completed: true},
        { from: 'Helena', to: 'Los Angeles', points: 8, selected: false, completed: true},
        { from: 'Kansas City', to: 'Houston', points: 5, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Chicago', points: 16, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Miami', points: 20, selected: false, completed: true},
        { from: 'Los Angeles', to: 'New York', points: 21, selected: false, completed: true},
        { from: 'Montreal', to: 'Atlanta', points: 9, selected: false, completed: true},
        { from: 'Montreal', to: 'New Orleans', points: 13, selected: false, completed: true},
        { from: 'New York', to: 'Atlanta', points: 6, selected: false, completed: true},
        { from: 'Portland', to: 'Nashville', points: 17, selected: false, completed: true},
        { from: 'Portland', to: 'Phoenix', points: 11, selected: false, completed: true},
        { from: 'San Francisco', to: 'Atlanta', points: 17, selected: false, completed: true},
        { from: 'Sault St. Marie', to: 'Nashville', points: 8, selected: false, completed: true},
        { from: 'Sault St. Marie', to: 'Oklahoma City', points: 9, selected: false, completed: true},
        { from: 'Seattle', to: 'Los Angeles', points: 9, selected: false, completed: true},
        { from: 'Seattle', to: 'New York', points: 22, selected: false, completed: true},
        { from: 'Toronto', to: 'Miami', points: 10, selected: false, completed: true},
        { from: 'Vancouver', to: 'Montreal', points: 20, selected: false, completed: true},
        { from: 'Vancouver', to: 'Santa Fe', points: 13, selected: false, completed: true},
        { from: 'Winnipeg', to: 'Houston', points: 12, selected: false, completed: true},
        { from: 'Winnipeg', to: 'Little Rock', points: 11 , selected: false, completed: true},
      ]
    },
    {
      name: '1910 Big Cities',
      id: 2,
      tickets: [
        { from: 'Boston', to: 'Miami', points: 12, selected: false, completed: true},
        { from: 'Chicago', to: 'Atlanta', points: 5, selected: false, completed: true},
        { from: 'Chicago', to: 'Boston', points: 7, selected: false, completed: true},
        { from: 'Chicago', to: 'New Orleans', points: 7, selected: false, completed: true},
        { from: 'Chicago', to: 'New York', points: 5, selected: false, completed: true},
        { from: 'Chicago', to: 'Santa Fe', points: 9, selected: false, completed: true},
        { from: 'Dallas', to: 'New York', points: 11, selected: false, completed: true},
        { from: 'Duluth', to: 'Dallas', points: 7, selected: false, completed: true},
        { from: 'Duluth', to: 'Houston', points: 8, selected: false, completed: true},
        { from: 'Helena', to: 'Los Angeles', points: 8, selected: false, completed: true},
        { from: 'Houston', to: 'Washington', points: 10, selected: false, completed: true},
        { from: 'Kansas City', to: 'Houston', points: 5, selected: false, completed: true},
        { from: 'Las Vegas', to: 'Miami', points: 21, selected: false, completed: true},
        { from: 'Las Vegas', to: 'New York', points: 19, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Atlanta', points: 15, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Calgary', points: 12, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Chicago', points: 16, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Miami', points: 19, selected: false, completed: true},
        { from: 'Los Angeles', to: 'New York', points: 20, selected: false, completed: true},
        { from: 'Los Angeles', to: 'Oklahoma City', points: 9, selected: false, completed: true},
        { from: 'Montreal', to: 'Chicago', points: 7, selected: false, completed: true},
        { from: 'Montreal', to: 'Dallas', points: 13, selected: false, completed: true},
        { from: 'Nashville', to: 'New York', points: 6, selected: false, completed: true},
        { from: 'New York', to: 'Atlanta', points: 6, selected: false, completed: true},
        { from: 'New York', to: 'Miami', points: 10, selected: false, completed: true},
        { from: 'Portland', to: 'Houston', points: 16, selected: false, completed: true},
        { from: 'Saint Louis', to: 'Miami', points: 8, selected: false, completed: true},
        { from: 'Salt Lake City', to: 'Chicago', points: 11, selected: false, completed: true},
        { from: 'Sault St. Marie', to: 'Miami', points: 12, selected: false, completed: true},
        { from: 'Seattle', to: 'Las Vegas', points: 10, selected: false, completed: true},
        { from: 'Seattle', to: 'Los Angeles', points: 9, selected: false, completed: true},
        { from: 'Seattle', to: 'New York', points: 20, selected: false, completed: true},
        { from: 'Seattle', to: 'Oklahoma City', points: 14, selected: false, completed: true},
        { from: 'Toronto', to: 'Miami', points: 10, selected: false, completed: true},
        { from: 'Winnipeg', to: 'Houston', points: 12 , selected: false, completed: true},
      ]
    },
    {
      name: '1910 Mega Game',
      id: 3,
      tickets: [
        {from: "Boston", to: "Miami", points: 12, selected: false, completed: true},
        {from: "Boston", to: "Washington", points: 4, selected: false, completed: true},
        {from: "Calgary", to: "Nashville", points: 14, selected: false, completed: true},
        {from: "Calgary",to: "Phoenix", points: 13, selected: false, completed: true},
        {from: "Calgary",to: "Salt Lake City", points: 7, selected: false, completed: true},
        {from: "Chicago",to: "Atlanta", points: 5, selected: false, completed: true},
        {from: "Chicago",to: "Boston", points: 7, selected: false, completed: true},
        {from: "Chicago",to: "New Orleans", points: 7, selected: false, completed: true},
        {from: "Chicago", to: "New York", points: 5, selected: false, completed: true},
        {from: "Chicago", to: "Santa Fe", points: 9, selected: false, completed: true},
        {from: "Dallas", to: "New York", points: 11, selected: false, completed: true},
        {from: "Denver", to: "El Paso", points: 4, selected: false, completed: true},
        {from: "Denver", to: "Pittsburgh", points: 11, selected: false, completed: true},
        {from: "Denver", to: "Saint Louis", points: 6, selected: false, completed: true},
        {from: "Duluth", to: "Dallas", points: 7, selected: false, completed: true},
        {from: "Duluth", to: "El Paso", points: 10, selected: false, completed: true},
        {from: "Duluth", to: "Houston", points: 8, selected: false, completed: true},
        {from: "Helena", to: "Los Angeles", points: 8, selected: false, completed: true},
        {from: "Houston", to: "Washington", points: 10, selected: false, completed: true},
        {from: "Kansas City", to: "Boston", points: 11, selected: false, completed: true},
        {from: "Kansas City", to: "Houston", points: 5, selected: false, completed: true},
        {from: "Las Vegas", to: "Miami", points: 21, selected: false, completed: true},
        {from: "Las Vegas", to: "New York", points: 19, selected: false, completed: true},
        {from: "Los Angeles", to: "Atlanta", points: 15, selected: false, completed: true},
        {from: "Los Angeles", to: "Calgary", points: 12, selected: false, completed: true},
        {from: "Los Angeles", to: "Chicago", points: 16, selected: false, completed: true},
        {from: "Los Angeles", to: "Miami", points: 19, selected: false, completed: true},
        {from: "Los Angeles", to: "New York", points: 20, selected: false, completed: true},
        {from: "Los Angeles", to: "Oklahoma City", points: 9, selected: false, completed: true},
        {from: "Montreal", to: "Atlanta", points: 9, selected: false, completed: true},
        {from: "Montreal", to: "Chicago", points: 7, selected: false, completed: true},
        {from: "Montreal", to: "Dallas", points: 13, selected: false, completed: true},
        {from: "Montreal", to: "New Orleans", points: 13, selected: false, completed: true},
        {from: "Montreal", to: "Raleigh", points: 7, selected: false, completed: true},
        {from: "Nashville", to: "New York", points: 6, selected: false, completed: true},
        {from: "New York", to: "Atlanta", points: 6, selected: false, completed: true},
        {from: "New York", to: "Miami", points: 10, selected: false, completed: true},
        {from: "Omaha", to: "New Orleans", points: 8, selected: false, completed: true},
        {from: "Phoenix", to: "Boston", points: 19, selected: false, completed: true},
        {from: "Pittsburgh", to: "New Orleans", points: 8, selected: false, completed: true},
        {from: "Portland", to: "Houston", points: 16, selected: false, completed: true},
        {from: "Portland", to: "Nashville", points: 17, selected: false, completed: true},
        {from: "Portland", to: "Phoenix", points: 11, selected: false, completed: true},
        {from: "Portland", to: "Pittsburgh", points: 19, selected: false, completed: true},
        {from: "Saint Louis", to: "Miami", points: 8, selected: false, completed: true},
        {from: "Salt Lake City", to: "Chicago", points: 11, selected: false, completed: true},
        {from: "Salt Lake City", to: "Kansas City", points: 7, selected: false, completed: true},
        {from: "San Francisco", to: "Atlanta", points: 17, selected: false, completed: true},
        {from: "San Francisco", to: "Sault St. Marie", points: 17, selected: false, completed: true},
        {from: "San Francisco", to: "Washington", points: 21, selected: false, completed: true},
        {from: "Sault St. Marie", to: "Miami", points: 12, selected: false, completed: true},
        {from: "Sault St. Marie", to: "Nashville", points: 8, selected: false, completed: true},
        {from: "Sault St. Marie", to: "Oklahoma City", points: 8, selected: false, completed: true},
        {from: "Seattle", to: "Las Vegas", points: 10, selected: false, completed: true},
        {from: "Seattle", to: "Los Angeles", points: 9, selected: false, completed: true},
        {from: "Seattle", to: "New York", points: 20, selected: false, completed: true},
        {from: "Seattle", to: "Oklahoma City", points: 14, selected: false, completed: true},
        {from: "Toronto", to: "Charleston", points: 6, selected: false, completed: true},
        {from: "Toronto", to: "Miami", points: 10, selected: false, completed: true},
        {from: "Vancouver", to: "Denver", points: 11, selected: false, completed: true},
        {from: "Vancouver", to: "Duluth", points: 13, selected: false, completed: true},
        {from: "Vancouver", to: "Montreal", points: 20, selected: false, completed: true},
        {from: "Vancouver", to: "Portland", points: 2, selected: false, completed: true},
        {from: "Vancouver", to: "Santa Fe", points: 13, selected: false, completed: true},
        {from: "Washington", to: "Atlanta", points: 4, selected: false, completed: true},
        {from: "Winnipeg", to: "Houston", points: 12, selected: false, completed: true},
        {from: "Winnipeg", to: "Little Rock", points: 11, selected: false, completed: true},
        {from: "Winnipeg", to: "Omaha", points: 6, selected: false, completed: true},
        {from: "Winnipeg", to: "Santa Fe", points: 10, selected: false, completed: true},
      ]
    }
  ]
  activeMap:any = this.maps[0].tickets
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
      stations: 0,
      extraPoints: 0
    }
  ]
  
  mapChange(e) {
    this.activeMap = this.maps[e.target.value].tickets
  }

  saveLocalstorage () {
    try {
      localStorage.setItem('data', JSON.stringify(this.players))
      localStorage.setItem('tickets', JSON.stringify(this.activeMap))
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
      localStorage.setItem('tickets', JSON.stringify(this.activeMap))
    } else {
      this.activeMap = JSON.parse(localStorage.getItem('tickets'))
    }

    if (parseInt(localStorage.getItem('lastSavedData')) < 1616576029140) {
      this.clearLocalstorage()
    } else {
      if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify(this.players))
        localStorage.setItem('lastSavedData', (new Date().getTime().toString()))
      } else {
        this.players = JSON.parse(localStorage.getItem('data'))
      }
    }
  }
}
