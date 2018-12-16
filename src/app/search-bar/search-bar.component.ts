import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormControl} from "@angular/forms"
import {HttpClient} from "@angular/common/http"
import {debounceTime} from "rxjs/operators"

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchBar: FormControl
  searchResults: string[] = []

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.searchBar = this.fb.control('')
    this.searchBar.valueChanges
      .pipe(debounceTime(300))
      .subscribe(searchTerm => {
        this.searchGithub(searchTerm)
      })
  }

  private searchGithub(searchTerm) {
    this.http.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .subscribe(results => {
        this.searchResults = results['items'].map(item => item['html_url'])
      })
  }
}
