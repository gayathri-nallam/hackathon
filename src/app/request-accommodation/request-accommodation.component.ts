import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { User } from '../user';

@Component({
  selector: 'app-request-accommodation',
  templateUrl: './request-accommodation.component.html',
  styleUrls: ['./request-accommodation.component.css']
})
export class RequestAccommodationComponent implements OnInit {

  user:User =new User();

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }
  accommadationtype : string[]=['1BHK','2BHK','PG','Sharing','Single Room']
  amenitys : string[] =['Gym','Club House','Park']
  userRegister(){
    console.log(this.user);
    this.requestService.registerUser(this.user).subscribe(data=>{
     alert("Successfully added the request?")
    },error=>alert("Sorry Request not added"));
  }

}
