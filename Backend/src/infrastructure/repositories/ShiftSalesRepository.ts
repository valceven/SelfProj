import { ShiftSales } from "../../domain/entities/ShiftSales";
import { IShiftSalesRepository } from "../../domain/interfaces/IShiftSalesRepository";
import { CreateShiftSalesDto } from "../../interface/dto/ShiftSales/CreateShiftSalesDto";
import { UpdateShiftSalesDto } from "../../interface/dto/ShiftSales/UpdateShiftSalesDto";
import supabase from "../database/supabaseClient";
export class ShiftSalesRepository implements IShiftSalesRepository {
    async findAll(): Promise<ShiftSales[]> {
        try {
            const { data, error } = await supabase
                .from('Shift Sales')
                .select('*');

            if (error) {
                throw new Error(`Failed to fetch all Shift Sales ${error?.message}`);
            }

            return data as ShiftSales[];
        } catch (err) {
            console.error(err);
            throw new Error(`An Error occured while fetching all ShiftSales`);
        }
    }

    async findById(id: number): Promise<ShiftSales> {
        try {
            const { data, error } = await supabase
                .from('Shift Sales')
                .select('*')
                .eq('shift_sales_id', id)
                .single();

            if (error) {
                throw new Error(`Failed to fetch ShiftSalesID ${id} ${error?.message}`);
            }

            return data as ShiftSales;
        } catch (err) {
            console.error(err);
            throw new Error("An Unexpected Error occured while fetching a ShiftSale");
        }
    }

    async create(createShiftSalesDto: CreateShiftSalesDto): Promise<ShiftSales> {
        try {
            const { data, error} = await supabase
                .from('Shift Sales')
                .insert(createShiftSalesDto)
                .select('*');

            if (error) {
                throw new Error(`Failed to create Shift Sales ${error?.message}`);
            }

            return data[0] as ShiftSales;

        } catch (err) {
            console.error(err);
            throw new Error(`An Unexpected Error Occured while creating shiftSale`);
        }
    }

    async update(id: number, updateShiftSalesDto: UpdateShiftSalesDto): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('Shift Sales')
                .update(updateShiftSalesDto)
                .eq('shift_sales_id', id);

            if (error) {
                throw new Error(`Failed to update shift sales id: ${id} ${error?.message}`);
            }

            return;

        } catch (err) {
            console.error(err);
            throw new Error('An Unexpected Error occured while updating shift sales');
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('Shift Sales')
                .delete()
                .eq('shift_sales_id', id);

            if (error) {
                throw new Error(`Failed to delete shift sales id: ${id} ${error?.message}`);
            }

            return;

        } catch (err) {
            console.error(err);
            throw new Error('An Unexpected Error occured while Deleting shift sales');
        }
    }
}