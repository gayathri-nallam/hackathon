import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { User } from '../user';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-request-accommodation',
  templateUrl: './request-accommodation.component.html',
  styleUrls: ['./request-accommodation.component.css']
})
export class RequestAccommodationComponent implements OnInit {

  user:User =new User();

  constructor(private requestService: RequestService) { }
  dropdownList = [];
  dropdownSettings:IDropdownSettings={};
  ngOnInit(){
    this.dropdownList = [
      { item_id: 1, item_text: 'Gym' },
      { item_id: 2, item_text: 'Club house' },
      { item_id: 3, item_text: 'Park' },
      { item_id: 4, item_text: 'Shopping Mall' },
      { item_id: 5, item_text: 'Hospital' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }
  accommadationtype : string[]=['1BHK','2BHK','PG','Sharing','Single Room']
  //amenitys : string[] =['Gym','Club House','Park']
  userRegister(){
    console.log(this.user);
    this.requestService.registerUser(this.user).subscribe(data=>{
     alert("Successfully added the request?")
    },error=>alert("Sorry Request not added"));
  }

}
