//Example city
// {
//   "id": 6320113,
//   "parentId": 3390290,
//   "country": "BR",
//   "name": "Acari",
//   "fullName": null,
//   "lat": -6.38547,
//   lng: number;
//   tz: string;
// }

export interface City {
  id: number;
  parentId: number;
  country: string;
  name: string;
  fullName: string | null;
  lat: number;
  lng: number;
  tz: string;
}
