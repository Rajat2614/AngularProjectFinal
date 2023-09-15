import { RouterModule, Routes } from "@angular/router";
import { PostCreateComponent } from "../posts/post-create/post-create.component";
import { PostListComponent } from "../posts/post-list/post-list.component";
import { AuthGuard } from "./auth.guard";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
