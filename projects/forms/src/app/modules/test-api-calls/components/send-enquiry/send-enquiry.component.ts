import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_PATTERN } from 'src/app/modules/shared/patterns/common.patterns';
import { TestApiCallsService } from '../../services/test-api-calls.service';

@Component({
  selector: 'app-send-enquiry',
  templateUrl: './send-enquiry.component.html',
  styleUrls: ['./send-enquiry.component.scss'],
})
export class SendEnquiryComponent implements OnInit {
  public enquiryFormGroup: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _testApiCallsService: TestApiCallsService
  ) {}

  ngOnInit(): void {
    this._initiateEnquiryForm();
  }

  private _initiateEnquiryForm() {
    this.enquiryFormGroup = this._formBuilder.group({
      Name: ['', [Validators.required]],
      Email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(EMAIL_PATTERN),
        ],
      ],
      Message: ['', [Validators.required]],
    });
  }

  public back() {
    this._router.navigateByUrl('test-api/job-list');
  }

  public submitEnquiry() {
    if (this.enquiryFormGroup.status == 'VALID') {
      this._testApiCallsService
        .sendEnquiryDetails(this.enquiryFormGroup.value)
        .subscribe({
          next: (res: any) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          },
        });
    }
  }
}
