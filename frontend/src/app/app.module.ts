import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './services/auth/auth.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HammerModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AuthModule,  SocketIoModule.forRoot(config), ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '806724117090-bain010265pcefpqn7hlgipq2b6poecs.apps.googleusercontent.com'
            )
          },]
      } as SocialAuthServiceConfig,
    }, 
  
  ],  

  bootstrap: [AppComponent],
})
export class AppModule {}

