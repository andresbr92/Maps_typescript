import { Driver } from "./driver"
import { Map } from "./map"
import { Passenger } from "./passenger"

var map = new Map("map")
const driver = new Driver ()
const passenger = new Passenger()

map.AddDriverMarker(driver)
map.AddPassengerMarker(passenger)