import { Component, OnInit, ElementRef } from '@angular/core';

import * as Stickyfill from 'stickyfilljs';

@Component({
    selector: 'uni-test-case5',
    templateUrl: './test-case5.component.html',
    styleUrls: ['./test-case5.component.scss']
})
export class TestCase5Component implements OnInit {
    public markdown = require('raw-loader!./README.md');
    public sections: Array<any> = [];

    constructor(private _host: ElementRef) {}

    ngOnInit() {}
}
