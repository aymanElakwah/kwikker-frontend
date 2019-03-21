export interface User {
    username: string;
    screen_name: string;
    bio: string;
    birth_date: Date;
    created_at: Date;
    profile_image_url: string;
    profile_banner_url: string;
    following: boolean;
    follows_you: boolean;
    followers_count: number;
    following_count: number;
    kweeks_count: number;
    likes_count: number;
    blocked: boolean;
    muted: boolean;
}
