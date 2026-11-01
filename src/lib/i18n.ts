export const LANGS = ["nl", "en", "en-us", "en-ca", "de", "fr", "es"] as const;
export type Lang = (typeof LANGS)[number];

type Dict = {
  nav: [string, string, string, string, string];
  cta: string;
  eyebrow: string;
  heroTitle: [string, string];
  heroSub: string;
  heroSecondary: string;
  stats: [string, string][];
  vsTitle: string;
  vsOthers: string;
  vsOthersItems: string[];
  vsUs: string;
  vsUsItems: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  services: [string, string][];
  resultsEyebrow: string;
  resultsTitle: string;
  uploadHint: string;
  upload: string;
  testimonials: [string, string, string][];
  aboutEyebrow: string;
  aboutTitle: string;
  founder: string;
  about: string[];
  pricingEyebrow: string;
  pricingTitle: string;
  once: string;
  value: string;
  includes: string[];
  guarantee: string;
  faqTitle: string;
  faq: [string, string][];
  finalTitle: string;
  finalSub: string;
  footer: string;
  refund: string;
};

const nl: Dict = {
  nav: ["Waarom wij", "Services", "Resultaten", "Over ons", "Prijs"],
  cta: "Word nu lid",
  eyebrow: "De enige in de hele e-commerce game",
  heroTitle: ["Geen coach.", "Een complete e-commerce familie."],
  heroSub:
    "90 Days Ecom Group is de one-stop-shop voor dropshipping en branded dropshipping. Andere coaches vragen {A}+. Wij vragen eenmalig {P} — en helpen je met álles.",
  heroSecondary: "Bekijk resultaten",
  stats: [["24/7", "Community actief"], ["{P}", "Eenmalig, geen abonnement"], ["A–Z", "Partners voor elk probleem"], ["{SYM}100K+", "Omzet per maand bij leden"]],
  vsTitle: "Waarom die {A}+ in je eigen business moeten steken — en niet in een coach",
  vsOthers: "Andere coaches",
  vsOthersItems: ["{A} – {T} vooraf", "Eén uurtje per maand, als je geluk hebt", "Komen niet opdagen", "Geen hulp bij echte problemen"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["Eenmalig {P}, voor altijd", "24/7 actieve community — nooit wachten", "Partners voor elk probleem van A tot Z", "Maandelijkse expert call + kwartaal meetup"],
  servicesEyebrow: "De one-stop-shop",
  servicesTitle: "Wat je probleem ook is, wij hebben iemand voor je",
  services: [
    ["Payment holds", "Stripe, Shopify Payments of PayPal vastgezet? Wij lossen het op."],
    ["Private payment provider", "Eigen private payment provider: stabiel afrekenen zonder plotselinge holds of reserves."],
    ["Agency ad accounts", "Ad account eruit gevallen? Direct toegang via ons ad agency netwerk."],
    ["Boekhouding & btw", "Boekhouders en btw-specialisten die e-commerce écht begrijpen."],
    ["Company formation", "Bedrijf opzetten in NL, HK, UK, US of Dubai — goed geregeld."],
    ["Website & store", "Converterende Shopify-stores en branded webshops laten bouwen."],
    ["Leveranciers & fulfilment", "Betrouwbare suppliers, private label en snelle verzending."],
    ["Exit strategie", "Wij helpen je met het verkopen van je store — of we kopen hem zelf."],
    ["Google, Meta & Pinterest", "Expertise in Google Ads, Meta en Pinterest — plus e-mailmarketing voor herhaalaankopen."],
    ["Expert call", "Elke maand een live call met een topexpert uit de branche."],
    ["Kwartaal meetup", "Elk kwartaal samenkomen met de hele groep. Netwerk = net worth."],
    ["24/7 beschikbaarheid", "Community en experts zijn dag én nacht bereikbaar — je hoeft nooit op iemand te wachten."],
  ],
  resultsEyebrow: "Resultaten",
  resultsTitle: "Van starter tot een ton per maand",
  uploadHint: "Klik op een kaart om een screenshot of foto te uploaden.",
  upload: "Foto uploaden",
  testimonials: [
    ["Daan V.", "Branded dropshipping", "Payment hold van {SYM}38K — binnen 1,5 maand volledig weer vrij via hun partner. Een coach had me dat nooit kunnen geven."],
    ["Sarah M.", "Eigen brand", "Van {SYM}0 naar {SYM}27K omzet in mijn eerste 90 dagen. Elke vraag binnen minuten beantwoord."],
    ["Youssef K.", "Branded store", "We draaien nu {SYM}100K+ per maand. De meetups alleen al waren tien keer de {P} waard."],
    ["Lisa B.", "Starter", "Ik had {F} aan een coach betaald die nooit kwam. Hier kreeg ik in één week meer hulp."],
  ],
  aboutEyebrow: "Over ons",
  aboutTitle: "Ontmoet Kiki Rozey",
  founder: "Kiki Rozey — Oprichter",
  about: [
    "Ooit volgden we zelf een dure coaching. De coach kwam nooit opdagen. Dus dachten we: fuck it, we bouwen het zelf op — samen.",
    "Herken je dat gevoel? Je wilt starten, maar iets houdt je tegen: angst om je geld te verliezen, twijfel of je het aankunt, en de herinnering aan coaches die beloftes maakten en daarna verdwenen. Wij kennen dat gevoel — we hebben het zelf meegemaakt. Daarom bestaat deze groep: zodat je nooit meer alleen staat.",
    "Wat begon als hobby liep compleet uit de hand. De groep groeide keihard, en nu zeggen we: wij zijn de one-stop-shop voor iedereen in e-commerce.",
    "Wij geloven dat jij een eerlijke kans verdient. Steek je geld in je eigen business — niet in een coach die geen zin heeft om je te helpen.",
    "Opgezet door Kiki Rozey — zelf e-com ondernemer. Kiki bouwde een eigen store op naar {SYM}150K per maand en verkocht die. Nu bouwt hij aan nieuwe fashion stores en een e-com portfolio met meerdere stores.",
  ],
  pricingEyebrow: "Eén prijs. Alles inbegrepen.",
  pricingTitle: "Levenslange toegang",
  once: "eenmalig",
  value: "Waarde: tienduizenden {SYM} aan besparingen en directe hulp",
  includes: ["24/7 toegang tot de community", "Volledig partnernetwerk van A tot Z", "Maandelijkse expert call", "Elk kwartaal een live meetup", "Hulp bij payment holds, ad accounts, btw & meer", "Geen abonnement, geen verborgen kosten"],
  guarantee: "Veilig betalen · Direct toegang",
  faqTitle: "Veelgestelde vragen",
  faq: [
    ["Hoeveel startbudget heb ik écht nodig om te beginnen met dropshippen?", "Wij raden altijd aan om met een budget van {SYM}1K tot {SYM}2K te starten — zo heb je genoeg ruimte om producten te testen zonder druk."],
    ["Wat is het gemiddelde winstpercentage per sale?", "De gemiddelde winst per gemaakte sale ligt tussen de 20% en 30%. Welke marge jij haalt, hangt af van je product en hoe je je merk opbouwt."],
    ["Hoe zit het met de opslag en fulfilment van mijn producten?", "Wij werken samen met speciale fulfilmentpartijen. Daardoor heb jij een snelle levertijd en gaat elke bestelling direct van de leverancier naar je klant — zonder eigen voorraad."],
    ["En de concurrentie binnen de markt, hoe zit dat?", "In elke markt is er uiteraard concurrentie. Maar in de dropshipwereld doen heel veel dropshippers het nog op de ouderwetse manier — geen goede concurrentie. Dat is juist jouw kans om het beter te doen."],
    ["Doen jullie 1-op-1 begeleiding?", "Dat is de prioriteit van ons programma. Wij willen absoluut geen cursusverkoper-uitstraling hebben: wij staan voor directe communicatie met onze members. Juist daardoor behalen wij goede resultaten."],
    ["Via welke software maken jullie de websites?", "Wij bouwen onze stores op Shopify, met onze eigen template — uitsluitend beschikbaar voor members."],
    ["Waarom heb ik eigenlijk geen coach nodig?", "Een coach vraagt al snel {A} tot wel {SYM}15K voor één traject — en daarna moet je óók nog in je business investeren. Voor een coach ben jij het product: ze hebben vaak zoveel klanten dat er nauwelijks tijd voor jou overblijft. Wij geloven dat je dat geld liever in je eigen business stopt dan in iemands lifestyle op Bali — en bij ons zit alle belang zo dat jij slaagt."],
  ],
  finalTitle: "Je verdient een eerlijke kans.",
  finalSub: "Sluit je vandaag aan bij de 90 Days Ecom Group.",
  footer: "Alle rechten voorbehouden.",
  refund: "Alle verkopen zijn definitief; er worden geen terugbetalingen gedaan.",
};

const en: Dict = {
  nav: ["Why us", "Services", "Results", "About", "Pricing"],
  cta: "Join now",
  eyebrow: "The only one in the entire e-commerce game",
  heroTitle: ["Not a coach.", "A complete e-commerce family."],
  heroSub:
    "90 Days Ecom Group is the one-stop shop for dropshipping and branded dropshipping. Other coaches charge {A}+. We charge a one-time {P} — and help you with everything.",
  heroSecondary: "See results",
  stats: [["24/7", "Active community"], ["{P}", "One-time, no subscription"], ["A–Z", "Partners for every problem"], ["{SYM}100K+", "Monthly revenue by members"]],
  vsTitle: "Why that {A}+ should go into your own business — not into a coach",
  vsOthers: "Other coaches",
  vsOthersItems: ["{A} – {T} upfront", "One hour a month, if you're lucky", "Don't show up", "No help with real problems"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["One-time {P}, forever", "24/7 active community — never wait", "Partners for every problem, A to Z", "Monthly expert call + quarterly meetup"],
  servicesEyebrow: "The one-stop shop",
  servicesTitle: "Whatever your problem, we have someone for you",
  services: [
    ["Payment holds", "Stripe, Shopify Payments or PayPal frozen? We get it solved."],
    ["Private payment provider", "Our own private payment provider: stable checkout without sudden holds or reserves."],
    ["Agency ad accounts", "Ad account banned? Instant access via our ad agency network."],
    ["Accounting & VAT", "Accountants and VAT specialists who truly understand e-commerce."],
    ["Company formation", "Set up your company in HK, the UK, US or Dubai — done right."],
    ["Website & store", "High-converting Shopify stores and branded webshops built for you."],
    ["Suppliers & fulfilment", "Reliable suppliers, private label and fast shipping."],
    ["Exit strategy", "We help you sell your store — or we buy it ourselves."],
    ["Google, Meta & Pinterest", "Expertise in Google Ads, Meta and Pinterest — plus email marketing for repeat revenue."],
    ["Expert call", "A live call with a top industry expert every month."],
    ["Quarterly meetup", "Meet the whole group every quarter. Your network is your net worth."],
    ["24/7 availability", "The community and our experts are reachable day and night — you never have to wait."],
  ],
  resultsEyebrow: "Results",
  resultsTitle: "From starter to six figures a month",
  uploadHint: "Click a card to upload a screenshot or photo.",
  upload: "Upload photo",
  testimonials: [
    ["Daan V.", "Branded dropshipping", "A {SYM}38K payment hold fully released again within a month and a half through their partner. No coach could have done that."],
    ["Sarah M.", "Own brand", "From {SYM}0 to {SYM}27K revenue in my first 90 days. Every question answered within minutes."],
    ["Youssef K.", "Branded store", "We now run {SYM}100K+ a month. The meetups alone were worth ten times the {P}."],
    ["Lisa B.", "Beginner", "I paid {F} to a coach who never showed up. Here I got more help in one week."],
  ],
  aboutEyebrow: "About us",
  aboutTitle: "Meet Kiki Rozey",
  founder: "Kiki Rozey — Founder",
  about: [
    "We once paid for an expensive coaching ourselves. The coach never showed up. So we thought: screw it, we'll build it ourselves — together.",
    "Does this sound familiar? You want to start, but something holds you back: fear of losing money, doubting whether you can do it, and the memory of coaches who made promises and then vanished. We know that feeling — we lived it ourselves. That's why this group exists: so you never stand alone again.",
    "What started as a hobby got completely out of hand. The group grew fast, and now we say: we are the one-stop shop for everyone in e-commerce.",
    "We believe you deserve a fair chance. Put your money into your own business — not into a coach who can't be bothered to help you.",
    "Founded by Kiki Rozey — an e-com entrepreneur himself. Kiki built his own store to {SYM}150K a month and sold it. He is now building new fashion stores and an e-com portfolio of multiple stores.",
  ],
  pricingEyebrow: "One price. Everything included.",
  pricingTitle: "Lifetime access",
  once: "one-time",
  value: "Value: tens of thousands of {SYM} in savings and direct help",
  includes: ["24/7 community access", "Full A–Z partner network", "Monthly expert call", "Live meetup every quarter", "Help with payment holds, ad accounts, VAT & more", "No subscription, no hidden fees"],
  guarantee: "Secure payment · Instant access",
  faqTitle: "Frequently asked questions",
  faq: [
    ["How much starting budget do I actually need to begin dropshipping?", "We always recommend starting with a budget of {SYM}1K to {SYM}2K — enough room to test products without pressure."],
    ["What is the average profit margin per sale?", "The average profit per sale sits between 20% and 30%. The margin you get depends on your product and how you build your brand."],
    ["What about storage and fulfilment for my products?", "We work with dedicated fulfilment partners. That means fast delivery and every order going straight from supplier to your customer — no stock of your own needed."],
    ["And the competition in the market?", "Every market has competition, of course. But in the dropship world most dropshippers still do it the old-fashioned way — not strong competition. That's exactly your chance to do it better."],
    ["Do you offer 1-on-1 guidance?", "That is the priority of our program. We absolutely don't want to come across as course sellers: we stand for direct communication with our members. That's exactly why we get great results."],
    ["Which software do you build the websites with?", "We build our stores on Shopify, using our own template — available exclusively for members."],
    ["Why don't I actually need a coach?", "A coach quickly charges {A} up to {SYM}15K for a single program — and after that you still have to invest in your business. To a coach, you are the product: they often have so many clients that almost no time is left for you. We believe that money is better spent on your own business than on someone's lifestyle in Bali — and with us, our only interest is that you succeed."],
  ],
  finalTitle: "You deserve a fair chance.",
  finalSub: "Join the 90 Days Ecom Group today.",
  footer: "All rights reserved.",
  refund: "All sales are final and therefore no refunds.",
};

const de: Dict = {
  nav: ["Warum wir", "Services", "Ergebnisse", "Über uns", "Preis"],
  cta: "Jetzt beitreten",
  eyebrow: "Die Einzigen im gesamten E-Commerce-Game",
  heroTitle: ["Kein Coach.", "Eine komplette E-Commerce-Familie."],
  heroSub:
    "Die 90 Days Ecom Group ist der One-Stop-Shop für Dropshipping und Branded Dropshipping. Andere Coaches verlangen {A}+. Wir verlangen einmalig {P} — und helfen dir bei allem.",
  heroSecondary: "Ergebnisse ansehen",
  stats: [["24/7", "Aktive Community"], ["{P}", "Einmalig, kein Abo"], ["A–Z", "Partner für jedes Problem"], ["{SYM}100K+", "Monatsumsatz unserer Mitglieder"]],
  vsTitle: "Warum diese {A}+ in dein eigen Business gehören — und nicht in einen Coach",
  vsOthers: "Andere Coaches",
  vsOthersItems: ["{A} – {T} im Voraus", "Eine Stunde im Monat, wenn überhaupt", "Tauchen nicht auf", "Keine Hilfe bei echten Problemen"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["Einmalig {P}, für immer", "24/7 aktive Community — nie warten", "Partner für jedes Problem von A bis Z", "Monatlicher Expert-Call + Quartals-Meetup"],
  servicesEyebrow: "Der One-Stop-Shop",
  servicesTitle: "Egal welches Problem — wir haben jemanden für dich",
  services: [
    ["Payment Holds", "Stripe, Shopify Payments oder PayPal eingefroren? Wir lösen es."],
    ["Privater Payment-Provider", "Unser eigener privater Payment-Provider: stabile Zahlungen ohne plötzliche Holds."],
    ["Agency-Werbekonten", "Werbekonto gesperrt? Sofortiger Zugang über unser Agency-Netzwerk."],
    ["Buchhaltung & USt.", "Steuerberater, die E-Commerce wirklich verstehen."],
    ["Firmengründung", "Gründung in HK, UK, USA oder Dubai — richtig gemacht."],
    ["Website & Shop", "Konvertierende Shopify-Stores und Brand-Shops."],
    ["Lieferanten & Fulfillment", "Zuverlässige Lieferanten, Private Label und schneller Versand."],
    ["Exit-Strategie", "Wir helfen dir, deinen Store zu verkaufen — oder kaufen ihn selbst."],
    ["Ads", "Hilfe bei Google Ads und weiteren Werbeplattformen."],
    ["Expert-Call", "Jeden Monat ein Live-Call mit einem Top-Experten."],
    ["Quartals-Meetup", "Jedes Quartal trifft sich die ganze Gruppe."],
  ],
  resultsEyebrow: "Ergebnisse",
  resultsTitle: "Vom Anfänger bis sechsstellig pro Monat",
  uploadHint: "Klicke auf eine Karte, um ein Foto hochzuladen.",
  upload: "Foto hochladen",
  testimonials: [
    ["Daan V.", "Branded Dropshipping", "{SYM}38K Payment Hold in 9 Tagen über ihren Partner freibekommen."],
    ["Sarah M.", "Dropshipping, DE", "Von {SYM}0 auf {SYM}27K Umsatz in den ersten 90 Tagen."],
    ["Youssef K.", "Brand Store", "Wir machen jetzt {SYM}100K+ im Monat. Allein die Meetups waren das Zehnfache wert."],
    ["Lisa B.", "Anfängerin", "{F} an einen Coach bezahlt, der nie kam. Hier bekam ich in einer Woche mehr Hilfe."],
  ],
  aboutEyebrow: "Über uns",
  aboutTitle: "Der Coach kam nie. Also haben wir es selbst gemacht.",
  about: [
    "Wir haben selbst einmal ein teures Coaching gebucht. Der Coach ist nie aufgetaucht. Also dachten wir: Scheiß drauf, wir bauen es selbst auf — gemeinsam.",
    "Kommtdir das bekannt vor? Du willst starten, aber etwas hält dich zurück: die Angst, Geld zu verlieren, Zweifel, ob du es kannst, und die Erinnerung an Coaches, die Versprechen machten und dann verschwanden. Wir kennen dieses Gefühl — wir haben es selbst erlebt. Deshalb gibt es diese Gruppe: damit du nie wieder allein stehst.",
    "Was als Hobby begann, ist völlig eskaliert. Die Gruppe wuchs rasant, und heute sind wir der One-Stop-Shop für alle im E-Commerce.",
    "Wir glauben, dass du eine faire Chance verdienst. Investiere in dein eigenes Business — nicht in einen Coach, der keine Lust hat.",
    "Gegründet von Kiki Rozey — selbst E-Com-Unternehmer. Kiki hat seinen eigenen Store auf {SYM}150K pro Monat aufgebaut und verkauft. Jetzt baut er neue Fashion-Stores und ein E-Com-Portfolio mit mehreren Stores auf.",
  ],
  pricingEyebrow: "Ein Preis. Alles inklusive.",
  pricingTitle: "Lebenslanger Zugang",
  once: "einmalig",
  value: "Wert: Zehntausende {SYM} an Ersparnissen und direkter Hilfe",
  includes: ["24/7 Community-Zugang", "Komplettes Partnernetzwerk A–Z", "Monatlicher Expert-Call", "Live-Meetup jedes Quartal", "Hilfe bei Payment Holds, Werbekonten, USt. & mehr", "Kein Abo, keine versteckten Kosten"],
  guarantee: "Sichere Zahlung · Sofortiger Zugang",
  faqTitle: "Häufige Fragen",
  faq: [
    ["Ist das ein Coaching?", "Nein. Wir sind eine Community mit Partnernetzwerk, die dein Business wachsen lässt."],
    ["Wirklich einmalig {P}?", "Ja. Eine Zahlung, kein Abo."],
    ["Für wen ist das?", "Für alle im Dropshipping oder Branded Dropshipping — vom Anfänger bis {SYM}100K+ im Monat."],
    ["Wie schnell bekomme ich Hilfe?", "Die Community ist 24/7 aktiv."],
  ],
  finalTitle: "Du verdienst eine faire Chance.",
  finalSub: "Tritt noch heute der 90 Days Ecom Group bei.",
  footer: "Alle Rechte vorbehalten.",
  refund: "Alle Verkäufe sind endgültig; keine Rückerstattungen.",
};

const fr: Dict = {
  nav: ["Pourquoi nous", "Services", "Résultats", "À propos", "Prix"],
  cta: "Rejoindre",
  eyebrow: "Les seuls dans tout le game e-commerce",
  heroTitle: ["Pas un coach.", "Une vraie famille e-commerce."],
  heroSub:
    "90 Days Ecom Group est le guichet unique du dropshipping et du branded dropshipping. Les autres coachs demandent {A}+. Nous : {P} une seule fois — et on t'aide sur tout.",
  heroSecondary: "Voir les résultats",
  stats: [["24/7", "Communauté active"], ["{P}", "Paiement unique"], ["A–Z", "Partenaires pour tout"], ["{SYM}100K+", "CA mensuel des membres"]],
  vsTitle: "Pourquoi ces {A}+ doivent aller dans ton business — et pas dans un coach",
  vsOthers: "Les autres coachs",
  vsOthersItems: ["{A} – {T} d'avance", "Une heure par mois, au mieux", "Ne se présentent pas", "Aucune aide sur les vrais problèmes"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["{P} une fois, pour toujours", "Communauté active 24/7", "Partenaires pour chaque problème", "Expert call mensuel + meetup trimestriel"],
  servicesEyebrow: "Le guichet unique",
  servicesTitle: "Quel que soit ton problème, on a quelqu'un pour toi",
  services: [
    ["Payment holds", "Stripe, Shopify Payments ou PayPal bloqué ? On le règle."],
    ["Prestataire de paiement privé", "Notre propre prestataire privé : paiements stables, sans blocages soudains."],
    ["Comptes pub agence", "Compte pub banni ? Accès immédiat via notre réseau d'agences."],
    ["Comptabilité & TVA", "Des comptables qui comprennent vraiment l'e-commerce."],
    ["Création de société", "HK, UK, USA ou Dubaï — bien fait."],
    ["Site & boutique", "Boutiques Shopify qui convertissent."],
    ["Fournisseurs & logistique", "Fournisseurs fiables, private label, livraison rapide."],
    ["Stratégie de sortie", "On t'aide à vendre ta boutique — ou on la rachète nous-mêmes."],
    ["Ads", "Aide sur Google Ads et d'autres plateformes publicitaires."],
    ["Expert call", "Un live chaque mois avec un expert de haut niveau."],
    ["Meetup trimestriel", "Tout le groupe se retrouve chaque trimestre."],
  ],
  resultsEyebrow: "Résultats",
  resultsTitle: "De débutant à six chiffres par mois",
  uploadHint: "Clique sur une carte pour ajouter une photo.",
  upload: "Ajouter une photo",
  testimonials: [
    ["Daan V.", "Branded dropshipping", "Payment hold de {SYM}38K débloqué en 9 jours grâce à leur partenaire."],
    ["Sarah M.", "Dropshipping", "De {SYM}0 à {SYM}27K de CA en 90 jours."],
    ["Youssef K.", "Marque", "On fait maintenant {SYM}100K+ par mois."],
    ["Lisa B.", "Débutante", "J'avais payé {F} à un coach absent. Ici, plus d'aide en une semaine."],
  ],
  aboutEyebrow: "À propos",
  aboutTitle: "Le coach n'est jamais venu. Alors on l'a fait nous-mêmes.",
  about: [
    "Un jour, on a payé un coaching cher. Le coach n'est jamais venu. Alors on s'est dit : tant pis, on construit ça nous-mêmes — ensemble.",
    "Ça te parle ? Tu veux te lancer, mais quelque chose te retient : la peur de perdre de l'argent, le doute de pouvoir y arriver, et le souvenir de coachs qui faisaient des promesses avant de disparaître. On connaît ce sentiment — on l'a vécu nous-mêmes. C'est pour ça que ce groupe existe : pour que tu ne sois plus jamais seul.",
    "Ce qui était un hobby a complètement explosé. Aujourd'hui, nous sommes le guichet unique de l'e-commerce.",
    "Tu mérites une vraie chance. Investis dans ton business — pas dans un coach qui n'a pas envie de t'aider.",
    "Fondé par Kiki Rozey — lui-même entrepreneur e-com. Kiki a développé sa propre boutique jusqu'à {SYM}150K par mois avant de la vendre. Il construit aujourd'hui de nouvelles boutiques mode et un portefeuille e-com de plusieurs boutiques.",
  ],
  pricingEyebrow: "Un prix. Tout inclus.",
  pricingTitle: "Accès à vie",
  once: "une fois",
  value: "Valeur : des dizaines de milliers de {SYM} d'économies et d'aide directe",
  includes: ["Accès communauté 24/7", "Réseau de partenaires A–Z", "Expert call mensuel", "Meetup chaque trimestre", "Aide payment holds, comptes pub, TVA…", "Sans abonnement"],
  guarantee: "Paiement sécurisé · Accès immédiat",
  faqTitle: "Questions fréquentes",
  faq: [
    ["C'est du coaching ?", "Non. Nous sommes une communauté avec un réseau de partenaires."],
    ["Vraiment {P} une fois ?", "Oui. Un paiement, sans abonnement."],
    ["Pour qui ?", "Tout le monde en dropshipping, du débutant à {SYM}100K+ par mois."],
    ["Aide rapide ?", "La communauté est active 24/7."],
  ],
  finalTitle: "Tu mérites une vraie chance.",
  finalSub: "Rejoins la 90 Days Ecom Group aujourd'hui.",
  footer: "Tous droits réservés.",
  refund: "Toutes les ventes sont définitives ; aucun remboursement.",
};

const es: Dict = {
  nav: ["Por qué", "Servicios", "Resultados", "Nosotros", "Precio"],
  cta: "Únete ahora",
  eyebrow: "Los únicos en todo el juego del e-commerce",
  heroTitle: ["No somos coaches.", "Somos una familia e-commerce."],
  heroSub:
    "90 Days Ecom Group es el one-stop-shop del dropshipping y branded dropshipping. Otros coaches cobran {A}+. Nosotros, {P} una sola vez — y te ayudamos con todo.",
  heroSecondary: "Ver resultados",
  stats: [["24/7", "Comunidad activa"], ["{P}", "Pago único"], ["A–Z", "Socios para todo"], ["{SYM}100K+", "Facturación mensual de miembros"]],
  vsTitle: "Por qué esos {A}+ deben ir a tu negocio — y no a un coach",
  vsOthers: "Otros coaches",
  vsOthersItems: ["{A} – {T} por adelantado", "Una hora al mes, con suerte", "No aparecen", "Sin ayuda real"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["{P} una vez, para siempre", "Comunidad activa 24/7", "Socios para cada problema", "Expert call mensual + meetup trimestral"],
  servicesEyebrow: "El one-stop-shop",
  servicesTitle: "Sea cual sea tu problema, tenemos a alguien",
  services: [
    ["Payment holds", "¿Stripe, Shopify Payments o PayPal bloqueado? Lo resolvemos."],
    ["Procesador de pagos privado", "Nuestro propio procesador privado: cobros estables sin bloqueos repentinos."],
    ["Cuentas de agencia", "¿Cuenta publicitaria baneada? Acceso inmediato vía agencia."],
    ["Contabilidad e IVA", "Contables que entienden el e-commerce."],
    ["Creación de empresa", "HK, UK, EE. UU. o Dubái — bien hecho."],
    ["Web y tienda", "Tiendas Shopify que convierten."],
    ["Proveedores y logística", "Proveedores fiables, private label y envío rápido."],
    ["Estrategia de salida", "Te ayudamos a vender tu tienda — o la compramos nosotros."],
    ["Ads", "Ayuda con Google Ads y otras plataformas publicitarias."],
    ["Expert call", "Cada mes, un directo con un experto top."],
    ["Meetup trimestral", "Todo el grupo se reúne cada trimestre."],
  ],
  resultsEyebrow: "Resultados",
  resultsTitle: "De principiante a seis cifras al mes",
  uploadHint: "Haz clic en una tarjeta para subir una foto.",
  upload: "Subir foto",
  testimonials: [
    ["Daan V.", "Branded dropshipping", "Liberamos un payment hold de {SYM}38K en 9 días."],
    ["Sarah M.", "Dropshipping", "De {SYM}0 a {SYM}27K en mis primeros 90 días."],
    ["Youssef K.", "Marca propia", "Ahora facturamos {SYM}100K+ al mes."],
    ["Lisa B.", "Principiante", "Pagué {F} a un coach que nunca apareció. Aquí tuve más ayuda en una semana."],
  ],
  aboutEyebrow: "Nosotros",
  aboutTitle: "El coach nunca apareció. Así que lo hicimos nosotros.",
  about: [
    "Una vez pagamos un coaching caro. El coach nunca apareció. Pensamos: a la mierda, lo construimos nosotros — juntos.",
    "¿Te suena? Quieres empezar, pero algo te frena: el miedo a perder dinero, la duda de si podrás, y el recuerdo de coaches que prometieron y desaparecieron. Conocemos ese sentimiento — lo vivimos nosotros mismos. Por eso existe este grupo: para que nunca estés solo.",
    "Lo que empezó como hobby se descontroló. Hoy somos el one-stop-shop del e-commerce.",
    "Mereces una oportunidad justa. Invierte en tu negocio, no en un coach sin ganas de ayudarte.",
    "Fundado por Kiki Rozey — también emprendedor e-com. Kiki llevó su propia tienda a {SYM}150K al mes y la vendió. Ahora está creando nuevas tiendas de moda y un portafolio e-com con varias tiendas.",
  ],
  pricingEyebrow: "Un precio. Todo incluido.",
  pricingTitle: "Acceso de por vida",
  once: "pago único",
  value: "Valor: decenas de miles de {SYM} en ahorro y ayuda directa",
  includes: ["Comunidad 24/7", "Red de socios A–Z", "Expert call mensual", "Meetup cada trimestre", "Ayuda con payment holds, cuentas, IVA…", "Sin suscripción"],
  guarantee: "Pago seguro · Acceso inmediato",
  faqTitle: "Preguntas frecuentes",
  faq: [
    ["¿Es un coaching?", "No. Somos una comunidad con red de socios."],
    ["¿De verdad {P} una vez?", "Sí. Un pago, sin suscripción."],
    ["¿Para quién?", "Para todos en dropshipping, de principiante a {SYM}100K+ al mes."],
    ["¿Ayuda rápida?", "La comunidad está activa 24/7."],
  ],
  finalTitle: "Mereces una oportunidad justa.",
  finalSub: "Únete hoy a 90 Days Ecom Group.",
  footer: "Todos los derechos reservados.",
  refund: "Todas las ventas son finales; no hay reembolsos.",
};

// en-us / en-ca reuse the full English dictionary — only the flag differs.
export const DICT: Record<Lang, Dict> = { nl, en, de, fr, es, "en-us": en, "en-ca": en };

// ===== Currency & price tokens =====
// Flat pricing rule: the offer is always 247 and the anchor always 5,000 in the
// visitor's currency — never converted with live exchange rates.
export const CURRENCIES = ["EUR", "USD", "GBP"] as const;
export type Currency = (typeof CURRENCIES)[number];
export const CURRENCY_SYMBOL: Record<Currency, string> = { EUR: "€", USD: "$", GBP: "£" };
export const CURRENCY_FLAG: Record<Currency, string> = { EUR: "🇪🇺", USD: "🇺🇸", GBP: "🇬🇧" };
export const LANG_FLAG: Record<Lang, string> = { nl: "🇳🇱", en: "🇬🇧", "en-us": "🇺🇸", "en-ca": "🇨🇦", de: "🇩🇪", fr: "🇫🇷", es: "🇪🇸" };
export const LANG_LABEL: Record<Lang, string> = { nl: "Nederlands", en: "English", "en-us": "English (US)", "en-ca": "English (CA)", de: "Deutsch", fr: "Français", es: "Español" };

const NUM_FMT: Record<Lang, { sep: string; gap: string; after: boolean }> = {
  nl: { sep: ".", gap: "", after: false },
  en: { sep: ",", gap: "", after: false },
  "en-us": { sep: ",", gap: "", after: false },
  "en-ca": { sep: ",", gap: "", after: false },
  de: { sep: ".", gap: " ", after: true },
  fr: { sep: " ", gap: " ", after: true },
  es: { sep: ".", gap: " ", after: true },
};

function groupDigits(digits: string, sep: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export function fmtMoney(digits: string, lang: Lang, cur: Currency): string {
  const f = NUM_FMT[lang];
  const n = groupDigits(digits, f.sep);
  return f.after ? `${n}${f.gap}${CURRENCY_SYMBOL[cur]}` : `${CURRENCY_SYMBOL[cur]}${n}`;
}

export function tt(template: string, lang: Lang, cur: Currency): string {
  return template
    .replaceAll("{P}", fmtMoney("247", lang, cur))
    .replaceAll("{A}", fmtMoney("5000", lang, cur))
    .replaceAll("{F}", fmtMoney("6000", lang, cur))
    .replaceAll("{T}", fmtMoney("10000", lang, cur))
    .replaceAll("{SYM}", CURRENCY_SYMBOL[cur]);
}

export function localize<T>(node: T, lang: Lang, cur: Currency): T {
  if (typeof node === "string") return tt(node, lang, cur) as unknown as T;
  if (Array.isArray(node)) return node.map((n) => localize(n, lang, cur)) as unknown as T;
  if (node && typeof node === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) out[k] = localize(v, lang, cur);
    return out as T;
  }
  return node;
}

// ===== Country detection =====
// The visitor's country decides currency and language, automatically:
// 1) browser region/timezone gives an instant guess, 2) an IP lookup refines
// it to the real country on first visit. A manual choice is always saved and
// never overridden.

export function currencyForCountry(cc: string): Currency {
  const c = cc.toUpperCase();
  if (c === "GB") return "GBP";
  if (["US", "CA", "AU", "NZ"].includes(c)) return "USD";
  return "EUR";
}

export function detectCurrency(): Currency {
  const region = (typeof navigator !== "undefined" ? navigator.language : "").split("-")[1]?.toUpperCase();
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
  if (region === "GB" || tz === "Europe/London") return "GBP";
  if (region && ["US", "CA", "AU", "NZ"].includes(region)) return "USD";
  return "EUR";
}

export function langForCountry(cc: string): Lang | null {
  const map: Record<string, Lang> = {
    NL: "nl", BE: "nl",
    DE: "de", AT: "de", CH: "de", LI: "de",
    FR: "fr",
    ES: "es", MX: "es", AR: "es", CO: "es", CL: "es",
    GB: "en", US: "en-us", CA: "en-ca",
  };
  return map[cc.toUpperCase()] ?? null;
}

const CC_CACHE_KEY = "country";

export async function detectCountry(): Promise<string | null> {
  if (typeof localStorage !== "undefined") {
    const cached = localStorage.getItem(CC_CACHE_KEY);
    if (cached) return cached;
  }
  for (const url of ["https://ipwho.is/", "https://ipapi.co/json/"]) {
    try {
      const res = await fetch(url);
      const data = (await res.json()) as { country_code?: string; countryCode?: string };
      const cc = data.country_code ?? data.countryCode ?? null;
      if (cc) {
        try { localStorage.setItem(CC_CACHE_KEY, cc); } catch { /* private mode */ }
        return cc;
      }
    } catch { /* try the next provider */ }
  }
  return null;
}
