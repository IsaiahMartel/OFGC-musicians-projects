import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {By} from '@angular/platform-browser';
import { TabsPage } from './tabs.page';
import { Router } from '@angular/router';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPage ],
      imports: [IonicModule.forRoot(), Router],
      providers: [Router]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should redirect to events', () =>{
    const btnElement = fixture.debugElement.query(By.css('tab'));
    console.log(btnElement);
    
  })
});
