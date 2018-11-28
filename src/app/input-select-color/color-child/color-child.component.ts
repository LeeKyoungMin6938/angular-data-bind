import { Component, OnInit, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'color-child',
  templateUrl: './color-child.component.html',
  styleUrls: ['./color-child.component.css']
})
export class ColorChildComponent implements OnInit {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  textColor(color:string){
    this.renderer.setStyle(this.el.nativeElement, 'color', color)
  }
  ngOnInit() {
    this.textColor(this.defalutColor);
  }

  @HostListener('mouseenter') handleMouseEnter(){
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave(){
    this.textColor(this.defalutColor);
  }

  @Input('textColor') color:string;
  @Input() defalutColor:string;
}
