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
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    ReactiveFormsModule,
  ],
})
export class FooterComponent {
  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with an email control and validation
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log('Email:', this.subscribeForm.value.email);
    }
  }
}
