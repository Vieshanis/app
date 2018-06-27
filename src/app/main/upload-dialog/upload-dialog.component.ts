import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-main-upload-dialog',
    templateUrl: './upload-dialog.component.html',
    styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {
    /**
     * File uploader object
     * @type {FileUploader}
     * @memberof UploadDialogComponent
     */
    public uploader: FileUploader = new FileUploader({ url: '/' });
    /**
     * Dropzone file over indicator
     * @type {boolean}
     * @memberof UploadDialogComponent
     */
    // tslint:disable-next-line:no-inferrable-types
    public hasBaseDropZoneOver: boolean = false;

    constructor(
        private dialogRef: MatDialogRef<UploadDialogComponent>
    ) { }

    /**
     * Method that is called when file is over file drop zone
     * @param {any} event Event
     */
    fileOverBase(event: any) {
        this.hasBaseDropZoneOver = event;
    }

    /**
     * Method that closes dialog
     */
    closeDialog() {
        // We close dialog and we also can pass data
        this.dialogRef.close();
    }
}
