import { Component, OnInit,Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-app-employee',
  templateUrl: './app-employee.component.html',
  styleUrls: ['./app-employee.component.scss']
})

export class AppEmployeeComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    // // console.log('close');
    this.displayChange.emit(false);
  }
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}
