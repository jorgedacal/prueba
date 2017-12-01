import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CovalentDataTableModule, CovalentLayoutModule } from '@covalent/core';
import { MaterialModule } from './material-module/material.module';
import {
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MAT_PLACEHOLDER_GLOBAL_OPTIONS,
  MatButtonModule,
  MatButtonToggleModule,
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgForageModule} from 'ngforage';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    appRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CovalentLayoutModule,
    CovalentDataTableModule,
    MaterialModule,
    MatTabsModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule,
    NgForageModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
