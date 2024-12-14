import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    const headerElement = fixture.debugElement.query(
      By.css('app-header')
    ).nativeElement;
    expect(headerElement).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const routerOutletElement = fixture.debugElement.query(
      By.css('ion-router-outlet')
    ).nativeElement;
    expect(routerOutletElement).toBeTruthy();
  });
});
