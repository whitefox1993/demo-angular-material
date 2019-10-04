import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules propios de Angular Material
import { MatToolbarModule, MatButtonModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Modules propios de Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule { }

// Modulo personalizado que contiene los modulos de material
// Todos los modulos que se utilicen se tienen que importar y exportar de otra forma no funcionarian.
