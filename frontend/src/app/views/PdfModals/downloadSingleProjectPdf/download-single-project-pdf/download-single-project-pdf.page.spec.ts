import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadSingleProjectPdfPage } from './download-single-project-pdf.page';

describe('DownloadSingleProjectPdfPage', () => {
  let component: DownloadSingleProjectPdfPage;
  let fixture: ComponentFixture<DownloadSingleProjectPdfPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSingleProjectPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadSingleProjectPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
