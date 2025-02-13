import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { OrderTransformationPipe } from './custom-transformation.pipe';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CustomCardComponent } from './content-projection/custom-card/custom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    OrderTransformationPipe,
    ContentProjectionComponent,
    CustomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
