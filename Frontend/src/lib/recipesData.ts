// lib/bakery-test-data.ts
// Filipino Small Scale Bakery Recipe Test Data

export interface Recipe {
  id: string;
  name: string;
  category: string;
  description: string;
  prepTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const ribevalRecipes: Recipe[] = [
  {
    id: "pandesal-001",
    name: "Pandesal",
    category: "Breads",
    description: "Classic Filipino bread rolls, soft and slightly sweet, perfect for breakfast with coffee",
    prepTime: "3 hours",
    servings: 24,
    difficulty: "Medium",
    imageUrl: "/images/pandesal.jpg",
    ingredients: [
      "500g bread flour",
      "80g granulated sugar",
      "10g instant yeast",
      "8g salt",
      "60g butter, softened",
      "1 large egg",
      "280ml warm milk",
      "2 tbsp vegetable oil",
      "Breadcrumbs for coating"
    ],
    instructions: [
      "Mix flour, sugar, yeast, and salt in a large bowl",
      "Add butter, egg, warm milk, and oil. Mix until dough forms",
      "Knead for 10 minutes until smooth and elastic",
      "Place in oiled bowl, cover, let rise for 1.5 hours",
      "Punch down dough, divide into 24 pieces",
      "Shape into oval rolls, roll in breadcrumbs",
      "Place on greased baking sheets, let rise 45 minutes",
      "Bake at 180°C for 15-18 minutes until golden brown",
      "Cool on wire rack before serving"
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: "ensaymada-002",
    name: "Ensaymada",
    category: "Pastries",
    description: "Buttery brioche-like pastry topped with cheese and sugar, a Filipino favorite",
    prepTime: "4 hours",
    servings: 12,
    difficulty: "Hard",
    imageUrl: "/images/ensaymada.jpg",
    ingredients: [
      "400g bread flour",
      "100g granulated sugar",
      "8g instant yeast",
      "6g salt",
      "4 large eggs",
      "200ml warm milk",
      "200g butter, softened",
      "100g Eden cheese, grated",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Combine flour, sugar, yeast, and salt",
      "Add eggs and warm milk, mix until combined",
      "Knead for 15 minutes until smooth",
      "Gradually add softened butter while kneading",
      "Place in oiled bowl, rise for 2 hours",
      "Divide into 12 pieces, shape into coils",
      "Place in greased muffin tins, rise 1 hour",
      "Bake at 175°C for 20-25 minutes",
      "Brush with butter, top with cheese and powdered sugar"
    ],
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: "bibingka-003",
    name: "Bibingka",
    category: "Cakes",
    description: "Traditional rice cake cooked in clay pots, topped with salted egg and cheese",
    prepTime: "45 minutes",
    servings: 8,
    difficulty: "Medium",
    imageUrl: "/images/bibingka.jpg",
    ingredients: [
      "2 cups rice flour",
      "1 cup glutinous rice flour",
      "1 cup coconut milk",
      "1 cup fresh milk",
      "3 eggs",
      "1/2 cup sugar",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "2 salted eggs, sliced",
      "100g kesong puti or white cheese",
      "Banana leaves for lining",
      "Grated coconut for topping"
    ],
    instructions: [
      "Line clay pots or round pans with banana leaves",
      "Mix rice flours, sugar, baking powder, and salt",
      "Whisk together coconut milk, milk, and eggs",
      "Combine wet and dry ingredients until smooth",
      "Pour into prepared pans",
      "Top with salted egg slices and cheese",
      "Bake at 200°C for 25-30 minutes",
      "Sprinkle with grated coconut before serving"
    ],
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17')
  },
  {
    id: "ube-cupcakes-004",
    name: "Ube Cupcakes",
    category: "Cupcakes",
    description: "Purple yam flavored cupcakes with cream cheese frosting, a modern Filipino treat",
    prepTime: "1.5 hours",
    servings: 18,
    difficulty: "Easy",
    imageUrl: "/images/ube-cupcakes.jpg",
    ingredients: [
      "2 cups all-purpose flour",
      "1.5 cups granulated sugar",
      "1/2 cup butter, softened",
      "3 large eggs",
      "1 cup milk",
      "1/4 cup ube extract or paste",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "Purple food coloring",
      "Cream cheese frosting",
      "Ube flakes for decoration"
    ],
    instructions: [
      "Preheat oven to 175°C, line cupcake tins",
      "Cream butter and sugar until light and fluffy",
      "Add eggs one at a time, then ube extract",
      "Mix flour, baking powder, and salt separately",
      "Alternate adding dry ingredients and milk",
      "Add food coloring for desired purple shade",
      "Fill cupcake liners 2/3 full",
      "Bake 18-20 minutes until toothpick comes clean",
      "Cool completely before frosting and decorating"
    ],
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: "buko-pie-005",
    name: "Buko Pie",
    category: "Pies",
    description: "Creamy coconut pie with tender young coconut strips, Laguna's famous dessert",
    prepTime: "2 hours",
    servings: 10,
    difficulty: "Medium",
    imageUrl: "/images/buko-pie.jpg",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp salt",
      "1/2 cup cold butter, cubed",
      "4-5 tbsp ice water",
      "3 cups fresh buko strips",
      "1 can condensed milk",
      "1 can evaporated milk",
      "4 egg yolks",
      "3 tbsp cornstarch",
      "1/4 cup sugar",
      "1 egg for egg wash"
    ],
    instructions: [
      "Make pastry: mix flour and salt, cut in butter",
      "Add ice water gradually until dough forms",
      "Divide dough, roll for bottom and top crust",
      "Combine buko, milks, egg yolks, cornstarch, sugar",
      "Cook filling over medium heat until thick",
      "Line pie dish with bottom crust",
      "Add buko filling, cover with top crust",
      "Brush with egg wash, cut vents",
      "Bake at 190°C for 45-50 minutes until golden"
    ],
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19')
  },
  {
    id: "mais-muffins-006",
    name: "Mais Muffins",
    category: "Muffins",
    description: "Sweet corn muffins with kernels, moist and flavorful Filipino-style",
    prepTime: "45 minutes",
    servings: 12,
    difficulty: "Easy",
    imageUrl: "/images/mais-muffins.jpg",
    ingredients: [
      "1.5 cups all-purpose flour",
      "1/2 cup cornmeal",
      "3/4 cup granulated sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1/3 cup melted butter",
      "2 large eggs",
      "1 cup milk",
      "1 cup corn kernels (fresh or canned)",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat oven to 180°C, line muffin tin",
      "Mix flour, cornmeal, sugar, baking powder, salt",
      "Whisk melted butter, eggs, milk, vanilla",
      "Pour wet ingredients into dry ingredients",
      "Fold gently until just combined",
      "Stir in corn kernels",
      "Fill muffin cups 2/3 full",
      "Bake 20-25 minutes until golden brown",
      "Cool in pan 5 minutes before removing"
    ],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: "monggo-bread-007",
    name: "Monggo Bread",
    category: "Breads",
    description: "Soft bread filled with sweet mung bean paste, a traditional Filipino favorite",
    prepTime: "3.5 hours",
    servings: 16,
    difficulty: "Medium",
    imageUrl: "/images/monggo-bread.jpg",
    ingredients: [
      "450g bread flour",
      "70g sugar",
      "8g instant yeast",
      "6g salt",
      "50g butter",
      "1 egg",
      "250ml warm water",
      "300g cooked mung bean paste",
      "2 tbsp brown sugar",
      "1/4 tsp vanilla extract",
      "Sesame seeds for topping"
    ],
    instructions: [
      "Mix flour, sugar, yeast, and salt",
      "Add butter, egg, and warm water",
      "Knead until smooth and elastic, about 12 minutes",
      "First rise in oiled bowl for 1.5 hours",
      "Mix mung bean paste with brown sugar and vanilla",
      "Divide dough into 16 pieces",
      "Roll each piece, add filling, seal edges",
      "Place on baking sheets, rise 45 minutes",
      "Brush with egg wash, sprinkle sesame seeds, bake at 175°C for 18-20 minutes"
    ],
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21')
  },
  {
    id: "leche-flan-cake-008",
    name: "Leche Flan Cake",
    category: "Cakes",
    description: "Combination of sponge cake and leche flan in one delicious dessert",
    prepTime: "2.5 hours",
    servings: 12,
    difficulty: "Hard",
    imageUrl: "/images/leche-flan-cake.jpg",
    ingredients: [
      "For Flan: 10 egg yolks, 1 can condensed milk, 1 can evaporated milk",
      "For Caramel: 1 cup granulated sugar, 1/4 cup water",
      "For Cake: 6 eggs, 1 cup sugar, 1 cup all-purpose flour",
      "1 tsp baking powder",
      "1/4 cup melted butter",
      "1 tsp vanilla extract",
      "1/4 cup milk"
    ],
    instructions: [
      "Make caramel: heat sugar and water until amber",
      "Pour caramel into llanera or round pan",
      "Mix flan ingredients, strain, pour over caramel",
      "For cake: beat eggs and sugar until thick",
      "Fold in flour, baking powder gently",
      "Add melted butter, vanilla, and milk",
      "Pour cake batter over flan mixture",
      "Steam for 40-50 minutes or bake in bain-marie",
      "Cool completely before unmolding"
    ],
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22')
  },
  {
    id: "cheese-rolls-009",
    name: "Cheese Rolls",
    category: "Pastries",
    description: "Flaky pastry rolls filled with creamy cheese, popular merienda item",
    prepTime: "2 hours",
    servings: 20,
    difficulty: "Medium",
    imageUrl: "/images/cheese-rolls.jpg",
    ingredients: [
      "400g puff pastry or pie crust dough",
      "250g cream cheese, softened",
      "100g cheddar cheese, grated",
      "50g granulated sugar",
      "2 egg yolks",
      "1 tsp vanilla extract",
      "1 egg for egg wash",
      "Sesame seeds for sprinkling"
    ],
    instructions: [
      "Mix cream cheese, cheddar, sugar, egg yolks, vanilla",
      "Roll pastry into rectangle, about 1/4 inch thick",
      "Spread cheese mixture evenly over pastry",
      "Roll tightly from long side, seal edge",
      "Wrap in plastic, chill 30 minutes",
      "Cut into 1-inch thick slices",
      "Place on lined baking sheet",
      "Brush with egg wash, sprinkle sesame seeds",
      "Bake at 180°C for 20-25 minutes until golden"
    ],
    createdAt: new Date('2024-01-23'),
    updatedAt: new Date('2024-01-23')
  },
  {
    id: "pineapple-muffins-010",
    name: "Pineapple Muffins",
    category: "Muffins",
    description: "Tropical pineapple muffins with chunks of fresh fruit, very moist and sweet",
    prepTime: "50 minutes",
    servings: 12,
    difficulty: "Easy",
    imageUrl: "/images/pineapple-muffins.jpg",
    ingredients: [
      "2 cups all-purpose flour",
      "3/4 cup granulated sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1/3 cup vegetable oil",
      "1 large egg",
      "3/4 cup pineapple juice",
      "1/4 cup milk",
      "1 cup diced fresh pineapple",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat oven to 180°C, prepare muffin tin",
      "Combine flour, sugar, baking powder, salt",
      "Mix oil, egg, pineapple juice, milk, vanilla",
      "Pour wet ingredients into dry ingredients",
      "Fold until just combined, don't overmix",
      "Gently fold in diced pineapple",
      "Divide batter among muffin cups",
      "Bake 22-25 minutes until golden",
      "Cool 5 minutes before removing from pan"
    ],
    createdAt: new Date('2024-01-24'),
    updatedAt: new Date('2024-01-24')
  },
  {
    id: "spanish-bread-011",
    name: "Spanish Bread",
    category: "Breads",
    description: "Sweet bread rolls coated with breadcrumbs and filled with buttery sugar mixture",
    prepTime: "3 hours",
    servings: 18,
    difficulty: "Medium",
    imageUrl: "/images/spanish-bread.jpg",
    ingredients: [
      "500g bread flour",
      "80g granulated sugar",
      "10g instant yeast",
      "8g salt",
      "80g butter, softened",
      "2 eggs",
      "250ml warm milk",
      "For filling: 100g butter, 80g brown sugar, 50g breadcrumbs",
      "Extra breadcrumbs for coating"
    ],
    instructions: [
      "Mix flour, sugar, yeast, and salt",
      "Add butter, eggs, and warm milk",
      "Knead until smooth, about 12 minutes",
      "First rise in oiled bowl for 1.5 hours",
      "Make filling: cream butter, brown sugar, breadcrumbs",
      "Divide dough into 18 pieces",
      "Roll each piece, add filling, roll up",
      "Roll in breadcrumbs, place on baking sheets",
      "Rise 45 minutes, bake at 175°C for 15-18 minutes"
    ],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: "cassava-cake-012",
    name: "Cassava Cake",
    category: "Cakes",
    description: "Dense, chewy cake made from grated cassava with coconut and cheese topping",
    prepTime: "1.5 hours",
    servings: 15,
    difficulty: "Easy",
    imageUrl: "/images/cassava-cake.jpg",
    ingredients: [
      "2 lbs fresh cassava, grated",
      "1 can coconut milk",
      "1 can condensed milk",
      "1/2 cup evaporated milk",
      "3 eggs",
      "1/2 cup granulated sugar",
      "1/4 cup melted butter",
      "1/2 tsp vanilla extract",
      "100g cheese, grated",
      "Extra coconut milk for topping"
    ],
    instructions: [
      "Preheat oven to 175°C, grease 9x13 pan",
      "Mix grated cassava with coconut milk",
      "Add condensed milk, evaporated milk, eggs",
      "Stir in sugar, melted butter, vanilla",
      "Pour mixture into prepared pan",
      "Bake 45 minutes until set",
      "Top with grated cheese and extra coconut milk",
      "Bake additional 15 minutes until golden",
      "Cool completely before cutting"
    ],
    createdAt: new Date('2024-01-26'),
    updatedAt: new Date('2024-01-26')
  }
];

// Helper function to get recipes by category
export const getRecipesByCategory = (category: string): Recipe[] => {
  return ribevalRecipes.filter(recipe => recipe.category === category);
};

// Helper function to get recipe by ID
export const getRecipeById = (id: string): Recipe | undefined => {
  return ribevalRecipes.find(recipe => recipe.id === id);
};

// Helper function to get all categories
export const getAllCategories = (): string[] => {
  const categories = ribevalRecipes.map(recipe => recipe.category);
  return [...new Set(categories)];
};

// Helper function to search recipes
export const searchRecipes = (query: string): Recipe[] => {
  const searchTerm = query.toLowerCase();
  return ribevalRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchTerm)
    )
  );
};