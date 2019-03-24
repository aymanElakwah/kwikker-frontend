/**
 * for all messages sent in converstation
 */
export interface Message {
    created_at: string;
    text: string;
    /**
     * in case message contain image
     */
    media_url: string;
}
