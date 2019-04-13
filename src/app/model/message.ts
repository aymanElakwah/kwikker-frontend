/**
 * for all messages sent in converstation
 */
export interface Message {
    from_username: string;
    to_username: string;
    created_at: string;
    text: string;
    id: string ;
    /**
     * in case message contain image
     */
    media_url: string;
}
