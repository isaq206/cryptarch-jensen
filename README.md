# cryptarch-jensen
This is the source code for the bot I made for the discord channel for Destiny 2 clan.

For node modules, the only thing that I added beyond the standard init was install discord.io, winston, readline, and readline-sync. 

Discord.io is for creating the bot and then interacting with Discord (clearly).

Winston is for logging purposes. Useful for when you host off of something 
that provides a display or output. Such as tunneling into a raspberry pi that
hosts the bot.

Readline and Readline-sync are for get input from the console when starting up
the bot. Used for avoiding potential auth token leaks if you post your source
to github or some other platforms for others to build off of as well.
