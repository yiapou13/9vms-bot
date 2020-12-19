const logger = require('@greencoast/logger');

module.exports = {
    name: 'manual',
    description: `Prints documentation in rio-bot-manual text channel`,
    emoji: ':speaking_head:',
    execute(message, options) {
        const channel = message.client.channels.cache.get('789639694022868993') // id of rio-bot-manual

        channel.send({embed: {
            color: 16711935,
            author: {
              name: "RIO Bot manual",
              icon_url: message.client.user.avatarURL()
            },
            title: "Πατώντας **+play #** παίζει το αντίστοιχο audio clip\nπ.χ. +play 1 παίζει \"Δεν πίνεις ούτε το 1/78\"",
            fields: [{
                name: "Rio audio clips",
                value: "\u200B"
              },
              {
                name: "0-9",
                value: "0\u0009\u0009Ε έλα φτήσ' την καραμέλα, πίνω μόνο τσάι μήλο με κανέλα.\n1\u0009\u0009Δεν πίνεις ούτε το 1\/78.\n2\u0009\u0009Λοιπόν, πρώτα το βράζεις, μετά το στρίβεις και μετά το σκας.\n3\u0009\u0009Μέλι, μέλι, μέλι, μέλι, μέλι ε μέλιο, μελισνάουστνερ, αρίργκαν, χασίσγκαν, μελίργκαν.\n4\u0009\u0009Έλα mauce, που είσαι, που είσαι ρε ποντίκι.\n5\u0009\u0009♫ Μέλι, είναι σαν beat απ' τον Καμπίτση, θα σου το στρίψει.\n6\u0009\u0009♫ Οδηγάω μεθυσμένος, έχω το πόδι στον μόσδη.\n7\u0009\u0009♫ Οδηγάω μεθυσμένος, έχω τον μόσδη στο γκάζι.\n8\u0009\u0009Κρεμέτης, Δήμος.\n9\u0009\u0009Δήμος Κρεμέτης, τα ρέστα σας."
              },
              {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.client.user.avatarURL(),
              text: "© 9VMS"
            }
          }
        });

        return;
    }
}