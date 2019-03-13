import { User } from './user';
import { Mention } from './mention';
import { Hashtag } from './Hashtag';
import { Rekweek } from './rekweek';

export interface Kweek {
    id: string;
    created_at: Date;
    text: string;
    media_url: string;
    user: User;
    mentions: Mention[];
    hashtags: Hashtag[];
    number_of_likes: number;
    number_of_rekweeks: number;
    number_of_Replies: number;
    reply_to: string;
    liked_by_user: boolean;
    rekweeked_by_user: boolean;
    rekweek_info: Rekweek ;
}



