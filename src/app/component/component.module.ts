import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { WorkCardComponent } from './work-card/work-card.component';

@NgModule({
  declarations: [HeaderComponent, SkillCardComponent, WorkCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SkillCardComponent,
    WorkCardComponent
  ]
})
export class ComponentModule { }
