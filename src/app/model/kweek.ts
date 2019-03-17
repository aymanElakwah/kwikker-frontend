import { Mention } from './mention';
import { Hashtag } from './Hashtag';
import { Rekweek } from './rekweek';
import { MiniUser } from './mini-user';

export interface Kweek {
    id: string;
    created_at: string;
    text: string;
    media_url: string;
    user: MiniUser;
    mentions: Mention[];
    hashtags: Hashtag[];
    number_of_likes: number;
    number_of_rekweeks: number;
    number_of_replies: number;
    reply_to: string;
    liked_by_user: boolean;
    rekweeked_by_user: boolean;
    rekweek_info: Rekweek ;
}



