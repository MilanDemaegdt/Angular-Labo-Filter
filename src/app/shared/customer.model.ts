export class Customer {
    constructor(
        public id: number,
        public name: string,
        public city: string,
        public orderTotal: number,
        public customerSince: string
      ) {}
}