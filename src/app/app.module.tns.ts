import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard';
import { TokenInterceptor } from './services/token-interceptor';
import { LoginService } from './services/login-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { HideActionBarDirective } from './directives/hide-action-bar.directive.tns';
import { TokenStorageService } from './services/token-storage-service.tns';
import { RouterService } from './services/router-service.tns';
import { FoldersComponent  } from "./folders/folders.component";
import { AddNewFolderService } from './services/add-new-folder-service';
import { FolderService } from './services/folder-service';
import { PlaceService } from './services/place-service';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { FolderSelectionService } from './services/folder-selection-service';
import { AddNewPlaceService } from './services/add-new-place-service';
import { PlacesComponent } from './places/places.component';
import { PlaceSelectionService } from './services/place-selection-service';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { NewFolderModalComponent } from './new-folder/new-folder-modal.component.tns';
  
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HideActionBarDirective,
    FoldersComponent,
    PlacesComponent,
    NewFolderModalComponent,
    NewFolderComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    LoginService,
    TokenStorageService,
    RouterService,
    AddNewFolderService,
    FolderService,
    PlaceService,
    FolderSelectionService,
    AddNewPlaceService,
    PlaceSelectionService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [NewFolderModalComponent]
})
export class AppModule { }
