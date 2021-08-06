import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchGIFResponse} from "../interfaces/gif.interface";

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey: string = 'Kziym9HkvDorRo4n9yGVqt9KVGQ9y66t';
  private URL: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = []

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGif(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);


    this.http.get<SearchGIFResponse>(`${this.URL}/search`, {params})
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
