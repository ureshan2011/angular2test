import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p> <strong>Email</strong> {{email}}</p>
  <p> <strong> Address </strong> {{address.street}} {{address.city}} {{address.state}} </p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>

  <div *ngIf = "showHobbies">
  <p><strong>Hobbies</strong> 
  <ul>
  <li *ngFor = "let hobby of hobbies">
  {{hobby}}
  </li>
  </ul>
  <p></div>
  `,
})

export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies : string[];
    showHobbies : boolean;
    

constructor(){
    this.name = 'Gayantha';
    this.email = 'gknamarathna@gmail.com';
    this.address = {
        street : 'Gampaha',
        city : 'Western Province',
        state : 'Sri Lanka',
    }
    this.hobbies = ['Music', 'Movies', 'Traveing'],
    this.showHobbies = false
}
toggleHobbies(){
    if(this.showHobbies == false){
        this.showHobbies = true;
    }
    else
        this.showHobbies=false;
}

}

interface address{
    street: string;
    city: string;
    state:string;
}



