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
                name: "#",
                value: "0\n1\n2\n3\n\n4\n5\n6\n7\n8\n9",
                inline: true
              },
              {
                name: "Description",
                value: "Ε έλα φτήσ' την καραμέλα, πίνω μόνο τσάι μήλο με κανέλα.\nΔεν πίνεις ούτε το 1\/78.\nΛοιπόν, πρώτα το βράζεις, μετά το στρίβεις και μετά το σκας.\nΜέλι, μέλι, μέλι, μέλι, μέλι ε μέλιο, μελισνάουστνερ, αρίργκαν, χασίσγκαν,\n μελίργκαν.\nΈλα mauce, που είσαι, που είσαι ρε ποντίκι.\n♫ Μέλι, είναι σαν beat απ' τον Καμπίτση, θα σου το στρίψει.\n♫ Οδηγάω μεθυσμένος, έχω το πόδι στον μόσδη.\n♫ Οδηγάω μεθυσμένος, έχω τον μόσδη στο γκάζι.\nΚρεμέτης, Δήμος.\nΔήμος Κρεμέτης, τα ρέστα σας.",
                inline: true
              },
              {
                name: "\u200B",
                value: "\u200B"
              },
              {
                name: "#",
                value: "10\n11\n12\n13\n14\n15\n16\n17\n18\n19",
                inline: true
              },
              {
                name: "Description",
                value: "Θέλω να μπω μέσα σου.\nΤο 'χω βράσει και το έχω σκάσει εδώ και 5 λεπτά, σε περιμένω.\n♫ Στρίφτη μου χαδιάρη - extended cut by ρίο\nΠες αλήθεια τώρα, mauce ή billpap;\n♫ Σκάστους τα, πιες τους τα, στρίφτους τα.\nΕ, μόνο για πάνω απο 15 g μιλάω εγώ να ξες.\nΌπου πάω με ρωτάνε πόσο πάει το γραμμάριο.\nΌπου πάω με ρωτάνε πόσο πάει το γραμμάριο.\nΚαυτερά λουκάνικα - extended cut by ρίο.\n♫ Θέλω να με βράσεις, να μη μου το σκάσεις, θέλω να σε βράζω να σε πίνω να σε σκάω.",
                inline: true
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