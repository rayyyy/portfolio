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


  backendRows = [
    ['技術', '経験年数', 'スキル感'],
    ['PHP', '2年', '★★★★'],
    ['symfony', '6ヶ月', '★★★★★'],
    ['Go', '6ヶ月', '★'],
    ['Ruby', '1年6ヶ月', '★★★'],
    ['Rails', '1年6ヶ月', '★★★'],
  ];

  frontendRows = [
    ['技術', '経験年数', 'スキル感'],
    ['javascript', '2年', '★★'],
    ['Nuxt.js', '6ヶ月', '★★'],
    ['React', '2ヶ月', '★'],
    ['Angular(学生)', '6ヶ月', '★★★'],
    ['Android Java(学生)', '3年', '★★★'],
  ];

  infraRows = [
    ['技術', '経験年数', 'スキル感'],
    ['AWS', '1年', '★★'],
    ['GCP', '6ヶ月', '★★'],
    ['terraform', '6ヶ月', '★★'],
    ['Docker', '1年', '★★★★'],
    ['Linux', '3年', '★★★'],
  ];

  otherRows = [
    ['技術', '経験年数', 'スキル感'],
    ['チームビルディング', '1年', '★★★'],
    ['採用活動', '1年半', '★★'],
    ['エクセル', '?', '★★'],
    ['パワポ', '?', '★★'],
    ['GAS', '1年', '★★★'],
    ['テストコード', '1年', '★★'],
  ];

  constructor(db: AngularFirestore) {
    this.items = db.collection('users').valueChanges();
  }

  ngOnInit() { }
}
