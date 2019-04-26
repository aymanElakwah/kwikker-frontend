/**
 * Notification Model, All users should have their own notifications
 * To tell them if someone rekweek their kweeks or send them a message
 */
export interface Notification {
    /** Each Notification has a Unique ID */
    id?: string;
     /** The Date that This Notification happened */
    created_at?: Date;
     /** The Type Of The Mention Which can be Message or Like Or ReKweek */
    type?: string;
     /** The Username for the user That received that notification */
    usernmae?: string;
     /** The ScreenName for the user That received that notification */
    screen_name?: string;
    /** If The Mention was Kweek, We Need Its ID */
    kweek_id?: string;
    /** If The Mention was Kweek, We Need Its Text */
    kweek_text?: string;
     /** The Profile Picture URL for the user That Sent that notification */
    profile_pic_url?: string;
}