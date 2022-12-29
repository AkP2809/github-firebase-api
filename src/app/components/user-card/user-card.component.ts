import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnChanges {

  @Input() userName : string = "";
  user : any = [];

  constructor(private ref : ChangeDetectorRef,
              private gitService : GithubService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      if(this.userName) {
        this.gitService.getGitUser(this.userName).subscribe({
          next : (user) => {
            this.user = user;
            this.ref.detectChanges();
          },
          error : (err) => {
            console.log(err);
          }
        });
      }
  }

}
