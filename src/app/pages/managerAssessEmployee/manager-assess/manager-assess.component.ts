import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manager-assess',
  templateUrl: './manager-assess.component.html',
  styleUrl: './manager-assess.component.scss'
})
export class ManagerAssessComponent implements OnInit{
  title = "Manager Assess" 
  assessments: any[] = []
  systemUser: any
  constructor(private server: HttpServiceService, private http: HttpClient){}

  openDialog(){}

  ngOnInit(){
    this.systemUser = JSON.parse(localStorage.getItem("user"))
  }

  

}
