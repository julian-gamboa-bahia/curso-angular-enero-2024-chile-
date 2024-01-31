import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './componentes/footer/footer.component'; // Footer
import { NavbarComponent } from '././componentes/navbar/navbar.component'; // navbar


import { NewsletterComponent } from './componentes/newsletter/newsletter.component'; // 
import { RecipeComponent } from '././componentes/recipe/recipe.component'; // 

/*

*/


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    FooterComponent,
    NavbarComponent,
    NewsletterComponent,
    RecipeComponent    
  ], // Add imported components to the imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase_4';
}
