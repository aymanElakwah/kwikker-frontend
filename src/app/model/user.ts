export interface User {
    username: string;
    screen_name: string;
    birthdate: Date;
    profile_image_url: string;
    following: boolean;
    follows_you: boolean;
    blocked: boolean;
    muted: boolean;
}
