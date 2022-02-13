import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { Profile } from './profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile!: Profile;
  repo!: Repo;
  constructor(private http: HttpClient) {
    this.profile = new Profile("", "", "", 0, 0, 0);
    this.repo = new Repo("", "", "", "")
  }
  getUserProfile(searchItem: string | number) {
    interface apiResults {
      login: string,
      avatar_url: string,
      bio: string,
      followers: number,
      following: number,
      public_repos: number
    }
    let headers = new HttpHeaders({
      authorization: 'token' + environment.apiKey,
    })
    let options = { headers: headers }
    let completeUrl = environment.apiUrl + searchItem + '?api_Key' + environment.apiKey;
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResults>(completeUrl, options).toPromise().then(response => {
        this.profile.login = response!.login
        this.profile.avatar_url = response!.avatar_url
        this.profile.bio = response!.bio
        this.profile.followers = response!.followers
        this.profile.following = response!.following
        this.profile.public_repos = response!.public_repos
        console.log(this.profile)
        resolve(null)
      },
        error => {
          reject(error)
        })
    })
    return promise
  }




  getUserRepo(searchRepo: string | number){
    interface apiResults {
    
      repos: number
      login:string,
      html_url:string,
      description:string,
      language:string
    }
    let headers = new HttpHeaders({
      authorization: 'token' + environment.apiKey,
    })
    let options = { headers: headers }
    let completeUrl = environment.apiUrl + searchRepo + '?api_Key' + environment.apiKey;
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResults>(completeUrl, options).toPromise().then(response => {
        this.repo.login = response!.login
        this.repo.html_url = response!.html_url
         this.repo.description = response!.description
        this.repo.language = response!.language
        console.log(this.repo)
        resolve(null)
      },
        error => {
          reject(error)
        })
    })
    return promise
  }
}