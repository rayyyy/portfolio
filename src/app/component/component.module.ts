import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SkillCardComponent } from './skill-card/skill-card.component';

@NgModule({
  declarations: [HeaderComponent, SkillCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SkillCardComponent
  ]
})
export class ComponentModule { }
