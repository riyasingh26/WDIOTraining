import BasePage from "./basePage";

export class HotelPage extends BasePage {

    protected get destination(): WebdriverIO.Element { return $('input[name="Destination"]'); }
    protected get checkInDate(): WebdriverIO.Element {return $('input[name="CheckIn"]'); }
    protected get checkOutDate(): WebdriverIO.Element {return $('input[name="CheckOut"]'); }
    protected get searchButton(): WebdriverIO.Element { return $ ('button[value="Search"]');}

    public enterDestination(destination : string){
        this.destination.setValue(destination);
    }

    public enterCheckInDate(checkInDate : string){
        this.checkInDate.setValue(checkInDate);
    }

    public enterCheckOutDate(checkOutDate : string){
        this.checkOutDate.setValue(checkOutDate);
    }

    public clickSearch(){
        this.searchButton.click();
    }

    
}

