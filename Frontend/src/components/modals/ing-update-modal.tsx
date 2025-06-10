"use client"

import type React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface Ingredient {
  id: string | number,
  name: string,
  category: string,
  currentQuantity?: number,
  initialQuantity?: number,
  unit: string,
  unitPrice?: number,
}

interface IngredientModalProps {
  ingredient?: Ingredient | null // Optional for create mode
  isOpen: boolean
  onClose: () => void
  onSubmit: (ingredient: Ingredient) => void
  mode: "create" | "update"
}

const categories = [
  "Vegetables",
  "Fruits",
  "Meat & Poultry",
  "Seafood",
  "Dairy",
  "Grains & Cereals",
  "Spices & Seasonings",
]

const units = ["kg", "g", "L", "mL", "pcs", "lbs", "oz"]

// Create validation schema - stricter requirements
const createValidationSchema = Yup.object({
  name: Yup.string()
    .required("Ingredient name is required")
    .min(2, "Name must be at least 2 characters"),
  category: Yup.string().required("Category is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .min(0, "Quantity must be positive"),
  unit: Yup.string().required("Unit is required"),
  costPerUnit: Yup.number()
    .required("Cost per unit is required")
    .min(0, "Cost must be positive"),
  supplier: Yup.string()
    .required("Supplier is required")
    .min(2, "Supplier name must be at least 2 characters"),
  reorderLevel: Yup.number()
    .required("Reorder level is required")
    .min(0, "Reorder level must be positive"),
  expiryDate: Yup.string().nullable(), // Allow empty string or null for optional date
  notes: Yup.string().nullable(),
})

// Update validation schema - more flexible
const updateValidationSchema = Yup.object({
  name: Yup.string().min(2, "Name must be at least 2 characters").nullable(),
  category: Yup.string().nullable(),
  quantity: Yup.number().min(0, "Quantity must be positive").nullable(),
  unit: Yup.string().nullable(),
  costPerUnit: Yup.number().min(0, "Cost must be positive").nullable(),
  supplier: Yup.string().min(2, "Supplier name must be at least 2 characters").nullable(),
  reorderLevel: Yup.number().min(0, "Reorder level must be positive").nullable(),
  expiryDate: Yup.string().nullable(),
  notes: Yup.string().nullable(),
})

export function IngredientModal({
  ingredient,
  isOpen,
  onClose,
  onSubmit,
  mode,
}: IngredientModalProps) {
  const initialValues: Ingredient = {
    id: ingredient?.id || "",
    name: ingredient?.name || "",
    category: ingredient?.category || "",
    unit: ingredient?.unit || "kg",
  }

  const validationSchema = mode === "create" ? createValidationSchema : updateValidationSchema
  const isCreateMode = mode === "create"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isCreateMode ? "Add New Ingredient" : "Update Ingredient"}
          </DialogTitle>
          <DialogDescription>
            {isCreateMode
              ? "Fill in the details to add a new ingredient to your inventory."
              : "Make changes to the ingredient details below."}
          </DialogDescription>
        </DialogHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true} // Important to re-initialize form when 'ingredient' prop changes in update mode
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Generate ID for new ingredients
            if (isCreateMode && !values.id) {
              values.id = `ingredient_${Date.now()}_${Math.random()
                .toString(36)
                .substr(2, 9)}`
            }

            onSubmit(values)
            onClose()

            // Reset form only for create mode
            if (isCreateMode) {
              resetForm()
            }

            setSubmitting(false)
          }}
        >
          {({ values, errors, touched, setFieldValue, isValid, isSubmitting }) => (
            <Form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Ingredient Name
                    {isCreateMode && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Enter ingredient name"
                    className={errors.name && touched.name ? "border-red-500" : ""}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">
                    Category
                    {isCreateMode && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  <Select
                    onValueChange={(value) => setFieldValue("category", value)}
                    value={values.category}
                  >
                    <SelectTrigger
                      className={
                        errors.category && touched.category ? "border-red-500" : ""
                      }
                    >
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
        
                <div className="space-y-2">
                  <Label htmlFor="unit">
                    Unit
                    {isCreateMode && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  <Select
                    onValueChange={(value) => setFieldValue("unit", value)}
                    value={values.unit}
                  >
                    <SelectTrigger
                      className={errors.unit && touched.unit ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage
                    name="unit"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || (isCreateMode && !isValid)}
                >
                  {isSubmitting
                    ? isCreateMode
                      ? "Adding..."
                      : "Updating..."
                    : isCreateMode
                    ? "Add Ingredient"
                    : "Update Ingredient"}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}