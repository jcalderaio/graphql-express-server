// app/src/resolvers.js
import axios from 'axios';
import { reservations } from '../../db.json';

let nextId = 3;

export const resolvers = {
  Query: {
    reservations: (parentValue, args) => {
      //return reservations;
      return axios
        .get(`http://localhost:3000/reservations`) // parentValue is user that we just fetched
        .then(response => response.data);
    },
    reservation: (parentValue, args) => {
      //return reservations.find(res => res.id == id);
      return axios
        .get(`http://localhost:3000/reservations/${args.id}`) // parentValue is user that we just fetched
        .then(response => response.data);
    }
  },
  Mutation: {
    addReservation: (parentValue, args) => {
      /*
      const newReservation = {
        id: nextId++,
        name: args.name,
        hotelName: args.hotelName,
        arrivalDate: args.arrivalDate,
        departureDate: args.departureDate
      };
      reservations.push(newReservation); 
      return newReservation; */
      return axios
        .post(`http://localhost:3000/reservations`, {
          id: args.id,
          name: args.name,
          hotelName: args.hotelName,
          arrivalDate: args.arrivalDate,
          departureDate: args.departureDate
        })
        .then(response => response.data);
    },
    deleteReservation: (parentValue, args) => {
      axios
        .delete(`http://localhost:3000/reservations/${args.id}`)
        .then(() =>
          console.log(`Reservation with id=${args.id} successfully DELETED`)
        );
    }
  }
};
