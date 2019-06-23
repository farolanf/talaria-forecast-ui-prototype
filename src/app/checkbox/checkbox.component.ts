import { Component, OnInit, Input } from '@angular/core';
import uuid from 'uuid/v4';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  id = uuid();
  checked: boolean;

  constructor() { }

  ngOnInit() {
  }

}
