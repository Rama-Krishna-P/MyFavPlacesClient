import { Folder } from "~/app/models/Folder";

export interface IFolderService {
    getAllFolders() : Promise<Folder[]>;
    addFolder(folder: Folder) : Promise<Folder>;
}