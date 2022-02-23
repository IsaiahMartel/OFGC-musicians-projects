import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {By} from '@angular/platform-browser';
import { TabsPage } from './tabs.page';
import { Router } from '@angular/router';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ TabsPage, Router ],
      imports: [IonicModule.forRoot()]
=======
      declarations: [ TabsPage ],
      imports: [IonicModule.forRoot(), Router],
      providers: [Router]
>>>>>>> main
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
  
    fixture.detectChanges();
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
  fit('should change the content', () => {
    




   
// console.log(compiled.querySelectorAll('ion-tab-button')[0].click());

});
=======
  fit('should redirect to events', () =>{
    const btnElement = fixture.debugElement.query(By.css('tab'));
    console.log(btnElement);
    
  })
>>>>>>> main
});
