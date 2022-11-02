import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  CANADA_ZIP_CODE_PATTERN,
  INDIA_ZIP_CODE_PATTERN,
  UK_ZIP_CODE_PATTERN,
  USA_ZIP_CODE_PATTERN,
} from 'src/app/modules/shared/patterns/common.patterns';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {
  public personalFormGroup: any = new FormGroup({});
  private _subscriptionList = new Subscription();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initiatePersonalForm();
    this._checkAndUpdateValidatorForZipcode();
    this._subscribeToEvents();
  }

  ngOnDestroy(): void {
    this._subscriptionList.unsubscribe();
  }

  private _initiatePersonalForm() {
    this.personalFormGroup = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      country: ['usa'],
    });
  }

  private _subscribeToEvents() {
    this._subscriptionList.add(
      this.personalFormGroup.get('country').valueChanges.subscribe({
        next: (change: any) => {
          this._checkAndUpdateValidatorForZipcode();
        },
        error: (error: any) => {
          console.log(error);
        },
      })
    );
  }

  private _checkAndUpdateValidatorForZipcode() {
    let country = this.personalFormGroup.get('country').value;
    switch (country) {
      case 'usa':
        {
          this._updateZipCodeValidation(USA_ZIP_CODE_PATTERN);
        }
        break;
      case 'uk':
        {
          this._updateZipCodeValidation(UK_ZIP_CODE_PATTERN);
        }
        break;
      case 'canada':
        {
          this._updateZipCodeValidation(CANADA_ZIP_CODE_PATTERN);
        }
        break;
      case 'india':
        {
          this._updateZipCodeValidation(INDIA_ZIP_CODE_PATTERN);
        }
        break;
      case '':
        {
          this._updateZipCodeValidation();
        }
        break;
      default:
        {
          this._updateZipCodeValidation();
        }
        break;
    }
  }

  private _updateZipCodeValidation(pattern?: any) {
    if (pattern) {
      this.personalFormGroup
        .get('zipCode')
        .setValidators([Validators.required, Validators.pattern(pattern)]);
      this.personalFormGroup.get('zipCode').updateValueAndValidity();
    } else {
      this.personalFormGroup.get('zipCode').clearValidators();
      this.personalFormGroup.get('zipCode').updateValueAndValidity();
    }
    console.log(this.personalFormGroup);
  }
}
