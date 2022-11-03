import BasePage from "./basePage";

export class HotelPage extends BasePage {

    protected get destination(): WebdriverIO.Element { return $('input[name="Destination"]'); }

    public enterDestination(destination : string){
        this.destination.setValue(destination);
    }
}

