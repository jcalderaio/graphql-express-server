// app/src/schema.js
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers'; // Will be implemented at a later stage.

const typeDefs = `
    type Reservation {
      name: String
      id: ID!
      hotelName: String
      arrivalDate: String
      departureDate: String
    }
    
    # This type specifies the entry points into our API. 
    type Query {
      reservations: [Reservation]    # "[]" means this is a list of channels
      reservation(id: ID!): Reservation
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new Reservation to the list of Reservations
      addReservation(id: ID!, name: String!, hotelName: String!, arrivalDate: String, departureDate: String): Reservation
      deleteReservation(id: ID!): Reservation
    }
    `;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
