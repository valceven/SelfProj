import { FindShiftSalesById } from "../application/ShiftSales/findShiftSalesById";
import { FindAllShiftSales } from "../application/ShiftSales/findAllShiftSales";
import { UpdateShiftSales } from '../application/ShiftSales/updateShiftSales';
import { CreateShiftSales } from "../application/ShiftSales/createShiftSales";
import { DeleteShiftSales } from "../application/ShiftSales/deleteShiftSales";
import { ShiftSalesRepository} from "./repositories/ShiftSalesRepository";

export default class DIContainer {
    private static _shiftSalesRepository: ShiftSalesRepository = new ShiftSalesRepository();
    private static _findAllShiftSales: FindAllShiftSales = new FindAllShiftSales(this._shiftSalesRepository);
    private static _createShiftSales: CreateShiftSales = new CreateShiftSales(this._shiftSalesRepository);
    private static _updateShiftSales: UpdateShiftSales = new UpdateShiftSales(this._shiftSalesRepository);
    private static _deleteShiftSales: DeleteShiftSales = new DeleteShiftSales(this._shiftSalesRepository);
    private static _findShiftSalesById: FindShiftSalesById = new FindShiftSalesById(this._shiftSalesRepository);

    static getShiftSalesRepository(): ShiftSalesRepository {
        return this._shiftSalesRepository;
    }

    static getFindAllShiftSalesUseCase(): FindAllShiftSales {
        return this._findAllShiftSales;
    }

    static getFindShiftSalesByIdUseCase(): FindShiftSalesById {
        return this._findShiftSalesById;
    }

    static createShiftSalesUseCase(): CreateShiftSales {
        return this._createShiftSales;
    }

    static updateShiftSalesUseCase(): UpdateShiftSales {
        return this._updateShiftSales;
    }

    static deleteShiftSalesUseCase(): DeleteShiftSales {
        return this._deleteShiftSales;
    }
}