import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendSingleProjectPdfPage } from './send-single-project-pdf.page';

describe('SendSingleProjectPdfPage', () => {
  let component: SendSingleProjectPdfPage;
  let fixture: ComponentFixture<SendSingleProjectPdfPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSingleProjectPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendSingleProjectPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
