import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
