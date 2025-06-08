// components/PayrollTable.jsx
'use client';

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

export const PayrollTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[160px]">Month</TableHead>
          <TableHead>Base Rate</TableHead>
          <TableHead>Incentives</TableHead>
          <TableHead>Deductions</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Net Pay</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
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
