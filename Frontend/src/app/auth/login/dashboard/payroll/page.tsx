import React from 'react'
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { 
    PersonStandingIcon, 
    PhilippinePeso,
    ChevronRightIcon
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PayrollLineChart } from '@/components/charts/pay-line-chart';
import { employeesData } from '@/lib/employeesData';

const employeeStats = [
    {
        title: "Total Employees",
        value: 6,
        extra: "+1 from last month",
        icon: PersonStandingIcon,
    },
    {
        title: "Monthly Payroll",
        value: "₱173,000",
        extra: "+5.2% from last month",
        icon: PhilippinePeso,
    },
    {
        title: "Avg. Salary Growth",
        value: "+12.8%",
        extra: "No changes",
        icon: PersonStandingIcon,
    }
];

const page = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/70 p-6'>
            <div className='max-w-7xl mx-auto space-y-8'>
                {/* Payroll Management*/}
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold text-foreground'>Payroll Management</h1>
                    <p className='text-muted-foreground'>Manage employee payroll efficiently.</p>   
                </div>

                {/* Total Details */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {employeeStats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className='bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-0'>
                                <CardHeader className='pb-2'>
                                    <div className='flex items-center justify-between'>
                                        <CardDescription className='text-sm font-medium'>
                                            {stat.title}
                                        </CardDescription>
                                        <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center'>
                                            <Icon className='h-4 w-4 text-primary' />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className='space-y-2'>
                                        <CardTitle className="text-2xl font-bold">
                                            {stat.value}
                                        </CardTitle>
                                        <p className="text-sm text-primary">
                                            {stat.extra}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Salary Growth Chart */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Salary Growth Trend</CardTitle>
                        <CardDescription>
                            Average salary progression over the last 6 months.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PayrollLineChart />
                    </CardContent>
                </Card>

                {/* Employee List */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className='text-lg font-semibold'>Employee List</CardTitle>
                        <CardDescription className='text-sm text-muted-foreground'>
                            Click on an employee to view details or edit their information.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                        {employeesData.map((employee, index) => {
                            return (
                                <Link key={index} href={`payroll/employees/${index}`} className='no-underline' prefetch={true}>
                                    <Card className='bg-background/15 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer space-y-2'>
                                        <CardHeader>
                                            <CardTitle className='flex items-center justify-between'>
                                                <div className='flex flex-col space-y-1'>
                                                    <div>
                                                        {employee.name}
                                                    </div>
                                                    <div className='text-sm text-muted-foreground'>
                                                        {employee.position}
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-x-2'>
                                                    <Badge variant={employee.status === 'Active' ? 'default' : 'destructive'}>
                                                        {employee.status}
                                                    </Badge>
                                                    <ChevronRightIcon className='h-4 w-4 text-muted-foreground' />
                                                </div>
                                            </CardTitle>
                                            <CardDescription className='text-lg flex flex-col'>
                                                <span className='text-md font-bold text-foreground'>{employee.salary}</span>
                                                <span className='text-sm text-muted-foreground'> Monthly Salary</span>
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            );
                        })}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

export default page