import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() userName : string = "";
  repos : any = [];

  constructor(private ref : ChangeDetectorRef,
              private githubService : GithubService) {             
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      if(this.userName) {
        this.githubService.getReposForTheGitUser(this.userName).subscribe({
          next : (repos) => {
            this.repos = repos;
            this.ref.detectChanges();
          },
          error: (err) => {
            console.log(err);
          }
      });
      }
  }
}
