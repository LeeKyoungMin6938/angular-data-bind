import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectNameComponent } from './select-name/select-name.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
/*  ViewChild : 부모컴포넌트에서 자식 컴포넌트의 요소를 가져오고 싶을때 사용 */
  @ViewChild(SelectNameComponent) selectNameComponent;
  appName;
  outputAppName;
  ngOnInit(){
    this.appName = this.selectNameComponent.selectedName;
  }
  /* get OUTPUt event  */
  getOutput;
  setOutputAppName(e){
    console.log('do setOutputAppName : ',e);
    this.getOutput = e;
  }
}
