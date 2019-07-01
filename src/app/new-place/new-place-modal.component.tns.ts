import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Place } from "../models/Place";
import { Folder } from "../models/Folder";

@Component({
    selector: 'app-new-place-modal',
    template: `<StackLayout>
    <app-new-place [newPlace]="newPlace" [selectedFolder]="selectedFolder" (placeAdded)="placeAdded($event)"></app-new-place>
</StackLayout>`
})
export class NewPlaceModalComponent {
    
    newPlace: Place;

    selectedFolder: Folder;
    
    constructor(private params: ModalDialogParams) {
        this.newPlace = this.params.context.newPlace;
        this.selectedFolder = this.params.context.folder;
    }

    placeAdded(addedPlace: Place) {
        this.params.closeCallback(addedPlace);
    }
}