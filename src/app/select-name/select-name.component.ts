import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.css']
})
export class SelectNameComponent implements OnInit {
  name = [
    "AAA","BBB","CCC","DDD","EEE"
  ];
  selectedName = this.name[0];
  constructor() { }

  @Output() outputSelectedName = new EventEmitter<string>();
  
  ngOnInit() {
  }
  
  //viewchild 용 단순선택
  changeSelectedName(e){
    this.selectedName = e;
  }

  //output 이벤트용
  changeAndOutPut(e){
    this.outputSelectedName.next(e);
  }
}
