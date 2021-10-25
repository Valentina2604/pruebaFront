import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { T01Solicitud } from '../modelEntidad/T01Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http : HttpClient) { }

  registrarSolicitud(datosSolicitud : T01Solicitud){
    return this.http.post(`${environment.host}/registrarSolicitud`, datosSolicitud);
  }

  actualizarSolicitud(datosSolicitud : T01Solicitud){
    return this.http.put(`${environment.host}/actualizaSolicitud`,datosSolicitud);
  }

  listarPorId(idSolicitud: number){
    const params = new HttpParams().set('idSolicitud', idSolicitud);
    return this.http.get<T01Solicitud>(`${environment.host}/listarPorId`, {params:params})
  }

  listarPorCliente(idCliente: number){
    const params = new HttpParams().set('idCliente', idCliente);
    return this.http.get<T01Solicitud>(`${environment.host}/listaPorIdCliente`, {params:params})
  }

  eliminar(idSolicitud: number){
    const params = new HttpParams().set('idSolicitud', idSolicitud);
    return this.http.delete(`${environment.host}/eliminarSolicitud`, {params:params});
  }
}
