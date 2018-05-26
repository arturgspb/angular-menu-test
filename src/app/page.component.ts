import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <div>
      <div id="embed-page"></div>
    </div>
  `
})

export class PageComponent implements OnInit {
  ngOnInit(): void {
    me('load', 'embed-page', {
      appId: 58,
      pageId: 3203,
      sizeBy: 'content'
    });
  }

}

