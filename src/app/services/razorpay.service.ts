import { Injectable } from '@angular/core';

export interface ICustomWindow extends Window{
  __custom_globle_stuff:string;
}

function getWindow(): any{
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  get nativeWindow():ICustomWindow{
    return getWindow();
  }

}
