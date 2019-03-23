/**
 * MiniUser Model, is used when we need only some few information
 * about any user, It's used In MiniProfileCard Components 
 * and It's used also in Kweeks Component
 */
export interface MiniUser {
    username: string;
    screen_name: string;
    profile_image_url: string;
    following: boolean;
    follows_you: boolean;
    blocked: boolean;
    muted: boolean;
}
