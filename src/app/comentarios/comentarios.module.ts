import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [ComentariosComponent, HeaderComponent],
  imports: [
    CommonModule,
    ComentariosRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ComentariosModule { }
