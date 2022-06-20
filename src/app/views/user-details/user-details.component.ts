import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  gitUsername: any;
  basicUserDetails: any = {};
  userRepositories: any[] = [];
  usersFollowers: any[] = [];

  subscriber: any;
  constructor(
    private _router: Router,
    private _http: HttpClient,
    private route: ActivatedRoute
  ) {
    let activeRoute:any = route;
    this.subscriber = activeRoute.paramMap.subscribe((params:any) => {
      this.gitUsername = params.get('username');
    });
  }

  ngOnInit(): void {
    console.log('git username : ', this.gitUsername);
    this.getGitUserDetails()
    this.getUserRepositories()
    this.getUserFollowers()
  }
  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  async getGitUserDetails() {
    this._http.get<any>(`users/${this.gitUsername}`).subscribe((resp: any) => {
      this.basicUserDetails = resp;
    }, (err: any) => {
      this.handleError(err)
      console.log(err);
    })
  }

  async getUserRepositories() {
    this._http.get<any>(`users/${this.gitUsername}/repos`).subscribe((resp: any) => {
      this.userRepositories = resp;
    }, (err: any) => {
      console.log(err);
    })
  }
  
  async getUserFollowers() {
    this._http.get<any>(`users/${this.gitUsername}/followers`).subscribe((resp: any) => {
      console.log('FOLLOWER >', resp);
      this.usersFollowers = resp;
    }, (err: any) => {
      console.log(err);
    })
  }

  handleError(err: any) {
    if(err && err.hasOwnProperty('error'))
        this._router.navigate([''])
  }

}
