import { Component, OnInit } from '@angular/core';
import { CodigoJsService } from 'src/app/codigo-js.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private serviceJs: CodigoJsService) { 
    this.serviceJs.loadScript();
  }

  ngOnInit(): void {
  }

}
