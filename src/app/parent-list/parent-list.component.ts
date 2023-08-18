import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  template: `
    <p class="custom">
      parent-list works!
    </p>
  `,
  styles: [
    `.custom{color:green}`
  ]
})
export class ParentListComponent {

}
