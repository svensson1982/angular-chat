import { Injectable } from '@angular/core';
import * as firebase from '@firebase/app';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
//import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import { Observable } from 'rxjs/Observable';

import {AuthService} from './auth.service';
import {ChatMessage} from '../models/chat-message.model';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireList} from 'angularfire2/database/interfaces';

@Injectable()
export class ChatService {
  user: any;
  chatMessages: AngularFireList<ChatMessage[]>;
  chatMessage: ChatMessage[] = [];
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth
  ) {
    /*this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });*/
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = 'testmail.@baz.hu';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
        message: msg,
        timeSent: timestamp,
        // username:this.username,
        username: 'username',
        email: email
    });
    console.log('called sendmsg');
  }
/*    getMessages(): AngularFireObject<ChatMessage[]> {
        // query to create our message feed binding
        return this.db.list('messages', {
            query: {
                limitToLast: 25,
                orderByKey: true
            }
        });
    }*/

  getMessages(): AngularFireList<ChatMessage[]> {
      return this.db.list('/messages');
      // orderByKey(true).limitToLast(25);
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
