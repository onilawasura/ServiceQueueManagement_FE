import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from './appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {

  customer = {
    name: "",
    nic: "",
    contact: "",
    address: ""
  }

  checked : boolean = false;

  services: any[] = null;
  tempArr: any = { "services": [] };

  notShowComponent: boolean = true;

  constructor(private appoinmentService : AppoinmentService, private router: Router) { }

  /**
   * Used to get all services
   */
  ngOnInit(): void {
    this.GetAllServices();
  }


  /**
   * Used to save the customer object initially. Then customer id will be sent back to observable and with that customer id
   * list of services the customer will require will send to populate CustomerService table. When the success call back happens 
   * the calcutaion for ideal appoinment happenes and data will store in the Appoinment table
   * @param cst 
   */
  public Save(cst){

    if(this.tempArr.services.length == 0){
      alert("Please Add At Least One Service to Proceed !")
    }else {
      this.appoinmentService.AddCustomer(cst)
      .subscribe((data: any) => {
        var xx = data;        

        var temp = {
          CustomerId : data["id"],
          LstServiceId: this.tempArr.services
        }

        this.appoinmentService.Addservices(temp)
          .subscribe((data: any) => {
            if(data != null){
              this.appoinmentService.AddAppoinment()
                .subscribe((data: any) => {
                  alert("Your service has successfully stored !");              
                  this.router.navigate(['/home'])
                });              
            }
          });
      });
    }
    
  }


  /**
   * Retrieves all the services available
   */
  public GetAllServices(){
    this.appoinmentService.GetAllServices()
      .subscribe((data: any) => {
        this.services = data;
      })
  }


  /**
   * when category of services changing this function will be used to 
   * populate the required services array
   */
  onChangeCategory(event, srv: any){ 

    var index = this.tempArr.services.indexOf(srv.id);

    if (index > -1) {
      this.tempArr.services.splice(index, 1);
    }else{
      this.tempArr.services.push(srv.id);
    }
      var xx = this.tempArr.services;
    }

    
    /**
     * Used to fire validations to button
     * if not all the text boxes are filled the button will not be activated
     */
  public ModelChange(){
    if(this.customer.name == ""){
      this.notShowComponent = true;
    }else{
      this.notShowComponent = false;
    }

    if(this.customer.nic == ""){
      this.notShowComponent = true;
    }else{
      this.notShowComponent = false;
    }

    if(this.customer.contact == ""){
      this.notShowComponent = true;
    }else{
      this.notShowComponent = false;
    }

    if(this.customer.address == ""){
      this.notShowComponent = true;
    }else{
      this.notShowComponent = false;
    }
  }


}
