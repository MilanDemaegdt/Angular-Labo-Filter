import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent {
  @Output() changed = new EventEmitter<string>();
  
  onClicked(value:string){
  
    
    this.changed.emit(value);

  }
}
