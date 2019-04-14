import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.sass']
})
export class WorkCardComponent implements OnInit {
  @Input() works: {
    date: string,
    role: string,
    work_body: string,
    tech_body: string
  };

  work_body: SafeHtml;
  tech_body: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.work_body = this.domSanitizer.bypassSecurityTrustHtml(this.works.work_body);
    this.tech_body = this.domSanitizer.bypassSecurityTrustHtml(this.works.tech_body);
  }

}
