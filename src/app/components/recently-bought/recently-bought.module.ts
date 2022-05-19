import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { CmsPageGuard } from '@spartacus/storefront';
import { RecentlyBoughtComponent } from './recently-bought.component';
import { RecentlyBoughtService } from './recently-bought.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'recently-bought',
        component: RecentlyBoughtComponent,
        canActivate: [CmsPageGuard],
        data: { pageLabel: 'homepage'},
      }
    ]),
    UrlModule
  ],
  providers: [
    RecentlyBoughtService
  ]
})
export class RecentlyBoughtModule { }
