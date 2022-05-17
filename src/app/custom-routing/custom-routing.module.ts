import { PageLayoutComponent } from './../../../../spartacus/projects/storefrontlib/cms-structure/page/page-layout/page-layout.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { CustomPageBestsellersComponent } from '../custom-page-bestsellers/custom-page-bestsellers.component';

const STATIC_ROUTES: Routes = [
  {
    path: 'bestsellers',
    component: CustomPageBestsellersComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'homepage'},
  },
  {
    path: 'alias/hilfe',
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: '/faq'},
  }
]

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(STATIC_ROUTES),
  ]
})
export class CustomRoutingModule { }
