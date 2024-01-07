import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';

const routes: Routes = [
  {
    path:"Header",
    component:HeaderComponent
  },
  {
    path:"Details/:id",
    component:DetailComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"addBook",
    component:AddBookComponent
  },
  {
    path:"manageBook",
    component:ManageBookComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
