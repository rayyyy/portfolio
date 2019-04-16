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
    ['goa', '2ヶ月', '★'],
    ['Ruby', '1年6ヶ月', '★★★'],
    ['Rails', '1年6ヶ月', '★★★'],
  ];

  frontendRows = [
    ['技術', '経験年数', 'スキル感'],
    ['javascript', '2年', '★★'],
    ['Express', '6ヶ月', '★★'],
    ['Nuxt.js', '6ヶ月', '★★'],
    ['React', '2ヶ月', '★'],
    ['Angular(学生)', '6ヶ月', '★★★'],
    ['Android Java(学生)', '3年', '★★★'],
    ['ionic', '3ヶ月', '★★'],
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
    title: '現在',
    date: '2019/3~',
    role: '株式会社ヒュープロ リードエンジニア',
    work_body: `
    唯一の正社員エンジニアとして入社。(副業やフリーランスエンジニアはいます。)<br>
    経営、企画などにも関わりながら開発業務遂行。<br>
    メンバーの開発効率のためにDocker化を推進したり、<br>
    Gitフローを決めたりしました。<br>
    属人化した常態から人が増えても耐えうる体制にするべく体制を整備しています。<br>
    また、インターンエンジニアに参画してもらい、教育しながら、チーム開発をしています。<br>
    <br>
    <業務一覧><br>
    最速転職のサイト 保守、改修<br>
    社内管理画面 改修、保守<br>
    社内環境のdocker化<br>
    mixpanelの導入<br>
    施策提案、実施、検証<br>
    開発体制整備<br>
    AWSでサーバー社内wiki構築<br>
    インフラのコード化<br>`,
    tech_body: `
    React<br>
    Ruby on Rails<br>
    MySQL<br>
    terraform<br>
    Docker<br>`
  };

  works2 = {
    title: 'エイチームコネクト 技術開発部時代',
    date: '2018/7~2019/2',
    role: '株式会社エイチームコネクト 技術開発部 新規開発チームリーダー',
    work_body: `
    コールセンター部隊のエンジニアとして従事。<br>
    既存システムの運用保守とは別に、新規システムを主に開発するチームのリーダーを任されました。<br>
    チーム人数は2人で、コールセンターのログを活用した、コールスタッフの行動の見える化や、<br>
    モチベーションを上げるための成果が見えるダッシュボードの開発を行いました。<br>
    その際、レガシーなシステムをリプレイスしていくために、GoやRails、Nuxt.jsやGraphQLなどを使いシステムを構築しました。<br>
    また、開発とは別に、採用活動やチームビルディングを業務として任されており、<br>
    チームの開発率向上のための施策を回し検証し、チームメンバーの自発的な成長を促せました。<br>
    <br>
    <業務一覧><br>
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
    Ruby on Rails<br>
    symfony(PHP)<br>
    Nuxt.js<br>
    Go<br>
    AWS AppSync<br>
    MySQL/Aurora<br>
    GraphQL<br>
    Lambda<br>
    Trixbox Asterisk<br>
    GAS<br>
    docker<br>`
  };

  works3 = {
    title: 'エイチーム引越し侍 マーケティング部時代',
    date: '2018/2~2018/6',
    role: '株式会社エイチーム引越し侍 マーケティング部 エンジニア',
    work_body: `
    引越し侍サイトの改善(ABテストなど)を主なタスクとし、<br>
    新機能の開発や、チームの開発効率向上に徹していました。<br>
    新機能としては、社外向けの基幹システムのWEB API作成になります。<br>
    開発担当として、レビューをもらいながら一人で、設計、開発、テストコードを1ヶ月で開発しました。<br>
    基幹システムと連携するため、なるべくバグが出ないように、テストを書いたり、<br>
    WEB APIの仕様書を作成し、社外の人と連携し無事に終わらせました。また、日々運用する中で出るトラブル対応もしました。<br>
    チームの開発効率向上のためには、
    本番環境と、開発環境でのデータの差異による不都合がたくさん出だしたので、<br>
    継続的に本番DBをマスキングし、だれでもテストに使える環境を作ることで解決しました。<br>
    <br>
    <業務一覧><br>
    引越し侍の基幹システムのAPI化とAPI仕様書の作成&API提供先の会社との連携<br>
    本番データベースをマスキングするシステム作成<br>
    VWOで改修、保守、検証<br>
    GAなどを用いた数値分析、数値ベースでの施策提案<br>
    ABテスト実施<br>
    新卒エンジニアの教育（研修内容を決め、実施）`,
    tech_body: `
    Ruby on Rails<br>
    symfony(PHP)<br>
    MySQL/Aurora<br>
    javascript<br>`
  };

  works4 = {
    title: 'エイチーム引越し侍 企画営業部時代',
    date: '2017/6~2018/1',
    role: '株式会社エイチーム引越し侍 企画営業部 エンジニア',
    work_body: `
    新卒エンジニアとして配属後、提携している企業向けの管理画面の改修をメインで担当していました。<br>
    また、サイトの最適化のために、サイト改善などもしておりました。<br>
    言語は主にPHPを使用しており、フレームワークはsymfonyを使用していました。<br>
    また、基幹システムへの新機能の導入や新規ページの作成を任せてもらい、一人でDB・システム設計開発、運用基盤まで作成しました。<br>
    <br>
    <業務一覧><br>
    引越し侍のサイトの改修、保守<br>
    顧客企業や社内システムを管理する社内管理画面の保守、改修<br>
    企業に提供している管理画面の保守、改修<br>
    提携した企業向けの登録フォームの新規作成のメイン担当 2週間<br>
    sendgrid メルマガのシステムの基盤の導入担当 3週間<br>
    エンジニア勉強会運営`,
    tech_body: `
    symfony(PHP)<br>
    javascript<br>`
  };

  constructor(db: AngularFirestore) {
    this.items = db.collection('users').valueChanges();
  }

  ngOnInit() { }
}
