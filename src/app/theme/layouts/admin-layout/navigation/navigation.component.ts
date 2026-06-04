// Angular import
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import

import { NavContentComponent } from './nav-content/nav-content.component';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-navigation',
  imports: [NavContentComponent, CommonModule, TabsModule],
  // Esto es MANDATORIO para rendimiento y evitar NG0100 en apps modernas
  templateUrl: './navigation.component.html', //Esto suele "curar" el NG0100 porque desconecta la detección de cambios automática y constante, basándose en señales o cambios de inputs.
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // media 1025 After Use Menu Open
  NavCollapsedMob = output();

  navCollapsedMob;
  windowWidth: number;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsedMob = false;
  }

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
