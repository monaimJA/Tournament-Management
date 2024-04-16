import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {
  errorMessage : string;
  // @ts-ignore
  constructor(private matDialogRef : MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
  this.errorMessage = data.message ;
  }

  ngOnInit(): void {
  }

  onClose() {
    this.matDialogRef.close();
  }
}