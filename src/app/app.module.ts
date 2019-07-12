import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoboComponent } from './robo/robo.component';
import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { InputImageComponent } from './input-image/input-image.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { CookieService } from 'ngx-cookie-service';






@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    RoboComponent,
    ContainerComponent,
    CardComponent,
    StepperComponent,
    InputImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFileUploadModule

  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
