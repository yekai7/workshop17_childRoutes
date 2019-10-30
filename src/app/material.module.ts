import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MODULES = [
    MatToolbarModule, MatCardModule, MatTabsModule,
    MatButtonModule, MatIconModule, MatSnackBarModule,
    MatFormFieldModule, MatInputModule
]
@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule {

}

