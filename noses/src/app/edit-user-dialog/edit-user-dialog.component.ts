import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { MatTableModule,
        MatTableDataSource,
        MatPaginator,
        MatSelect,
        MatDialog,
        MatDialogRef,
        MatTooltip,
        MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { FlaskBackendService } from '../flask-backend.service';
import { sqlUser } from '../sqlUser';
import { AuthService } from "../auth.service";

export interface DialogData {
  isAdmin: number;
}


@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})

export class EditUserDialogComponent {
  selectAdmin = 0
    constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: FlaskBackendService) {}

  onNoClick(): void {
    // this.data = undefined;
    this.dialogRef.close();
  }


}
