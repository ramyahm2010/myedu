import { Component } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol, ButtonComponent],
})
export class HomePage {
  constructor() {}
}
