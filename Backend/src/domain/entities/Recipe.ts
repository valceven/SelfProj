export class Recipe {
    public totalCost: number | null = null;

    constructor(
        public readonly recipeId: number,
        public details: string,
        public name: string,
        public price: number
    ) {}

    async calculateTotalCost(fetchIngredies: (recipeId: number) => Promise<{ cost: number }[]>): Promise<void> {
         const ingredients = await fetchIngredies(this.recipeId);
         this.totalCost = ingredients.reduce((sum, ingredient) => sum + ingredient.cost, 0);
    }
}