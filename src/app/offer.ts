export class MyOffer {
    constructor(
        public id: string,
        public offerName: string,
        public departureDate: Date,
        public price: number,
        public people: number,
        public days: number,
        public image: string
    ){}
 }