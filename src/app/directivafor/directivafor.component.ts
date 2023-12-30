import { Component } from '@angular/core';

@Component({
  selector: 'app-directivafor',
  templateUrl: './directivafor.component.html',
  styleUrls: ['./directivafor.component.css']
})
export class DirectivaforComponent {

  public cursos:any=[{id:'1',nameCurso:'C#'},{id:'2',nameCurso:'C++'},{id:'3',nameCurso:'Java'},{id:'4',nameCurso:'Python'},{id:'5',nameCurso:'Node'}]
}
