import { Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ContactComponent } from './component/contact/contact.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'articles', component : ArticleListComponent}
];
