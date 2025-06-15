'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
 } from '@/components/ui/card';
 import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
    DialogTitle
 } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Clock, Edit, User } from 'lucide-react';
import { ribevalRecipes } from '@/lib/recipesData';
import Image from 'next/image';

interface Recipe {
  id: string
  name: string
  description: string
  category: string
  prepTime: string
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  imageUrl: string
  ingredients: string[]
  instructions: string[]
}


const Page = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        setRecipes(ribevalRecipes)
    }, [])

    return (
        <div className="min-h-screen bg-background p-4 md:p-6 pt-20 md:pt-6">
            <h1 className="max-w-7xl mx-auto space-y-8">
                {/* Recipes Section */}
                <div>
                    <h1 className='text-lg md:text-2xl font-bold text-foreground'>Recipe Collections</h1>
                    <p className='text-xs md:text-sm text-muted-foreground'>Manage the recipes here!</p>
                </div>

                {/* Search Recipes */}

                {/* Recipe Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {recipes.map((recipe, index) => {
                    return (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <Card className='bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-0'>
                                    <div className='relative overflow-hidden rounded-t-lg'>
                                        <Image 
                                            src="/placeholder.svg" 
                                            alt={`${recipe.name} photo`} 
                                            fill
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"                                        />
                                    </div>
                                    <div className='absolute top-2 right-2'>
                                        <Badge>{recipe.difficulty}</Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className='font-bold line-clamp-1'>{recipe.name}</CardTitle>
                                        <CardDescription className='line-clamp-2'>{recipe.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className='flex items-center justify-between text-sm text-muted-foreground space-y-2'>
                                            <div className='flex items-center gap-1'>
                                                <Clock className='h-4 w-4' />
                                                {recipe.prepTime}
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <User className='h-4 w-4' />
                                                {recipe.servings} servings
                                            </div>
                                        </div>
                                        <Badge variant='secondary' className='mt-2'>{recipe.category}</Badge>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                                <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
                                    <DialogHeader className='py-2'>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <DialogTitle className='text-lg md:text-xl'>{recipe.name}</DialogTitle>
                                                <DialogDescription className='text-xs md:text-sm'>{recipe.description}</DialogDescription>
                                            </div>
                                            <Button size='sm'>
                                                <Edit className='h-4 w-4'/>
                                            </Button>
                                        </div>
                                    </DialogHeader>
                                    <RecipeView recipe={recipe}/>
                                </DialogContent>
                        </Dialog>
                        )
                    })}
                </div>

            </h1>
        </div>
    );  
}

const RecipeView = ({ recipe }: {recipe: Recipe}) => (
    <div className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <Image 
                    src={recipe.imageUrl}
                    alt={recipe.name + 'picture'}
                    height={150}
                    width={300}
                    className='w-full h-64 object-cover rounded-lg'
                />
            </div>
            <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Label className="text-sm font-medium text-muted-foreground">Prep Time</Label>
                        <p className="text-sm font-semibold">{recipe.prepTime}</p>
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-muted-foreground">Servings</Label>
                        <p className="text-sm font-semibold">{recipe.servings}</p>
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-muted-foreground">Category</Label>
                        <p className="text-sm font-semibold">{recipe.category}</p>
                    </div>
                    <div>
                        <Label className='block text-sm font-medium text-muted-foreground'>Difficulty</Label>
                        <Badge
                            className={cn(
                                'mt-2',
                                recipe.difficulty === "Easy" && "bg-green-100 text-green-800",
                                recipe.difficulty === "Medium" && "bg-yellow-100 text-yellow-800",
                                recipe.difficulty === "Hard" && "bg-red-100 text-red-800"
                            )}
                        >
                            {recipe.difficulty}
                        </Badge>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <h3 className='text-lg font-semibold mb-3'>Ingredients</h3>
                <ul className='space-y-2'>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-primary rounded-full' />
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-3'>Ingredients</h3>
                <ul className='space-y-2'>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                {index + 1}
                            </span>
                            {instruction}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default Page