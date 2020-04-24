import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  {path:'tdf',component:TemplateDrivenFormsComponent},
 // { path: '', redirectTo: '/structural-directives', pathMatch:'full'},
 // { path: 'structural-directives', component: StructuralDirectivesComponent},
 // { path: 'tdf', component:TemplateDrivenFormsComponent},
  { path: 'mdf', component:ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
