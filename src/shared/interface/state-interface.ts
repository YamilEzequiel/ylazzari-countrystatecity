//example
// {
//   "id": 2593109,
//   "parentId": null,
//   "country": "ES",
//   "name": "Andalucía",
//   "fullName": null,
//   "lat": 37.5,
//   "lng": -4.58333,
//   "tz": "Europe/Madrid"
// }

/**
 * @interface State
 * @description Interface for the state object
 */
export interface State {
  id: number;
  parentId: string | null;
  country: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string;
}
