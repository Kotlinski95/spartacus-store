import { Injectable } from '@angular/core';
import { Order, OrderEntry, Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, mergeAll, mergeMap, take, toArray } from 'rxjs/operators';
import { OrderFacade } from '@spartacus/order/root';
import { OrderService } from '@spartacus/order/core';

@Injectable({
  providedIn: 'root'
})
export class RecentlyBoughtService {
  authService: any;
  orderConnector: any;

  constructor(
    protected userOrderService: OrderFacade
    // protected orderService: OrderService,
    ) { }

  // getUserId(){
  //   return this.authService
  //     .getOccUserId()
  //     .pipe(
  //       take(1));
  // }

  // getOrder(code:string){
  //   return this.getUserId()
  //     .pipe(
  //       mergeMap(userId=>this.orderConnector.get(user Id,code))
  //     );
  // }

  // getRecentlyBought():Observable<Product[]>{
  //   return this.userOrderService.getOrderHistoryList(5)
  //     .pipe(
  //       map(oh =>oh.orders),
  //       filter(orders=>orders.length>0),
  //       take(1),
  //       mergeAll(),
  //       mergeMap(order=>this.getOrder(order.code)),
  //       mergeMap(order=>order.entries),
  //       map((order:OrderEntry)=>order.product),
  //       toArray()
  //    );
  // }

  canActivate(): any {
    return this.userOrderService.getOrderHistoryList(15).pipe(
      map((orderDetails) => {
        console.log("Order Details: ", orderDetails);
    //     // if (orderDetails && Object.keys(orderDetails).length !== 0) {
    //     //   return true;
    //     // } else {
    //     //   return this.router.parseUrl(this.semanticPathService.get('orders'));
    //     // }
      })
    )
  }
}
