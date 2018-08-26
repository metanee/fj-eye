import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatGridListModule, MatInputModule,
  MatFormFieldModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatGridListModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatGridListModule, MatInputModule, MatFormFieldModule],

})
export class MaterialModule { }
