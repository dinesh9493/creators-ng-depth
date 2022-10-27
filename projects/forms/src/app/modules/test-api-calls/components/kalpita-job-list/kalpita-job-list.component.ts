import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestApiCallsService } from '../../services/test-api-calls.service';

@Component({
  selector: 'app-kalpita-job-list',
  templateUrl: './kalpita-job-list.component.html',
  styleUrls: ['./kalpita-job-list.component.scss'],
})
export class KalpitaJobListComponent implements OnInit {
  public jobList: any = [];

  constructor(private _testApiCallsService: TestApiCallsService, private _router: Router) {}

  ngOnInit(): void {
    this._getJobList();
  }

  private _getJobList() {
    this.jobList = [];
    this._testApiCallsService.getKalpitaJobList().subscribe({
      next: (res: any) => {
        if (res.length) {
          this.jobList = res;
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public goToEnquiry() {
    this._router.navigateByUrl('test-api/send-enquiry');
  }
}
