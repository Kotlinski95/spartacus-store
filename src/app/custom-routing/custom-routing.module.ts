import { ConfigModule, OccConfig, RoutingConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { CustomPageBestsellersComponent } from '../custom-page-bestsellers/custom-page-bestsellers.component';
import { SaleComponentComponent } from '../components/sale-component/sale-component.component';
import { RecentlyBoughtComponent } from '../components/recently-bought/recently-bought.component';

const STATIC_ROUTES: Routes = [
  {
    path: 'bestsellers',
    component: CustomPageBestsellersComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'homepage' },
  },
  {
    path: 'alias/hilfe',
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: '/faq' },
  },
  {
    path: 'sale',
    component: SaleComponentComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: '/sale' },
  },
  {
    path: 'recently-bought',
    component: RecentlyBoughtComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'homepage' },
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              // 'electronics/cameras/:manufacturer/:productCode/:name',
              // 'electronics/cameras/:productCode/:prettyName',
              // 'electronika/:productCode/:name/:category',
              'product/:firstCategory/:manufacturer/:name/:productCode',
              'product/:manufacturer/:name/:productCode',
              'product/:name/:productCode',
              'electronics/cameras/:productCode/:name',
              'electronics/cameras/:productCode',
            ],
            paramsMapping: { name: 'prettyName' },
            // paramsMapping: { name: 'prettyName', firstCategory: 'firstCategoryCustom'}
          },
        },
      },
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            product: {
              list: 'products/${productCode}?fields=code,name,manufacturer,summary,price(formattedValue),images(DEFAULT,galleryIndex),categories(FULL)',
            },
            productSearch:
              'products/search?fields=products(code,categories,name,manufacturer,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
          },
        },
      },
    } as OccConfig),
  ],
})
export class CustomRoutingModule {}
