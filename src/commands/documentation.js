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
            title: ":zap: One and only command (more to come soon) :zap:```\n+play #```",
            fields: [{
                name: "Rio audio clips",
                value: "\u200B"
              },
              {
                name: "#",
                value: "0\n1\n2\n3\n\n4\n5 ♫\n6 ♫\n7 ♫\n8\n9",
                inline: true
              },
              {
                name: "Description",
                value: "Ε έλα φτήσ' την καραμέλα, πίνω μόνο τσάι μήλο με κανέλα.\nΔεν πίνεις ούτε το 1\/78.\nΛοιπόν, πρώτα το βράζεις, μετά το στρίβεις και μετά το σκας.\nΜέλι, μέλι, μέλι, μέλι, μέλι ε μέλιο, μελισνάουστνερ, αρίργκαν, χασίσγκαν,\n μελίργκαν.\nΈλα mauce, που είσαι, που είσαι ρε ποντίκι.\nΜέλι, είναι σαν beat απ' τον Καμπίτση, θα σου το στρίψει.\nΟδηγάω μεθυσμένος, έχω το πόδι στον μόσδη.\nΟδηγάω μεθυσμένος, έχω τον μόσδη στο γκάζι.\nΚρεμέτης, Δήμος.\nΔήμος Κρεμέτης, τα ρέστα σας.",
                inline: true
              },
              {
                name: "\u200B",
                value: "\u200B"
              },
              {
                name: "#",
                value: "10\n11\n12 ♫\n13\n14 ♫\n15\n16\n17\n18\n19 ♫",
                inline: true
              },
              {
                name: "Description",
                value: "Θέλω να μπω μέσα σου.\nΤο 'χω βράσει και το έχω σκάσει εδώ και 5 λεπτά, σε περιμένω.\nΣτρίφτη μου χαδιάρη - extended cut by ρίο\nΠες αλήθεια τώρα, mauce ή billpap;\nΣκάστους τα, πιες τους τα, στρίφτους τα.\nΕ, μόνο για πάνω απο 15 g μιλάω εγώ να ξες.\nΌπου πάω με ρωτάνε πόσο πάει το γραμμάριο.\nΌπου πάω με ρωτάνε πόσο πάει το γραμμάριο.\nΚαυτερά λουκάνικα - extended cut by ρίο.\nΘέλω να με βράσεις, να μη μου το σκάσεις, θέλω να σε βράζω να σε πίνω να σε σκάω.",
                inline: true
              },
              {
                name: "\u200B",
                value: "\u200B"
              },
              {
                name: "#",
                value: "20\n21\n\n22\n23\n24\n25\n26\n27\n28\n29",
                inline: true
              },
              {
                name: "Description",
                value: "Ρε ευχαριστώ που με είπατε ρε, ευχαριστώ.\nΝτάξει το μπόιλερ μου εμένα παίρνει μέχρι 2 κιλά ρε φίλε και συ μου λες\n τώρα για 10 g, ντάξει.\nΚανά bg θα μπούμε;\nΕ χίμλερ και ντρουμπουκόρ.\nΕ χίμλερ.\nΜάους ποντίκι.\nΝα σε ρωτήσω, παίζει να έχεις grinder;\nAngie να σε ρωτήσω, παίζεις καθόλου το φασολάκι σου;\nΠαίξε λίγο το φασολάκι σου ρε φίλε.\nΠάω να αρμέξω τη σαύρα μου και έρχομαι.",
                inline: true
              },
              {
                name: "\u200B",
                value: "\u200B"
              },
              {
                name: "#",
                value: "30\n31 ♫\n\n\n32 ♫\n\n33\n34\n35\n36\n37\n38\n39",
                inline: true
              },
              {
                name: "Description",
                value: "Πάω λίγο να στείλω τον Obama στον λευκό οίκο και έρχομαι.\nΜελισόους, μέλι, είναι σαν beat απ' τον Καμπίτση, θα σου το στρίψει,\n meldown, easy, έλα να στρίψεις το αρίρι, να σου το σκάσει και να το\n στρίψει.\nΠίνω, πίνω, πίνω σάσι μήλο με κανέλα, μήλο με κανέλα, μήλο με\n κανέλα, με κανέλα.\nΈλα λίγο ρε.\nΚαμιά σφαίρα θα μπούμε;\nΈλα μπες κάνα λολάκι ρε.\nΔεν κόβεις ούτε με βαλέ μαλάκα.\nΜελισναουτσνερικά μιλάς;\nΕ, παίζει να έχεις grinder;\nΕ, τον Μανάκη τι τον έχεις;",
                inline: true
              },
              {
                name: "\u200B",
                value: "\u200B"
              },
              {
                name: "#",
                value: "40\n41\n42\n43\n44\n45\n46 ♫\n47\n48\n49",
                inline: true
              },
              {
                name: "Description",
                value: "Βράσε λίγο μουλίγκαν ρε, μην πίνεις μόνο αρίρι.\nΈλα ρε, θα φέρω το μεγάλο το μπόιλερ μετά άμα είναι.\nΠόσα g να βάλω μέσα ρε;\nΠόσα g θέλεις;\nΒρέχει μέχρι ένα κιλό σάσι την ώρα.\nΕ το καινούργιο το μπόιλερ ξες τώρα δίκιλο, δεν παίζουμε εδώ πέρα.\nΒράστο, σκάστο, πάρε το αρίρι και βράστο, σκάστο, άστο.\nΕ ναρκομανάκη.\nΈλα χίμλερ και ντρουμπουκόρ.\nΧίμλερ.",
                inline: true
              },
              {
                name: "\u200B",
                value: "\u200B"
              },
              {
                name: "#",
                value: "50\n51\n52\n53\n54\n55\n56",
                inline: true
              },
              {
                name: "Description",
                value: "Ντρούμπου.\nΙππότη του Melliot.\nMelliot.\nΜέλι.\nΠούσαι ρε Νικίτα του πούτσου.\nAngie μωράκι μου.\nΝτάξει ρε, πίνετε χωρίς εμένα, ντάξει.",
                inline: true
              },
              {
                name: "Extra audio clips",
                value: "\u200B"
              },
              {
                name: "#",
                value: "420 ♫\n666",
                inline: true
              },
              {
                name: "Description",
                value: "Κάθε πράγμα στον καιρό του και τον Αύγοστο ο κολιός.\nΓύρνα στο τέρμα σου βρε μαλάκα - extended cut by abaluben",
                inline: true
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.client.user.avatarURL(),
              text: "© 9VMS | Last update"
            }
          }
        });

        return;
    }
}