import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';


@NgModule({
  declarations: [ClientComponent, HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
