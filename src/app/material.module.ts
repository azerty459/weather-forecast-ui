import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  declarations: [
  ]
})
export class MaterialModule { }
