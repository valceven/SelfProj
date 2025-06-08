'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { payrollData } from "@/lib/payrollData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const IngredientsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[160px]">
            <div className="flex items-center space-x-1">
                <span>Ingredient</span>
                <ArrowUpDown className="h-3 w-3"/>
            </div>
          </TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Current Qty</TableHead>
          <TableHead>Initial Qty</TableHead>
          <TableHead>Unit Price</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Reorder Level</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payrollData.map((payroll, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{payroll.month}</TableCell>
            <TableCell>{payroll.baseRate}</TableCell>
            <TableCell>{payroll.incentives}</TableCell>
            <TableCell>{payroll.deductions}</TableCell>
            <TableCell>{payroll.tax}</TableCell>
            <TableCell>{payroll.netPay}</TableCell>
            <TableCell>
              <Badge
                className={`${
                  payroll.status === "Paid"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-white"
                }`}
              >
                {payroll.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="secondary">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
