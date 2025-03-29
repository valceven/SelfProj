import supabase from "../database/supabaseClient";
import { Sales } from "../../domain/entities/Sales";
import { ISalesRepository } from "../../domain/interfaces/ISalesRepository";
import { CreateSalesDto } from "../../interface/dto/Sales/CreateSalesDto";
import { UpdateSalesDto } from "../../interface/dto/Sales/UpdateSalesDto";

export class SalesRepository implements ISalesRepository {
    async findAll(): Promise<Sales[]> {
        try {
            const { data, error } = await supabase
                .from('Sales')
                .select('*');

            if (error) {
                throw new Error(`Failed to fetch recipes: ${error?.message}`);
            }

            return data as Sales[];
        } catch (err) {
            console.error(err);
            throw new Error('An Error occured while fetching all Sales');
        }
    }

    async findById(id: number): Promise<Sales| null> {
        try {

            const { data, error } = await supabase
                .from('Sales')
                .select('*')
                .eq('sales_id', id)
                .single();
            
            if (error) {
                throw new Error(`Failed to fetch recipe by ID: ${error.message}`);
            }

            return data as Sales;
        } catch (err) {
            console.error(err);
            throw new Error(`An unexpected Error occured while fetching the Sales with ID: ${id}`);
        }
    }

    async create(createSalesDto: CreateSalesDto): Promise<Sales> {
        try {
            const { data, error } = await supabase
                .from('Sales')
                .insert(createSalesDto)
                .select('*');

            if (error) {
                throw new Error(`Failed to create Sales: ${error?.message}`);
            }

            return data[0] as Sales;
        } catch (err) {
            console.error(err);
            throw new Error(`An Unexpected Error occured while creating Sales.`);
        }
    }

    async update(id: number, updateSalesDto: UpdateSalesDto): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('Sales')
                .update(updateSalesDto)
                .eq('sales_id', id);

            if (error) {
                throw new Error(`Failed to update Sales: ${error?.message}`);
            }
        } catch (err) {
            console.error(err);
            throw new Error(`An Unexpected Error occured while updating Sales`);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('Sales')
                .delete()
                .eq('sales_id', id);

            if (error) {
                throw new Error(`Failed to delete Sales: ${error?.message}`);
            }

        } catch (err) {
            console.error(err);
            throw new Error('An Unexpected Error occured while deleting Sales.');
        }
    }
    
}