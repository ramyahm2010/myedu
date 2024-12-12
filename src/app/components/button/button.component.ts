import { Component, input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonButton],
  standalone: true,
})
export class ButtonComponent implements OnInit {
  label = input<string>();
  isBlock = input<boolean>();

  constructor() {}

  ngOnInit() {}
}
