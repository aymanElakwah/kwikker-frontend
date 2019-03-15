export interface MiniUser {
    username: string;
    screen_name: string;
    profile_image_url: string;
    following: boolean;
    follows_you: boolean;
    blocked: boolean;
    muted: boolean;
}
