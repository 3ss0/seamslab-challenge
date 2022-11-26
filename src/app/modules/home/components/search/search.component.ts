import { Component, OnInit, Output, EventEmitter , Input} from '@angular/core';

@Component({
  selector: 'app-shop-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Input() placeholder: string = 'Search';
  private searchDelay;
  private delayTime = 1000;
  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchHandler() {
    this.cancelEmit();
    this.emitIt();
  }

  removeSearchValue() {
    this.searchValue = '';
    this.emitIt();
  }

  emitIt() {
    this.searchDelay = setTimeout(() => { this.search.emit(this.searchValue); }, this.delayTime);
  }

  cancelEmit() {
    clearTimeout(this.searchDelay);
  }

}
