import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(message: unknown): void {
    console.log(message);
  }

  error(error: unknown): void {
    console.error(error);
  }
}
