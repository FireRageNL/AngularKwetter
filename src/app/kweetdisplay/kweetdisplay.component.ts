import {Component, Input, OnInit} from '@angular/core';
import {Kweet, KweetModel} from '../model/kweet';
import {KweetService} from '../services/kweet.service';
import {FollowService} from '../services/follow.service';
import {Account} from '../model/account';

@Component({
  selector: 'app-kweetdisplay',
  templateUrl: './kweetdisplay.component.html',
  styleUrls: ['./kweetdisplay.component.css']
})
export class KweetdisplayComponent implements OnInit {

  @Input() profileView = true;
  @Input() followerView = false;
  kweets: Kweet[];
  followers: Account[];
  text = '';
  private kweet: KweetModel;
  timeout: any;
  username: string;
  websocket: WebSocket;

  constructor(private kweetService: KweetService, private followService: FollowService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.websocket = new WebSocket('ws://localhost:8080/Kwetter/socket/' + this.username);
    this.SetWebsocket();
    if (!this.profileView) {
      this.followService.getAllFollowings().subscribe(followers => this.followers = followers);
    }
  this.refresh();
  }

  sendKweet() {
    this.kweet = new KweetModel(localStorage.getItem('username'), this.text);
    this.kweetService.postKweet(this.kweet);
    this.websocket.send(this.kweet.kweetContents);
    this.text = '';
  }

  findUser(username: string) {
    for (const acc of this.followers) {
      if (acc.username === username) {
        return true;
      }
    }
    return false;
  }

  followUser(username: string) {
    this.followService.followPerson(username);
    this.refresh();
  }

  unfollowUser(username: string) {
    this.followService.unfollowPerson(username);
    this.refresh();
  }

  refresh() {
    this.timeout = setTimeout(() => {
      if (this.profileView) {
        this.kweetService.getKweetsFromUser(localStorage.getItem('username')).subscribe(kweets => {this.kweets = kweets; });
      } else if (this.followerView) {
        this.followService.getAllFollowings().subscribe(followers => this.followers = followers);
        this.kweetService.getKweetsFromFollowers(localStorage.getItem('username')).subscribe(kweets => {this.kweets = kweets; });
      } else {
        this.followService.getAllFollowings().subscribe(followers => this.followers = followers);
        this.kweetService.getAllKweets().subscribe(kweets => {this.kweets = kweets; });
      }}, 100);
  }

  likeKweet(id: number) {
    alert(id + 'has been clicked!');
  }

  private SetWebsocket() {
    this.websocket.onopen = (ev) => {
      console.log('Ze socket has been opened');
    };
    this.websocket.onerror = (ev) => {
      alert(ev);
    }

    this.websocket.onmessage = (ev) => {
      console.log('Message posted: ' + ev.data);
      this.refresh();
    };
  }
}
