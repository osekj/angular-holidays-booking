export class MyFilter {
    constructor(
       public country?: string,
       public departure?: Date,
       public people?: number,
       public priceFrom?: number,
       public priceTo?: number,
       public days?: number,
       public type?: string,
    ){}
 }