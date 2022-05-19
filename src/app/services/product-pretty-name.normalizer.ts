import { Injectable } from "@angular/core";
import { Converter, Occ, Product } from "@spartacus/core";
import { ProductExtended } from "../shared/models/product.model";
import { convertIntoSlug } from "../shared/utils";


@Injectable({
    providedIn: 'root'
})
export class ProductPrettyNameNormalizer implements Converter<Occ.Product, ProductExtended> {
    constructor(){}
    convert<S, T>(source: Occ.Product, target: ProductExtended): ProductExtended {
        // console.log("SOURCE PRODUCT OUTSIDE: ",source, "target: ", target)
        if (source?.name) {
            // console.log("SOURCE PRODUCT INNER: ",source, "target: ", target)
            // This also change product title in PDP
            // target.name = source.name.replace(/ /g, '-').toLocaleLowerCase();

            // This will change onlu product name in URL and also cut length to 20 signs.
            target.prettyName = convertIntoSlug(source.name).substring(0,20);
        }
        return target;
    }
}