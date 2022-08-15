import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Book } from "src/app/model/Book";

@Injectable({
    providedIn: 'root',
}
)

export class BooksService{
    private url = ' http://localhost:3000/books'

    httpOptions={
        Headers: new HttpHeaders({'content-type ' : 'application/json'})
    }

    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
}