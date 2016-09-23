/**
 * Created by payetted on 9/19/2016.
 */

var genAssets = function (orgId) {

    var assets = [];

    for (var i = 0; i < 10; i++) {


        var asset = {
            id: 'Location-' + i,
            orgId: orgId,
            wsiId: 'f4a85f77-b398-4d23-88c0-24e7bb77cc54-' + i,
            description: 'Nash\'s House',
            location: {
                street: '3755 Riverside Drive',
                city: 'Ottawa',
                country: 'Canada',
                geo: {lat: 45.340859, lon: -75.691292},
                provinceState: 'ON',
                postalCode: 'K1G 4K9'
            },
            active: true,
            perils: [],
            recipient: {
                id: 'WAFX dev user',
                name: 'John Nash',
                language: 'en',
                description: 'No12345'
            },
            notifications: [{type: 'email', value: 'tvasavi@ca.ibm.com'},
                {type: 'email', value: 'a@gmail.com'},
                {type: 'sms', value: '1-647-278-8679'},
                {type: 'sms', value: '1-654-333-3333'}]
        }


        assets.push(asset);

    }

    return assets;
}
module.exports = genAssets;