import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { NgModule } from "@angular/core";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: PostCreateComponent },
  { path: "edit/:postId", component: PostCreateComponent },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((x) => x.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
