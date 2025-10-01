<<<<<<< HEAD
import api from "./api";

export const fetchTrips = () => api.get("/api/trips");
export const fetchTripById = (id: string) => api.get(`/api/trips/${id}`);
export const createTrip = (data: any) => api.post("/api/trips", data);
=======
import api from "./api";

export const fetchTrips = () => api.get("/api/trips");
export const fetchTripById = (id: string) => api.get(`/api/trips/${id}`);
export const createTrip = (data: any) => api.post("/api/trips", data);
>>>>>>> 6090fceb (Initial commit of all components)
