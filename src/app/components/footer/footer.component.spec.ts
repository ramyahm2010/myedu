import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when email is empty', () => {
    const emailControl = component.subscribeForm.get('email');
    if (emailControl) {
      emailControl.setValue('');
      expect(component.subscribeForm.invalid).toBeTruthy();
    }
  });

  it('should have an invalid form when email is not valid', () => {
    const emailControl = component.subscribeForm.get('email');
    if (emailControl) {
      emailControl.setValue('invalid-email');
      expect(component.subscribeForm.invalid).toBeTruthy();
    }
  });

  it('should have a valid form when email is valid', () => {
    const emailControl = component.subscribeForm.get('email');
    if (emailControl) {
      emailControl.setValue('test@example.com');
      expect(component.subscribeForm.valid).toBeTruthy();
    }
  });

  it('should display error message when email is invalid and touched', () => {
    const emailControl = component.subscribeForm.get('email');
    if (emailControl) {
      emailControl.setValue('');
      emailControl.markAsTouched();
      fixture.detectChanges();
      const errorMessage = fixture.debugElement.query(
        By.css('.error-message ion-text')
      ).nativeElement;
      expect(errorMessage).toBeTruthy();
      expect(errorMessage.textContent).toContain('Email is required.');
    }
  });

  it('should log email on form submission when form is valid', () => {
    spyOn(console, 'log');
    component.subscribeForm.patchValue({
      email: 'test@example.com',
    });
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Email:', 'test@example.com');
  });

  it('should not log email on form submission when form is invalid', () => {
    spyOn(console, 'log');
    component.subscribeForm.patchValue({
      email: 'invalid-email',
    });
    component.onSubmit();
    expect(console.log).not.toHaveBeenCalled();
  });
});
