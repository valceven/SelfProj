"use client";

// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhilippinePeso } from "lucide-react";
import { DashBarChart } from "@/components/charts/dash-bar-chart";

const Dashboard = () => {
   // const { user, isLoading } = useAuth();
    //const router = useRouter();

    const user = {
        username: "Admin",
        role: "admin",
        email: "ribevalceven@gmail.com"
    }

    // useEffect(() => {
    //     console.log(`USER NI: ${user}`);
    //     if (!isLoading && !user) {
    //         router.push("/auth/login");
    //     }
    // }, [user, router, isLoading]);

    // if (isLoading) {
    //     return (
    //         <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-8">
    //             <div className="text-center space-y-4">
    //                 <div className="animate-pulse w-12 h-12 bg-primary/20 rounded-lg mx-auto"></div>
    //                 <div className="text-xl font-medium text-muted-foreground">Loading dashboard...</div>
    //             </div>
    //         </div>
    //     );
    // }

    // if (!user) {
    //     return null;
    // }

    const quickStats = [
        {
            title: "Inoburan Revenue",
            value: "₱12,450",
            change: "+8.2%",
            icon: PhilippinePeso,
            positive: true
        },
        {
            title: "Pitalo Revenue",
            value: "₱5,490",
            change: "+7.7%",
            icon: PhilippinePeso,
            positive: true
        },
    ];

    return (
        <div className="min-h-screen bg-background p-4 md:p-6 pt-20 md:pt-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Welcome Header */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                            Welcome aboard, {user.username}
                        </h1>
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                            Admin
                        </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Here&apos;s what&apos;s happening at Ribeval Bakeshop!
                    </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {quickStats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <CardDescription className="text-sm font-medium">
                                            {stat.title}
                                        </CardDescription>
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Icon className="h-4 w-4 text-primary" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-1">
                                        <CardTitle className="text-xl sm:text-2xl font-bold">
                                            {stat.value}
                                        </CardTitle>
                                        <p className={
                                            `text-xs sm:text-sm ${stat.positive ? 
                                            'text-primary' : 'text-muted-foreground'}`
                                            }>
                                            {stat.change}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Quick Actions */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl font-bold">Analytical Dashboard</CardTitle>
                        <CardDescription>
                            What a nice day to manage your bakeshop!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DashBarChart />
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-xl font-bold">
                            Recent Activity
                        </CardTitle>
                        <CardDescription>
                            Latest updates from your bakeshop
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                "New order #1234 received - Chocolate Cake x2",
                                "Inventory alert: Low stock on All-purpose flour",
                                "Staff member Maria checked in at 6:00 AM",
                                "Daily sales report generated successfully"
                            ].map((activity, index) => (
                                <div key={index} className="flex items-center space-x-3 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-muted-foreground">{activity}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;