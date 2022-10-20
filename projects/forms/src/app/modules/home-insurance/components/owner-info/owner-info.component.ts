import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss'],
})
export class OwnerInfoComponent implements OnInit {
  public ownerFormGroup: FormGroup = new FormGroup({});
  public isOwnerFormSubmitted: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initiateOwnerForm();
  }

  private _initiateOwnerForm() {
    this.ownerFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern(/\d{10}/),
        ],
      ],
    });
  }

  public submitOwnerForm() {
    this.isOwnerFormSubmitted = true;
    console.log(this.ownerFormGroup);
    if (this.ownerFormGroup.status == 'VALID') {
      console.log(this.ownerFormGroup.value);
    } else {
      alert('Please check the Form');
    }
  }
}
