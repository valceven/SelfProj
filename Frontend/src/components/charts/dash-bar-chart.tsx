"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 200, mobile: 150 },
]

const chartConfig = {
  desktop: {
    label: "Inoburan",
    color: "hsl(var(--primary))", // Your teal
  },
  mobile: {
    label: "Pitalo",
    color: "hsl(var(--secondary))", // Your orange
  },
} satisfies ChartConfig

export const DashBarChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] md:h-[250px] lg:h-[300px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
