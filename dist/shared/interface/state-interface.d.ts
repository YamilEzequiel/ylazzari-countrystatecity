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
