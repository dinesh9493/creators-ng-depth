import { environment } from 'src/environments/environment';

export const KALPITA_URL_LIST = {
  GET_JOB_LIST: `${environment.kalpitaApiBaseUrl}JobListing/Getjoblist`,
  SEND_ENQUIRY: `${environment.kalpitaApiBaseUrl}ContactUs/SendEnquiry`,
};
