import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private productUrl = 'assets/products/products.json';
    

    constructor(private httpClient: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log("All :",JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
      }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage=`An  error occured: ${err.error.message}`;
        }else{
            errorMessage=`Server returned code ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}