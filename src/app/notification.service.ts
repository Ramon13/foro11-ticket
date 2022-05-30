import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
	  private snackbar: MatSnackBar
  ) { }
  
  notify(message: string) {
  	this.snackbar.open(message, "ok", {
  	  duration: 2000,
  	  verticalPosition: "top",
  	  horizontalPosition: "center"
  	});
  }
}
