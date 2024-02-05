import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() clearLocalstorage
  @Input() saveLocalstorage
  @Input() activeMap
  @Input() players
  @Input() openToast
  @Input() closeToast
  @Input() toastMsg

  constructor() { }

  theme () {
    if (document.getElementsByTagName('body')[0].classList.contains('white')) {
      document.getElementsByTagName('body')[0].classList.remove('white')
    } else {
      document.getElementsByTagName('body')[0].classList.add('white')
    }
  }

  ngOnInit(): void {
  }

}
