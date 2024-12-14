import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    ReactiveFormsModule,
    IonText,
  ],
})
export class FooterComponent {
  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log('Email:', this.subscribeForm.value.email);
    }
  }
}
