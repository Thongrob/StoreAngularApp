import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  baseAPIURL = "http://localhost:5001/api/";  
  constructor() { }

}