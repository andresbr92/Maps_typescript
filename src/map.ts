import { Driver } from "./driver"
import { Passenger } from "./passenger"

export class Map { 
    private googleMap: google.maps.Map
    constructor(divId:string) { 
        this.googleMap = new google.maps.Map(
            document.getElementById(divId)!,
            {
            zoom: 5,
            center: {
                lat:0,
                lng:0
            },
            })
    }
    AddPassengerMarker(passenger: Passenger) { 
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: parseInt(passenger.getLocation.lat),
                lng: parseInt(passenger.getLocation.lng)
            }
        })

    }
    AddDriverMarker(driver: Driver) { 
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: parseInt(driver.getLocation.lat),
                lng: parseInt(driver.getLocation.lng)
            }
        })

    }
}