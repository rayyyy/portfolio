import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.sass']
})
export class SkillCardComponent {

  @Input() rows: [][];
  @Input() title: string;
}
