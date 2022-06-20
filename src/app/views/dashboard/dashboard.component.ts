import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gitSearchForm: any = FormGroup;
  filteredGitUsers: Observable<any[]>;

  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.gitSearchForm.get('search').valueChanges
      .pipe(startWith(''),
        debounceTime(400)
      ).subscribe(async (val: any) => {
        if (val && val != null) {
          this.filteredGitUsers = await this.getUsersListFromGit(val || '')
        }
      });
  }

  initializeForm() {
    this.gitSearchForm = this._fb.group({
      search: [null, []]
    })
  }

  async getUsersListFromGit(value: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const searchValue = value.toLowerCase();
      /* +per_page=${10} */
      this._http.get<any>(`search/users?q=${searchValue}`).subscribe((resp: any) => {
        // console.log('Response >>', resp);
        resolve(resp.items) // .map(({login}) => login)
      }, (err: any) => {
        console.log('Error >> ', err.error.message);
        reject(err)
      })
    })
  }

  openUserInfo(e: any) {
    console.log('selected > ', e);
    this._router.navigate(['details', e.option.value])
  }
}
