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
  includes: [string, string][];
  includesTotal: string;
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
  vsTitle: "Waarom je die {A}+ in je eigen business moet steken — en niet in een coach",
  vsOthers: "Andere coaches",
  vsOthersItems: ["Minimaal {A} vooraf investeren", "Onnodige upsells naar dingen die je niet nodig hebt — alleen maar om zelf commissie te verdienen", "Jij bent hun product: zij verdienen het meest aan jou", "Een paar uur per maand persoonlijke hulp, als je geluk hebt", "Komen niet opdagen en nemen geen verantwoordelijkheid", "Hebben geen baat bij jouw succes — dus het boeit ze niet", "Geven basisinformatie die je gratis op YouTube kunt vinden", "Geen hulp bij echte problemen", "Ze gebruiken verkopers die zelf niks van e-commerce weten en jou pushen om te betalen, zodat zij snel hun commissie verdienen"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["Eenmalig {P} — lifetime access", "24/7 actieve community — nooit alleen bouwen", "Compleet A–Z-partnernetwerk voor elke fase van je business", "Praktische oplossingen voor elke e-com uitdaging", "Gratis persoonlijke onboarding", "Lifetime toegang tot de complete e-commerce videocursus", "Maandelijkse expert calls met experts uit de branche", "Exclusieve meetups elk kwartaal", "Exit-strategieën: verkoop je store direct aan ons", "Geen onnodige upsells of dure upgrades", "Geen verborgen kosten of abonnementen", "600+ tevreden members en groeiende", "Jouw succes is ons succes", "Wij staan voor je klaar — vanaf dag één en voor de lange termijn"],
  servicesEyebrow: "De one-stop-shop",
  servicesTitle: "Wat je probleem ook is, wij hebben iemand voor je",
  services: [
    ["Payment holds", "Stripe, Shopify Payments of PayPal vastgezet? Wij lossen het op."],
    ["Private payment provider", "We werken samen met 2 providers — wissel altijd van provider en word altijd uitbetaald."],
    ["Agency ad accounts", "Ad account eruit gevallen? Direct toegang via ons ad agency netwerk."],
    ["Boekhouding & btw", "Boekhouders en btw-specialisten die e-commerce écht begrijpen."],
    ["Company formation", "Bedrijf opzetten in NL, HK, UK, US of Dubai — goed geregeld."],
    ["Website & store", "Converterende Shopify-stores en branded webshops laten bouwen."],
    ["Leveranciers & fulfilment", "Betrouwbare suppliers, private label en snelle verzending."],
    ["Exit strategie", "Wij helpen je met het verkopen van je store — of we kopen hem zelf."],
    ["Google, Meta & Pinterest", "Expertise in Google Ads, Meta en Pinterest — plus e-mailmarketing voor herhaalaankopen."],
    ["Expert call", "Elke maand een live call met een topexpert uit de branche."],
    ["Kwartaal meetup", "Elk kwartaal samenkomen met de hele groep. Netwerk = net worth."],
    ["Lifetime videocursus", "Lifetime en onbeperkt toegang tot de volledige videocursus — leer in je eigen tempo, op elk device, voor altijd."],
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
  pricingTitle: "Lifetime toegang",
  once: "eenmalig",
  value: "Waarde: tienduizenden euro's aan besparingen, expertise, connecties en directe hulp.",
  includes: [["24/7 toegang tot de community", "waarde {V1}"], ["Compleet A–Z-partnernetwerk", "waarde {V2}"], ["Maandelijkse expert calls", "waarde {V3}"], ["Live meetup elk kwartaal", "waarde {V4}"], ["Hulp bij payment holds, ad accounts, btw en meer", "waarde {V5}"], ["Lifetime toegang tot de videocursus", "waarde {V6}"], ["Persoonlijke onboarding", "waarde {V7}"], ["Geen abonnement, geen verborgen kosten", ""]],
  includesTotal: "Totale waarde = {VT}+",
  guarantee: "Veilig betalen · Direct toegang",
  faqTitle: "Veelgestelde vragen",
  faq: [
    ["Hoeveel startbudget heb ik écht nodig om te beginnen met dropshippen?", "Wij raden altijd aan om met een budget van {SYM}1K tot {SYM}2K te starten — zo heb je genoeg ruimte om producten te testen zonder druk."],
    ["Wat is het gemiddelde winstpercentage per sale?", "De gemiddelde winst per gemaakte sale ligt tussen de 20% en 30%. Welke marge jij haalt, hangt af van je product en hoe je je merk opbouwt."],
    ["Hoe zit het met de opslag en fulfilment van mijn producten?", "Wij werken samen met speciale fulfilmentpartijen. Daardoor heb jij een snelle levertijd en gaat elke bestelling direct van de leverancier naar je klant — zonder eigen voorraad."],
    ["En de concurrentie binnen de markt, hoe zit dat?", "In elke markt is er uiteraard concurrentie. Maar in de dropshipwereld doen heel veel dropshippers het nog op de ouderwetse manier — geen goede concurrentie. Dat is juist jouw kans om het beter te doen."],
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
  vsOthersItems: ["Minimum {A} upfront", "Unnecessary upsells for things you don't need — just so they earn a commission", "You are their product: they earn the most from you", "A few hours of personal help per month, if you're lucky", "Don't show up and take no responsibility", "Have no stake in your success — so they don't care", "Give you basic information you can find for free on YouTube", "No help with real problems", "They use salespeople who know nothing about e-commerce and push you to pay, just so they can quickly earn their commission"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["One-time {P} — lifetime access", "24/7 active community — never build alone", "Complete A–Z partner network for every stage of your business", "Practical solutions for every e-com challenge", "Free personal onboarding", "Lifetime access to our complete e-commerce video course", "Monthly expert calls with industry professionals", "Exclusive quarterly meetups", "Exit strategies — sell your store directly to us", "No unnecessary upsells or expensive upgrades", "No hidden fees or monthly subscriptions", "600+ satisfied members and growing", "Your success is our success", "We're here for you from day one and for the long run!"],
  servicesEyebrow: "The one-stop shop",
  servicesTitle: "Whatever your problem, we have someone for you",
  services: [
    ["Payment holds", "Stripe, Shopify Payments or PayPal frozen? We get it solved."],
    ["Private payment provider", "We work together with 2 providers — switch anytime and always get paid."],
    ["Agency ad accounts", "Ad account banned? Instant access via our ad agency network."],
    ["Accounting & VAT", "Accountants and VAT specialists who truly understand e-commerce."],
    ["Company formation", "Set up your company in HK, the UK, US or Dubai — done right."],
    ["Website & store", "High-converting Shopify stores and branded webshops built for you."],
    ["Suppliers & fulfilment", "Reliable suppliers, private label and fast shipping."],
    ["Exit strategy", "We help you sell your store — or we buy it ourselves."],
    ["Google, Meta & Pinterest", "Expertise in Google Ads, Meta and Pinterest — plus email marketing for repeat revenue."],
    ["Expert call", "A live call with a top industry expert every month."],
    ["Quarterly meetup", "Meet the whole group every quarter. Your network is your net worth."],
    ["Lifetime video course", "Lifetime, unlimited access to the full video course — learn at your own pace, on any device, forever."],
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
  value: "Value: tens of thousands of {SYM} in savings, expertise, connections and direct support.",
  includes: [["24/7 community access", "value {V1}"], ["Complete A–Z partner network", "value {V2}"], ["Monthly expert calls", "value {V3}"], ["Live meetup every quarter", "value {V4}"], ["Help with payment holds, ad accounts, VAT & more", "value {V5}"], ["Lifetime access to the video course", "value {V6}"], ["Personal onboarding", "value {V7}"], ["No subscription, no hidden fees", ""]],
  includesTotal: "Total value = {VT}+",
  guarantee: "Secure payment · Instant access",
  faqTitle: "Frequently asked questions",
  faq: [
    ["How much starting budget do I actually need to begin dropshipping?", "We always recommend starting with a budget of {SYM}1K to {SYM}2K — enough room to test products without pressure."],
    ["What is the average profit margin per sale?", "The average profit per sale sits between 20% and 30%. The margin you get depends on your product and how you build your brand."],
    ["What about storage and fulfilment for my products?", "We work with dedicated fulfilment partners. That means fast delivery and every order going straight from supplier to your customer — no stock of your own needed."],
    ["And the competition in the market?", "Every market has competition, of course. But in the dropship world most dropshippers still do it the old-fashioned way — not strong competition. That's exactly your chance to do it better."],
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
  vsOthersItems: ["Mindestens {A} im Voraus", "Unnötige Upsells für Dinge, die du nicht brauchst — nur für die eigene Provision", "Du bist ihr Produkt: Sie verdienen am meisten an dir", "Ein paar Stunden persönliche Hilfe pro Monat, wenn du Glück hast", "Tauchen nicht auf und übernehmen keine Verantwortung", "Profitieren nicht von deinem Erfolg — deshalb ist er ihnen egal", "Geben dir Basiswissen, das du kostenlos auf YouTube findest", "Keine Hilfe bei echten Problemen", "Sie setzen Verkäufer ein, die selbst nichts von E-Commerce verstehen und dich zum Bezahlen drängen, nur um schnell ihre Provision zu verdienen"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["Einmalig {P} — Lifetime-Access", "24/7 aktive Community — nie allein bauen", "Komplettes Partnernetzwerk A–Z für jede Phase deines Business", "Praktische Lösungen für jede E-Commerce-Herausforderung", "Gratis persönliches Onboarding", "Lebenslangen Zugang zum kompletten E-Commerce-Videokurs", "Monatliche Expert-Calls mit Branchenexperten", "Exklusive Quartals-Meetups", "Exit-Strategien: Verkauf deinen Store direkt an uns", "Keine unnötigen Upsells oder teuren Upgrades", "Keine versteckten Kosten oder Abos", "600+ zufriedene Mitglieder und wachsend", "Dein Erfolg ist unser Erfolg", "Wir sind für dich da — ab Tag eins und auf lange Sicht!"],
  servicesEyebrow: "Der One-Stop-Shop",
  servicesTitle: "Egal welches Problem — wir haben jemanden für dich",
  services: [
    ["Payment Holds", "Stripe, Shopify Payments oder PayPal eingefroren? Wir lösen es."],
    ["Privater Payment-Provider", "Wir arbeiten mit 2 Anbietern zusammen — du kannst jederzeit wechseln und wirst immer ausgezahlt."],
    ["Agency-Werbekonten", "Werbekonto gesperrt? Sofortiger Zugang über unser Agency-Netzwerk."],
    ["Buchhaltung & USt.", "Steuerberater, die E-Commerce wirklich verstehen."],
    ["Firmengründung", "Gründung in HK, UK, USA oder Dubai — richtig gemacht."],
    ["Website & Shop", "Konvertierende Shopify-Stores und Brand-Shops."],
    ["Lieferanten & Fulfillment", "Zuverlässige Lieferanten, Private Label und schneller Versand."],
    ["Exit-Strategie", "Wir helfen dir, deinen Store zu verkaufen — oder kaufen ihn selbst."],
    ["Google, Meta & Pinterest", "Expertise für Google Ads, Meta und Pinterest — plus E-Mail-Marketing für Wiederholungskäufe."],
    ["Expert-Call", "Jeden Monat ein Live-Call mit einem Top-Experten."],
    ["Quartals-Meetup", "Jedes Quartal trifft sich die ganze Gruppe."],
    ["Lifetime-Videokurs", "Lebenslangen und unbegrenzten Zugang zur kompletten Videokurs-Bibliothek — lerne in deinem Tempo, auf jedem Gerät, für immer."],
  ],
  resultsEyebrow: "Ergebnisse",
  resultsTitle: "Vom Anfänger bis sechsstellig pro Monat",
  uploadHint: "Klicke auf eine Karte, um ein Foto hochzuladen.",
  upload: "Foto hochladen",
  testimonials: [
    ["Daan V.", "Branded Dropshipping", "{SYM}38K Payment Hold über ihren Partner innerhalb von anderthalb Monaten wieder freibekommen. Kein Coach hätte das geschafft."],
    ["Sarah M.", "Eigene Brand", "Von {SYM}0 auf {SYM}27K Umsatz in den ersten 90 Tagen."],
    ["Youssef K.", "Brand Store", "Wir machen jetzt {SYM}100K+ im Monat. Allein die Meetups waren das Zehnfache wert."],
    ["Lisa B.", "Anfängerin", "{F} an einen Coach bezahlt, der nie kam. Hier bekam ich in einer Woche mehr Hilfe."],
  ],
  aboutEyebrow: "Über uns",
  aboutTitle: "Das ist Kiki Rozey",
  founder: "Kiki Rozey — Gründer",
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
  value: "Wert: zehntausende {SYM} an Ersparnissen, Expertise, Kontakten und direkter Hilfe.",
  includes: [["24/7 Community-Zugang", "Wert {V1}"], ["Komplettes Partnernetzwerk A–Z", "Wert {V2}"], ["Monatliche Expert-Calls", "Wert {V3}"], ["Live-Meetup jedes Quartal", "Wert {V4}"], ["Hilfe bei Payment Holds, Werbekonten, USt. & mehr", "Wert {V5}"], ["Lebenslangen Zugang zum Videokurs", "Wert {V6}"], ["Persönliches Onboarding", "Wert {V7}"], ["Kein Abo, keine versteckten Kosten", ""]],
  includesTotal: "Gesamtwert = {VT}+",
  guarantee: "Sichere Zahlung · Sofortiger Zugang",
  faqTitle: "Häufige Fragen",
  faq: [
    ["Wie viel Startbudget brauche ich wirklich für den Einstieg ins Dropshipping?", "Wir empfehlen immer, mit einem Budget von {SYM}1K bis {SYM}2K zu starten — so hast du genug Spielraum, um Produkte zu testen, ohne unter Druck zu stehen."],
    ["Wie hoch ist die durchschnittliche Gewinnmarge pro Sale?", "Der durchschnittliche Gewinn pro Sale liegt zwischen 20% und 30%. Deine Marge hängt vom Produkt und davon ab, wie du deine Marke aufbaust."],
    ["Wie laufen Lagerung und Fulfillment meiner Produkte?", "Wir arbeiten mit spezialisierten Fulfillment-Partnern zusammen. Dadurch hast du schnelle Lieferzeiten und jede Bestellung geht direkt vom Lieferanten an deinen Kunden — ganz ohne eigenes Lager."],
    ["Und die Konkurrenz im Markt?", "In jedem Markt gibt es natürlich Konkurrenz. Aber die meisten Dropshipper machen es noch auf die altmodische Art — keine starke Konkurrenz. Genau das ist deine Chance, es besser zu machen."],
    ["Mit welcher Software baut ihr die Websites?", "Wir bauen unsere Stores auf Shopify, mit unserer eigenen Template — ausschließlich für Members verfügbar."],
    ["Warum brauche ich eigentlich keinen Coach?", "Ein Coach verlangt schnell {A} bis {SYM}15K für ein einziges Programm — und danach musst du trotzdem noch in dein Business investieren. Für einen Coach bist du das Produkt: Oft haben sie so viele Kunden, dass kaum Zeit für dich bleibt. Wir glauben, dass dieses Geld besser in dein eigenes Business fließt als in den Lifestyle von jemandem auf Bali — und bei uns ist das einzige Interesse, dass du erfolgreich wirst."],
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
  vsOthersItems: ["Au moins {A} d'avance", "Upsells inutiles vers des choses dont tu n'as pas besoin — juste pour toucher une commission", "Tu es leur produit : c'est sur toi qu'ils gagnent le plus", "Quelques heures d'aide personnelle par mois, si tu as de la chance", "Ne se présentent pas et n'assument aucune responsabilité", "N'ont rien à gagner de ta réussite — donc elle ne les intéresse pas", "Donnent des informations de base disponibles gratuitement sur YouTube", "Aucune aide sur les vrais problèmes", "Ils utilisent des vendeurs qui ne connaissent rien à l’e-commerce et te poussent à payer, juste pour toucher vite leur commission"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["{P} une fois — accès à vie", "Communauté active 24/7 — jamais seul", "Réseau de partenaires A–Z pour chaque étape de ton business", "Solutions concrètes pour chaque défi e-commerce", "Onboarding personnel gratuit", "Accès à vie à la formation vidéo e-commerce complète", "Expert calls mensuels avec des pros du secteur", "Meetups exclusifs chaque trimestre", "Stratégies de sortie : vends ta boutique directement à nous", "Aucun upsell inutile ni upgrade coûteux", "Aucun frais caché ni abonnement", "600+ membres satisfaits et ça grandit", "Ton succès est notre succès", "On est là pour toi — dès le premier jour et sur la durée !"],
  servicesEyebrow: "Le guichet unique",
  servicesTitle: "Quel que soit ton problème, on a quelqu'un pour toi",
  services: [
    ["Payment holds", "Stripe, Shopify Payments ou PayPal bloqué ? On le règle."],
    ["Prestataire de paiement privé", "On travaille avec 2 prestataires — change quand tu veux et sois payé à coup sûr."],
    ["Comptes pub agence", "Compte pub banni ? Accès immédiat via notre réseau d'agences."],
    ["Comptabilité & TVA", "Des comptables qui comprennent vraiment l'e-commerce."],
    ["Création de société", "HK, UK, USA ou Dubaï — bien fait."],
    ["Site & boutique", "Boutiques Shopify qui convertissent."],
    ["Fournisseurs & logistique", "Fournisseurs fiables, private label, livraison rapide."],
    ["Stratégie de sortie", "On t'aide à vendre ta boutique — ou on la rachète nous-mêmes."],
    ["Google, Meta & Pinterest", "Expertise Google Ads, Meta et Pinterest — plus l'email marketing pour générer des achats répétés."],
    ["Expert call", "Un live chaque mois avec un expert de haut niveau."],
    ["Meetup trimestriel", "Tout le groupe se retrouve chaque trimestre."],
    ["Formation vidéo à vie", "Accès à vie et illimité à la formation vidéo complète — apprends à ton rythme, sur tous tes écrans, pour toujours."],
  ],
  resultsEyebrow: "Résultats",
  resultsTitle: "De débutant à six chiffres par mois",
  uploadHint: "Clique sur une carte pour ajouter une photo.",
  upload: "Ajouter une photo",
  testimonials: [
    ["Daan V.", "Branded dropshipping", "Payment hold de {SYM}38K redébloqué en un mois et demi grâce à leur partenaire. Aucun coach n'aurait pu faire ça."],
    ["Sarah M.", "Marque propre", "De {SYM}0 à {SYM}27K de CA en 90 jours."],
    ["Youssef K.", "Marque", "On fait maintenant {SYM}100K+ par mois."],
    ["Lisa B.", "Débutante", "J'avais payé {F} à un coach absent. Ici, plus d'aide en une semaine."],
  ],
  aboutEyebrow: "À propos",
  aboutTitle: "Voici Kiki Rozey",
  founder: "Kiki Rozey — Fondateur",
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
  value: "Valeur : des dizaines de milliers de {SYM} d'économies, d'expertise, de contacts et d'aide directe.",
  includes: [["Accès communauté 24/7", "valeur {V1}"], ["Réseau de partenaires A–Z", "valeur {V2}"], ["Expert calls mensuels", "valeur {V3}"], ["Meetup chaque trimestre", "valeur {V4}"], ["Aide payment holds, comptes pub, TVA…", "valeur {V5}"], ["Accès à vie à la formation vidéo", "valeur {V6}"], ["Onboarding personnel", "valeur {V7}"], ["Sans abonnement, sans frais cachés", ""]],
  includesTotal: "Valeur totale = {VT}+",
  guarantee: "Paiement sécurisé · Accès immédiat",
  faqTitle: "Questions fréquentes",
  faq: [
    ["Quel budget de départ faut-il vraiment pour se lancer en dropshipping ?", "On recommande toujours de démarrer avec un budget de {SYM}1K à {SYM}2K — assez de marge pour tester des produits sans pression."],
    ["Quelle est la marge bénéficiaire moyenne par vente ?", "La marge moyenne par vente se situe entre 20% et 30%. Ta marge dépend du produit et de la construction de ta marque."],
    ["Et le stock et le fulfilment de mes produits ?", "On travaille avec des partenaires fulfilment spécialisés. Résultat : livraison rapide et chaque commande va directement du fournisseur à ton client — sans stock à gérer toi-même."],
    ["Et la concurrence sur le marché ?", "Chaque marché a sa concurrence, bien sûr. Mais en dropshipping, la plupart le font encore à l'ancienne — pas une vraie concurrence. C'est justement ta chance de faire mieux."],
    ["Avec quel logiciel construisez-vous les sites ?", "Nos boutiques sont construites sur Shopify, avec notre propre template — réservé aux members."],
    ["Pourquoi n'ai-je pas besoin d'un coach ?", "Un coach facture vite {A} jusqu'à {SYM}15K pour un seul programme — et ensuite tu dois quand même investir dans ton business. Pour un coach, tu es le produit : ils ont souvent tellement de clients qu'il reste à peine du temps pour toi. Nous, on croit que cet argent est mieux investi dans ton propre business que dans le lifestyle de quelqu'un à Bali — et chez nous, le seul intérêt, c'est que tu réussisses."],
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
  vsOthersItems: ["Mínimo {A} por adelantado", "Upsells innecesarios a cosas que no necesitas — solo para que ellos ganen una comisión", "Tú eres su producto: ellos ganan más contigo", "Unas pocas horas de ayuda personal al mes, si tienes suerte", "No aparecen ni asumen ninguna responsabilidad", "No se benefician de tu éxito — por eso no les importa", "Dan información básica que puedes encontrar gratis en YouTube", "Sin ayuda real", "Usan vendedores que no saben nada de e-commerce y te presionan para pagar, solo para ganar rápido su comisión"],
  vsUs: "90 Days Ecom Group",
  vsUsItems: ["{P} una vez — acceso de por vida", "Comunidad activa 24/7 — nunca solo", "Red de socios A–Z completa para cada etapa de tu negocio", "Soluciones prácticas para cada reto del e-commerce", "Onboarding personal gratis", "Acceso de por vida al curso de vídeo completo de e-commerce", "Expert calls mensuales con profesionales del sector", "Meetups exclusivos cada trimestre", "Estrategias de salida: vende tu tienda directamente a nosotros", "Sin upsells innecesarios ni mejoras caras", "Sin costes ocultos ni suscripciones", "600+ miembros satisfechos y creciendo", "Tu éxito es nuestro éxito", "Estamos contigo — desde el primer día y a largo plazo!"],
  servicesEyebrow: "El one-stop-shop",
  servicesTitle: "Sea cual sea tu problema, tenemos a alguien",
  services: [
    ["Payment holds", "¿Stripe, Shopify Payments o PayPal bloqueado? Lo resolvemos."],
    ["Procesador de pagos privado", "Trabajamos junto con 2 procesadores — cambia cuando quieras y cobra siempre."],
    ["Cuentas de agencia", "¿Cuenta publicitaria baneada? Acceso inmediato vía agencia."],
    ["Contabilidad e IVA", "Contables que entienden el e-commerce."],
    ["Creación de empresa", "HK, UK, EE. UU. o Dubái — bien hecho."],
    ["Web y tienda", "Tiendas Shopify que convierten."],
    ["Proveedores y logística", "Proveedores fiables, private label y envío rápido."],
    ["Estrategia de salida", "Te ayudamos a vender tu tienda — o la compramos nosotros."],
    ["Google, Meta y Pinterest", "Expertos en Google Ads, Meta y Pinterest — además de email marketing para generar recompras."],
    ["Expert call", "Cada mes, un directo con un experto top."],
    ["Meetup trimestral", "Todo el grupo se reúne cada trimestre."],
    ["Curso de vídeo de por vida", "Acceso de por vida e ilimitado al curso de vídeo completo — aprende a tu ritmo, en cualquier dispositivo, para siempre."],
  ],
  resultsEyebrow: "Resultados",
  resultsTitle: "De principiante a seis cifras al mes",
  uploadHint: "Haz clic en una tarjeta para subir una foto.",
  upload: "Subir foto",
  testimonials: [
    ["Daan V.", "Branded dropshipping", "Payment hold de {SYM}38K liberado de nuevo en mes y medio gracias a su partner. Ningún coach habría podido lograrlo."],
    ["Sarah M.", "Marca propia", "De {SYM}0 a {SYM}27K en mis primeros 90 días."],
    ["Youssef K.", "Tienda de marca", "Ahora facturamos {SYM}100K+ al mes."],
    ["Lisa B.", "Principiante", "Pagué {F} a un coach que nunca apareció. Aquí tuve más ayuda en una semana."],
  ],
  aboutEyebrow: "Nosotros",
  aboutTitle: "Conoce a Kiki Rozey",
  founder: "Kiki Rozey — Fundador",
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
  value: "Valor: decenas de miles de {SYM} en ahorros, experiencia, contactos y ayuda directa.",
  includes: [["Acceso a la comunidad 24/7", "valor {V1}"], ["Red de socios A–Z completa", "valor {V2}"], ["Expert calls mensuales", "valor {V3}"], ["Meetup cada trimestre", "valor {V4}"], ["Ayuda con payment holds, cuentas de anuncios, IVA…", "valor {V5}"], ["Acceso de por vida al curso de vídeo", "valor {V6}"], ["Onboarding personal", "valor {V7}"], ["Sin suscripción, sin costes ocultos", ""]],
  includesTotal: "Valor total = {VT}+",
  guarantee: "Pago seguro · Acceso inmediato",
  faqTitle: "Preguntas frecuentes",
  faq: [
    ["¿Cuánto presupuesto inicial necesito de verdad para empezar en dropshipping?", "Siempre recomendamos empezar con un presupuesto de {SYM}1K a {SYM}2K — así tienes margen para probar productos sin presión."],
    ["¿Cuál es el margen de beneficio medio por venta?", "El beneficio medio por venta ronda entre el 20% y el 30%. Tu margen depende del producto y de cómo construyas tu marca."],
    ["¿Y el almacenaje y fulfilment de mis productos?", "Trabajamos con partners de fulfilment especializados. Resultado: entregas rápidas y cada pedido va directo del proveedor a tu cliente — sin stock propio."],
    ["¿Y la competencia en el mercado?", "Todo mercado tiene competencia, claro. Pero en el dropshipping la mayoría aún lo hace a la manera antigua — no es competencia fuerte. Justo ahí está tu oportunidad de hacerlo mejor."],
    ["¿Con qué software hacéis las webs?", "Construimos nuestras tiendas en Shopify, con nuestra propia plantilla — disponible solo para members."],
    ["¿Por qué no necesito un coach?", "Un coach cobra rápido {A} hasta {SYM}15K por un solo programa — y después todavía tienes que invertir en tu negocio. Para un coach, tú eres el producto: suelen tener tantos clientes que apenas queda tiempo para ti. Creemos que ese dinero está mejor invertido en tu propio negocio que en el estilo de vida de alguien en Bali — y con nosotros, el único interés es que tú tengas éxito."],
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
    .replaceAll("{A}", fmtMoney("7000", lang, cur))
    .replaceAll("{F}", fmtMoney("6000", lang, cur))
    .replaceAll("{T}", fmtMoney("10000", lang, cur))
    .replaceAll("{V}", fmtMoney("15000", lang, cur))
    .replaceAll("{V1}", fmtMoney("2997", lang, cur))
    .replaceAll("{V2}", fmtMoney("4497", lang, cur))
    .replaceAll("{V3}", fmtMoney("2497", lang, cur))
    .replaceAll("{V4}", fmtMoney("1497", lang, cur))
    .replaceAll("{V5}", fmtMoney("1197", lang, cur))
    .replaceAll("{V6}", fmtMoney("1997", lang, cur))
    .replaceAll("{V7}", fmtMoney("497", lang, cur))
    .replaceAll("{VT}", fmtMoney("15179", lang, cur))
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

// Euro countries (eurozone + DACH/LI) pay in EUR; GB in GBP; every other
// country in the world gets USD.
const EUR_COUNTRIES = [
  "NL", "BE", "LU", "DE", "AT", "CH", "LI", "FR", "MC", "ES", "AD", "PT", "IT", "SM", "VA", "MT",
  "IE", "FI", "EE", "LV", "LT", "SK", "SI", "HR", "GR", "CY",
];

export function currencyForCountry(cc: string): Currency {
  const c = cc.toUpperCase();
  if (c === "GB") return "GBP";
  if (EUR_COUNTRIES.includes(c)) return "EUR";
  return "USD";
}

export function detectCurrency(): Currency {
  const region = (typeof navigator !== "undefined" ? navigator.language : "").split("-")[1]?.toUpperCase();
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
  if (region === "GB" || tz === "Europe/London") return "GBP";
  if (tz.startsWith("Europe/")) return "EUR";
  return "USD";
}

// Countries with their own language version; every other country gets US English.
export function langForCountry(cc: string): Lang {
  const map: Record<string, Lang> = {
    NL: "nl", BE: "nl",
    DE: "de", AT: "de", CH: "de", LI: "de",
    FR: "fr",
    ES: "es", MX: "es", AR: "es", CO: "es", CL: "es",
    GB: "en", US: "en-us", CA: "en-ca",
  };
  return map[cc.toUpperCase()] ?? "en-us";
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
