import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(this.ActualizarHora, 1000);
  }
  ActualizarHora() {
    try {
      // Variables
      const fecha = new Date(),
      segundos = fecha.getSeconds(),
      minutos = fecha.getMinutes(),
      horas = fecha.getHours(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear();
      const pHoras = document.getElementById('pHoras'),
      pMinutos = document.getElementById('pMinutos'),
      pSegundos = document.getElementById('pSegundos'),
      pDiaSemana = document.getElementById('pDiaSemana'),
      pDia = document.getElementById('pDia'),
      pMes = document.getElementById('pMes'),
      pYear = document.getElementById('pYear');

      // Fecha
      const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      pDiaSemana.textContent = semana[diaSemana] + ',';
      // Mes
      const lista_mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'sAgosto', 
                      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      pDia.textContent = dia + '';
      pMes.textContent = lista_mes[mes];
      pYear.textContent = year + '';

      // Hora
      pHoras.textContent = horas + '';
      if (minutos < 10) {
          pMinutos.textContent = '0' + minutos;
      } else {
          pMinutos.textContent = minutos + '';
      }
      if (segundos < 10) {
          pSegundos.textContent = '0' + segundos;
      } else {
          pSegundos.textContent = segundos + '';
      }
    } catch (error) {}
  }
}
