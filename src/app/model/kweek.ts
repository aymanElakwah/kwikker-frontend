import { Mention } from './mention';
import { Hashtag } from './Hashtag';
import { Rekweek } from './rekweek';
import { MiniUser } from './mini-user';

/**
 * The Main Model for the Kweeks In The Website
 */
export interface Kweek {
    id: string;
    created_at: string;
    text: string;
    media_url: string;
    /**
     *  The User who wrote This Kweek 
     * */
    user: MiniUser;
    /** 
     * All Mentions included in this Kweek 
     * */
    mentions: Mention[];
    /** 
     * All Hashtags included in this Kweek 
     * */
    hashtags: Hashtag[];
    number_of_likes: number;
    number_of_rekweeks: number;
    number_of_replies: number;
    reply_to: string;
    liked_by_user: boolean;
    rekweeked_by_user: boolean;
   /**
    *   All Info about Rekweeks happened to this Kweek 
    * */
    rekweek_info: Rekweek ;
}



