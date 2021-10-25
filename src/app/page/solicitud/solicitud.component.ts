import { Component, OnInit } from '@angular/core';
import { T01Solicitud } from 'src/app/modelEntidad/T01Solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  datosSolicitud!: T01Solicitud;

  constructor(private soliService: SolicitudService) { }

  registrar(){
    this.soliService.registrarSolicitud(this.datosSolicitud);
  }

  ngOnInit(): void {
  }

}
