import { Component } from '@angular/core';

import { db } from '../services/db.service';
import { ProjectComponent } from './project.component';

@Component({
    moduleId: module.id,
    selector: 'projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent{
    constructor(private _db: db){
        
    }
    getProjects(){
        alert("Getting projects");
        var response = this._db.getData().then(res =>{
            console.log(res);
        });
        

    }
}