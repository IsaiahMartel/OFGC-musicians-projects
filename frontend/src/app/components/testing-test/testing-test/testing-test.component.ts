import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-test',
  templateUrl: './testing-test.component.html',
  styleUrls: ['./testing-test.component.scss'],
})
export class TestingTestComponent implements OnInit {
  string : String = "xd"
  constructor() { }

  ngOnInit() {}

  printXd(){
    return this.string;
  }



}
