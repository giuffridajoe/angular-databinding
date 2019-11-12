import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component ({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    // by default Angular enforces css encapsulation within components.
    // use ViewEncapsulation to set a different behavior.
    //  'Emulated' is the default
    // note that when setting this to 'None' you're now enforcing style sheets to be applied globally, unless otherwise defined in each component
    // 'Emulated' will use shadow dom css behavior on browsers that support it
    encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit {
    // {} represent a javascript object
    // @Input() makes this property accessible outside of this class (default visiblity is this class only) for property binding
    // 'srvElement' is an alias for element outside of this class. inside this class, the object is still represented with the variable name

    // tslint:disable-next-line: no-input-rename
    @Input('srvElement') element: {type: string, name: string, content: string};

    constructor() {}
    ngOnInit() {}
}
