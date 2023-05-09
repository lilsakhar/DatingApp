import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccounService } from '../_services/accoun.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccounService) { }

  ngOnInit(): void {

  }

  register() {
      this.accountService.register(this.model).subscribe({
        next: () => {
          this.cancel();
        },
        error: error => console.log(error)
      })
  }

  cancel() {
      this.cancelRegister.emit(false);
  }

}
