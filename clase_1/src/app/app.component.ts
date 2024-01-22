import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuHeaderComponent } from "./componentes/menu-header/menu-header.component";
import { MenuRedesSociaisComponent } from "./componentes/menu-redes-sociais/menu-redes-sociais.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuHeaderComponent, MenuRedesSociaisComponent]
})
export class AppComponent {
  title = 'exemplo-boostrap';
}
