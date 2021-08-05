import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  @ViewChild('txtSearch')
  txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {
  }

  search() {
    const value = this.txtSearch.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }
    this.gifService.searchGif(value);
    this.txtSearch.nativeElement.value = '';
  }
}
