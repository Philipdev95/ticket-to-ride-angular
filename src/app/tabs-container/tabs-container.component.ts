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
      playerTickets: [],
      longestPath: false,
      colorId: null
    }
  ]
  colors = [
    { id: 0, name: 'Yellow', color: 'rgb(253, 220, 90)'},
    { id: 1, name: 'Blue', color: 'rgb(22, 91, 173)'},
    { id: 2, name: 'Black', color: 'rgb(40, 40, 40)'},
    { id: 3, name: 'Red', color: 'rgb(216, 12, 12)'},
    { id: 4, name: 'Green', color: 'rgb(115, 172, 67)'},
    { id: 5, name: 'Orange', color: 'rgb(246, 133, 33)'},
    { id: 6, name: 'White', color: 'rgb(228, 228, 228)'},
    { id: 7, name: 'Pink', color: 'rgb(229, 162, 199)'},
  ]
  constructor() { }

  displayAmountOfRoute (rl, pl) {
    var count = 0;
    if (pl.routes.includes(rl)) {
      for(var i = 0; i < pl.routes.length; ++i){
        if (pl.routes[i] == rl) {
          count++;
        }
      }
    }
    return count
  }

  colorSelect(p, e) {
    p.colorId = e.target.value
    console.log(e.target)
  }

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
      ticket.completed ? console.log(ticket) : this.changePoints(ticket.points * 2)
      ticket.completed = true
      playr.playerTickets.splice(playr.playerTickets.indexOf(ticket), 1)
      playr.totalPoints += parseInt('-' + ticket.points)
    } else { // add
      ticket.selected = true
      playr.playerTickets.push(ticket)
      playr.totalPoints += parseInt(ticket.points)
    }
  }

  failCheckbox (tick, e) {
    e.target.checked = tick.completed
    tick.completed ? tick.completed = false : tick.completed = true
    tick.completed ? this.changePoints(tick.points * 2) : this.changePoints('-' + (tick.points * 2))
  }

  expressBonusCheck (playr, e) {
    playr.longestPath ? playr.longestPath = false : playr.longestPath = true
    e.target.checked = playr.longestPath
    playr.longestPath ? this.changePoints(10) : this.changePoints(-10)
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

  addPlayer () {
    if (this.players.length < 7) {
      const newPlayer = {
        id: this.players.length,
        name: 'Player ' + (this.players.length + 1),
        show: false,
        totalPoints: 0,
        routes: [],
        playerTickets: [],
        longestPath: false,
        colorId: null
      }
      this.players.push(newPlayer)
      this.players.map((p, i) => {p.show = false})
      this.players[this.players.length - 1].show = true
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  deletePlayer (player) {
    this.players.splice(player.id, 1)
    this.players[this.players.length - 1].show = true
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
