/**
 * @class Twitter.view.TweetListItemText
 * @extends Ext.Component
 * 
 * This is athe component used in TweetListItem's to display the text of a tweet.
 * This needs to be special so we can:
 *  - linkify URLs in the tweet
 *  - Wrap usernames with spans
 *  - Wrap hashtags with spans.
 */
Ext.define('Twitter.view.TweetListItemText', {
    extend: 'Ext.Component',

    /**
     * We simple override the applyHtml method, which is called when the {@link #html} configuration is changed.
     * We just run a few regexs and try and match and URLs, hashtags or usernames, and then return the resulting value
     * so the {@link #html} configuration can be updated (updateHtml).
     */
    applyHtml: function(html) {
        // replace URLs with proper tags
        html = html.replace(/(http:\/\/[^\s]*)/g, "<span class=\"link\" ref=\"$1\">$1</span>");

        // usernames
        html = html.replace(/(^|\s)@(\w+)/g, "$1<span class=\"username\">@$2</span>");

        // hashtags
        html = html.replace(/(^|\s)#(\w+)/g, "$1<span class=\"hashtag\">#$2</span>");

        return html;
    }
});