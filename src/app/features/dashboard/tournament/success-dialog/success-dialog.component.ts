import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {
  private errorMessage : string;
  constructor(private matDialogRef : MatDialogRef<SuccessDialogComponent>) { }

  ngOnInit(): void {
  }

  onClose() {
    this.matDialogRef.close();
  }
}