
/**
 * Mention Model, This Model is used Through Kweeks when The useer wants
 * to mention another user in his kweeks 
 *  */
export interface Mention {
    /** The Username Mentioned In That Mention */
    username: string;
    /** The Indices In The Kweeks Which this Mention is written */
    indices: number[];
}
