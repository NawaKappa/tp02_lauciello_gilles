import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { OnlyLetterDirective } from './_helpers/only-letter.directive';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { PhonePipePipe } from './_helpers/phone-pipe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, FormulaireComponent, UserInfoComponent, OnlyLetterDirective, MustMatchDirective, PhonePipePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
}
