import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('users').valueChanges();
  }

  ngOnInit() { }
}
