export class ShiftSales {

    constructor(
        public readonly shiftSalesId: number,
        public salesId: number,
        public shiftType: number,
        public grossSales: number,
        public expenses: number,
        public netSales: number
    ) {}

}