import { IAddNewFolderService } from "./interfaces/add-new-folder-service-interface";
import { Folder } from "../models/Folder";
import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewFolderComponent } from "../new-folder/new-folder.component";

@Injectable()
export class AddNewFolderService implements IAddNewFolderService {
    constructor(private modal: NgbModal) {

    }

    async addFolder(param: any): Promise<Folder> {
        try {
            const ref = this.modal.open(NewFolderComponent);
            let newFolderComponent: NewFolderComponent = ref.componentInstance as NewFolderComponent;
            
            newFolderComponent.folderAdded.subscribe((folder) => {
                ref.close(folder);
            });

            newFolderComponent.addFolderCancelled.subscribe(() => {
                ref.dismiss();
            })

            let newFolder: Folder = await ref.result;

            return newFolder;
        } catch (error) {
            throw error;
        }

    }

}