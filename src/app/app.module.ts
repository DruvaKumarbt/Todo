import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule, MatPaginatorModule, MatTooltipModule, MatExpansionModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatProgressSpinnerModule ,MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatProgressBarModule, MatSlideToggleModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SigninComponent } from "./user/signin/signin.component";
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";
import { SocketService } from './socket.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule ,
    MatButtonModule,
    ReactiveFormsModule,
    UserModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatIconModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatProgressBarModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SigninComponent, pathMatch: 'full' },
      { path: 'home', component:HomeComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: SigninComponent }
    ]),
    SharedModule
  ],
  providers: [AppService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
