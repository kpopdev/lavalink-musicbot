module.exports = {
    name: "pause",
    run: async (client, message, args) => {
        const serverQueue = client.musicManager.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("Queue is empty!");
        if (!serverQueue.playing) return message.channel.send("Queue already paused");
        serverQueue.player.pause(true);
        serverQueue.playing = false;
        message.channel.send("Paused!");
    }
};