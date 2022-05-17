
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveCartService, MultiCartService, UserIdService, StateWithMultiCart, GlobalMessageService, GlobalMessageType } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class MyActiveCartService extends ActiveCartService {

  constructor(
    store: Store<StateWithMultiCart>,
    multiCartService: MultiCartService,
    userIdService: UserIdService,
    private globalMessageService: GlobalMessageService
  ) {
    super(store, multiCartService, userIdService);
  }

  addEntry(productCode: string, quantity: number): void {
    super.addEntry(productCode, quantity);
    this.globalMessageService.add(`Adding ${productCode} to cart`, GlobalMessageType.MSG_TYPE_INFO);
  }
  updateEntry(entryNumber: number, quantity: number): void {
    super.updateEntry(entryNumber, quantity);
    this.globalMessageService.add(`Cart was updated`, GlobalMessageType.MSG_TYPE_INFO);
  }
}
