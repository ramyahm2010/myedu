import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonButton, RouterModule],
  standalone: true,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() block: boolean = false;
  @Input() border: boolean = false;
  @Input() route: string = '';
}
