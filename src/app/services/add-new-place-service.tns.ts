import { IAddNewPlaceService } from "./interfaces/add-new-place-service-interface";
import { Injectable } from "@angular/core";

@Injectable()  
export class AddNewPlaceService implements IAddNewPlaceService {
    addNewPlace(currentLocation: boolean, folder: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}