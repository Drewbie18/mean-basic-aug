/**
 * Created by payetted on 9/23/2016.
 */
var generateRandom = require('./randomNumber');

var createPerils = function (orgId) {

    var perils = [];
//create complete objects
    for (var i = 0; i < 10; i++) {


        var perilId = 'PERIL-' + generateRandom(0, 100000);
        var text = 'some text-' + i;
        var author = 'author: ' + generateRandom(0, 100000);
        var timeStamp = new Date(generateRandom(2010, 2017), generateRandom(0, 11), generateRandom(0, 6)).toJSON();

        var peril = {
            "orgId": orgId,
            "perilId": perilId,
            "timeStamp": timeStamp

        };

        perils.push(peril);

    }

    return perils;
};


module.exports = createPerils;

var actualPeril = [

    {
        "orgId": "s600382191",
        "id": "STRIKE_ZONE_30MIN_GTE0.10_FLKM2",
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
                "text": "Lightning is forecast to occur in your area within the next 30 minutes"
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
                "text": "Lightning"
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
    },
    {
        "orgId": "s600382191",
        "id": "WIND_SPEED_10M_24HR_GTE15.00_MS",
        "lifeSpan": 1440,
        "active": true,
        "color": "#58A445",
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
                "text": "High winds in excess of 54km/h are forecast to occur in your area over the next 24 hours"
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
                "text": "Wind"
            },
            "pt-BR": {
                "isDefault": true,
                "text": "Vento"
            },
            "ja": {
                "isDefault": true,
                "text": "?"
            },
            "en": {
                "isDefault": true,
                "text": "High Wind (metric) 24 hour"
            },
            "it": {
                "isDefault": true,
                "text": "Vento"
            },
            "fr": {
                "isDefault": true,
                "text": "Vent"
            },
            "es": {
                "isDefault": true,
                "text": "Viento"
            }
        },
        "shortName": {
            "de": {
                "isDefault": true,
                "text": "Wind"
            },
            "pt-BR": {
                "isDefault": true,
                "text": "Vento"
            },
            "ja": {
                "isDefault": true,
                "text": "?"
            },
            "en": {
                "isDefault": true,
                "text": "Wind"
            },
            "it": {
                "isDefault": true,
                "text": "Vento"
            },
            "fr": {
                "isDefault": true,
                "text": "Vent"
            },
            "es": {
                "isDefault": true,
                "text": "Viento"
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
                "text": "Wind speed is greater than or equal to 15 meters per second within a 10-minute to 24 - hour time period"
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
];
