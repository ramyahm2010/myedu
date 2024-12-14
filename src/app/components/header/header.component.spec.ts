import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo image', () => {
    const logoElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute('src')).toBe('assets/images/logo.svg');
  });

  it('should have the correct toolbar color', () => {
    const toolbarElement = fixture.debugElement.query(
      By.css('ion-toolbar')
    ).nativeElement;
    expect(toolbarElement.getAttribute('color')).toBe('purple');
  });
});
