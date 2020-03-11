import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient  } from '@angular/common/http';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(   
     private http: HttpClient
    ) { }

    getAllServiceSlotsUri: string = null;
    getAllCustomersUri: string = null;
    getAppoinmentByServiceSlotUri: string = null;
    getAppoinmentByCustomerUri: string = null;
    getAllAppoinmentUri: string = null;

    public GetAllServices(){
      this.getAllServiceSlotsUri = API_URL + "service/GetAllServiceSlots";
      return this.http.get(this.getAllServiceSlotsUri);
    }

    public GetAllCustomers(){
      this.getAllCustomersUri = API_URL + "customer/GetAllCustomers";
      return this.http.get(this.getAllCustomersUri);
    }

    public GetAppoinmentsByServiceSlot(serviceSlotId){
      this.getAppoinmentByServiceSlotUri = API_URL + "appoinment/GetOngoingAppoinment?serviceSlotId=" +serviceSlotId;
      return this.http.get(this.getAppoinmentByServiceSlotUri);
    }

    public GetAppoinmentsByCustomers(customerId){
      this.getAppoinmentByCustomerUri = API_URL + "appoinment/GetOngoingAppoinment?customerId=" +customerId;
      return this.http.get(this.getAppoinmentByCustomerUri);
    }

    public GetAllAppoinment(){
      this.getAllAppoinmentUri = API_URL + "appoinment/GetOngoingAppoinment";
      return this.http.get(this.getAllAppoinmentUri);
    }
}
