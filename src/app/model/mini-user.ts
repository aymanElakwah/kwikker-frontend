/**
 * MiniUser Model, is used when we need only some few information
 * about any user, It's used In MiniProfileCard Components 
 * and It's used also in Kweeks Component
 */
export interface MiniUser {
    /** Username */
    username: string;
    /** User Screen Name => Must be unique */
    screen_name: string;
    /** Profile Picture URL */
    profile_image_url: string;
     /** Is The Authorised User Follow That User */
    following: boolean;
     /** Is The Authorised User Followed By That User */
    follows_you: boolean;
    /** If The Authorised User Block That User */
    blocked: boolean;
     /** If The Authorised User Muted That User */
    muted: boolean;
}
