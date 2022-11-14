import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app.routes';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BarModule } from './demos/bar-di-zones/bar.module';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';

import { BarServices } from './demos/bar-di-zones/bar.service';

import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    HttpClientModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
