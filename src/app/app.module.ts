import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationService } from './authorization/authorization.service';
import { TokenInterceptorService } from './authorization/token-interceptor.service';
import { StudentPreExamObligationComponent } from './student-pre-exam-obligation/student-pre-exam-obligation.component';
import { ProfessorPreExamObligationComponent } from './professor-pre-exam-obligation/professor-pre-exam-obligation.component';
import { ProfessorPreExamObligationRecordsComponent } from './professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JwtInterceptorService } from './authorization/jwt-interceptor.service';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';
import { RoleService } from './shared/role.service';
import { PreExamObligationRecordsService } from './student-pre-exam-obligation/pre-exam-obligation-records.service';
import { PreExamOTypeComponent } from './pre-exam-o-type/pre-exam-o-type.component';
import { PreExamOTypeService } from './pre-exam-o-type/pre-exam-o-type.service';
import { PreExamObligationervice } from './professor-pre-exam-obligation/pre-exam-obligation.service';
import { StudentCourseComponent } from './student-course/student-course.component';
import { ProfessorCourseComponent } from './professor-course/professor-course.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: '/user-login',
    pathMatch: 'full'
  }, */
  {
    path: 'login',
    component: AuthorizationComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'preExamOTypes',
    component: PreExamOTypeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthorizationComponent,
    DepartmentComponent,
    StudentPreExamObligationComponent,
    ProfessorPreExamObligationComponent,
    ProfessorPreExamObligationRecordsComponent,
    UserProfileComponent,
    PaginationComponent,
    DialogComponent,
    PreExamOTypeComponent,
    StudentCourseComponent,
    ProfessorCourseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), NgbModule.forRoot()
  ],
  providers: [UserService, DepartmentService, AuthorizationService, TokenInterceptorService, JwtInterceptorService, PreExamObligationRecordsService, PreExamOTypeService, PreExamObligationervice, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }, RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
