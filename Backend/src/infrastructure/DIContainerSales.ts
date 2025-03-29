import { FindAllSales } from "../application/Sales/findAllSales";
import { FindSalesById } from "../application/Sales/findSalesById";
import { CreateSales } from "../application/Sales/createSales";
import { UpdateSales } from "../application/Sales/updateSales";
import { DeleteSales } from "../application/Sales/deleteSales";
import { SalesRepository} from "./repositories/SalesRepository";

export default class DIContainer {
    private static _salesRepository: SalesRepository = new SalesRepository();
    private static _findAllSales: FindAllSales = new FindAllSales(this._salesRepository);
    private static _createSales: CreateSales = new CreateSales(this._salesRepository);
    private static _updateSales: UpdateSales = new UpdateSales(this._salesRepository);
    private static _deleteSales: DeleteSales = new DeleteSales(this._salesRepository);
    private static _findSalesById: FindSalesById = new FindSalesById(this._salesRepository);

    static getSalesRepository(): SalesRepository {
        return this._salesRepository;
    }

    static getFindAllSalesUseCase(): FindAllSales {
        return this._findAllSales;
    }

    static getFindSalesByIdUseCase(): FindSalesById {
        return this._findSalesById;
    }

    static createSalesUseCase(): CreateSales {
        return this._createSales;
    }

    static updateSalesUseCase(): UpdateSales {
        return this._updateSales;
    }

    static deleteSalesUseCase(): DeleteSales {
        return this._deleteSales;
    }
}