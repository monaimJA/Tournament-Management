import { Component, ErrorHandler, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Site, Team } from 'src/app/core/models/team';
import { TeamService } from 'src/app/core/services/team/team.service';
import { SuccessDialogComponent } from '../../dashboard/tournament/success-dialog/success-dialog.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm! : FormGroup;
  sites : Site[];
  minPlayers = 7;
  maxPlayers = 8;

  constructor(private fb:FormBuilder  ,private teamservice : TeamService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group({
      name : this.fb.control(null,Validators.required),
      site: [null, Validators.required],
      players: this.fb.array([this.createPlayerFormGroup()], [Validators.minLength(this.minPlayers), Validators.maxLength(this.maxPlayers)]),
    })
    this.siteList();
    console.log("oooooooooooooooo",this.sites);
    // for (let i = 0; i < this.minPlayers; i++) {
    //   this.addPlayer();
    // }
  }

  createPlayerFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, this.emailDomainValidator]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }
  addPlayer(): void {
    const players = this.inscriptionForm.get('players') as FormArray;
    if(players.length<8){
    players.push(this.createPlayerFormGroup());

    }
  }

  removePlayer(index: number): void {
    const players = this.inscriptionForm.get('players') as FormArray;
    players.removeAt(index);
  }
  get players(): FormArray {
    return this.inscriptionForm.get('players') as FormArray;
  }
  handleInscription(){
    let team : Team=this.inscriptionForm.value;
    console.log("suiiiiiiiiiiiiiiiiiiiii",team);
    this.teamservice.inscription(team)
    .subscribe({
      next : data=>{
        alert("saved succefuly");
        this.inscriptionForm.reset();
      },
      error : err => {
        alert("complete the form");
        console.log(err);
      }
    })
}

siteList(){
  this.teamservice.getSites().subscribe(
     data=>{
      this.sites =data;
      console.log("ararararararararrarara",this.sites);
  });
}
    emailDomainValidator(control: FormControl) {
        const email = control.value;
        if (email && !email.endsWith('@capgemini.com')) {
            return { 'invalidDomain': true };
        }
        return null;
    }

isFormValid(): boolean {
  return this.inscriptionForm.valid;
}





}



