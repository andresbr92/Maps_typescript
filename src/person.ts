export abstract class Person { 
    protected name: string
    protected location: {
        lat: string,
        lng: string,
    }

    constructor(name: string, location: { lat: string, lng: string }) { 
        this.name = name,
        this.location = {
            lat: location.lat,
            lng: location.lng
            }
    }
}