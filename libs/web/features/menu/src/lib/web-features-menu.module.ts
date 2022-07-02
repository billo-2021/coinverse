import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebFeaturesCustomDesignKitModule } from '@coinverse/web/features/custom-design-kit';

import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuFooterComponent } from './components/./menu-footer/menu-footer.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';

@NgModule({
  imports: [CommonModule, WebFeaturesCustomDesignKitModule],
  declarations: [
    MenuHomeComponent,
    MenuHeaderComponent,
    MenuFooterComponent,
    MenuSideComponent,
  ],
  exports: [MenuHomeComponent],
})
export class WebFeaturesMenuModule {}
