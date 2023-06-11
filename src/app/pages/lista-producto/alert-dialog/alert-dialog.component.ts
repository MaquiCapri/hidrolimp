import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Producto } from 'src/app/producto.model';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private imagesDialog: MatDialog) { }

  ngOnInit(): void {
  }

}
