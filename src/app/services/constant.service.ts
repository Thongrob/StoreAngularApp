import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  // กำหนด path ของ url สำหรับเรียก API ไว้ที่นี่
  baseAPIURL = "https://localhost:5001/api/"
  constructor() { }
}
