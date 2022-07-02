import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TuiRootModule } from '@taiga-ui/core';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    MatToolbarModule
  ],
  exports: [
    TuiRootModule,
    MatToolbarModule
  ]
})
export class WebFeaturesCustomDesignKitModule {}