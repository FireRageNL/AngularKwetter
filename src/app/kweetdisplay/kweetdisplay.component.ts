import { Component, OnInit } from '@angular/core';
import {Kweet} from '../model/kweet';
import {KweetService} from '../services/kweet.service';

@Component({
  selector: 'app-kweetdisplay',
  templateUrl: './kweetdisplay.component.html',
  styleUrls: ['./kweetdisplay.component.css']
})
export class KweetdisplayComponent implements OnInit {

  kweets: Kweet[];

  constructor(private kweetService: KweetService) {}

  ngOnInit() {
    this.kweetService.getKweetsFromUser(localStorage.getItem('username')).subscribe(kweets => {this.kweets = kweets; });
  }

}
