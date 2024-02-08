import { Component } from '@angular/core';
import { Friend } from './models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day32workshop';

  friend : Friend={
    name:'',
    email:'',
    DOB:'',
    phone:'',
    isFriend:false
  };
  // friend !: Friend
  index : number = 0;
 


  friends: Friend[] = []

  addFriend(friend: Friend){
    this.friends.push(friend)
    console.log(friend)
  }

  updateFriend(index:number){
    this.friend = this.friends.at(index) as Friend
    console.log(this.friend)
    this.index = index
    
    //this.friendToSend.next(this.friend)
  }

  updateFriendInList(f:Friend){
    this.friends[this.index] = f
  }
}
