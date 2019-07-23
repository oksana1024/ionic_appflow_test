import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'form-trusted-person',
    loadChildren: './form-trusted-person/form-trusted-person.module#FormTrustedPersonModule'
  },
  {
    path: 'form-no-show',
    loadChildren: './form-no-show/form-no-show.module#FormNoShowModule'
  },
  {
    path: 'feedback',
    loadChildren: './feedback/feedback.module#feedbackModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
