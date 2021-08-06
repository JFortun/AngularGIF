import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gif, SearchGIFResponse} from "../interfaces/gif.interface";

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey: string = 'Kziym9HkvDorRo4n9yGVqt9KVGQ9y66t';
  private _history: string[] = []

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
  }

  searchGif(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((response) => {
        console.log(response.data);
        this.results = response.data;
      });
  }
}
