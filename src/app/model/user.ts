export interface User {
    username: string;
    screen_name: string;
    birthdate: string;
    profile_image_url: string;
    following: boolean;
    follows_you: boolean;
    blocked: boolean;
    muted: boolean;
}
