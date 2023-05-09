import { Component, OnInit } from '@angular/core';
import { AccounService } from './_services/accoun.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Dating App';

  constructor(private accountService: AccounService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString: User = JSON.parse(localStorage.getItem('user')!);
    //if(!userString) return;

    //const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(userString);
  }
}
