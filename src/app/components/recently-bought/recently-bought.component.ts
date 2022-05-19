import { Component, OnInit } from '@angular/core';
import { Order, OrderEntry, Product, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, mergeAll, mergeMap, take, toArray } from 'rxjs/operators';
import { RecentlyBoughtService } from './recently-bought.service';

@Component({
  selector: 'app-recently-bought',
  templateUrl: './recently-bought.component.html',
  styleUrls: ['./recently-bought.component.scss']
})
export class RecentlyBoughtComponent implements OnInit {
  userOrderService: any;
  // recentlyBougth$:Observable<Product[]> = new Observable;

  // recentlyBought$: Observable<Product[]>;
  constructor(
    private recentlyBoughtService: RecentlyBoughtService,
    private routingService: RoutingService,
  ){}
  ngOnInit(){
  //  this.recentlyBought$ = this.recentlyBoughtService.getRecentlyBought();
  this.recentlyBoughtService.canActivate().subscribe(console.log);
  }
}

