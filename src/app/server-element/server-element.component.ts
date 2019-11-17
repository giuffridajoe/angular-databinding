import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';

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

export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy  {
    // {} represent a javascript object
    // @Input() makes this property accessible outside of this class (default visiblity is this class only) for property binding
    // 'srvElement' is an alias for element outside of this class. inside this class, the object is still represented with the variable name

    // tslint:disable-next-line: no-input-rename
    @Input('srvElement') element: {type: string, name: string, content: string};
    @Input() name: string;
    @ViewChild('heading', {static: true}) header: ElementRef;
    @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

    constructor() {
        console.log('constructor called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges');
        console.log(changes);
    }
    ngOnInit() {
        console.log('ngOnInit called');
        console.log('text content:' + this.header.nativeElement.textContent);
        console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck called');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit called');
        console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log('text content:' + this.header.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }
}
