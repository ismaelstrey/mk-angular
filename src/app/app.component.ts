import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Clientes } from './clientes';
// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  clientes: Clientes[];
  constructor ( private service: ClienteService) {
    
  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.service = dados);
  }
  

}
