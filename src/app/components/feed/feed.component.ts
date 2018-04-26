import {Component, OnChanges, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {ChatService} from '../../services/chat.service';
import {ChatMessage} from '../../models/chat-message.model';
import {AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed: AngularFireList<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
      this.feed = this.chat.getMessages();
  }

}
