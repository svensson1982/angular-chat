import { Injectable } from '@angular/core';
import * as firebase from '@firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import { Observable } from 'rxjs/Observable';

import {AuthService} from './auth.service';
import {ChatMessage} from '../models/chat-message.model';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
        message: msg,
        timeSent: timestamp,
        username:this.username,
        email: email
    });
  }

  getMessages(): Observable<ChatMessage[]> {
      return this.db.list('/messages', ref => {
          ref.orderByKey(true).limitToLast(25);
      });
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }

}
