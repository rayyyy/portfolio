import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';

import { ComponentModule } from '../../component/component.module';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    ComponentModule
  ]
})
export class TopModule { }
