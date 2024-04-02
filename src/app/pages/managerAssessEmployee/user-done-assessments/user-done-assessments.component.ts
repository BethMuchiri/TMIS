import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-user-done-assessments',
  templateUrl: './user-done-assessments.component.html',
  styleUrl: './user-done-assessments.component.scss'
})
export class UserDoneAssessmentsComponent {

  title = "Manager Assess" 
  assessments: any[] = []
  assess: any[] = []
  systemUser: any
  constructor(private server: HttpServiceService, private http: HttpClient){}

  openDialog(){}

  ngOnInit(){
    this.systemUser = JSON.parse(localStorage.getItem("user"))

    this.getUserDoneAssements()
  }

  getUserDoneAssements(){
    const url = `${this.server.serverUrl}/employeeDoneAssessments?manId=${this.systemUser.userId}`
    const response = this.http.get(url);
    response.subscribe(
      (value: any) => {

        this.assess = value.item;
        console.log("value",this.assess)

      },
      (error: any) => {
        console.log(error)
      }
    )
  }

}
