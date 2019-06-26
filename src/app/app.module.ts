import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoursespageComponent } from './components/coursespage/coursespage.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { Routes, RouterModule } from '@angular/router';
import { EventspageComponent } from './components/eventspage/eventspage.component';
import { CoworkingpageComponent } from './components/coworkingpage/coworkingpage.component';
import { PhotoshopComponent } from './components/coursespage/photoshop/photoshop.component';
import { SliderComponent } from './components/slider/slider.component';
import { ReactNativeComponent } from './components/coursespage/react-native/react-native.component';
import { DigitalDsmaxComponent } from './components/coursespage/digital-dsmax/digital-dsmax.component';
import { ArchicadComponent } from './components/coursespage/archicad/archicad.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent, data: {transparent: true } },
  { path: 'courses', component: CoursespageComponent },
  { path: 'events', component: EventspageComponent },
  { path: 'coworking', component: CoworkingpageComponent },
  { path: 'photoshop', component:  PhotoshopComponent },
  { path: 'digitaldsmax', component: DigitalDsmaxComponent  },
  { path: 'archicad', component:  ArchicadComponent },
  { path: 'reactNative', component: ReactNativeComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CoursespageComponent,
    EventspageComponent,
    CoworkingpageComponent,
    PhotoshopComponent,
    SliderComponent,
    ReactNativeComponent,
    DigitalDsmaxComponent,
    ArchicadComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

