import { Mongo } from "meteor/mongo";
import { check } from 'meteor/check';


Meteor.methods({ ... méthodes })

"users.add"(music, drink, sport, walk, study, games);{}
    check(music, Boolean),
    check(drink, Boolean),
    check(sport, Boolean),
    check(walk, Boolean),
    check(games, Boolean),
    check(study, Boolean)




