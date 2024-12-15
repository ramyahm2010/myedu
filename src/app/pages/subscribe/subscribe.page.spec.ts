import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribePage } from './subscribe.page';
import { provideRouter } from '@angular/router';

describe('SubscribePage', () => {
  let component: SubscribePage;
  let fixture: ComponentFixture<SubscribePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create page subscribe', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when required fields are empty', () => {
    expect(component.subscribeForm.valid).toBeFalsy();
  });

  it('should have a valid form when all required fields are filled', () => {
    component.subscribeForm.patchValue({
      yourName: 'John Doe',
      email: 'john.doe@example.com',
      childName: 'Jane Doe',
      childDOB: {
        day: '01',
        month: 'Jan',
        year: '2010',
      },
      grade: 'Grade 2',
      selectedGender: 'girl',
      selectedTopics: ['English', 'Math', 'Science'],
    });
    expect(component.subscribeForm.valid).toBeTruthy();
  });

  it('should toggle topic selection correctly', () => {
    component.toggleTopic('English');
    expect(component.topicSelected('English')).toBeTruthy();
    component.toggleTopic('English');
    expect(component.topicSelected('English')).toBeFalsy();
  });

  it('should have an invalid form when email is not valid', () => {
    component.subscribeForm.patchValue({
      yourName: 'John Doe',
      email: 'invalid-email',
      childName: 'Jane Doe',
      childDOB: {
        day: '01',
        month: 'Jan',
        year: '2010',
      },
      grade: 'Grade 2',
      selectedGender: 'girl',
      selectedTopics: ['English', 'Math', 'Science'],
    });
    expect(component.subscribeForm.valid).toBeFalsy();
  });

  it('should have an invalid form when childDOB is incomplete', () => {
    component.subscribeForm.patchValue({
      yourName: 'John Doe',
      email: 'john.doe@example.com',
      childName: 'Jane Doe',
      childDOB: {
        day: '',
        month: 'Jan',
        year: '2010',
      },
      grade: 'Grade 2',
      selectedGender: 'girl',
      selectedTopics: ['English', 'Math', 'Science'],
    });
    expect(component.subscribeForm.valid).toBeFalsy();
  });

  it('should have an invalid form when selectedGender is not selected', () => {
    component.subscribeForm.patchValue({
      yourName: 'John Doe',
      email: 'john.doe@example.com',
      childName: 'Jane Doe',
      childDOB: {
        day: '01',
        month: 'Jan',
        year: '2010',
      },
      grade: 'Grade 2',
      selectedGender: '',
      selectedTopics: ['English', 'Math', 'Science'],
    });
    expect(component.subscribeForm.valid).toBeFalsy();
  });

  it('should have an invalid form when grade is not selected', () => {
    component.subscribeForm.patchValue({
      yourName: 'John Doe',
      email: 'john.doe@example.com',
      childName: 'Jane Doe',
      childDOB: {
        day: '01',
        month: 'Jan',
        year: '2010',
      },
      grade: '',
      selectedGender: 'girl',
      selectedTopics: ['English', 'Math', 'Science'],
    });
    expect(component.subscribeForm.valid).toBeFalsy();
  });

  it('should toggle topic selection correctly', () => {
    component.toggleTopic('English');
    expect(component.topicSelected('English')).toBeTruthy();
    component.toggleTopic('English');
    expect(component.topicSelected('English')).toBeFalsy();
  });

  it('should log form value on submit', () => {
    spyOn(console, 'log');
    component.subscribeForm.patchValue({
      yourName: 'John Doe',
      email: 'john.doe@example.com',
      childName: 'Jane Doe',
      childDOB: {
        day: '01',
        month: 'Jan',
        year: '2010',
      },
      grade: 'Grade 2',
      selectedGender: 'girl',
      selectedTopics: ['English', 'Math', 'Science'],
    });
    component.submit();
    expect(console.log).toHaveBeenCalledWith(
      'Form submitted',
      component.subscribeForm.value
    );
  });
});
