var Discord = require('discord.io');
var logger = require('winston');
var readline = require('readline-sync');


//Used for Heroku version for automation
// var auth = require('./auth.json');

// Provide auth.token when initializing Discord.Client


//Configure the logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
   colorize: true
});
logger.level = 'debug';

//Prompt for Authorization Token
var auth = readline.question("Enter Auth Token: ");

//Initialize Discord Bot. Use Obtained Auth Token
var bot = new Discord.Client({
   token: auth,
   autorun: true
});


bot.on('ready', function (evt) {
   logger.info('Connected');
   logger.info('Logged in as: **insert your name or whatever**');
   logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (User, UserID, channelID, message, evt) {
   //Our bot need to know if it will execute  a command
   //It will listen for message that will start with '!'
   if (message.substring(0, 1) == '!') {
      var args = message.substring(1).split(' ');
      var cmd = args[0];

      args = args.splice(1);
      switch(cmd) {
         //!ping
         case 'ping':
         case 'Ping':
            bot.sendMessage({
               to: channelID,
               message: 'Pong!'
            });
            break;

//Here is the command for paying respect to someone in chat
//
//
         case 'F2':
         case 'f2':
            bot.sendMessage({
               to: channelID,
               message: 'Paying respects to ' + args[0] + '!'
            });

            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            break;

//Here is the command for Paying Respects to yourself
//
//
         case 'f2me':
         case 'F2me':
         case 'f2Me':
         case 'F2Me':
         case 'F2ME':
            bot.sendMessage({
               to: channelID,
               message: 'Can I get an F in the chat for ' + User + '?'
            });

            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            break;

//Here is the command for using the inside clan joke of "Can Confirm"
//
//
         case '10-4':
            bot.sendMessage({
               to: channelID,
               message: User + ' can confirm.'
            });

            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            break;



/********************************************
* Here are the commands relating to Raid group
* 1. Will consider adding command to mass 
* remove people in future. Will test using
* group 1.
********************************************/
//Here is the command for adding oneself to the raid 1 group
//
//
         case 'addraid1':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            bot.addToRole( {"serverID": '**Insert Server ID here**',
"userID": UserID, "roleID": '**Insert Role ID here**'}, function(err, response) {
               if(err) {
                  logger.info(err);
               }
            });
            break;

//Here is the command for removing oneself from the raid 1 group
//
//
         case 'removeraid1':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            bot.removeFromRole( {"serverID": '**Insert Server ID here**',
"userID": UserID, "roleID": '**Insert Role ID here**'}, function(err, response) {
               if(err) {
                  logger.info(err);
               }
            });
            break;

//Here is the command for listing out the members of raid 1 group
// 
//
         case 'listraid1':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            var raidGroup1 = Object.values(bot.servers[evt.d.guild_id].members)
                  .filter(m => m.roles.includes('**Insert Role ID here**'))
                  .map(m => m.username + " \n").join('')

            bot.sendMessage({
               to: channelID,
               message: "Raid Group 1: \n" + raidGroup1
            });
            break;


            
/*****************************************
* Here are the commands relating Raid Group
* 2.
*****************************************/
//Here is the command for adding oneself to the raid 2 group
//
//
         case 'addraid2':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            bot.addToRole( {"serverID": '**Insert Server ID here**',
"userID": UserID, "roleID": '*Insert Role ID here**'}, function(err, response) {
               if(err) {
                  logger.info(err);
               }
            });
            break;

//Here is the command for removing oneself to the raid 2 group
//
//
         case 'removeraid2':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            bot.removeFromRole( {"serverID": '**Insert Server ID here**',
"userID": UserID, "roleID": '**Insert Role ID here**'}, function(err, response) {
               if(err) {
                  logger.info(err);
               }
            });
            break;

//Here is the command for listing out the members of raid 2 group
// 
//
         case 'listraid2':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            var raidGroup2 = Object.values(bot.servers[evt.d.guild_id].members)
                  .filter(m => m.roles.includes('**Insert Role ID here**'))
                  .map(m => m.username + " \n").join('')

            bot.sendMessage({
               to: channelID,
               message: "Raid Group 2: \n" + raidGroup2
            });
            break;

/********************************************
* Here are the commands relating to Raid Group
* 3.
********************************************/
//Here is the command for adding oneself to the raid 3 group
//
//
         case 'addraid3':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            bot.addToRole( {"serverID": '**Inset Server ID here**',
"userID": UserID, "roleID": '**Insert Role ID here**'}, function(err, response) {
               if(err) {
                  logger.info(err);
               }
            });
            break;

//Here is the command for removing oneself to the raid 3 group
//
//
         case 'removeraid3':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            bot.removeFromRole( {"serverID": '**Insert Server ID here**',
"userID": UserID, "roleID": '**Insert Role ID here**'}, function(err, response) {
               if(err) {
                  logger.info(err);
               }
            });
            break;

//Here is the command for listing out the members of raid 3 group
// 
//
         case 'listraid3':
            bot.deleteMessage({
               channelID: channelID,
               messageID: evt.d.id
            });

            var raidGroup3 = Object.values(bot.servers[evt.d.guild_id].members)
                  .filter(m => m.roles.includes('**Insert Role ID here**'))
                  .map(m => m.username + " \n").join('')

            bot.sendMessage({
               to: channelID,
               message: "Raid Group 3: \n" + raidGroup3
            });
            break;
      }
   }
});

