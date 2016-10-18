import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import  { ProjectsComponent } from './projects/projects.component';

export var Routes = RouterModule.forRoot([
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'mylogin',
        component: LoginComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
])
