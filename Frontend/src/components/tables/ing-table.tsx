'use client'

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

import { ingredientsData } from "@/lib/ingredientsData";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";

export const IngredientsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalItems = ingredientsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = ingredientsData.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  const getVisiblePages = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const getStatus = (currentQty: number, reorderLevel: number) => {
    return currentQty <= reorderLevel ? "Low Stock" : "In Stock";
  };

  const calculateValue = (currentQty: number, unitPrice: number) => {
    return (currentQty * unitPrice).toFixed(2);
  };

  return (
    <>
      <div className="min-h-[360px]">
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
          <TableBody className="min-h-[320px]"> {/* Fixed body height */}
            {currentData.map((ingredient) => (
              <TableRow key={ingredient.id} className="border-b border-border/40">
                <TableCell className="font-medium py-4">{ingredient.name}</TableCell>
                <TableCell className="py-4">{ingredient.category}</TableCell>
                <TableCell className="py-4">{ingredient.currentQuantity} {ingredient.unit}</TableCell>
                <TableCell className="py-4">{ingredient.initialQuantity} {ingredient.unit}</TableCell>
                <TableCell className="py-4">₱{ingredient.unitPrice}</TableCell>
                <TableCell className="py-4">₱{calculateValue(ingredient.currentQuantity, ingredient.unitPrice)}</TableCell>
                <TableCell className="py-4">{ingredient.reorderLevel} {ingredient.unit}</TableCell>
                <TableCell className="text-right py-4">
                  <Badge
                    className={`${
                      getStatus(ingredient.currentQuantity, ingredient.reorderLevel) === "Low Stock"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {getStatus(ingredient.currentQuantity, ingredient.reorderLevel)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {/* Fill remaining space if fewer items */}
            {Array.from({ length: itemsPerPage - currentData.length }, (_, index) => (
              <TableRow key={`empty-${index}`} className="h-16">
                <TableCell colSpan={8}>&nbsp;</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-2 sm:gap-0">
        <div className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
          Showing {startIdx + 1} to {Math.min(endIdx, totalItems)} of {totalItems} entries
        </div>

        <Pagination className="order-1 sm:order-2">
          <PaginationContent className="flex-wrap justify-center">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={`text-xs sm:text-sm ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
                />
            </PaginationItem>

            {getVisiblePages().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  className="text-xs sm:text-sm min-w-[32px] sm:min-w-[40px]"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages - 1 && (
              <PaginationItem className="hidden sm:inline-flex">
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={`text-xs sm:text-sm ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};