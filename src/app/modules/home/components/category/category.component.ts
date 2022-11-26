import { Component, OnInit, Output, EventEmitter , Input} from '@angular/core';

@Component({
  selector: 'app-shop-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  @Output() selectedItems = new EventEmitter<string[]>();
  @Input() categories: {label: string ; value: string}[] = [];
  opened: boolean = true;
  currentCategories: {label: string ; value: string ; selected: boolean}[] = [];
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    this.currentCategories = this.categories.map(({label , value}) => ({value: value , label: label , selected: false}));
    console.log(this.currentCategories);
  }

  toggle() {
    this.opened = !this.opened;
  }

  changeHandler(index , e) {
    this.currentCategories[index].selected = e.target.checked;
    this.selectedItems.emit(this.currentCategories.filter(({selected}) => selected).map(({value}) => value));
  }

}
