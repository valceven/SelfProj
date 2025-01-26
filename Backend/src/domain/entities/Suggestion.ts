export class Suggestion {

    constructor (
        public readonly suggestionId: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public message: string
    ) {}
}