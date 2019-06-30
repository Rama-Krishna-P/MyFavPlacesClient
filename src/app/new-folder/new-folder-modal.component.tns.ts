import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: 'app-new-folder-modal',
    template: `<StackLayout>
        <app-new-folder (onFolderAdded)="folderAdded($event)"></app-new-folder>
    </StackLayout>
`
})
export class NewFolderModalComponent {
    constructor(private params: ModalDialogParams) {

    }

    folderAdded(args: any) {
        this.params.closeCallback(args);
    }
}