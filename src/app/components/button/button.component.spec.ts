import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the button component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label input correctly', () => {
    component.label = 'Test Button';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('ion-button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Test Button');
  });

  it('should have the correct expand property when block is true', () => {
    component.block = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('ion-button')
    ).componentInstance;
    expect(buttonElement.expand).toBe('block');
  });

  it('should not have the expand attribute when block is false', () => {
    component.block = false;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('ion-button')
    ).nativeElement;
    expect(buttonElement.hasAttribute('expand')).toBeFalse();
  });

  it('should render the route input correctly', () => {
    component.route = '/test';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('ion-button')
    ).nativeElement;
    expect(buttonElement.getAttribute('ng-reflect-router-link')).toBe('/test');
  });
});
