import { Component, OnInit, Input } from '@angular/core';
import shortid from 'shortid';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;

  id = shortid.generate();
  internalType = '';

  constructor() { }

  ngOnInit() {
  }

  onShow() {
    this.internalType = this.internalType ? '' : 'text';
  }
}
