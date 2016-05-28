/**
 * Created by dennisri on 28-May-16.
 */
var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: true
    //include "log: false" to disable logging
    //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
    token: "xoxb-46548735028-UHnKUUW0KH7z9pM3YAJNFCEF",
}).startRTM()

// give the bot something to listen for.
controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {

    bot.reply(message, 'Hello mate, how are you doing?.');

});