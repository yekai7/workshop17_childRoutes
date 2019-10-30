import { NgModule } from "@angular/core";
import { GameComponent } from './game.component';
import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const MODULES: Routes = [
    { path: "", component: GameComponent },
    { path: "games", component: GameComponent },
    { path: "comment/:gid", component: CommentComponent }
]

@NgModule({
    declarations: [GameComponent, CommentComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(MODULES)
    ],
    exports: [RouterModule],
    providers: []
})

export class GamesModule { }