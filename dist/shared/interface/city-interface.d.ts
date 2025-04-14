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
