import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements OnInit {
  @Input() clearLocalstorage:any
  @Input() saveLocalstorage:any
  @Input() activeMap:any
  @Input() players:any
  @Input() toastMsg: string
  @Input() openToast: any
  @Input() closeToast: any
  errorMsgStations:string
  errorMsgRoutes:string
  routePoints:any = [
    { length: 1, points: 1 },
    { length: 2, points: 2 },
    { length: 3, points: 4 },
    { length: 4, points: 7 },
    { length: 6, points: 15 },
    { length: 8, points: 21 }
  ]
  pointsPerStation:number = 4
  colors:any = [
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

  colorSelect(p:any, e:any) {
    p.colorId = e.target.value
  }

  extraPoints(player:any, e:any) { // if players need to add extra points for expansions, special roules etc.
    player.totalPoints -= player.extraPoints
    player.extraPoints = parseInt(e.target.parentNode.firstChild.value)
    player.totalPoints += parseInt(e.target.parentNode.firstChild.value)
  }

  displayAmountOfRoute (rl:any, pl:any): number {
    let count = 0;
    if (pl.routes.includes(rl)) {
      for(let i = 0; i < pl.routes.length; ++i){
        if (pl.routes[i] == rl) {
          count++;
        }
      }
    }
    return count
  }

  filter (ulid:string, e:any) {
    // Declare variables
    var filter:string, ul:any, li:any, a:any, i:number, txtValue:string
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

  changeTicket(playr:any, ticket:any) {
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

  failCheckbox (tick:any, e:any) {
    e.target.checked = tick.completed
    tick.completed ? tick.completed = false : tick.completed = true
    tick.completed ? this.changePoints(tick.points * 2) : this.changePoints('-' + (tick.points * 2))
  }

  expressBonusCheck (playr:any, e:any) {
    playr.longestPath ? playr.longestPath = false : playr.longestPath = true
    e.target.checked = playr.longestPath
    playr.longestPath ? this.changePoints(10) : this.changePoints(-10)
  }

  tabClick (playerid:number): void {
    this.players.map((playr:any, i:number) => {
      playr.show = false
    })
    this.players[playerid].show = true
  }

  routeClick (add:string, route:any, user:number): void {
    let x = add + route.points
    if (add === '-') {
      if (this.players[user].routes.includes(route.length)) {
        this.players[user].routes.splice(this.players[user].routes.indexOf(route.length), 1)
        this.changePoints(x)
      } else {
        this.errorMsgRoutes = 'There are no more ' + route.length + 's'
        setTimeout(() => this.errorMsgRoutes = '', 2500)
      }
    }
    if (add === '+') {
      this.players[user].routes.push(route.length)
      this.changePoints(x)
    }
    
  }

  changePoints (val:any): void {
    let x
    this.players.map((playr, i) => {
      if (playr.show) {
        x = playr.id
      }
    })
    this.players[x].totalPoints += parseInt(val)
  }

  onKey (e:any, playr:any): void {
    this.players[playr.id].name = e.target.value
  }

  addPlayer (): void {
    this.players.sort((a, b) => { // first sort players by id so that we can give correct id
      return a.id - b.id;
    });
    let x:number = this.players.length
    this.players.map((p, i) => { // check if there's a missing id in current players then assign that id to new player
      p.show = false
      if (i !== p.id) {
        x = i
      }
    })
    if (this.players.length < 7) {
      const newPlayer = {
        id: x,
        name: 'Player ' + (x + 1),
        show: false,
        totalPoints: 0,
        routes: [],
        playerTickets: [],
        longestPath: false,
        colorId: null,
        stations: 0,
        extraPoints: 0
      }
      this.players.push(newPlayer)
      
      this.players[this.players.length - 1].show = true
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  deletePlayer (player:any): void {
    this.players.splice(player.id, 1)
    this.players[this.players.length - 1].show = true
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  changeStations (add:any, player:any): void {
    if (add) {
      if (player.stations !== 3) {
        player.stations++
        this.changePoints(this.pointsPerStation)
      } else {
        this.errorMsgStations = 'Max 3 stations'
        setTimeout(() => this.errorMsgStations = '', 2500)
      }
    } else {
      if (player.stations !== 0) {
        player.stations--
        this.changePoints(-this.pointsPerStation)
      } else {
        this.errorMsgStations = 'Minimum 0 stations'
        setTimeout(() => this.errorMsgStations = '', 2500)
      }
    }
  }

  ngOnInit(): void {
  }

}
