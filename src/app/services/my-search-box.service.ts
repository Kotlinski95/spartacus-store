import { SearchBoxComponentService, SearchBoxConfig, SearchResults } from '@spartacus/storefront';
import { Injectable } from '@angular/core';
import { EventService, RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MySearchBoxService extends SearchBoxComponentService{

  constructor(
    searchService: SearchboxService,
    routingService: RoutingService,
    translationService: TranslationService,
    winRef: WindowRef,
    eventService: EventService
  ) {
    super(searchService, routingService, translationService, winRef, eventService);
  }
  getResults(config: SearchBoxConfig): Observable<SearchResults>{
    return super.getResults(config).pipe(
      tap(results => {
        if (results.products?.length === 1) {
          this.routingService.go({ cxRoute: 'product', params: results.products[0]});
          super.clearResults();
        }
      })
    )
  }
}
