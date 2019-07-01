import { Injectable } from "@angular/core";
import { Place } from "../models/Place";
import { Folder } from "../models/Folder";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { NewPlaceModalComponent } from "../new-place/new-place-modal.component.tns";

@Injectable()
export class AddNewPlaceModalService {
    constructor(private modalService: ModalDialogService) {

    }

    async addNewPlace(newPlace: Place, folder: Folder, viewContainerRef: any): Promise<Place> {
        try {
            let options: ModalDialogOptions = {
                viewContainerRef: viewContainerRef,
                fullscreen: false,
                context: { folder: folder, newPlace: newPlace }
            };
            let place = await this.modalService.showModal(NewPlaceModalComponent, options)
            return place;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}