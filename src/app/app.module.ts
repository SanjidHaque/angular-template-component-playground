import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { OrderTransformationPipe } from './custom-transformation.pipe';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CustomCardComponent } from './content-projection/custom-card/custom-card.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChildOneComponent } from './change-detection/child-one.component';
import {FormsModule} from "@angular/forms";
import {CssNestingComponent} from "./css-nesting/css-nesting.component";

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    OrderTransformationPipe,
    ContentProjectionComponent,
    CustomCardComponent,
    LifecycleHooksComponent,
    ChangeDetectionComponent,
    ChildOneComponent,
    CssNestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
