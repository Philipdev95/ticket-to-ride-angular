import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() clearLocalstorage
  @Input() saveLocalstorage
  @Input() ticketsEurope
  @Input() players
  @Input() openToast
  @Input() closeToast
  @Input() toastMsg

  constructor() { }

  ngOnInit(): void {
  }

}
