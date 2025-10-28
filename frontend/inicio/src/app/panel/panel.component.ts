import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 necesario para *ngIf

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  activo: boolean = true;
  nombre: string = "Luis";
  edad: number = 20;
  total: number = 2000;

  titulo: string = "Bienvenido al Panel";
  subtitulo: string = "Subtítulo del Panel";
  imagenUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";
  parrafo: string = "Este es un ejemplo con interpolación, property binding y event binding.";

  mostrarImagen: boolean = true;

  cambiarTexto() {
    this.titulo = "Texto cambiado correctamente!";
    this.subtitulo = "Se ha actualizado desde el botón";
    this.parrafo = "Has hecho clic en el botón 'Cambiar texto'.";
  }

  alternarImagen() {
    this.mostrarImagen = !this.mostrarImagen;
  }
}
