import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, 
MatCardModule, MatIconModule, MatMenuModule, MatListModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatToolbarModule,
	MatInputModule, 
	MatProgressSpinnerModule, 
	MatCardModule,
	MatIconModule,
	MatMenuModule,
	MatListModule,
	MatGridListModule
  ],
  exports: [
	MatButtonModule,
	MatToolbarModule,
	MatInputModule, 
	MatProgressSpinnerModule, 
	MatCardModule,
	MatIconModule,
	MatMenuModule,
	MatListModule,
	MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
