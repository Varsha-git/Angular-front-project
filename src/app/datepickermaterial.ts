import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule

    ],
    exports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule { }