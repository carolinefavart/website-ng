import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ExampleComponent } from './example/example.component';
import { ApiComponent } from './api/api.component';
import { InstallComponent } from './install/install.component';
import { CommunityComponent } from './community/community.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: GettingStartedComponent },
  { path: 'tutorials/:name', component: TutorialComponent },
  { path: 'api', children: [
      {
          path: "**",
          component: ApiComponent
      }
    ]},
  { path: 'examples', 
    children: [
      {
        path: "**",
        component: ExampleComponent
      },
    ],
    runGuardsAndResolvers: "always" },
  { path: 'install', component: InstallComponent},
  { path: '**', component: PageNotFoundComponent, data: {name: 'PageNotFound'}},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 128],
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
