import { Component, Input } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonButton],
  standalone: true,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() isBlock: boolean = false;
}
