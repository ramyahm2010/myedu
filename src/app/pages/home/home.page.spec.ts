import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from './home.page';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home page component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize steps array correctly', () => {
    expect(component.steps.length).toBe(3);
    expect(component.steps[0].title).toBe('Subscribe');
    expect(component.steps[1].title).toBe('Personalize Your Box');
    expect(component.steps[2].title).toBe('Receive Your Surprise Box');
  });

  it('should render the "Subscribe Now" button correctly', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('app-button[label="Subscribe Now"]')
    ).nativeElement;
    expect(buttonElement).toBeTruthy();
  });

  it('should render the steps correctly', () => {
    const stepElements = fixture.debugElement.queryAll(By.css('.step'));
    expect(stepElements.length).toBe(3);
    expect(
      stepElements[0].query(By.css('h2')).nativeElement.textContent
    ).toContain('Subscribe');
    expect(
      stepElements[1].query(By.css('h2')).nativeElement.textContent
    ).toContain('Personalize Your Box');
    expect(
      stepElements[2].query(By.css('h2')).nativeElement.textContent
    ).toContain('Receive Your Surprise Box');
  });
});
