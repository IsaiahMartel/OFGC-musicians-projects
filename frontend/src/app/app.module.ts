import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './services/auth/auth.module';

// import { IonRouterOutlet } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [HammerModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AuthModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  
  
  ],  

  bootstrap: [AppComponent],
})
export class AppModule {}

