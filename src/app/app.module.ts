/**
 * Core
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Modules
 */
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
/**
 * Copmonents
 */
import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MessageComponent } from './components/message/message.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
/**
 * Services
 */
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
/**
 * Routes
 */
import { appRoutes } from './app-routes/routes';
/**
 * Environment
 */
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

