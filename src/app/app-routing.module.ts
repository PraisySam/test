import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTextComponent } from './Mycomponents/add-text/add-text.component';
import { MainComponent } from './Mycomponents/main/main.component';
import { MyPostComponent } from './Mycomponents/my-post/my-post.component';
import { MyeditsComponent } from './Mycomponents/myedits/myedits.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'editpost', component: AddTextComponent },
  { path: 'myedit', component: MyeditsComponent },
  { path: 'mypost', component: MyPostComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
