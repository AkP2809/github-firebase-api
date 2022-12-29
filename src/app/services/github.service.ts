import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly USER_URL = "https://api.github.com/users/";

  constructor(private httpClient : HttpClient) { }

  getGitUser = (userName : string) => {
    return this.httpClient.get(this.USER_URL + userName);
  }

  getReposForTheGitUser = (userName : string) => {
    return this.httpClient.get(this.USER_URL + userName + "/repos");
  }
}
