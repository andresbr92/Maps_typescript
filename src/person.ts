export abstract class Person { 
    protected name: string
    protected location: {
        lat: string,
        lng: string,
    }
    get getLocation() { 
        return this.location
    }

    constructor(name: string, location: { lat: string, lng: string }) { 
        this.name = name,
        this.location = {
            lat: location.lat,
            lng: location.lng
            }
    }
}