import { Mention } from './mention';
import { Hashtag } from './Hashtag';
import { Rekweek } from './rekweek';
import { MiniUser } from './mini-user';

/**
 * The Main Model for the Kweeks In The Website
 */
export interface Kweek {
    /** Each Kweekd has a unique ID */
    id: string;
     /** The Date that this Kweeks Written at */
    created_at: string;
    /** The Kweeks Text Including Hashtags and Mentions */
    text: string;
    /** The Media Included With That Kweek */
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
    /** Number Of Likes To That Kweek */
    number_of_likes: number;
    /** Number Of ReKweeks To That Kweek */
    number_of_rekweeks: number;
    /** Number Of Replies To That Kweek */
    number_of_replies: number;
    /** If This Kweek With just a reply to another Kweek */
    reply_to: string;
    /** If This The Authorised User Likes This Kweek */
    liked_by_user: boolean;
    /** If This The Authorised User Rekweeks This Kweek */
    rekweeked_by_user: boolean;
   /**
    *   All Info about Rekweeks happened to this Kweek 
    * */
    rekweek_info: Rekweek ;
}



