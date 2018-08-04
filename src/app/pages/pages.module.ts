import { NgModule } from '@angular/core';

import { routing } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    UploadComponent
  ]
})
export class PagesModule { }
