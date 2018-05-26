import { Component } from '@angular/core';

@Component({
  template: `

    <mat-vertical-stepper>
      <mat-step label="Step 1">
        Content 1
      </mat-step>
      <mat-step label="Step 1">
        Content 2
        <my-table></my-table>
      </mat-step>
    </mat-vertical-stepper>
  `
})
export class PageComponent {}

