import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebFeaturesCustomDesignKitModule } from '@coinverse/web/features/custom-design-kit';
import { WebFeaturesMenuModule } from "@coinverse/web/features/menu";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebFeaturesCustomDesignKitModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiAlertModule,
      WebFeaturesMenuModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent],
})
export class AppModule {}
