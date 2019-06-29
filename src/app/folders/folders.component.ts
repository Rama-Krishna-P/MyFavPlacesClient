import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Folder } from "../models/Folder";
import { TestBed } from "@angular/core/testing";
import { AddNewFolderService } from "../services/add-new-folder-service";
import { FolderService } from "../services/folder-service";
import { PlaceService } from "../services/place-service";
import { Place } from "../models/Place";
import { FolderSelectionService } from "../services/folder-selection-service";

@Component({
    selector: 'app-folders',
    templateUrl: './folders.component.html',
    styleUrls: ['./folders.component.css'],
})
export class FoldersComponent implements OnInit {
    folders: Folder[] = [];
    selectedFolder: Folder = { id: -1, name: '', places: [] };

    constructor(private addNewFolderService: AddNewFolderService,
        private ref: ChangeDetectorRef,
        private folderService: FolderService,
        private placeService: PlaceService,
        private folderSelectionService: FolderSelectionService) {

    }

    ngOnInit(): void {
        this.folderService.getAllFolders().then((folders) => {
            this.folders = folders;
        }, err => {
            console.log(err);
        });
    }

    async folderSelected(selectedFolder: any) {
        try {
            if (selectedFolder.places == null || selectedFolder.places.length === 0) {
                selectedFolder.places = await this.placeService.getAllPlaces(selectedFolder.id);
            }

            this.selectedFolder = selectedFolder;
            this.folderSelectionService.selectFolder(this.selectedFolder);
        } catch (error) {
            console.log(error);
        }
    }

    async addFolder() {
        try {
            let newFolder: Folder = await this.addNewFolderService.addFolder();
            this.folders.push(newFolder);
            this.ref.markForCheck();
        } catch (error) {

        }


    }
}