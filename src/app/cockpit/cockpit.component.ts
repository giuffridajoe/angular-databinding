import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styles: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // EventEmitter is a generic type (<>) allowing for custom events to be emitted
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // this is the name of a local reference to be used in this typescript class
    // you can also pass the name of a component to get access to the first occurence of that component in the app component
    @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

    constructor() {}
    /**  this is a lifecycle hook. lifecycle phases:
     * 1. ngOnChanges: 
     *    can be executed multiple times.
     *    executed at the start when a component is created.
     *    also called when a bound input property (properties decorated with @Input) changes.
     * 
     * 2. ngOnInit:
     *    gets executed when the component is initialized
     *    hasnt been displayed yet, but Angular finished basic initialization. properties can be accessed,         object has been created etc.
     *    will run after the constuctor.
     *  
     * 3. ngDoCheck:
     *    will also run multiple times
     *    will run whenever change detection runs or any events are triggered (even clicks). (system by which Angular determines whether something changed).
     * 
     * 4. ngAfterContentInit:
     *    called whenever content which projected by ngContent has been initialized
     * 
     * 5. ngAfterContentChecked:
     *    called whenever change detection checked the content projected into the component
     * 
     * 6. ngAfterViewInit:
     *    reached when view of the component has been rendered
     * 
     * 7. ngAfterViewChecked:
     *    called whenever view has been checked and everything is done and displayed in the view
     * 
     * 8. ngOnDestroy:
     *    called once the component is about to be destroyed
    */
    ngOnInit() {}

    onAddServer(nameInput: HTMLInputElement) {
      // the nativeElementProperty gives direct access to the underlying element in the template
      // this.serverContentInput.nativeElement.value = 'Something' - should not do this. instead use string interpolation or property binding
      console.log(nameInput.value);
      this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
    }
}
