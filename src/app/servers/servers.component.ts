import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // can select by tag, data attribute, class
  // selector: '[app-servers]',
  // selector: '.app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
