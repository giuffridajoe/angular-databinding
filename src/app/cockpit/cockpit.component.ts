import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styles: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // EventEmitter is a generic type (<>) allowing for custom events to be emitted
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    newServerName = '';
    newServerContent = '';

    constructor() {}
    ngOnInit() {}

    onAddServer() {
      this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }

    onAddBlueprint() {
      this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }
}
