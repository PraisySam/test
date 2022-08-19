import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe, DecimalPipe, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Mycomponents/main/main.component';
import { AddTextComponent } from './Mycomponents/add-text/add-text.component';
import { MyeditsComponent } from './Mycomponents/myedits/myedits.component';
import { PostComponent } from './Mycomponents/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPostComponent } from './Mycomponents/my-post/my-post.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddTextComponent,
    MyeditsComponent,
    PostComponent,
    MyPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
