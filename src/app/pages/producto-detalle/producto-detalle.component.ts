import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  getMenuId: any;
  menuData: any;

  constructor(private router: Router, public param: ActivatedRoute, private service: ServicesService) { }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu')
    if (this.getMenuId) {
      this.menuData = this.service.Productos.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'getmenu')

    }
  }

}
