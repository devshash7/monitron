import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  _layout = signal<number>(0);
  constructor() { }
}
