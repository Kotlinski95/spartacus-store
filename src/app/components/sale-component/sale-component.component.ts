import { Subscription } from 'rxjs';
import { CmsService } from '@spartacus/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-component',
  templateUrl: './sale-component.component.html',
  styleUrls: ['./sale-component.component.scss'],
})
export class SaleComponentComponent implements OnInit {
  name?: string = '';
  constructor(private cmsService: CmsService) {}
  subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription = this.cmsService.getCurrentPage().subscribe((page) => {
      this.name = page.name;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
