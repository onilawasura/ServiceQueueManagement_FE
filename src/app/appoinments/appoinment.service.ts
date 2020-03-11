import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient  } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {
  
  constructor(
    private http: HttpClient
    ) { }

    addCustomerUri: string = null;
    getAllServicesUri: string = null;
    addServicesUri: string = null;
    addAppoinmentUri: string = null;

    public AddCustomer(customerModel){
      this.addCustomerUri = API_URL + "customer/AddCustomer";
      return this.http.post<any>(this.addCustomerUri, customerModel);
    }

    public Addservices(serviceObj: any){
      this.addServicesUri = API_URL + "customerservice/AddCustomerService";
      return this.http.post<any>(this.addServicesUri, serviceObj);
    }

    public GetAllServices(){
      this.getAllServicesUri = API_URL + "service/GetAllServices";
      return this.http.get(this.getAllServicesUri);
    }

    public AddAppoinment(){
      this.addAppoinmentUri = API_URL + "appoinment/AddApoinments";
      return this.http.get(this.addAppoinmentUri);
    }
}
