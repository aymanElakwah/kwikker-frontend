/**
 * Hashtag Model, To group all kweeks that have The Same Hashtag
 */
export interface Hashtag {
    /** Each Hashtag has a unique ID */
    id: string;
     /** The Indices In The Kweeks Which this hashtag is written */
    indices: number[];
}
