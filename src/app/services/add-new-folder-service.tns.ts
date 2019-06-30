import { IAddNewFolderService } from "./interfaces/add-new-folder-service-interface";
import { Folder } from "../models/Folder";
import { Injectable, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { NewFolderModalComponent } from "../new-folder/new-folder-modal.component.tns";

@Injectable()
export class AddNewFolderService implements IAddNewFolderService {
    constructor(private modalService: ModalDialogService) {
    }

    async addFolder(viewContainerRef: any): Promise<Folder> {
        try {
            let options: ModalDialogOptions = {
                viewContainerRef: viewContainerRef
            };
            
            let folder = await this.modalService.showModal(NewFolderModalComponent, options)
            return folder;
        } catch (error) {
            throw error;
        }
    }

}