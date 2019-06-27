import { Component, EventEmitter } from "@angular/core";
import { Folder } from "../models/Folder";
import { FolderService } from "../services/folder-service";

@Component({
    selector: 'app-new-folder',
    templateUrl: './new-folder.component.html'
})
export class NewFolderComponent {
    name: string = ''
    errorMessage: string = ''

    folderAdded: EventEmitter<Folder> = new EventEmitter<Folder>();
    addFolderCancelled: EventEmitter<void> = new EventEmitter<void>();

    constructor(private folderService: FolderService) {

    }

    async addFolder() {
        try {
            let folder = await this.folderService.addFolder({
                id: 0,
                name: this.name,
                places: [],
            });

            this.folderAdded.emit(folder);
        } catch (error) {
            console.log(error);
        }
    }

    close() {
        this.addFolderCancelled.emit();
    }
}