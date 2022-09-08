
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../core/interfaces/usuario';
//import { Usuarios } from 'src/app/interfaces/tabla';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listUsuarios: Usuario[] = [
    {userId: 1, id: '1°A', curso: 'Ciencias Sociales', nombre: 'Romina Rivero', apellido: ' Rivero'},
    {userId: 2, id: '2°A', curso: 'Ciencias Sociales', nombre: 'Herman Sanchez', apellido: 'Sanchez'},
    {userId: 3, id: '3°A', curso: 'Ciencias Sociales', nombre: 'Luiz Diaz', apellido: 'Diaz'},
    {userId: 4, id: '1°B', curso: 'Ciencias Economicas', nombre: 'Tatiana Gomez', apellido: 'Gomez'},
    {userId: 5, id: '2°B', curso: 'Ciencias Economicas', nombre: 'Leonel Asensio', apellido: 'Asensio'},
    {userId: 6, id: '3°B', curso: 'Ciencias Economicas', nombre: 'Federico Ferreira', apellido: 'Ferreira'},
    {userId: 7, id: '1°C', curso: 'Ciencias Naturales', nombre: 'Juan Alvarez', apellido: 'Alvarez'},
    {userId: 8, id: '2°C', curso: 'Ciencias Naturales', nombre: 'Norberto Saladino', apellido: 'Saladino'},
    {userId: 9, id: '3°C', curso: 'Ciencias Naturales', nombre: 'Lorena Ruiz', apellido: 'Ruiz'},
    {userId: 10, id: '4°A', curso: 'Ciencias Sociales', nombre: 'Estefania Marquez', apellido: 'Marquez'},
    {userId: 11, id: '4°B ', curso: 'Ciencias Economicas', nombre: 'Gabriel Gomez', apellido: 'Gomez'},
    {userId: 12, id: '4°C', curso: 'Ciencias Naturales', nombre: 'Fabricio Eztevez', apellido: 'Eztevez'},
    {userId: 13, id: '5°A ', curso: ' Ciencias Sociales', nombre: 'Lucia Rivaldo', apellido: 'Rivaldo'},
    {userId: 14, id: '5°B ', curso: 'Ciencias Economicas', nombre: 'David Frias', apellido: 'Frias'},
    {userId: 15, id: '5°C', curso: 'Ciencias Naturales', nombre: 'Agustin Sandiyu', apellido: 'Sandiyu'},
    {userId: 16, id: '5°C', curso: 'Ciencias Naturales', nombre: 'Fabiana Lorenzon', apellido: 'Lorenzon'},
  ];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
