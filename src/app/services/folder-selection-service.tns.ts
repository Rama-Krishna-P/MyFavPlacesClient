import { Injectable } from "@angular/core";
import { Folder } from "../models/Folder";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class FolderSelectionService {
    constructor(private router: Router) {

    }


    selectFolder(folderToSelect: Folder) {
        this.router.navigate(['/places'], { state: { selectedFolder: folderToSelect } });
    }
}