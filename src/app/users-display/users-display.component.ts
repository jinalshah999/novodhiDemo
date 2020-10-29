import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserdataService } from './userdata.service';
@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css'],
})
export class UsersDisplayComponent implements OnInit {
  Users_arr: User[] = [];
  constructor(private _data: UserdataService) {}

  ngOnInit(): void {
    this._data.getAllUsers().subscribe((data) => {
      this.Users_arr = data;
    });
  }
  onUserDelete(item: User) {
    this._data.deleteUser(item.user_email).subscribe((x: any) => {
      this.Users_arr.splice(this.Users_arr.indexOf(item), 1);
    });
  }
}
