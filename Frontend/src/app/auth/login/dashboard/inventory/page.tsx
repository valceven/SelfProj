import React from 'react'
import { 
    TriangleAlert,
    SignalHigh,
    PhilippinePeso,
    Search,
    Filter,
} from 'lucide-react'
import { CardContent, CardDescription, CardTitle, Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IngredientsTable } from '@/components/tables/ing-table';

const ingredientStats = [
    {
        title: "Total Ingredients",
        value: 12,
        extra: "Across 7 categories",
        icon: SignalHigh
    },
    {
        title: "Low Stock Items",
        value: 0,
        extra: "Items below reorder level",
        icon: TriangleAlert,
    },
    {
        title: "Total Inventory Value",
        value: "₱120,000",
        extra: "Based on current quantities",
        icon: PhilippinePeso
    }
]

const page = () => {
    return (
        <div className="min-h-screen bg-background p-4 md:p-6 pt-20 md:pt-6">
            <div className='max-w-7xl mx-auto space-y-8'>
                {/* Inventory Management */}
                <div>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-foreground'>Inventory Management</h1>
                    <p className='text-xs sm:text-sm md:text-base text-muted-foreground'>Manage and track inventory supplies</p>
                </div>

                {/* Total Ingredients */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {ingredientStats.map((ingredient, index) => {
                        const Icon = ingredient.icon;
                        return (
                            <Card key={index} className='bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-0'>
                                <CardHeader className='pb-2'>
                                    <div className='flex items-center justify-between'>
                                        <CardDescription className='text-sm font-medium'>
                                            {ingredient.title}
                                        </CardDescription>
                                        <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center'>
                                            <Icon className={`h-4 w-4 ${ingredient.icon === TriangleAlert ? 'text-red-500' : 'text-primary'}`}/>
                                        </div>
                                    </div>                                    
                                </CardHeader>
                                <CardContent>
                                    <div className='space-y-2'>
                                        <CardTitle className='text-xl sm:text-2xl font-bold'>
                                            {ingredient.value}
                                        </CardTitle>
                                        <span className='text-xs sm:text-sm text-primary'>
                                            {ingredient.extra}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Inventory Levels */}

                {/* Inventory Items */}
                <Card className='border-0 bg-card/50 backdrop-blur-sm'>
                    <CardHeader>
                        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4'>
                            <div>
                                <CardTitle>Inventory Items</CardTitle>
                                <CardDescription>Manage your ingredients and supplies</CardDescription>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='relative'>
                                    <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                                    <Input
                                    type='search'
                                    placeholder='Search Ingredients...'
                                    className='pl-8 w-full sm:w-[250px] md:w-[300px]'
                                    />
                                </div>
                                <Button size="icon">
                                    <Filter className='h-4 w-4' />
                                    <span className='sr-only'>Filter</span>
                                </Button>
                            </div>
                        </div>
                    </CardHeader>   
                    <CardContent>
                        <IngredientsTable />
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

export default page