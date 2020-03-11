import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  
 serviceSlots: any[];
 serviceSlotId: any;
 customers: any[];
 customerId : any;
 appoinments: any[];
 showServiceSlotComponent: boolean =false;
 showCustomerComponent: boolean =false;
 showAllComponent: boolean = false;



/**
 * used to initialize All Service Slots and All Customers
 */
  ngOnInit(): void {
    this.GetAllServiceSlots();
    this.GetAllCustomers();
  }


  /**
   * Retrieves all the service slots available
   */
  public GetAllServiceSlots(){
    this.homeService.GetAllServices()
      .subscribe((data: any) => {
        this.serviceSlots = data;
      });
  }


/**
 * Retrives all the customers available
 */
  public GetAllCustomers()
  {
    this.homeService.GetAllCustomers()
      .subscribe((data: any) =>{
        this.customers = data;
      });
  }

  /**
   * Retrives all services for given service slot
   * @example
   * this will returns all the services are provided in service slot 9.00 - 9.15
   * GetAllServiceByServiceSlot(1)
   * @param {number} serviceSlotId 
   * @returns list of "OnGoingAppoinmentsDto" type objects
   */

  public GetAllServicesByServiceSlot(serviceSlotId){

    this.homeService.GetAppoinmentsByServiceSlot(+serviceSlotId)
      .subscribe((data: any) =>{
        this.appoinments = data;
      })
  }
  /**
   * @example
   * this will returns all the services are provided in customer id 1
   * GetAllServicesByCustomer(1)
   * @param customerID 
   * @returns list of "OnGoingAppoinmentsDto" type objects
   */

  public GetAllServicesByCustomer(customerID){
   this.homeService.GetAppoinmentsByCustomers(+customerID)
    .subscribe((data: any) => {
      this.appoinments = data;
    });
  }



  /**
   * Used to show or hide dropdown components (ServiceSlots and Customers) or show the list of all appoinments available
   * @param { number }type 
   */
  public SelectAppoinmentType(type: number){
    if(type == 1){
      this.showServiceSlotComponent = true;
      this.showCustomerComponent = false;
      this.showAllComponent = false;
      this.appoinments = null;
      this.GetAllServicesByServiceSlot(this.serviceSlotId)
    }else if(type == 2){
      this.showServiceSlotComponent = false;
      this.showCustomerComponent = true;
      this.showAllComponent = false;
      this.appoinments = null;
      this.GetAllServicesByCustomer(this.customerId);
    }else if(type == 3){
      this.showAllComponent = true;
      this.showServiceSlotComponent = false;
      this.showCustomerComponent = false;
      this.appoinments = null;
      this.homeService.GetAllAppoinment()
    .subscribe((data: any) => {
      this.appoinments = data;
    });
    }
  }

}
