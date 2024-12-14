import { Component } from '@angular/core';
import { IonToolbar, IonTitle, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle],
})
export class HeaderComponent {}
