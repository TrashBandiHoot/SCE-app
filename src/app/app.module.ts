import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AssetsMainComponent } from './assets-main/assets-main.component';
import { AssetListComponent } from './assets-main/asset-list/asset-list.component';
import { AssetDetailsComponent } from './assets-main/asset-details/asset-details.component';
import { CheckInMainComponent } from './check-in-main/check-in-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssetsMainComponent,
    AssetListComponent,
    AssetDetailsComponent,
    CheckInMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
