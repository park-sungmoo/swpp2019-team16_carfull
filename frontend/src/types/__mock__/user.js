export const mockRider = {
  id: 1, // rider/driver id
  status: 'IDLE',
  group: 1, // group id
  user: {
    id: 2,
    email: 'rider1@gmail.com',
    user_type: 'rider',
    vehicle: {
      car_type: '',
      plate_no: '',
    },
  },
};

export const mockDriver = {
  id: 1, // rider/driver id
  status: 'IDLE',
  group: 1, // group id
  user: {
    id: 2,
    email: 'driver1@gmail.com',
    user_type: 'driver',
    vehicle: {
      car_type: 'benz',
      plate_no: '1234',
    },
  },
};
