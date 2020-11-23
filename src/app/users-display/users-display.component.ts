import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserdataService } from './userdata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css'],
})
export class UsersDisplayComponent implements OnInit {
  Users_arr: User[] = [];
  constructor(
    private _data: UserdataService,
    private _acroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Users_arr = this._acroute.snapshot.data['xyz'];
  }
  onUserDelete(item: User) {
    this._data.deleteUser(item.user_email).subscribe((x: any) => {
      this.Users_arr.splice(this.Users_arr.indexOf(item), 1);
    });
  }
}
