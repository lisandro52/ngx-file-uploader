// tslint:disable:max-line-length
// tslint:disable:no-unused-expression
import { Directive, EventEmitter, HostListener, HostBinding, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { FileManager } from '../classes/file-manager.class';
import { FileManagerOptions, instanceOfFileManagerInterface, FileManagerInterface, TransferInterface } from '../interfaces';

//
// Directive to support select file from inputfield
//
@Directive({
    // Selector required in component HTML
    // tslint:disable-next-line:directive-selector
    selector: '[ngxFile2Select]'
})
export class FileSelectDirective implements OnInit, OnDestroy {
    @HostBinding('attr.role') role = 'input';
    @HostBinding('attr.type') type = 'file';

    @Output()
    public fileHoverStart: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public fileHoverEnd: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public fileAccepted: EventEmitter<FileManagerInterface[]> = new EventEmitter<FileManagerInterface[]>();
    @Output()
    public fileRejected: EventEmitter<Error> = new EventEmitter<Error>();

    @Input()
    public fileOptions: FileManagerOptions;
    @Input()
    public uploader: TransferInterface<FileManagerInterface>;

    private _InputFile: any = null;
    private _files: FileManagerInterface[];

    //
    // Constructor requires an element reference that instantiated this directive
    //
    public constructor() {}

    //
    // Initialisation
    //
    public ngOnInit() {
        this._files = [];
    }

    public ngOnDestroy() {
        if (this._files.length > 0) {
            for (const _file of this._files) {
                if (instanceOfFileManagerInterface(_file)) {
                    if (!_file.isUploaded()) {
                        _file.cancel();
                        this.uploader.removeFile(_file);
                    }
                }
            }
        }
    }

    //
    // Called when the element was choosen
    //
    @HostListener('change', ['$event'])
    public onChange(event: Event): void {
        // Update our data
        this._InputFile = this.getEventTarget(event);

        if (this._InputFile.files.length === 0) {
            this._InputFile = null;
            return;
        }

        const filesData: FileList = this._InputFile.files;

        this.readFile(filesData);

        this.fileAccepted.emit(this._files);

        // Finished with the file
        this._InputFile = null;

        // Don't let it continue
        this.preventAndStopEventPropagation(event);
    }

    //
    // Stops the drag/drop events propagating
    //
    private preventAndStopEventPropagation(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private readFile(_files: FileList): void {
        let fmObject: FileManager;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < _files.length; i++) {
            const file = _files[i];
            try {
                fmObject = new FileManager(file, this.fileOptions, this.uploader);
            } catch (e) {
                if (e.status === 100) {
                    this.fileRejected.emit(e);
                } else {
                    this.fileRejected.emit(e);
                }
                throw new Error('Something goes wrong e: ' + e.message);
            }

            fmObject.inQueue && this._files.push(fmObject);
        }
    }

    //
    // Returns the file dragged into the directive
    //
    private getEventTarget(event: Event | any): any {
        return event.target;
    }
}
