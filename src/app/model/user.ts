

/**
 * The Main Model for All Website Users
 */
export interface User {
    /** Username */
    username: string;
    /** User Screen Name => Must be unique */
    screen_name: string;
    /** Bio: Description Added By The User */
    bio: string;
      /** BirthDate */
    birth_date: Date;
      /** The Date that he signed up */
    created_at: Date;
      /** Profile Picture URL */
    profile_image_url: string;
      /** Banner URL */
    profile_banner_url: string;
      /** Is The Authorised User Follow That User */
    following: boolean;
     /** Is The Authorised User Followed By That User */
    follows_you: boolean;
      /** Number Of Followers To That user */
    followers_count: number;
       /** Number Of Users that Follow That user */
    following_count: number;
       /** Number Of Kweeks written by that user */
    kweeks_count: number;
       /** Number Of Likes To Kweeks Made */
    likes_count: number;
      /** If The Authorised User Block That User */
    blocked: boolean;
       /** If The Authorised User Muted That User */
    muted: boolean;
}
