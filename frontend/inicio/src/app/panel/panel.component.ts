import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
   activo:boolean = true;
   nombre:string= "Luis";
   edad:number=20;
   total:number=2000;

   
}
