import { IAddNewPlaceService } from "./interfaces/add-new-place-service-interface";
import { Place } from "../models/Place";
import { Injectable } from "@angular/core";
import { NewPlaceComponent } from "../new-place/new-place.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LocationService } from "./location-service";
import { Folder } from "../models/Folder";
import * as uuid from "uuid";

@Injectable()
export class AddNewPlaceService implements IAddNewPlaceService {

    constructor(private modal: NgbModal, private locationService: LocationService) {

    }

    async addNewPlace(currentLocation: boolean, folder: Folder): Promise<Place> {
        try {
            let newPlace = await this.addNewPlaceCore(currentLocation, folder);
            return newPlace;

        } catch (error) {
            throw error;
        }
    }

    private async addNewPlaceCore(currentLocation: boolean, folder: Folder): Promise<Place> {
        let newPlace: Place = this.createNewPlace();

        try {
            if (currentLocation) {
                let location = await this.locationService.getCurrentLocation();
                newPlace.latitude = location.latitude;
                newPlace.longitude = location.longitude;
            }

            let modalRef = this.modal.open(NewPlaceComponent);
            let newPlaceComponent = modalRef.componentInstance as NewPlaceComponent;

            newPlaceComponent.newPlace = newPlace;
            newPlaceComponent.selectedFolder = folder;

            newPlaceComponent.addPlaceCancelled.subscribe(() => {
                modalRef.dismiss();
            });

            newPlaceComponent.placeAdded.subscribe((place: Place) => {
                modalRef.close(place);
            });

            newPlace = await modalRef.result;

            return newPlace;
        } 
        catch (error) {
            throw error;
        }
    }

    private createNewPlace(): Place {
        return {
            id: uuid(),
            latitude: 0.0,
            longitude: 0.0,
            name: ''
        }
    }
}