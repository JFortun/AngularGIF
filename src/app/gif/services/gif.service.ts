import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey: string = 'Kziym9HkvDorRo4n9yGVqt9KVGQ9y66t';
  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
  }

  searchGif(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=Kziym9HkvDorRo4n9yGVqt9KVGQ9y66t&q=test&limit=10')
      .subscribe((response: any) => {
        console.log(response.data);
      });
  }
}
