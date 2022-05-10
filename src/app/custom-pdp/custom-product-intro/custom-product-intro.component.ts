import { Observable } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';
import { Component, OnInit } from '@angular/core';
import { Product, TranslationService, WindowRef } from '@spartacus/core';

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss']
})
export class CustomProductIntroComponent implements OnInit {
  product$: Observable<Product | null> = this.currentProductService.getProduct();
  protected reviewsComponentId = 'ProductReviewsTabComponent';
  protected reviewsTranslationKey = `TabPanelContainer.tabs.${this.reviewsComponentId}`;
  constructor(private currentProductService: CurrentProductService, protected translationService: TranslationService, protected winRef: WindowRef) { }

  ngOnInit(): void {
    this.product$.subscribe((product)=>{
      console.log("product:", product);
    });
  }

  showReviews() {
    // Use translated label for Reviews tab reference
    this.translationService
      .translate(this.reviewsTranslationKey)
      .subscribe((reviewsTabLabel) => {
        const tabsComponent = this.getTabsComponent();
        const reviewsTab =
          tabsComponent && this.getTabByLabel(reviewsTabLabel, tabsComponent);

        if (reviewsTab) {
          this.clickTabIfInactive(reviewsTab);
          setTimeout(() => {
            reviewsTab.scrollIntoView({ behavior: 'smooth' });
            reviewsTab.focus({ preventScroll: true });
          });
        }
      })
      .unsubscribe();
  }

    /**
   * Get Tabs Component if exists on page
   */
     private getTabsComponent(): HTMLElement | null {
      return this.winRef.document.querySelector('cx-tab-paragraph-container');
    }

  /**
   * Click to activate tab if not already active
   *
   * @param tab tab to click if needed
   */

   private clickTabIfInactive(tab: HTMLElement): void {
     if (
       !tab.classList.contains('active') ||
       tab.classList.contains('toggled')
     ) {
       tab.click();
     }
   }

     /**
   * Get Tab by label if exists on page
   *
   * @param label label of searched tab
   * @param tabsComponent component containing tabs
   */
    private getTabByLabel(
      label: string,
      tabsComponent: HTMLElement
    ): HTMLElement | undefined {
      // NOTE: Reads through button tags to click on correct tab
      // There may be a better way of doing this now/after refactor
      const tabElements: HTMLCollectionOf<HTMLElement> =
        tabsComponent.getElementsByTagName('button');
  
      // Look through button tab elements until finding tab with label
      return Array.from(tabElements).find((buttonElement) =>
        buttonElement.innerHTML.includes(label)
      );
    }

}
