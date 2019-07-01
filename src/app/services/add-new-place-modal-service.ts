import { Injectable } from "@angular/core";
import { Place } from "../models/Place";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewPlaceComponent } from "../new-place/new-place.component";
import { Folder } from "../models/Folder";

@Injectable()
export class AddNewPlaceModalService {
    constructor(private modal: NgbModal) {

    }

    async addNewPlace(newPlace: Place, folder: Folder, viewContainerRef: any): Promise<Place> {
        try {
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

            return await modalRef.result;
        } catch (error) {
            throw error;
        }
    }
}