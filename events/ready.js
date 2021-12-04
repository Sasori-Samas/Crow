module.exports = {
  run: async(client) => {
    return console.log(`${client.user.tag} est operationnel !`);
  },
  name: 'ready'
}