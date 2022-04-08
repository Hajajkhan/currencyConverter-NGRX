import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { LatestRatesComponent } from './latest-rates/latest-rates.component';

const routes: Routes = [
  // {path:'', component:AppComponent},
  {path:'', component:ConversionComponent},
  {path:'latestrates', component:LatestRatesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
