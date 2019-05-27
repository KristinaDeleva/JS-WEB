import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FurnitureService } from './furniture.service';
import { RouterModule } from '@angular/router';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'create', component: CreateFurnitureComponent },
      { path: 'all', component: FurnitureAllComponent },
      { path: 'details/:id', component: FurnitureDetailsComponent },
      { path: 'user', component: FurnitureUserComponent },
      { path: 'edit/:id', component: EditFurnitureComponent }
    ])
  ],
  declarations: [
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
    EditFurnitureComponent
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModule { }
