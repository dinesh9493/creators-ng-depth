import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KALPITA_URL_LIST } from '../configs/test-api.url.config';

@Injectable({
  providedIn: 'root',
})
export class TestApiCallsService {
  constructor(private _httpClient: HttpClient) {}

  public getKalpitaJobList() {
    return this._httpClient.get(KALPITA_URL_LIST.GET_JOB_LIST);
  }

  public sendEnquiryDetails(data: {
    Name: string;
    Email: string;
    Message: string;
  }) {
    return this._httpClient.post(KALPITA_URL_LIST.SEND_ENQUIRY, data);
  }
}
