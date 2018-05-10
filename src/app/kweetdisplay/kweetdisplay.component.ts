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

  constructor(private kweetService: KweetService, private followService: FollowService) {}

  ngOnInit() {
    if (!this.profileView) {
      this.followService.getAllFollowings().subscribe(followers => this.followers = followers);
    }
  this.refresh();
  }

  sendKweet() {
    this.kweet = new KweetModel(localStorage.getItem('username'), this.text);
    this.kweetService.postKweet(this.kweet);
    this.refresh();
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

}
