import { Mongo } from "meteor/mongo";

export const Flash = new Mongo.Collection("flash");

Meteor.methods({
    'projects.create'(project) {
        let e = Projects.insert({project});
        return e;
    }
})