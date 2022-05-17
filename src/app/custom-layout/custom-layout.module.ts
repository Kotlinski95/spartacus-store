import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          lg: {
            slots: ['Section1', 'Section5', 'Section4']
          },
          slots: ['Section5', 'Section4']
        }
      }
    })
  ]
})
export class CustomLayoutModule { }
