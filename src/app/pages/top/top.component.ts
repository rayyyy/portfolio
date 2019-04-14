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

  works1 = {
    title: '現在の仕事',
    date: '2019/3~',
    role: '株式会社ヒュープロ リードエンジニア',
    work_body: `
    最速転職のサイト 保守、改修<br>
    社内管理画面 改修、保守<br>
    社内環境のdocker化<br>
    mixpanelの導入<br>
    施策提案、実施、検証<br>
    AWSでサーバー社内wiki構築<br>
    インフラのコード化<br>
    エンジニア採用（インターン`,
    tech_body: `
    react<br>
    rails<br>
    terraform<br>
    docker<br>`
  };

  works2 = {
    title: '一つ前の仕事',
    date: '2018/7~2019/2',
    role: '株式会社エイチーム引越し侍 株式会社エイチームコネクト出向 技術開発部 新規開発チームリーダー エンジニア',
    work_body: `
    社内管理画面の保守、改修<br>
    trixbox<br>
    コールセンターシステムの保守、改修<br>
    スプレッドシートとGASを用いた営業メンバーの電話による成果可視化<br>
    Goを用いたwindows用社内システムの開発<br>
    営業成績の見える化ダッシュボード開発<br>
    <br>
    エンジニア採用活動（中途面接、インターン面接、インターン運営、リクルーター、ミートアップ企画運営）<br>
    エンジニア組織運営 (育成、体制の整備 open project)`,
    tech_body: `
    react<br>
    rails<br>
    terraform<br>
    docker<br>`
  };

  works3 = {
    title: '二つ前の仕事',
    date: '2018/2~2018/6',
    role: '株式会社エイチーム引越し侍 マーケティング部 エンジニア',
    work_body: `
    引越し侍の基幹システムのAPI化とAPI仕様書の作成&API提供先の会社との連携<br>
    本番データベースをマスキングするシステム作成<br>
    VWOで改修、保守、検証<br>
    GAなどを用いた数値分析、数値ベースでの施策提案<br>
    ABテスト実施<br>
    新卒エンジニアの教育（研修内容を決め、実施）`,
    tech_body: `
    react<br>
    rails<br>
    terraform<br>
    docker<br>`
  };

  works4 = {
    title: '三つ前の仕事',
    date: '2017/6~2018/1',
    role: '株式会社エイチーム引越し侍 企画営業部 エンジニア',
    work_body: `
    引越し侍のサイトの改修、保守<br>
    顧客やシステムを管理する社内管理画面の保守、改修<br>
    企業向けに提供している管理画面の保守、改修<br>
    <br>
    また、企業と提携した際、企業向けのフォームの新規作成 2週間<br>
    sendgrid メルマガのシステムの基盤の導入担当 3週間<br>
    <br>
    エンジニア勉強会運営`,
    tech_body: `
    react<br>
    rails<br>
    terraform<br>
    docker<br>`
  };

  constructor(db: AngularFirestore) {
    this.items = db.collection('users').valueChanges();
  }

  ngOnInit() { }
}
