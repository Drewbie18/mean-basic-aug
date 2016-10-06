/**
 * Created by payetted on 9/23/2016.
 */
var generateRandom = require('./randomNumber');

var createPerils = function (orgId) {

    var perils = [];
//create complete objects
    for (var i = 0; i < 10; i++) {


        var perilId = 'PERIL-' + generateRandom(0, 100000);
        //var text = 'some text-' + i;
        //var author = 'author: ' + generateRandom(0, 100000);
        // var timeStamp = new Date(generateRandom(2010, 2017), generateRandom(0, 11), generateRandom(0, 6)).toJSON();

        //unique shortname
        var shortname = "Lightning-" + generateRandom(0, 100000);

        //empty shortname for testing.
        if (i % 3 == 0) {
            shortname = "";
        }

        var peril = {
            "orgId": "org-" + orgId,
            "id": "STRIKE_ZONE_30MIN_GTE0.10_FLKM2-" + perilId,
            "lifeSpan": 30,
            "active": true,
            "color": "#EBC01B",
            "description": {
                "de": {
                    "isDefault": true,
                    "text": ""
                },
                "pt-BR": {
                    "isDefault": true,
                    "text": ""
                },
                "ja": {
                    "isDefault": true,
                    "text": ""
                },
                "en": {
                    "isDefault": true,
                    "text": "Lightning is forecast to occur in your area within the next 30minutes"
                },
                "it": {
                    "isDefault": true,
                    "text": ""
                },
                "fr": {
                    "isDefault": true,
                    "text": ""
                },
                "es": {
                    "isDefault": true,
                    "text": ""
                }
            },
            "longName": {
                "de": {
                    "isDefault": true,
                    "text": "Blitzschlag"
                },
                "pt-BR": {
                    "isDefault": true,
                    "text": "Raios"
                },
                "ja": {
                    "isDefault": true,
                    "text": "?"
                },
                "en": {
                    "isDefault": true,
                    "text": "StrikeZone 30 minute"
                },
                "it": {
                    "isDefault": true,
                    "text": "Fulmine"
                },
                "fr": {
                    "isDefault": true,
                    "text": "Foudre"
                },
                "es": {
                    "isDefault": true,
                    "text": "Rayos"
                }
            },
            "shortName": {
                "de": {
                    "isDefault": true,
                    "text": "Blitzschlag"
                },
                "pt-BR": {
                    "isDefault": true,
                    "text": "Raios"
                },
                "ja": {
                    "isDefault": true,
                    "text": "?"
                },
                "en": {
                    "isDefault": true,
                    "text": shortname
                },
                "it": {
                    "isDefault": true,
                    "text": "Fulmine"
                },
                "fr": {
                    "isDefault": true,
                    "text": "Foudre"
                },
                "es": {
                    "isDefault": true,
                    "text": "Rayos"
                }
            },
            "tooltip": {
                "de": {
                    "isDefault": true,
                    "text": ""
                },
                "pt-BR": {
                    "isDefault": true,
                    "text": ""
                },
                "ja": {
                    "isDefault": true,
                    "text": ""
                },
                "en": {
                    "isDefault": true,
                    "text": "Lightning greater than or equal to 0.10 flashes per square kilometer in a 30-minute period"
                },
                "it": {
                    "isDefault": true,
                    "text": ""
                },
                "fr": {
                    "isDefault": true,
                    "text": ""
                },
                "es": {
                    "isDefault": true,
                    "text": ""
                }
            }
        }

        perils.push(peril);

    }

    return perils;
};


module.exports = createPerils;

