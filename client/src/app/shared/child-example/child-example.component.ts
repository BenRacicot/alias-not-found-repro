import { Component, OnInit } from '@angular/core';

import { IExample } from '@common';

@Component({
  selector: 'child-example',
  templateUrl: './child-example.component.html',
  styleUrls: ['./child-example.component.scss']
})
export class ChildExampleComponent implements OnInit {
  children: IExample[];

  constructor() { }

  ngOnInit(): void {

  }

}
