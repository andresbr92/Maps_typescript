import faker from 'faker'

class Passenger { 
    private readonly name: string
    private readonly location: {
        lat: string,
        lng: string,
    }
    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: faker.address.latitude(),
            lng: faker.address.longitude(),
        }
     }
}
