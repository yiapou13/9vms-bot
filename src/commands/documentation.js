const logger = require('@greencoast/logger');

module.exports = {
    name: 'help',
    description: `Prints documentation in rio-bot-manual text channel`,
    emoji: ':speaking_head:',
    execute(message, options) {
        const channel = message.client.channels.cache.get('789639694022868993') // id of rio-bot-manual

        channel.send({embed: {
            color: 16711935,
            author: {
              name: "RIO Bot manual",
              icon_url: client.user.avatarURL()
            },
            title: "Πατώντας **+play #** παίζει το αντίστοιχο audio clip\nπ.χ. +play 1 παίζει \"Δεν πίνεις ούτε το 1/78\"",
            fields: [{
                name: "Rio audio clips",
                value: ""
              },
              {
                name: "0-10",
                value: "0       Ε έλα φτήσ' την καραμέλα, πίνω μόνο τσάι μήλο με κανέλα.\n1       Δεν πίνεις ούτε το 1\/78.\n2       Λοιπόν, πρώτα το βράζεις, μετά το στρίβεις και μετά το σκας.\n3       Μέλι, μέλι, μέλι, μέλι, μέλι ε μέλιο, μελισνάουστνερ, αρίργκαν, χασίσγκαν, μελίργκαν.\n4       Έλα mauce, που είσαι, που είσαι ρε ποντίκι.\n5       ♫ Μέλι, είναι σαν beat απ' τον Καμπίτση, θα σου το στρίψει.\n6       ♫ Οδηγάω μεθυσμένος, έχω το πόδι στον μόσδη.\n7       ♫ Οδηγάω μεθυσμένος, έχω τον μόσδη στο γκάζι.\n8       Κρεμέτης, Δήμος.\n9       Δήμος Κρεμέτης, τα ρέστα σας."
              },
              {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: "© 9VMS"
            }
          }
        });

        return;
    }
}