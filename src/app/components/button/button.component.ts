import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string;
  @Input() btnColor: string;
  @Output() btnEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnEmitter.emit();
  }
}
