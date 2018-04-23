import { Component, OnInit } from '@angular/core';
import {Kweet, KweetModel} from '../model/kweet';
import {KweetService} from '../services/kweet.service';

@Component({
  selector: 'app-kweetdisplay',
  templateUrl: './kweetdisplay.component.html',
  styleUrls: ['./kweetdisplay.component.css']
})
export class KweetdisplayComponent implements OnInit {

  kweets: Kweet[];
  text = '';
  private kweet: KweetModel;
  timeout: any;

  constructor(private kweetService: KweetService) {}

  ngOnInit() {
    this.kweetService.getKweetsFromUser(localStorage.getItem('username')).subscribe(kweets => {this.kweets = kweets; });
  }

  sendKweet() {
    this.kweet = new KweetModel(localStorage.getItem('username'), this.text);
    this.kweetService.postKweet(this.kweet);
    this.refresh();
    this.text = '';
  }

  refresh() {
    this.timeout = setTimeout(() => {
      this.kweetService.getKweetsFromUser(localStorage.getItem('username')).subscribe(kweets => {this.kweets = kweets; }); }, 1000);
  }

}
