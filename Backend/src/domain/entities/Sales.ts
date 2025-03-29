export class Sales {

    constructor(
        public readonly salesId: number,
        public date: Date,
        public grossSales: number,
        public expenses: number,
        public netSales: number,
        public monthYear: string 
    ) {}

}