import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Friend } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit{

  private fb:FormBuilder = new FormBuilder();


  @Input()
  friend : Friend={
    name:'',
    email:'',
    DOB:'',
    phone:'',
    isFriend:false
  };
  // friend !: Friend
  
  friendForm = this.createFriendForm()

  @Output()
  friendSend = new Subject<Friend>();

  @Output()
  friendUpdate = new Subject<Friend>();
  
  // constructors are executed before ngOnInit
  constructor(fb:FormBuilder){
    this.fb=fb;
  }
  ngOnInit(): void {
    this.friendForm = this.createFriendForm();
  }



  private createFriendForm():FormGroup{
    var group : FormGroup
    group = this.fb.group({
      name:this.fb.control<string>(this.friend.name,[Validators.required]),
      email:this.fb.control<string>(this.friend.email,[Validators.required, Validators.email]),
      phone:this.fb.control<string>(this.friend.phone,[Validators.required]),
      DOB:this.fb.control<string>(this.friend.DOB,[Validators.required]),
      isFriend:this.fb.control<boolean>(this.friend.isFriend)
    })
    return group
  }


  processForm(){
    console.log("submitted")
    const values = this.friendForm.value as Friend
    this.friendSend.next(values)
    this.friendForm.reset();
  }

  update(){
   const f:Friend= this.friendForm.value
   this.friendUpdate.next(f)
  }

}
