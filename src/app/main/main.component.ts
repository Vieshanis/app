import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PricePlan } from './main.model';
import { MatDialog } from '@angular/material';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  /**
   * Email form validators
   * @type {FormControl}
   * @memberof MainComponent
   */
  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  /**
   * Selected plan
   * @type {PricePlan}
   * @memberof MainComponent
   */
  selectedPlan: PricePlan = new PricePlan();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // We set selected plan
    this.selectedPlan.value = 'monthly';
  }

  /**
   * Method to change selected plan
   * @param {string} plan Value of choosen plan
   */
  changePlan(plan: string) {
    this.selectedPlan.value = plan;
  }

  /**
   * Method that calls dialog
   */
  openUploadDialog() {
    // We call dialog
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      // Optional dialog parametrs
      width: '500px'
    });

    // Here we can access passed data after dialog has been closed
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
