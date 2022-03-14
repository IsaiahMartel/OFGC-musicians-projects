import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'calendar/:id',
  //   loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  // },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  },
  
  {
    path: 'create',
    loadChildren: () => import('./views/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./views/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./views/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./views/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./views/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pdf-modal-menu',
    loadChildren: () => import('./views/PDF-modal-menu/projects-pdf-menu/pdf-modal-menu.module').then( m => m.PDFModalMenuPageModule)
  },
  {
    path: 'pdf-project-modal',
    loadChildren: () => import('./views/pdf-project-modal/pdf-project-modal/pdf-project-modal.module').then( m => m.PdfProjectModalPageModule)
  },
  {
    path: 'send-single-project-pdf',
    loadChildren: () => import('./views/PdfModals/sendSingleProjectPdf/send-single-project-pdf/send-single-project-pdf.module').then( m => m.SendSingleProjectPdfPageModule)
  },
  {
    path: 'download-single-project-pdf',
    loadChildren: () => import('./views/PdfModals/downloadSingleProjectPdf/download-single-project-pdf/download-single-project-pdf.module').then( m => m.DownloadSingleProjectPdfPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../app/views/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chat-with-laravel',
    loadChildren: () => import('./views/chat-with-laravel/chat-with-laravel.module').then( m => m.ChatWithLaravelPageModule)
  },
  {
    path: 'sqlite-view',
    loadChildren: () => import('./views/sqlite-view/sqlite-view.module').then( m => m.SqliteViewPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }