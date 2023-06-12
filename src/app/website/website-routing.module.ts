import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about-me',
        loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule)
      },
      {
        path: 'curriculum',
        loadChildren: () => import('./pages/curriculum/curriculum.module').then(m => m.CurriculumModule)
      },
      {
        path: 'certificate',
        loadChildren: () => import('./pages/certificate/certificate.module').then(m => m.CertificateModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'portfolio-detail',
        loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
