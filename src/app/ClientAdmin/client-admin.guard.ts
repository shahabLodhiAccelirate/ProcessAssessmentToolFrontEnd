import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClientAdminGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      return true;   // for test

      //#region Logic
      // var LoginUser=JSON.parse(localStorage.getItem('user'));
      // if(LoginUser!=null)
      // {
      //     if(LoginUser.Role=='user' || LoginUser.Role=='admin')
      //     {
      //       return true;
      //     }
      //     else
      //     {
      //       this.route.navigate(['/register']);
      //       return false;    
      //     }
      // }
      // else
      // {
      //   this.route.navigate(['/register']);
      //   return false;
      // }

      //#endregion
      
  }
}
