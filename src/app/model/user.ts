export interface User {
    userName: string;
    screenName: string;
    Bio: string;
    birthDate: Date;
    joinedDate: Date;
    profilePicUrl: string;
    bannerUrl: string;
    following: boolean;
    followsYou: boolean;
    followersCount: number;
    followingCount: number;
    kweeksCount: number;
    likesCount: number;
    blocked: boolean;
    muted: boolean;
}
