import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Emplado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    {legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000},
    {legajo: 2, nombre: 'Marcos', apellido: 'Gonzalez', sexo: 'Masculino', salario: 65000},
    {legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'Femenino', salario: 75000},
    {legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'Masculino', salario: 55000},
    {legajo: 5, nombre: 'Maria', apellido: 'Navarro', sexo: 'Femenino', salario: 80000},
    {legajo: 6, nombre: 'Joaquin', apellido: 'Marquez', sexo: 'Masculino', salario: 80000},
    {legajo: 7, nombre: 'Lisbeth', apellido: 'Pereira', sexo: 'Femenino', salario: 85000}
  ]

  radioButtonSeleccionado = 'Todos';

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string): void {
    this.radioButtonSeleccionado = radioButtonSelect;
  }

}
