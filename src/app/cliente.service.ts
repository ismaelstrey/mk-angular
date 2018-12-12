import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './clientes';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'http://mk.essoprovedor.com.br/api/cliente/listAll';

  constructor( private http: HttpClient) { }
  list() {
    return this.http.get<Clientes[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
