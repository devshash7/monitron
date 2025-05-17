import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { LayoutComponent } from "./core/layout/layout.component";
import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{

  title = 'monitron';

  coreService = inject(CoreService);

  ngOnInit(): void {
    // TODO
    // if authenticated move to dashboard
    this.coreService._layout.set(0)
  }

}
