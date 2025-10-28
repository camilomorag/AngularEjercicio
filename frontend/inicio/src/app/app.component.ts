import { Component } from '@angular/core';
import { PanelComponent } from './panel/panel.component'; // ✅ importa tu componente

@Component({
  selector: 'app-root',
standalone: true,             // ✅ agrega esto también
  imports: [PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  
}

