import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ButtonComponent,
  ],
})
export class SubscribePage {
  subscribeForm: FormGroup;

  constructor() {
    // Initialize the form with controls and validation
    this.subscribeForm = new FormGroup({
      yourName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      childName: new FormControl('', Validators.required),
      childDOB: new FormGroup({
        day: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
      }),
      grade: new FormControl('', Validators.required),
      selectedGender: new FormControl('boy', Validators.required),
      selectedTopics: new FormControl([], Validators.required),
    });
  }

  // Check if a topic is selected
  topicSelected(topic: string): boolean {
    return this.subscribeForm.value.selectedTopics.includes(topic);
  }

  // Toggle the selection of a topic
  toggleTopic(topic: string): void {
    const currentTopics = this.subscribeForm.value.selectedTopics;
    if (currentTopics.includes(topic)) {
      this.subscribeForm.patchValue({
        selectedTopics: currentTopics.filter((t: string) => t !== topic),
      });
    } else {
      if (currentTopics.length < 3) {
        this.subscribeForm.patchValue({
          selectedTopics: [...currentTopics, topic],
        });
      }
    }
  }

  // Handle form submission
  submit(): void {
    if (this.subscribeForm.valid) {
      console.log('Form submitted', this.subscribeForm.value);
    }
  }
}
