import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoldersComponent } from './folders/folders.component';
import { PlacesComponent } from './places/places.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { LocationService } from './services/location-service';
import { NgbModalModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { AddNewPlaceService } from './services/add-new-place-service';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { AddNewFolderService } from './services/add-new-folder-service';
import { FolderService } from './services/folder-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlaceService } from './services/place-service';
import { TokenInterceptor } from './services/token-interceptor';
import { AuthGuard } from './services/auth-guard';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login-service';
import { EncryptDecryptService } from './services/encrypt-decrypt-service';
import { RouterService } from './services/router-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoldersComponent,
    PlacesComponent,
    NewPlaceComponent,
    NewFolderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbAlertModule,
    HttpClientModule
  ],
  providers: [LocationService,
    AddNewPlaceService,
    AddNewFolderService,
    FolderService,
    PlaceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
    LoginService,
    EncryptDecryptService,
    RouterService
    ],
  bootstrap: [AppComponent],
  entryComponents: [NewPlaceComponent,
  NewFolderComponent]
})
export class AppModule { }
