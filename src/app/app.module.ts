import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharedLayouts/footer/footer.component';
import { NavbarComponent } from './sharedLayouts/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AdminDashboardComponent } from './layouts/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PluginComponent } from './sharedLayouts/plugin/plugin.component';
import { ToastrModule } from 'ngx-toastr';
import { SelfAssessmentComponent } from './pages/self-assessment/self-assessment.component';
import { AsessMyTeamComponent } from './pages/asess-my-team/asess-my-team.component';
import { SkillsAssessmentComponent } from './pages/skills-assessment/skills-assessment.component';
import { CriticalRolesAssessmentComponent } from './pages/critical-roles-assessment/critical-roles-assessment.component';
import { SuccessionPlanComponent } from './pages/succession-plan/succession-plan.component';
import { TalentMappingComponent } from './pages/talent-mapping/talent-mapping.component';
import { AppraisalsComponent } from './pages/appraisals/appraisals.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { MvpsComponent } from './pages/mvps/mvps.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewDialogComponent } from './pages/view-dialog/test.component';
import { DialogViewComponent } from './pages/dialog-view/dialog-view.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminDashboardComponent,
    PluginComponent,
    SelfAssessmentComponent,
    AsessMyTeamComponent,
    SkillsAssessmentComponent,
    CriticalRolesAssessmentComponent,
    SuccessionPlanComponent,
    TalentMappingComponent,
    AppraisalsComponent,
    UsersComponent,
    RolesComponent,
    MvpsComponent,
    SignInComponent,
    ErrorPageComponent,
    ViewDialogComponent,
    DialogViewComponent
    
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
