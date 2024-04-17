import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "../services/login/login.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const login=inject(LoginService);
  if (login.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
