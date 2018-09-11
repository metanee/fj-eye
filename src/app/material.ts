import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatGridListModule, MatInputModule,
  MatFormFieldModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule],

  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],

})
export class MaterialModule { }
