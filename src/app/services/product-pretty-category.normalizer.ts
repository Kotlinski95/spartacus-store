import { Injectable, OnInit } from "@angular/core";
import { Converter, Occ, Product } from "@spartacus/core";
import { ProductExtended } from "../shared/models/product.model";
import { CurrentProductService} from '@spartacus/storefront';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductPrettyCategoryNormalizer implements Converter<Occ.Product, ProductExtended> {
    constructor(){}
    convert(source: Occ.Product, target: ProductExtended): ProductExtended {
        // console.log("SOURCE CATEGORY OUTSIDE: ",source, "target: ", target)
        if (source?.categories?.length) {
            // console.log("SOURCE CATEGORY INNEr: ",source, "target: ", target)
          target.firstCategory = source.categories[0].name?.replace(/ /g, '-').toLocaleLowerCase();
        }
        return target;
      }
}