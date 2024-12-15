import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() label: string = ''; // Button label
  @Input() block: boolean = false; // Full-width button
  @Input() border: boolean = false; // Button border
  @Input() route: string = ''; // Navigation route

  @Output() buttonClick = new EventEmitter<void>(); // Output event

  clickedButton() {
    this.buttonClick.emit(); // Emit the event when the button is clicked
  }
}
