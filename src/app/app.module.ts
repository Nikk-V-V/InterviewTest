import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MatListModule } from '@angular/material/list';
import { PostService } from './shared/services/post.service';
import { PhotoService } from './shared/services/photo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    PostsComponent,
    GalleryComponent,
    ContactUsComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostService, PhotoService]
})
export class AppModule {}
