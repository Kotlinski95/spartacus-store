import {Product} from "@spartacus/core";

export interface ProductExtended extends Product {
  prettyName?: string | undefined,// extend Product interface because we want to normalize target name, but it's,  used in PDP url but also in PDP title, so we need to extend the Product interface
  firstCategory?: string | undefined
}
