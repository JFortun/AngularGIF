import {Component} from '@angular/core';
import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent {

  constructor(private gifService: GifService) {
  }

  get results() {
    return this.gifService.results;
  }
}
