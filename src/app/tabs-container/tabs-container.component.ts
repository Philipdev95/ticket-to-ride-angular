import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements OnInit {
  @Input() clearLocalstorage
  @Input() saveLocalstorage
  @Input() ticketsEurope
  routePoints = [
    { length: 1, points: 1 },
    { length: 2, points: 2 },
    { length: 3, points: 4 },
    { length: 4, points: 7 },
    // { length: 5, points: 10 },
    { length: 6, points: 15 },
    { length: 8, points: 21 }
  ]
  players = [
    {
      id: 0,
      name: 'Player 1',
      show: true,
      totalPoints: 0,
      routes: [],
      completedTickets: []
    },
    {
      id: 1,
      name: 'Player 2',
      show: false,
      totalPoints: 0,
      routes: [],
      completedTickets: []
    },
    {
      id: 2,
      name: 'Player 3',
      show: false,
      totalPoints: 0,
      routes: [],
      completedTickets: []
    }
  ]
  constructor() { }

  filter (ulid:string, e) {
    // Declare variables
    var filter:string, ul, li, a, i:number, txtValue:string
    filter = e.target.value.toUpperCase()
    ul = document.getElementById(ulid)
    li = ul.getElementsByClassName('list-group-item')
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('span')[0]
      txtValue = a.textContent || a.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = 'flex'
      } else {
        li[i].style.display = 'none'
      }
    }
  }

  changeTicket(playr, ticket) {
    if (ticket.selected) { // remove
      ticket.selected = false
      playr.completedTickets.splice(playr.completedTickets.indexOf(ticket), 1)
      playr.totalPoints += parseInt('-' + ticket.points)
    } else { // add
      ticket.selected = true
      playr.completedTickets.push(ticket)
      playr.totalPoints += parseInt(ticket.points)
    }
  }

  tabClick(playerid): void {
    this.players.map((playr, i) => {
      playr.show = false
    })
    this.players[playerid].show = true
  }

  routeClick(add:string, route, user:number): void {
    let x = add + route.points
    if (add === '-' && this.players[user].routes.includes(route.length)) {
      this.players[user].routes.splice(this.players[user].routes.indexOf(route.length), 1)
      this.changePoints(x)
    }
    if (add === '+') {
      this.players[user].routes.push(route.length)
      this.changePoints(x)
    }
    
  }

  changePoints(val): void {
    let x
    this.players.map((playr, i) => {
      if (playr.show) {
        x = playr.id
      }
    })
    this.players[x].totalPoints += parseInt(val)
  }

  onKey(e, playr): void {
    this.players[playr.id].name = e.target.value
  }

  ngOnInit(): void {
    // check localstorage
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(this.players))
    } else {
      this.players = JSON.parse(localStorage.getItem('data'))
    }
  }

}
