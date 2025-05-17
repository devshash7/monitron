import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'mn-layout',
  imports: [ SidebarComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  layout = inject(CoreService)._layout;
}
