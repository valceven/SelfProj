'use client';

import React from 'react';
import { employeesData } from '@/lib/employeesData';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
    ArrowLeft,
    DollarSign,
    Calendar,
    Clock,
    StampIcon,
    Edit,
 } from 'lucide-react';
import { CardDescription, CardHeader, Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PayrollTable } from '@/components/tables/pay-table';


const icon = [
    DollarSign, Calendar, Clock, StampIcon
];

export default function Page() {
    const params = useParams();
    const id = params?.id ? Number(params.id) : undefined;
    const user = typeof id === 'number' && !isNaN(id) ? employeesData[id] : undefined;

    return (
        <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/70 p-6'>
            <div className='max-w-7xl mx-auto space-y-8'>
                {/* User Details */}
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0'> 
                    <div className="flex items-center space-x-3 sm:space-x-6"> 
                        <div className='text-primary hover:text-brand-teal-600 transition-colors'> 
                            <Link 
                                href="/auth/login/dashboard/payroll/" 
                                className="inline-flex items-center text-sm font-medium" 
                            > 
                                <div className="flex items-center justify-center p-2 rounded-full hover:bg-brand-teal-50 transition"> 
                                    <ArrowLeft className="h-4 w-4" /> 
                                </div> 
                                <span className="ml-1 hidden sm:inline">Back to payroll</span>
                                <span className="ml-1 sm:hidden">Back</span>
                            </Link> 
                        </div> 
                        
                        <div className="min-w-0"> 
                            <span className='block text-xl sm:text-2xl font-bold truncate'>{user.name}</span> 
                            <span className='block text-muted-foreground truncate'>{user.position}</span> 
                        </div> 
                    </div> 
                    
                    <div> 
                        <Button> 
                            <Edit /> 
                            Edit Details 
                        </Button> 
                    </div> 
                </div>
                
                {/* Card Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {user?.stats.map((stat, index) => {
                        const Icon = icon[index];
                        return (
                            <Card key={index} className='bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-0'>
                                <CardHeader className='pb-2'>
                                    <div className='flex items-center justify-between'>
                                        <CardDescription className='text-sm font-semibold'>
                                            <span>{stat.title}</span>
                                        </CardDescription>
                                        <CardDescription>
                                            <Icon className="h-4 w-4 text-primary" />
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className='space-y-2'>
                                        <CardTitle className='text-2xl font-bold'>
                                            {stat.value}
                                        </CardTitle>
                                        <CardDescription className='text-sm text-primary'>
                                            {stat.label}
                                        </CardDescription>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Employee Table */}
                <Card className='border-0 bg-card/50 backdrop-blur-sm'>
                    <CardHeader>
                        <CardTitle>
                            Payroll History
                        </CardTitle>
                        <CardDescription>
                            Employee monthly payroll records
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PayrollTable />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}