import { Component } from '@angular/core';

@Component({
  selector: 'app-promedios',
  standalone: true,
  imports: [],
  templateUrl: './promedios.component.html',
  styleUrl: './promedios.component.css'
})


export class PromediosComponent {

}

/*****************


export class TuComponenteComponent {
  // Definir una función para calcular el promedio de un array de notas
  calcularPromedio(notas: number[]): number {
    if (notas.length === 0) {
      return 0; // Si no hay notas, el promedio es cero
    }

    // Sumar todas las notas y dividir por la cantidad de notas
    const suma = notas.reduce((total, nota) => total + nota, 0);
    const promedio = suma / notas.length;

    return promedio;
  }

  // Función principal para leer las notas y calcular los promedios por curso
  calcularPromediosPorCurso() {
    const cursos: { [nombreCurso: string]: number } = {}; // Objeto para almacenar las notas por curso y sus promedios

    // Bucle para ingresar las notas por curso
    while (true) {
      const nombreCurso = prompt("Ingrese el nombre del curso (o escriba 'fin' para terminar):");

      if (nombreCurso?.toLowerCase() === 'fin') {
        break; // Salir del bucle si se ingresa 'fin'
      }

      const notas: number[] = []; // Array para almacenar las notas del curso

      // Bucle para ingresar las notas del curso
      while (true) {
        const notaStr = prompt(`Ingrese la nota para el curso ${nombreCurso} (o escriba 'fin' para terminar):`);
        if (!notaStr) {
          break; // Salir del bucle si no se ingresa nota
        }

        const nota = parseFloat(notaStr);

        if (isNaN(nota) || nota < 0 || nota > 10) {
          alert("Por favor, ingrese una nota válida entre 0 y 10.");
        } else {
          notas.push(nota); // Agregar la nota al array
        }

        const continuar = prompt("¿Desea ingresar otra nota? (sí/no)")?.toLowerCase();
        if (continuar !== 'si') {
          break; // Salir del bucle si no se desea ingresar más notas
        }
      }

      const promedioCurso = this.calcularPromedio(notas);
      cursos[nombreCurso] = promedioCurso; // Almacenar el promedio en el objeto de cursos
    }

    // Mostrar los promedios por curso
    for (const curso in cursos) {
      const container = document.createElement('div');
      container.classList.add('curso');

      const heading = document.createElement('h2');
      heading.textContent = curso;
      container.appendChild(heading);

      const notasText = document.createElement('p');
      notasText.textContent = `Notas: ${notas.join(', ')}`;
      container.appendChild(notasText);

      const promedioText = document.createElement('p');
      promedioText.classList.add('promedio');
      promedioText.textContent = `Promedio: ${cursos[curso].toFixed(2)}`;
      container.appendChild(promedioText);

      document.body.appendChild(container);
    }
  }

  // Llamar a la función principal (puedes hacerlo en el constructor o en algún otro método según tus necesidades)
  constructor() {
    this.calcularPromediosPorCurso();
  }
}

****************** */