import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  displaydilog: boolean;
  isActive: boolean;

  constructor() { }

  showTest(){
    this.displaydilog=true;
  }
  onClick() {
    this.isActive = !this.isActive;
    
  }
 
  ngOnInit() {
  }

}
