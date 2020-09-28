import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';

import { COLLECTIONS } from '@common';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {}

  public myConversationsQueryRef(queryFn?: QueryFn) {
    return this.firestore
        .collection(COLLECTIONS.USER)
        .doc('auserid')
        .collection<any>(COLLECTIONS.CONVERSATION, queryFn);
  }

}
