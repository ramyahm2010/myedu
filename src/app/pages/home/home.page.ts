import { Component } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ButtonComponent } from '@components/button/button.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    ButtonComponent,
    FooterComponent,
  ],
})
export class HomePage {
  steps: {
    title: string;
    description: string;
  }[] = [];

  constructor() {
    this.steps = [
      {
        title: 'Subscribe',
        description:
          "Select a subscription plan that suits your child's learning needs and preferences.",
      },
      {
        title: 'Personalize Your Box',
        description:
          "Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly.",
      },
      {
        title: 'Receive Your Surprise Box',
        description:
          'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
      },
    ];
  }
}
