import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const MODULES: Routes = [
  {
    //lazy loading with module, routes will be placed inside the child module
    path: "bgg", loadChildren: () => import('./games/games.module').then((m => m.GamesModule))
  },
  { path: "**", redirectTo: '/bgg', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(MODULES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
