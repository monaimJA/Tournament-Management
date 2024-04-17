import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription-popup',
  templateUrl: './inscription-popup.component.html',
  styleUrls: ['./inscription-popup.component.css']
})
export class InscriptionPopupComponent {
  equipeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.equipeForm = this.fb.group({
      nomEquipe: ['', Validators.required],
      site: ['', Validators.required],
      joueurs: this.fb.array([
        this.createJoueurFormGroup() // Créez un contrôle de formulaire pour un joueur initial
      ], Validators.maxLength(5)),
      remplacants: this.fb.array([], Validators.maxLength(3))
    });
  }

  createJoueurFormGroup(): FormGroup {
    return this.fb.group({
      nom: ['', Validators.required],
      prénom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  addJoueur(): void {
    const joueurs = this.equipeForm.get('joueurs') as FormArray;
    if (joueurs.length < 5) {
      joueurs.push(this.createJoueurFormGroup());
    }
  }

  removeJoueur(index: number): void {
    const joueurs = this.equipeForm.get('joueurs') as FormArray;
    joueurs.removeAt(index);
  }

  get joueurs(): FormArray {
    return this.equipeForm.get('joueurs') as FormArray;
  }

  addRemplacant(): void {
    const remplacants = this.equipeForm.get('remplacants') as FormArray;
    if (remplacants.length < 3) {
      remplacants.push(this.createJoueurFormGroup());
    }
  }

  removeRemplacant(index: number): void {
    const remplacants = this.equipeForm.get('remplacants') as FormArray;
    remplacants.removeAt(index);
  }

  get remplacants(): FormArray {
    return this.equipeForm.get('remplacants') as FormArray;
  }

  onSubmit(): void {
    if(this.equipeForm.valid){
      console.log(this.equipeForm.value);
    }
  }
}
