import {Component} from '@angular/core';
import {GifService} from "../../gif/services/gif.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  get history() {
    return this.gifService.history;
  }

  constructor(private gifService: GifService) {
  }
}
