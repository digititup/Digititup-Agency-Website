/**
 * Digititup Agency Pvt. Ltd. - 3D Google Earth Global Unicorns Engine
 * Precise City & Country Intelligence System
 * Dual Modes: "By Unicorns (Companies)" & "By Country (1,286 WPR Ranking)"
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Complete 55-Country Ranking Dataset (World Population Review)
        1,286 Total Unicorns | $4.6T Total Valuation
     ========================================================================== */
  const COUNTRIES_DATA = [
  {
    "rank": 1,
    "country": "United States",
    "code": "US",
    "flag": "\ud83c\uddfa\ud83c\uddf8",
    "count": 712,
    "valuation": "$2.9T",
    "valNumber": 2900,
    "lat": 37.0902,
    "lng": -95.7129,
    "capital_cities": "San Francisco, New York, Los Angeles, Austin, Seattle",
    "top": "OpenAI, SpaceX, Stripe, Databricks, Anthropic, Scale AI"
  },
  {
    "rank": 2,
    "country": "China",
    "code": "CN",
    "flag": "\ud83c\udde8\ud83c\uddf3",
    "count": 157,
    "valuation": "$687.1B",
    "valNumber": 687.1,
    "lat": 35.8617,
    "lng": 104.1954,
    "capital_cities": "Beijing, Shenzhen, Shanghai, Hangzhou",
    "top": "ByteDance, DJI, SHEIN, Xiaohongshu"
  },
  {
    "rank": 3,
    "country": "India",
    "code": "IN",
    "flag": "\ud83c\uddee\ud83c\uddf3",
    "count": 69,
    "valuation": "$164B",
    "valNumber": 164,
    "lat": 20.5937,
    "lng": 78.9629,
    "capital_cities": "Bengaluru, Mumbai, Delhi NCR, Hyderabad",
    "top": "PhonePe, Flipkart, Swiggy, Razorpay, Postman, Zepto, OYO"
  },
  {
    "rank": 4,
    "country": "United Kingdom",
    "code": "GB",
    "flag": "\ud83c\uddec\ud83c\udde7",
    "count": 55,
    "valuation": "$190B",
    "valNumber": 190,
    "lat": 55.3781,
    "lng": -3.436,
    "capital_cities": "London, Cambridge, Oxford, Manchester",
    "top": "Revolut, Checkout.com, Wayve, Wise, Synthesia, Monzo"
  },
  {
    "rank": 5,
    "country": "Germany",
    "code": "DE",
    "flag": "\ud83c\udde9\ud83c\uddea",
    "count": 32,
    "valuation": "$86B",
    "valNumber": 86,
    "lat": 51.1657,
    "lng": 10.4515,
    "capital_cities": "Munich, Berlin, Cologne, Hamburg",
    "top": "Celonis, DeepL, Delivery Hero, N26, Personio, Flix"
  },
  {
    "rank": 6,
    "country": "France",
    "code": "FR",
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "count": 29,
    "valuation": "$72.9B",
    "valNumber": 72.9,
    "lat": 46.2276,
    "lng": 2.2137,
    "capital_cities": "Paris, Lyon, Marseille",
    "top": "Mistral AI, Back Market, Sorare, Qonto, Doctolib, ManoMano"
  },
  {
    "rank": 7,
    "country": "Israel",
    "code": "IL",
    "flag": "\ud83c\uddee\ud83c\uddf1",
    "count": 25,
    "valuation": "$47.4B",
    "valNumber": 47.4,
    "lat": 31.0461,
    "lng": 34.8516,
    "capital_cities": "Tel Aviv, Herzliya, Haifa",
    "top": "Rapyd, Wiz, Gong, Monday.com, ironSource, DriveNets"
  },
  {
    "rank": 8,
    "country": "Canada",
    "code": "CA",
    "flag": "\ud83c\udde8\ud83c\udde6",
    "count": 22,
    "valuation": "$57.5B",
    "valNumber": 57.5,
    "lat": 56.1304,
    "lng": -106.3468,
    "capital_cities": "Toronto, Vancouver, Montreal",
    "top": "1Password, Cohere, Dapper Labs, Clio, Clearco, Ada"
  },
  {
    "rank": 9,
    "country": "Brazil",
    "code": "BR",
    "flag": "\ud83c\udde7\ud83c\uddf7",
    "count": 18,
    "valuation": "$37.1B",
    "valNumber": 37.1,
    "lat": -14.235,
    "lng": -51.9253,
    "capital_cities": "S\u00e3o Paulo, Rio de Janeiro, Belo Horizonte",
    "top": "Nubank, QuintoAndar, C6 Bank, Wildlife Studios, Loft, CloudWalk"
  },
  {
    "rank": 10,
    "country": "South Korea",
    "code": "KR",
    "flag": "\ud83c\uddf0\ud83c\uddf7",
    "count": 14,
    "valuation": "$33.4B",
    "valNumber": 33.4,
    "lat": 35.9078,
    "lng": 127.7669,
    "capital_cities": "Seoul, Pangyo Techno Valley",
    "top": "Toss (Viva Republica), Coupang, Krafton, Yanolja, Musinsa"
  },
  {
    "rank": 11,
    "country": "Singapore",
    "code": "SG",
    "flag": "\ud83c\uddf8\ud83c\uddec",
    "count": 14,
    "valuation": "$87.8B",
    "valNumber": 87.8,
    "lat": 1.3521,
    "lng": 103.8198,
    "capital_cities": "Singapore (One-North & CBD)",
    "top": "SHEIN, Grab, Carousell, PatSnap, Ninja Van, Bolttech"
  },
  {
    "rank": 12,
    "country": "Mexico",
    "code": "MX",
    "flag": "\ud83c\uddf2\ud83c\uddfd",
    "count": 9,
    "valuation": "$13.7B",
    "valNumber": 13.7,
    "lat": 23.6345,
    "lng": -102.5528,
    "capital_cities": "Mexico City, Guadalajara, Monterrey",
    "top": "Kavak, Bitso, Clip, Clara, Nowports, Merama"
  },
  {
    "rank": 13,
    "country": "Japan",
    "code": "JP",
    "flag": "\ud83c\uddef\ud83c\uddf5",
    "count": 9,
    "valuation": "$11.8B",
    "valNumber": 11.8,
    "lat": 36.2048,
    "lng": 138.2529,
    "capital_cities": "Tokyo, Kyoto, Osaka",
    "top": "Preferred Networks, SmartHR, Spiber, Playco, Paidy"
  },
  {
    "rank": 14,
    "country": "Australia",
    "code": "AU",
    "flag": "\ud83c\udde6\ud83c\uddfa",
    "count": 9,
    "valuation": "$48.8B",
    "valNumber": 48.8,
    "lat": -25.2744,
    "lng": 133.7751,
    "capital_cities": "Sydney, Melbourne, Brisbane",
    "top": "Canva, Airwallex, SafetyCulture, Immutable, Employment Hero"
  },
  {
    "rank": 15,
    "country": "Netherlands",
    "code": "NL",
    "flag": "\ud83c\uddf3\ud83c\uddf1",
    "count": 9,
    "valuation": "$24.5B",
    "valNumber": 24.5,
    "lat": 52.1326,
    "lng": 5.2913,
    "capital_cities": "Amsterdam, Rotterdam, Utrecht",
    "top": "Mollie, MessageBird (Bird), Bunq, Mambu, Crisp"
  },
  {
    "rank": 16,
    "country": "Ireland",
    "code": "IE",
    "flag": "\ud83c\uddee\ud83c\uddea",
    "count": 9,
    "valuation": "$13.7B",
    "valNumber": 13.7,
    "lat": 53.1424,
    "lng": -7.6921,
    "capital_cities": "Dublin (Silicon Docks), Cork",
    "top": "Stripe (dual-HQ), Wayflyer, Flipdish, Workhuman, Fenergo"
  },
  {
    "rank": 17,
    "country": "Indonesia",
    "code": "ID",
    "flag": "\ud83c\uddee\ud83c\udde9",
    "count": 7,
    "valuation": "$10.4B",
    "valNumber": 10.4,
    "lat": -0.7893,
    "lng": 113.9213,
    "capital_cities": "Jakarta, Bandung, Surabaya",
    "top": "GoTo, J&T Express, Traveloka, Kopi Kenangan, Ajaib, Xendit"
  },
  {
    "rank": 18,
    "country": "Hong Kong",
    "code": "HK",
    "flag": "\ud83c\udded\ud83c\uddf0",
    "count": 7,
    "valuation": "$9.7B",
    "valNumber": 9.7,
    "lat": 22.3193,
    "lng": 114.1694,
    "capital_cities": "Hong Kong (Cyberport & Science Park)",
    "top": "Animoca Brands, Lalamove, Klook, Amber Group"
  },
  {
    "rank": 19,
    "country": "Sweden",
    "code": "SE",
    "flag": "\ud83c\uddf8\ud83c\uddea",
    "count": 6,
    "valuation": "$22.1B",
    "valNumber": 22.1,
    "lat": 60.1282,
    "lng": 18.6435,
    "capital_cities": "Stockholm, Gothenburg, Malm\u00f6",
    "top": "Klarna, Northvolt, Kry, Einride, Voi Technology"
  },
  {
    "rank": 20,
    "country": "Switzerland",
    "code": "CH",
    "flag": "\ud83c\udde8\ud83c\udded",
    "count": 6,
    "valuation": "$9.8B",
    "valNumber": 9.8,
    "lat": 46.8182,
    "lng": 8.2275,
    "capital_cities": "Zurich, Lausanne, Geneva",
    "top": "MindMaze, Scandit, SonarSource, Nexthink, Sportradar"
  },
  {
    "rank": 21,
    "country": "Spain",
    "code": "ES",
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "count": 5,
    "valuation": "$7.7B",
    "valNumber": 7.7,
    "lat": 40.4637,
    "lng": -3.7492,
    "capital_cities": "Madrid, Barcelona, Valencia",
    "top": "Cabify, TravelPerk, Factorial, Jobandtalent, Recover"
  },
  {
    "rank": 22,
    "country": "United Arab Emirates",
    "code": "AE",
    "flag": "\ud83c\udde6\ud83c\uddea",
    "count": 5,
    "valuation": "$9.3B",
    "valNumber": 9.3,
    "lat": 23.4241,
    "lng": 53.8478,
    "capital_cities": "Dubai (DIFC), Abu Dhabi (ADGM)",
    "top": "Careem, Kitopi, Vista Global, Tabby, Yango"
  },
  {
    "rank": 23,
    "country": "Norway",
    "code": "NO",
    "flag": "\ud83c\uddf3\ud83c\uddf4",
    "count": 5,
    "valuation": "$5.5B",
    "valNumber": 5.5,
    "lat": 60.472,
    "lng": 8.4689,
    "capital_cities": "Oslo, Bergen, Trondheim",
    "top": "Oda, Cognite, Gelato, Dune Analytics, Kahoot!"
  },
  {
    "rank": 24,
    "country": "Colombia",
    "code": "CO",
    "flag": "\ud83c\udde8\ud83c\uddf4",
    "count": 4,
    "valuation": "$8.4B",
    "valNumber": 8.4,
    "lat": 4.5709,
    "lng": -74.2973,
    "capital_cities": "Bogot\u00e1, Medell\u00edn, Cali",
    "top": "Rappi, Habi, Platzi, La Haus"
  },
  {
    "rank": 25,
    "country": "Finland",
    "code": "FI",
    "flag": "\ud83c\uddeb\ud83c\uddee",
    "count": 4,
    "valuation": "$14.9B",
    "valNumber": 14.9,
    "lat": 61.9241,
    "lng": 25.7482,
    "capital_cities": "Helsinki, Espoo, Tampere",
    "top": "Wolt, Supercell, Oura, Aiven"
  },
  {
    "rank": 26,
    "country": "Italy",
    "code": "IT",
    "flag": "\ud83c\uddee\ud83c\uddf9",
    "count": 3,
    "valuation": "$4.5B",
    "valNumber": 4.5,
    "lat": 41.8719,
    "lng": 12.5674,
    "capital_cities": "Milan, Rome, Turin",
    "top": "Satispay, Scalapay, Bending Spoons"
  },
  {
    "rank": 27,
    "country": "Belgium",
    "code": "BE",
    "flag": "\ud83c\udde7\ud83c\uddea",
    "count": 3,
    "valuation": "$11.9B",
    "valNumber": 11.9,
    "lat": 50.5039,
    "lng": 4.4699,
    "capital_cities": "Brussels, Ghent, Antwerp",
    "top": "Collibra, Deliverect, team.blue"
  },
  {
    "rank": 28,
    "country": "Nigeria",
    "code": "NG",
    "flag": "\ud83c\uddf3\ud83c\uddec",
    "count": 2,
    "valuation": "$3B",
    "valNumber": 3,
    "lat": 9.082,
    "lng": 8.6753,
    "capital_cities": "Lagos (Yabacon Valley), Abuja",
    "top": "Flutterwave, OPay, Interswitch, Andela"
  },
  {
    "rank": 29,
    "country": "Vietnam",
    "code": "VN",
    "flag": "\ud83c\uddfb\ud83c\uddf3",
    "count": 2,
    "valuation": "$5.3B",
    "valNumber": 5.3,
    "lat": 14.0583,
    "lng": 108.2772,
    "capital_cities": "Ho Chi Minh City, Hanoi",
    "top": "VNG, VNLife (VNPay), MoMo"
  },
  {
    "rank": 30,
    "country": "Thailand",
    "code": "TH",
    "flag": "\ud83c\uddf9\ud83c\udded",
    "count": 2,
    "valuation": "$2.5B",
    "valNumber": 2.5,
    "lat": 15.87,
    "lng": 100.9925,
    "capital_cities": "Bangkok, Chiang Mai",
    "top": "Flash Express, Ascend Money, Line Man Wongnai"
  },
  {
    "rank": 31,
    "country": "Chile",
    "code": "CL",
    "flag": "\ud83c\udde8\ud83c\uddf1",
    "count": 2,
    "valuation": "$2.5B",
    "valNumber": 2.5,
    "lat": -35.6751,
    "lng": -71.543,
    "capital_cities": "Santiago (Chilecon Valley)",
    "top": "NotCo, Betterfly"
  },
  {
    "rank": 32,
    "country": "Greece",
    "code": "GR",
    "flag": "\ud83c\uddec\ud83c\uddf7",
    "count": 2,
    "valuation": "$3.3B",
    "valNumber": 3.3,
    "lat": 39.0742,
    "lng": 21.8243,
    "capital_cities": "Athens, Thessaloniki",
    "top": "Viva Wallet, Blueground"
  },
  {
    "rank": 33,
    "country": "Austria",
    "code": "AT",
    "flag": "\ud83c\udde6\ud83c\uddf9",
    "count": 2,
    "valuation": "$7.6B",
    "valNumber": 7.6,
    "lat": 47.5162,
    "lng": 14.5501,
    "capital_cities": "Vienna, Graz, Linz",
    "top": "Bitpanda, GoStudent"
  },
  {
    "rank": 34,
    "country": "Denmark",
    "code": "DK",
    "flag": "\ud83c\udde9\ud83c\uddf0",
    "count": 2,
    "valuation": "$6.7B",
    "valNumber": 6.7,
    "lat": 56.2639,
    "lng": 9.5018,
    "capital_cities": "Copenhagen, Aarhus",
    "top": "Pleo, Lunar, Sitecore"
  },
  {
    "rank": 35,
    "country": "Croatia",
    "code": "HR",
    "flag": "\ud83c\udded\ud83c\uddf7",
    "count": 2,
    "valuation": "$3B",
    "valNumber": 3,
    "lat": 45.1,
    "lng": 15.2,
    "capital_cities": "Zagreb, Split",
    "top": "Rimac Automobili, Infobip"
  },
  {
    "rank": 36,
    "country": "Lithuania",
    "code": "LT",
    "flag": "\ud83c\uddf1\ud83c\uddf9",
    "count": 2,
    "valuation": "$8.4B",
    "valNumber": 8.4,
    "lat": 55.1694,
    "lng": 23.8813,
    "capital_cities": "Vilnius, Kaunas",
    "top": "Vinted, Nord Security"
  },
  {
    "rank": 37,
    "country": "Estonia",
    "code": "EE",
    "flag": "\ud83c\uddea\ud83c\uddea",
    "count": 2,
    "valuation": "$9.9B",
    "valNumber": 9.9,
    "lat": 58.5953,
    "lng": 25.0136,
    "capital_cities": "Tallinn, Tartu",
    "top": "Bolt, Wise, Veriff, Pipedrive"
  },
  {
    "rank": 38,
    "country": "Seychelles",
    "code": "SC",
    "flag": "\ud83c\uddf8\ud83c\udde8",
    "count": 2,
    "valuation": "$11.8B",
    "valNumber": 11.8,
    "lat": -4.6796,
    "lng": 55.492,
    "capital_cities": "Victoria, Mah\u00e9",
    "top": "KuCoin, OKX Exchange"
  },
  {
    "rank": 39,
    "country": "Egypt",
    "code": "EG",
    "flag": "\ud83c\uddea\ud83c\uddec",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": 26.8206,
    "lng": 30.8025,
    "capital_cities": "Cairo, Alexandria, Giza",
    "top": "MNT-Halan, Fawry"
  },
  {
    "rank": 40,
    "country": "Philippines",
    "code": "PH",
    "flag": "\ud83c\uddf5\ud83c\udded",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": 12.8797,
    "lng": 121.774,
    "capital_cities": "Manila (BGC & Makati)",
    "top": "Mynt (GCash), Voyager Innovations"
  },
  {
    "rank": 41,
    "country": "Turkey",
    "code": "TR",
    "flag": "\ud83c\uddf9\ud83c\uddf7",
    "count": 1,
    "valuation": "$2B",
    "valNumber": 2,
    "lat": 38.9637,
    "lng": 35.2433,
    "capital_cities": "Istanbul, Ankara, Izmir",
    "top": "Trendyol, Getir, Peak Games, Dream Games"
  },
  {
    "rank": 42,
    "country": "South Africa",
    "code": "ZA",
    "flag": "\ud83c\uddff\ud83c\udde6",
    "count": 1,
    "valuation": "$1.6B",
    "valNumber": 1.6,
    "lat": -30.5595,
    "lng": 22.9375,
    "capital_cities": "Cape Town, Johannesburg",
    "top": "Promasidor, Go1"
  },
  {
    "rank": 43,
    "country": "Argentina",
    "code": "AR",
    "flag": "\ud83c\udde6\ud83c\uddf7",
    "count": 1,
    "valuation": "$2.8B",
    "valNumber": 2.8,
    "lat": -38.4161,
    "lng": -63.6167,
    "capital_cities": "Buenos Aires, C\u00f3rdoba",
    "top": "Ual\u00e1, Tiendanube, Auth0"
  },
  {
    "rank": 44,
    "country": "Uzbekistan",
    "code": "UZ",
    "flag": "UZ",
    "count": 1,
    "valuation": "$1.2B",
    "valNumber": 1.2,
    "lat": 41.3775,
    "lng": 64.5853,
    "capital_cities": "Tashkent, Samarkand",
    "top": "Uzum Superapp & Digital Banking"
  },
  {
    "rank": 45,
    "country": "Malaysia",
    "code": "MY",
    "flag": "\ud83c\uddf2\ud83c\uddfe",
    "count": 1,
    "valuation": "$1.7B",
    "valNumber": 1.7,
    "lat": 4.2105,
    "lng": 101.9758,
    "capital_cities": "Kuala Lumpur, Cyberjaya",
    "top": "Carsome Automobile E-Commerce"
  },
  {
    "rank": 46,
    "country": "Saudi Arabia",
    "code": "SA",
    "flag": "\ud83c\uddf8\ud83c\udde6",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": 23.8859,
    "lng": 45.0792,
    "capital_cities": "Riyadh, Jeddah",
    "top": "Tamara, Jahez, Floward"
  },
  {
    "rank": 47,
    "country": "Senegal",
    "code": "SN",
    "flag": "\ud83c\uddf8\ud83c\uddf3",
    "count": 1,
    "valuation": "$1.7B",
    "valNumber": 1.7,
    "lat": 14.4974,
    "lng": -14.4524,
    "capital_cities": "Dakar",
    "top": "Wave Mobile Money"
  },
  {
    "rank": 48,
    "country": "Ecuador",
    "code": "EC",
    "flag": "\ud83c\uddea\ud83c\udde8",
    "count": 1,
    "valuation": "$1.5B",
    "valNumber": 1.5,
    "lat": -1.8312,
    "lng": -78.1834,
    "capital_cities": "Quito, Guayaquil",
    "top": "Kushki Payment Infrastructure"
  },
  {
    "rank": 49,
    "country": "Czechia",
    "code": "CZ",
    "flag": "\ud83c\udde8\ud83c\uddff",
    "count": 1,
    "valuation": "$1.2B",
    "valNumber": 1.2,
    "lat": 49.8175,
    "lng": 15.473,
    "capital_cities": "Prague, Brno",
    "top": "Rohlik Group Online Grocery"
  },
  {
    "rank": 50,
    "country": "Portugal",
    "code": "PT",
    "flag": "\ud83c\uddf5\ud83c\uddf9",
    "count": 1,
    "valuation": "$1.3B",
    "valNumber": 1.3,
    "lat": 39.3999,
    "lng": -8.2245,
    "capital_cities": "Lisbon, Porto",
    "top": "OutSystems, Talkdesk, Feedzai"
  },
  {
    "rank": 51,
    "country": "New Zealand",
    "code": "NZ",
    "flag": "\ud83c\uddf3\ud83c\uddff",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": -40.9006,
    "lng": 174.886,
    "capital_cities": "Auckland, Wellington",
    "top": "Rocket Lab, Allbirds"
  },
  {
    "rank": 52,
    "country": "Luxembourg",
    "code": "LU",
    "flag": "\ud83c\uddf1\ud83c\uddfa",
    "count": 1,
    "valuation": "$2B",
    "valNumber": 2,
    "lat": 49.8153,
    "lng": 6.1296,
    "capital_cities": "Luxembourg City",
    "top": "Talkwalker Consumer Intelligence"
  },
  {
    "rank": 53,
    "country": "Malta",
    "code": "MT",
    "flag": "\ud83c\uddf2\ud83c\uddf9",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": 35.9375,
    "lng": 14.3754,
    "capital_cities": "Valletta, Sliema",
    "top": "VistaJet Luxury Aviation"
  },
  {
    "rank": 54,
    "country": "Cayman Islands",
    "code": "KY",
    "flag": "\ud83c\uddf0\ud83c\uddfe",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": 19.3133,
    "lng": -81.2546,
    "capital_cities": "George Town",
    "top": "Chainalysis Blockchain Forensics"
  },
  {
    "rank": 55,
    "country": "Liechtenstein",
    "code": "LI",
    "flag": "\ud83c\uddf1\ud83c\uddee",
    "count": 1,
    "valuation": "$1B",
    "valNumber": 1,
    "lat": 47.166,
    "lng": 9.5554,
    "capital_cities": "Vaduz",
    "top": "Bittrex Global Digital Assets"
  }
];
  /* ==========================================================================
     1B. Complete CB Insights Unicorns Dataset (1,404 Verified Companies)
     ========================================================================== */
  let UNICORNS_DATA = (typeof window !== 'undefined' && Array.isArray(window.CB_INSIGHTS_UNICORNS) && window.CB_INSIGHTS_UNICORNS.length > 0)
    ? window.CB_INSIGHTS_UNICORNS
    : [];

  /* ==========================================================================
     2. Category Color Mapping & Investment Corridors
     ========================================================================== */
  const CATEGORY_COLORS = {
    'Enterprise Tech': '#4ade80',            // Vibrant emerald
    'Financial Services': '#fbbf24',         // Amber gold
    'Media & Entertainment': '#f43f5e',       // Rose crimson
    'Healthcare & Life Sciences': '#a855f7', // Violet purple
    'Consumer & Retail': '#38bdf8',          // Sky cyan
    'Industrials': '#f97316',                // Flame orange
    'Insurance': '#06b6d4'                   // Teal
  };

  const INVESTMENT_ARCS = [
    { startLat: 37.7749, startLng: -122.4194, endLat: 51.5074, endLng: -0.1278, color: 0x4ade80 }, // SF -> London
    { startLat: 37.7749, startLng: -122.4194, endLat: 12.9716, endLng: 77.5946, color: 0xfbbf24 },  // SF -> Bengaluru
    { startLat: 37.7749, startLng: -122.4194, endLat: 1.3521, endLng: 103.8198, color: 0x38bdf8 },  // SF -> Singapore
    { startLat: 51.5074, startLng: -0.1278, endLat: 48.8566, endLng: 2.3522, color: 0x4ade80 },     // London -> Paris
    { startLat: 51.5074, startLng: -0.1278, endLat: 12.9716, endLng: 77.5946, color: 0xfbbf24 },    // London -> Bengaluru
    { startLat: 12.9716, startLng: 77.5946, endLat: 1.3521, endLng: 103.8198, color: 0x38bdf8 },    // Bengaluru -> Singapore
    { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, color: 0x4ade80 },  // Singapore -> Sydney
    { startLat: 37.7749, startLng: -122.4194, endLat: -23.5505, endLng: -46.6333, color: 0xfbbf24 },// SF -> São Paulo
    { startLat: 51.5074, startLng: -0.1278, endLat: 25.2048, endLng: 55.2708, color: 0x38bdf8 },    // London -> Dubai
    { startLat: 39.9042, startLng: 116.4074, endLat: 1.3521, endLng: 103.8198, color: 0xf43f5e }   // Beijing -> Singapore
  ];

  /* ==========================================================================
     3. State Management
     ========================================================================== */
  const EARTH_RADIUS = 100;
  // Default to 'unicorns' so clicking in points shows UNICORNS immediately!
  let viewMode = 'unicorns'; // 'unicorns' (Companies) or 'countries' (WPR Ranking)
  let activeFilter = 'All';
  let searchQuery = '';
  let selectedEntity = null; // Either a Unicorn object or a Country object
  let isAutoRotating = true;

  // Three.js Core Variables
  let scene, camera, renderer;
  let earthMesh, cloudsMesh, atmosphereMesh;
  let earthGroup;
  let beaconsGroup, arcsGroup;
  let interactiveHitboxes = []; // Precision hitboxes for raycasting
  let textureLoader;

  // Camera Orbit Interaction Variables
  let isDragging = false;
  let dragDistance = 0;
  let prevMousePos = { x: 0, y: 0 };
  let currentRotation = { x: 0.25, y: -0.8 };
  let targetRotation = { x: 0.25, y: -0.8 };
  let cameraDistance = 250;
  let targetCameraDistance = 250;
  let flyToTarget = null;
  let flyToProgress = 1;

  // Raycasting
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-999, -999);
  let hoveredHitbox = null;

  /* ==========================================================================
     4. Spherical Coordinate Conversion
     ========================================================================== */
  function latLngToVector3(lat, lng, radius, altitude) {
    if (altitude === undefined) altitude = 0;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const r = radius + altitude;

    const x = -r * Math.sin(phi) * Math.cos(theta);
    const y =  r * Math.cos(phi);
    const z =  r * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  }

  /* ==========================================================================
     5. 3D Google Earth Initialization
     ========================================================================== */
  function initGoogleEarth() {
    const container = document.getElementById('globeContainer');
    if (!container) return;

    updateUI();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
    camera.position.set(0, 0, cameraDistance);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x040608, 1);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Sunlight & Space Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4);
    sunLight.position.set(250, 150, 200);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x2a3d4f, 0.95);
    scene.add(ambientLight);

    const emeraldRimLight = new THREE.DirectionalLight(0x018d2e, 0.6);
    emeraldRimLight.position.set(-200, -80, -100);
    scene.add(emeraldRimLight);

    earthGroup = new THREE.Group();
    earthGroup.rotation.x = currentRotation.x;
    earthGroup.rotation.y = currentRotation.y;
    scene.add(earthGroup);

    textureLoader = new THREE.TextureLoader();

    // 1. Fast, Lightweight & Photorealistic Earth (Optimized 64x64 Segments + Anisotropic Filtering)
    const earthGeo = new THREE.SphereGeometry(EARTH_RADIUS, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x0f1c29,
      roughness: 0.8,
      metalness: 0.05
    });

    const maxAnisotropy = renderer ? Math.min(renderer.capabilities.getMaxAnisotropy(), 8) : 4;

    textureLoader.load('assets/img/earth/earth_day.jpg', function(texture) {
      texture.anisotropy = maxAnisotropy;
      earthMat.color.setHex(0xffffff);
      earthMat.map = texture;
      earthMat.needsUpdate = true;
    });

    // 3D Normal Map for Realistic Mountain & Terrain Relief
    textureLoader.load('assets/img/earth/earth_normal.jpg', function(normTex) {
      normTex.anisotropy = maxAnisotropy;
      earthMat.normalMap = normTex;
      earthMat.normalScale = new THREE.Vector2(0.8, 0.8);
      earthMat.needsUpdate = true;
    });

    // Specular Map for Glistening Oceans & Matte Continents
    textureLoader.load('assets/img/earth/earth_specular.jpg', function(specTex) {
      specTex.anisotropy = maxAnisotropy;
      earthMat.roughnessMap = specTex;
      earthMat.needsUpdate = true;
    });

    earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // 2. Translucent Orbiting Cloud Layer (64x64)
    const cloudsGeo = new THREE.SphereGeometry(EARTH_RADIUS * 1.006, 64, 64);
    const cloudsMat = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending
    });
    textureLoader.load('assets/img/earth/earth_clouds.png', function(cloudsTex) {
      cloudsTex.anisotropy = maxAnisotropy;
      cloudsMat.map = cloudsTex;
      cloudsMat.needsUpdate = true;
    });
    cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    earthGroup.add(cloudsMesh);

    // 3. Multi-layer Rayleigh Atmosphere Rim Glow (64x64)
    const atmosGeo = new THREE.SphereGeometry(EARTH_RADIUS * 1.032, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.75 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.01, 0.55, 0.28, 1.0) * intensity * 1.4;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    atmosphereMesh = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosphereMesh);

    // 4. 3D Starfield
    createStarfield();

    // 5. Beacons & Hitboxes
    beaconsGroup = new THREE.Group();
    earthGroup.add(beaconsGroup);
    rebuild3DBeacons();

    // 6. 3D Investment Arcs
    arcsGroup = new THREE.Group();
    earthGroup.add(arcsGroup);
    create3DInvestmentArcs();

    // 7. Interaction Controls
    setupInteractionControls(container);

    // 8. Animation Loop
    animate();
  }

  /* ==========================================================================
     6. 3D Starfield
     ========================================================================== */
  function createStarfield() {
    const starCount = 1500;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 600 + Math.random() * 400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      const tint = Math.random();
      if (tint > 0.85) {
        colors[i * 3] = 0.33; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 0.51; // Emerald
      } else if (tint > 0.7) {
        colors[i * 3] = 0.38; colors[i * 3 + 1] = 0.74; colors[i * 3 + 2] = 0.97; // Cyan
      } else {
        colors[i * 3] = 0.95; colors[i * 3 + 1] = 0.98; colors[i * 3 + 2] = 1.0;  // White
      }
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    scene.add(new THREE.Points(starGeo, starMat));
  }

  /* ==========================================================================
     7. 3D Beacons with Precision Hitboxes
     ========================================================================== */
  // Cached reusable geometries for zero-allocation performance
  let _cachedNeedleGeo = null;
  let _cachedHeadGeo = null;
  let _cachedRingGeo = null;
  let _cachedHitboxGeo = null;
  const _needleMatCache = {};
  const _headMatCache = {};
  const _ringMatCache = {};
  const _sharedHitboxMat = new THREE.MeshBasicMaterial({ visible: false });

  function getSharedNeedleGeo() {
    if (!_cachedNeedleGeo) {
      _cachedNeedleGeo = new THREE.CylinderGeometry(0.03, 0.08, 1.0, 6);
      _cachedNeedleGeo.translate(0, 0.5, 0); // Anchor base to origin
    }
    return _cachedNeedleGeo;
  }

  function getSharedHeadGeo() {
    if (!_cachedHeadGeo) {
      _cachedHeadGeo = new THREE.SphereGeometry(1.0, 10, 10);
    }
    return _cachedHeadGeo;
  }

  function getSharedRingGeo() {
    if (!_cachedRingGeo) {
      _cachedRingGeo = new THREE.RingGeometry(0.1, 0.28, 12);
    }
    return _cachedRingGeo;
  }

  function getSharedHitboxGeo() {
    if (!_cachedHitboxGeo) {
      _cachedHitboxGeo = new THREE.SphereGeometry(1.0, 6, 6);
    }
    return _cachedHitboxGeo;
  }

  function getNeedleMat(colorHex) {
    if (!_needleMatCache[colorHex]) {
      _needleMatCache[colorHex] = new THREE.MeshBasicMaterial({
        color: new THREE.Color(colorHex),
        transparent: true,
        opacity: 0.85
      });
    }
    return _needleMatCache[colorHex];
  }

  function getHeadMat(colorHex) {
    if (!_headMatCache[colorHex]) {
      _headMatCache[colorHex] = new THREE.MeshStandardMaterial({
        color: new THREE.Color(colorHex),
        emissive: new THREE.Color(colorHex),
        emissiveIntensity: 0.95,
        roughness: 0.15
      });
    }
    return _headMatCache[colorHex];
  }

  function getRingMat(colorHex) {
    if (!_ringMatCache[colorHex]) {
      _ringMatCache[colorHex] = new THREE.MeshBasicMaterial({
        color: new THREE.Color(colorHex),
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide
      });
    }
    return _ringMatCache[colorHex];
  }

  function rebuild3DBeacons() {
    if (!beaconsGroup) return;

    while (beaconsGroup.children.length > 0) {
      beaconsGroup.remove(beaconsGroup.children[0]);
    }
    interactiveHitboxes = [];

    if (viewMode === 'countries') {
      // --- COUNTRIES MODE (Fast Shared Meshes) ---
      const countries = getFilteredCountries();
      const needleGeo = getSharedNeedleGeo();
      const headGeo = getSharedHeadGeo();
      const ringGeo = getSharedRingGeo();
      const hitboxGeo = getSharedHitboxGeo();

      countries.forEach(function (c) {
        const rootPos = latLngToVector3(c.lat, c.lng, EARTH_RADIUS, 0);
        const normal = rootPos.clone().normalize();
        const needleHeight = Math.max(1.8, Math.min(3.6, Math.log2(c.count + 1) * 0.75));

        const holder = new THREE.Group();

        let colorHex = '#4ade80';
        if (c.rank <= 3) colorHex = '#55d982';
        else if (c.rank <= 10) colorHex = '#fbbf24';
        else if (c.rank <= 25) colorHex = '#38bdf8';
        else colorHex = '#a855f7';

        // Needle (shared geometry)
        const needle = new THREE.Mesh(needleGeo, getNeedleMat(colorHex));
        needle.scale.set(1.0, needleHeight, 1.0);
        needle.position.copy(rootPos);
        needle.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
        holder.add(needle);

        // Crystalline Micro-Gem Bead (shared geometry)
        const isSelected = selectedEntity && selectedEntity.country === c.country;
        const beadRadius = isSelected ? 0.55 : Math.max(0.24, Math.min(0.42, Math.log10(c.count + 1) * 0.28));
        const head = new THREE.Mesh(headGeo, getHeadMat(colorHex));
        head.scale.setScalar(beadRadius);
        head.position.copy(rootPos.clone().add(normal.clone().multiplyScalar(needleHeight + beadRadius * 0.7)));
        holder.add(head);

        // Reticle (shared geometry)
        const ring = new THREE.Mesh(ringGeo, getRingMat(colorHex));
        ring.position.copy(rootPos.clone().add(normal.clone().multiplyScalar(0.08)));
        ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
        holder.add(ring);

        // Hitbox
        const hitbox = new THREE.Mesh(hitboxGeo, _sharedHitboxMat);
        hitbox.position.copy(head.position);
        hitbox.scale.setScalar(0.8);
        hitbox.userData = { type: 'country', country: c, visualHead: head, holder: holder };
        holder.add(hitbox);
        interactiveHitboxes.push(hitbox);

        beaconsGroup.add(holder);
      });
    } else {
      // --- UNICORNS MODE: INDIVIDUAL PINPOINT FOR ALL UNICORNS (BLAZING FAST) ---
      const unicorns = getFilteredUnicorns();
      const needleGeo = getSharedNeedleGeo();
      const headGeo = getSharedHeadGeo();
      const ringGeo = getSharedRingGeo();
      const hitboxGeo = getSharedHitboxGeo();

      // Count per city for golden spiral dispersion
      const cityCounts = new Map();
      unicorns.forEach(function (u) {
        const key = u.city + '||' + u.country;
        cityCounts.set(key, (cityCounts.get(key) || 0) + 1);
      });

      const cityIndices = new Map();

      unicorns.forEach(function (u) {
        const key = u.city + '||' + u.country;
        const totalInCity = cityCounts.get(key) || 1;
        const indexInCity = cityIndices.get(key) || 0;
        cityIndices.set(key, indexInCity + 1);

        let finalLat = u.lat;
        let finalLng = u.lng;

        if (totalInCity > 1 && indexInCity > 0) {
          const c = Math.min(0.045, 0.45 / Math.sqrt(totalInCity));
          const r = c * Math.sqrt(indexInCity);
          const theta = indexInCity * 2.399963;
          const dLat = r * Math.cos(theta);
          const dLng = r * Math.sin(theta) / Math.max(0.2, Math.cos(u.lat * Math.PI / 180));
          finalLat += dLat;
          finalLng += dLng;
        }

        const rootPos = latLngToVector3(finalLat, finalLng, EARTH_RADIUS, 0);
        const normal = rootPos.clone().normalize();
        const needleHeight = Math.max(1.2, Math.min(2.4, Math.log10((u.valNumber || 1.0) + 1) * 0.9));

        const holder = new THREE.Group();
        const colorHex = CATEGORY_COLORS[u.industry] || '#4ade80';

        // Reusable Needle
        const needle = new THREE.Mesh(needleGeo, getNeedleMat(colorHex));
        needle.scale.set(1.0, needleHeight, 1.0);
        needle.position.copy(rootPos);
        needle.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
        holder.add(needle);

        // Reusable Head Bead
        const isSelected = selectedEntity && selectedEntity.id === u.id;
        const beadRadius = isSelected ? 0.45 : Math.max(0.16, Math.min(0.32, Math.log10((u.valNumber || 1.0) + 1) * 0.18));
        const head = new THREE.Mesh(headGeo, getHeadMat(colorHex));
        head.scale.setScalar(beadRadius);
        head.position.copy(rootPos.clone().add(normal.clone().multiplyScalar(needleHeight + beadRadius * 0.7)));
        holder.add(head);

        // Reusable Ring
        const ring = new THREE.Mesh(ringGeo, getRingMat(colorHex));
        ring.position.copy(rootPos.clone().add(normal.clone().multiplyScalar(0.08)));
        ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
        holder.add(ring);

        // Hitbox
        const hitbox = new THREE.Mesh(hitboxGeo, _sharedHitboxMat);
        hitbox.position.copy(head.position);
        hitbox.scale.setScalar(0.6);
        hitbox.userData = {
          type: 'unicorn',
          unicorn: u,
          visualHead: head,
          holder: holder,
          lat: finalLat,
          lng: finalLng
        };
        holder.add(hitbox);
        interactiveHitboxes.push(hitbox);

        beaconsGroup.add(holder);
      });
    }
  }

  /* ==========================================================================
     8. 3D Investment Arcs
     ========================================================================== */
  function create3DInvestmentArcs() {
    while (arcsGroup.children.length > 0) {
      arcsGroup.remove(arcsGroup.children[0]);
    }

    INVESTMENT_ARCS.forEach(function (arc) {
      const v1 = latLngToVector3(arc.startLat, arc.startLng, EARTH_RADIUS);
      const v2 = latLngToVector3(arc.endLat, arc.endLng, EARTH_RADIUS);

      const distance = v1.distanceTo(v2);
      const mid = v1.clone().add(v2).multiplyScalar(0.5);
      const alt = distance * 0.28;
      mid.normalize().multiplyScalar(EARTH_RADIUS + alt);

      const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
      const points = curve.getPoints(48);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

      const curveMat = new THREE.LineBasicMaterial({
        color: arc.color,
        transparent: true,
        opacity: 0.45,
        linewidth: 1
      });

      arcsGroup.add(new THREE.Line(curveGeo, curveMat));
    });
  }

  /* ==========================================================================
     9. Google Earth Controls (Orbit, Zoom, Inertia, Precision Click)
     ========================================================================== */
  function setupInteractionControls(container) {
    container.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      isDragging = true;
      dragDistance = 0;
      isAutoRotating = false;
      updateRotateBtnUI();
      prevMousePos = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', function (e) {
      const rect = container.getBoundingClientRect();
      const xInView = e.clientX - rect.left;
      const yInView = e.clientY - rect.top;

      mouse.x = (xInView / container.clientWidth) * 2 - 1;
      mouse.y = -(yInView / container.clientHeight) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        dragDistance += Math.hypot(deltaX, deltaY);

        targetRotation.y += deltaX * 0.005;
        targetRotation.x += deltaY * 0.005;
        targetRotation.x = Math.max(-1.3, Math.min(1.3, targetRotation.x));

        prevMousePos = { x: e.clientX, y: e.clientY };
      } else {
        checkBeaconHover(e.clientX, e.clientY);
      }
    });

    window.addEventListener('mouseup', function () {
      if (isDragging) {
        isDragging = false;
        container.style.cursor = hoveredHitbox ? 'pointer' : 'grab';
      }
    });

    // Click handler with dragDistance filter & Screen-Space Precision Picking
    container.addEventListener('click', function (e) {
      if (dragDistance > 6) return; // Ignore drag releases!

      // Screen-space Euclidean proximity picking at the exact click point
      const hit = findPinAtScreen(e.clientX, e.clientY, 28);
      if (hit && hit.userData) {
        const data = hit.userData;
        if (data.type === 'unicorn' && data.unicorn) {
          selectUnicorn(data.unicorn, true);
        } else if (data.type === 'country' && data.country) {
          selectCountry(data.country, true);
        } else if (data.type === 'city_hub' && data.hub) {
          selectCityHub(data.hub, true);
        }
      }
    });

    container.addEventListener('wheel', function (e) {
      e.preventDefault();
      targetCameraDistance += e.deltaY * 0.22;
      targetCameraDistance = Math.max(110, Math.min(380, targetCameraDistance));
    }, { passive: false });

    // Touch support
    let initialPinchDistance = null;

    container.addEventListener('touchstart', function (e) {
      isAutoRotating = false;
      dragDistance = 0;
      updateRotateBtnUI();
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDistance = Math.hypot(dx, dy);
      }
    }, { passive: true });

    container.addEventListener('touchmove', function (e) {
      if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        dragDistance += Math.hypot(deltaX, deltaY);

        targetRotation.y += deltaX * 0.006;
        targetRotation.x += deltaY * 0.006;
        targetRotation.x = Math.max(-1.3, Math.min(1.3, targetRotation.x));

        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2 && initialPinchDistance) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const currentDistance = Math.hypot(dx, dy);
        const diff = initialPinchDistance - currentDistance;

        targetCameraDistance += diff * 0.4;
        targetCameraDistance = Math.max(110, Math.min(380, targetCameraDistance));
        initialPinchDistance = currentDistance;
      }
    }, { passive: true });

    container.addEventListener('touchend', function () {
      isDragging = false;
      initialPinchDistance = null;
    });

    window.addEventListener('resize', function () {
      if (!camera || !renderer || !container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }

  /* ==========================================================================
     10. Raycasting & Tooltip
     ========================================================================== */
  const tooltipEl = document.createElement('div');
  tooltipEl.className = 'globe-tooltip-3d';
  tooltipEl.style.display = 'none';
  document.body.appendChild(tooltipEl);

  // Screen-Space Euclidean Proximity Picking (Pixel-perfect, zero occlusion)
  const _tempWorldPos = new THREE.Vector3();
  const _tempNormal = new THREE.Vector3();
  const _tempToCamera = new THREE.Vector3();

  function findPinAtScreen(screenX, screenY, maxPixelRadius) {
    if (!camera || !renderer || !interactiveHitboxes.length) return null;
    if (maxPixelRadius === undefined) maxPixelRadius = 26;

    const rect = renderer.domElement.getBoundingClientRect();
    let bestHit = null;
    let minDistance = maxPixelRadius;

    for (let i = 0; i < interactiveHitboxes.length; i++) {
      const hb = interactiveHitboxes[i];
      hb.getWorldPosition(_tempWorldPos);

      // Verify the pinpoint is on the visible front hemisphere facing camera
      _tempNormal.copy(_tempWorldPos).normalize();
      _tempToCamera.copy(camera.position).sub(_tempWorldPos).normalize();
      if (_tempNormal.dot(_tempToCamera) <= 0.08) {
        continue; // Occluded by horizon or on back side of globe
      }

      _tempWorldPos.project(camera);
      const px = (_tempWorldPos.x * 0.5 + 0.5) * rect.width + rect.left;
      const py = (-_tempWorldPos.y * 0.5 + 0.5) * rect.height + rect.top;

      const dist = Math.hypot(px - screenX, py - screenY);
      if (dist < minDistance) {
        minDistance = dist;
        bestHit = hb;
      }
    }

    return bestHit;
  }

  function checkBeaconHover(screenX, screenY) {
    if (!camera || !interactiveHitboxes.length) return;

    // Use screen-space Euclidean proximity for precision hover
    const hit = findPinAtScreen(screenX, screenY, 22);

    if (hit) {
      if (hoveredHitbox !== hit) {
        if (hoveredHitbox && hoveredHitbox.userData && hoveredHitbox.userData.visualHead) {
          hoveredHitbox.userData.visualHead.scale.set(1.0, 1.0, 1.0);
        }
        hoveredHitbox = hit;
        if (hit.userData && hit.userData.visualHead) {
          hit.userData.visualHead.scale.set(1.28, 1.28, 1.28);
        }
      }

      const data = hit.userData;
      tooltipEl.style.display = 'block';
      tooltipEl.style.left = (screenX + 16) + 'px';
      tooltipEl.style.top = (screenY - 20) + 'px';

      if (data.type === 'unicorn' && data.unicorn) {
        const u = data.unicorn;
        tooltipEl.innerHTML = [
          '<div class="tt-header">',
            '<strong>🦄 ' + u.name + '</strong>',
            '<span class="tt-badge">' + u.valuation + '</span>',
          '</div>',
          '<div class="tt-location">📍 <strong>' + u.city + '</strong>, ' + u.country + '</div>',
          '<div class="tt-category" style="color:' + (CATEGORY_COLORS[u.industry] || '#4ade80') + '">' + u.industry + '</div>',
          '<div class="tt-action">Click to inspect company dossier →</div>'
        ].join('');
      } else if (data.type === 'country' && data.country) {
        const c = data.country;
        const cUnicorns = UNICORNS_DATA.filter(function (u) {
          return u.country.toLowerCase() === c.country.toLowerCase();
        });
        const topPreview = cUnicorns.slice(0, 3).map(function (u) { return u.name; }).join(', ');
        const countText = cUnicorns.length ? (cUnicorns.length + ' Unicorns') : (c.count + ' Unicorns');
        tooltipEl.innerHTML = [
          '<div class="tt-header">',
            '<strong>' + c.flag + ' ' + c.country + '</strong>',
            '<span class="tt-badge">Rank #' + c.rank + '</span>',
          '</div>',
          '<div class="tt-location">🦄 <strong>' + countText + '</strong> (' + c.valuation + ')</div>',
          (topPreview ? ('<div class="tt-category" style="color:#55d982">Top: ' + topPreview + '</div>') : ('<div class="tt-category" style="color:#55d982">Hubs: ' + c.capital_cities + '</div>')),
          '<div class="tt-action">Click to view all ' + c.country + ' unicorns →</div>'
        ].join('');
      }

      document.body.style.cursor = 'pointer';
    } else {
      if (hoveredHitbox) {
        if (hoveredHitbox.userData && hoveredHitbox.userData.visualHead) {
          hoveredHitbox.userData.visualHead.scale.set(1.0, 1.0, 1.0);
        }
        hoveredHitbox = null;
      }
      tooltipEl.style.display = 'none';
      document.body.style.cursor = 'default';
    }
  }

  /* ==========================================================================
     11. Smooth Animation Loop & Fly-To Controller
     ========================================================================== */
  function animate() {
    requestAnimationFrame(animate);

    if (isAutoRotating && !isDragging && flyToProgress >= 1) {
      targetRotation.y += 0.0012;
    }

    if (flyToProgress < 1) {
      flyToProgress += 0.035;
      const ease = easeOutCubic(Math.min(flyToProgress, 1));

      currentRotation.x = flyToTarget.startX + (flyToTarget.rotX - flyToTarget.startX) * ease;
      currentRotation.y = flyToTarget.startY + (flyToTarget.rotY - flyToTarget.startY) * ease;
      cameraDistance = flyToTarget.startDist + (flyToTarget.distance - flyToTarget.startDist) * ease;
      targetRotation.x = currentRotation.x;
      targetRotation.y = currentRotation.y;
      targetCameraDistance = cameraDistance;
    } else {
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.06;
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.06;
      cameraDistance += (targetCameraDistance - cameraDistance) * 0.08;
    }

    if (earthGroup) {
      earthGroup.rotation.y = currentRotation.y;
      earthGroup.rotation.x = currentRotation.x;
    }

    if (cloudsMesh) {
      cloudsMesh.rotation.y += 0.0004;
    }

    if (camera) {
      camera.position.z = cameraDistance;
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /* ==========================================================================
     12. Fly-To Coordinates (Google Earth Style Camera Zoom)
     ========================================================================== */
  function flyToCoordinate(lat, lng, zoomDistance) {
    if (zoomDistance === undefined) zoomDistance = 124;
    // Precise spherical centering formula: rx = lat, ry = -90 - lng
    const destRotX = lat * (Math.PI / 180);
    const destRotY = (-90 - lng) * (Math.PI / 180);

    // Shortest angular path interpolation
    let diffY = (destRotY - currentRotation.y) % (Math.PI * 2);
    if (diffY > Math.PI) diffY -= Math.PI * 2;
    if (diffY < -Math.PI) diffY += Math.PI * 2;
    const targetY = currentRotation.y + diffY;

    let diffX = (destRotX - currentRotation.x) % (Math.PI * 2);
    if (diffX > Math.PI) diffX -= Math.PI * 2;
    if (diffX < -Math.PI) diffX += Math.PI * 2;
    const targetX = currentRotation.x + diffX;

    flyToTarget = {
      startX: currentRotation.x,
      startY: currentRotation.y,
      rotX: Math.max(-1.3, Math.min(1.3, targetX)),
      rotY: targetY,
      startDist: cameraDistance,
      distance: zoomDistance
    };
    flyToProgress = 0;
  }

  /* ==========================================================================
     13. Filter & Search Logic
     ========================================================================== */
  function getFilteredCountries() {
    const q = searchQuery.toLowerCase().trim();
    return COUNTRIES_DATA.filter(function (c) {
      if (!q) return true;
      return (
        c.country.toLowerCase().includes(q) ||
        c.capital_cities.toLowerCase().includes(q) ||
        c.top.toLowerCase().includes(q)
      );
    });
  }

  function getFilteredUnicorns() {
    const q = searchQuery.toLowerCase().trim();
    return UNICORNS_DATA.filter(function (u) {
      const matchesCategory = (activeFilter === 'All' || u.industry === activeFilter);
      const matchesSearch = !q || (
        u.name.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q) ||
        u.country.toLowerCase().includes(q) ||
        u.industry.toLowerCase().includes(q) ||
        (u.investors && u.investors.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }

  function updateUI() {
    const countDisplay = document.getElementById('activeCountDisplay');
    const reachDisplay = document.getElementById('reachCountDisplay');
    const titleRow = document.getElementById('sidebarTitle');

    if (viewMode === 'unicorns') {
      const unicorns = getFilteredUnicorns();
      if (countDisplay) countDisplay.innerHTML = 'Showing: <strong>' + unicorns.length.toLocaleString() + ' Unicorns</strong>';
      const uniqueNations = new Set(unicorns.map(function (u) { return u.country; })).size;
      const uniqueCities = new Set(unicorns.map(function (u) { return u.city; })).size;
      if (reachDisplay) reachDisplay.innerHTML = 'Global Reach: <strong>' + uniqueNations + ' Nations (' + uniqueCities + ' Hubs)</strong>';
      if (titleRow) titleRow.textContent = 'Global Unicorns (' + unicorns.length.toLocaleString() + ')';
      renderUnicornsList(unicorns);
    } else {
      const countries = getFilteredCountries();
      if (countDisplay) countDisplay.innerHTML = 'Showing: <strong>' + countries.length + ' Nations (1,286 🦄)</strong>';
      if (reachDisplay) reachDisplay.innerHTML = 'Global Reach: <strong>55 Nations (WPR)</strong>';
      if (titleRow) titleRow.textContent = 'Global Rankings';
      renderCountriesList(countries);
    }

    rebuild3DBeacons();
  }

  /* ==========================================================================
     14. Select Entity & Open Distinct Drawers
     ========================================================================== */
  function selectCityHub(hub, shouldFlyTo) {
    if (shouldFlyTo === undefined) shouldFlyTo = true;
    if (shouldFlyTo) {
      isAutoRotating = false;
      updateRotateBtnUI();
      flyToCoordinate(hub.lat, hub.lng, 118);
    }
    if (hub.unicorns && hub.unicorns.length > 0) {
      selectUnicorn(hub.unicorns[0], false);
    }
  }

  function selectUnicorn(unicorn, shouldFlyTo) {
    if (shouldFlyTo === undefined) shouldFlyTo = true;
    selectedEntity = unicorn;

    if (shouldFlyTo) {
      isAutoRotating = false;
      updateRotateBtnUI();
      // High-precision deep zoom right down to that unicorn's exact city
      flyToCoordinate(unicorn.lat, unicorn.lng, 118);
    }

    rebuild3DBeacons();
    openUnicornDrawer(unicorn);
  }

  function selectCountry(country, shouldFlyTo) {
    if (shouldFlyTo === undefined) shouldFlyTo = true;
    selectedEntity = country;

    if (shouldFlyTo) {
      isAutoRotating = false;
      updateRotateBtnUI();
      flyToCoordinate(country.lat, country.lng, 138);
    }

    rebuild3DBeacons();
    openCountryDrawer(country);
  }

  /* ==========================================================================
     15. Venture Detail Slide-In Glass Drawer
     ========================================================================== */
  const drawer = document.getElementById('unicornDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('closeDrawerBtn');

  function openUnicornDrawer(u) {
    if (!drawer) return;

    // Show company meta-grid & synergy; hide country unicorn list
    const metaGrid = document.getElementById('drawerMetaGrid');
    const synergyBox = document.getElementById('drawerSynergyBox');
    const countrySection = document.getElementById('drawerCountryUnicornsSection');
    if (metaGrid) metaGrid.style.display = 'grid';
    if (synergyBox) synergyBox.style.display = 'block';
    if (countrySection) countrySection.style.display = 'none';

    document.getElementById('drawerCompany').textContent = u.name;
    document.getElementById('drawerValuation').textContent = u.valuation;
    document.getElementById('drawerTagline').textContent = u.industry + ' Sector';

    // Precise City and Country labels
    document.getElementById('drawerLocationLabel').textContent = 'Headquarters Location';
    document.getElementById('drawerCity').textContent = u.city;
    document.getElementById('drawerCountry').textContent = u.country;
    const latStr = Math.abs(u.lat).toFixed(2) + '° ' + (u.lat >= 0 ? 'N' : 'S');
    const lngStr = Math.abs(u.lng).toFixed(2) + '° ' + (u.lng >= 0 ? 'E' : 'W');
    document.getElementById('drawerCoords').textContent = latStr + ', ' + lngStr;

    const catBadge = document.getElementById('drawerCategory');
    if (catBadge) {
      catBadge.textContent = u.industry;
      catBadge.style.borderColor = CATEGORY_COLORS[u.industry] || 'var(--primary)';
    }

    document.getElementById('drawerSectionTitle').textContent = 'Venture Intelligence & CB Insights Data';
    document.getElementById('drawerSummary').textContent = u.name + ' is a verified global unicorn valued at ' + u.valuation + ', operating in the ' + u.industry + ' sector with global headquarters in ' + u.city + ', ' + u.country + '.';

    document.getElementById('drawerMeta1Label').textContent = 'Joined Unicorn Club';
    document.getElementById('drawerMeta1Val').textContent = u.date || 'Verified Unicorn';

    document.getElementById('drawerMeta2Label').textContent = 'Market Valuation';
    document.getElementById('drawerMeta2Val').textContent = u.valuation;

    document.getElementById('drawerMeta3Label').textContent = 'Key Lead Investors';
    document.getElementById('drawerMeta3Val').textContent = u.investors || 'Confidential / Top Tier Syndicate';

    document.getElementById('drawerSynergy').textContent = 'Digititup Agency leverages proprietary growth marketing, media reach, and in-house engineering to partner with founders in ' + u.city + ' and worldwide venture ecosystems.';

    // Populate Same City Peers
    const peersSection = document.getElementById('drawerPeersSection');
    const peersChips = document.getElementById('drawerPeersChips');
    const peersTitle = document.getElementById('drawerPeersTitle');

    if (peersSection && peersChips) {
      const cityPeers = UNICORNS_DATA.filter(function (x) {
        return x.city.toLowerCase() === u.city.toLowerCase() &&
               x.country.toLowerCase() === u.country.toLowerCase() &&
               x.id !== u.id;
      }).sort(function (a, b) {
        return (b.valNumber || 0) - (a.valNumber || 0);
      });

      if (cityPeers.length > 0) {
        peersSection.style.display = 'flex';
        if (peersTitle) peersTitle.textContent = 'Other Unicorns in ' + u.city + ' (' + cityPeers.length + '):';
        peersChips.innerHTML = cityPeers.slice(0, 12).map(function (p) {
          return '<button type="button" class="peer-chip" data-id="' + p.id + '">' +
                 p.name + ' <span class="pc-val">' + p.valuation + '</span></button>';
        }).join('');

        peersChips.querySelectorAll('.peer-chip').forEach(function (btn) {
          btn.addEventListener('click', function () {
            const pid = btn.dataset.id;
            const found = UNICORNS_DATA.find(function (x) { return x.id === pid; });
            if (found) {
              selectUnicorn(found, true);
            }
          });
        });
      } else {
        peersSection.style.display = 'none';
      }
    }

    const link = document.getElementById('drawerLink');
    if (link) {
      link.href = u.url || 'https://www.cbinsights.com/research-unicorn-companies';
      link.textContent = 'View ' + u.name + ' on CB Insights ↗';
    }

    drawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
  }

  function openCountryDrawer(c) {
    if (!drawer) return;

    // Filter all unicorns located in this specific country
    const countryUnicorns = UNICORNS_DATA.filter(function (u) {
      return u.country.toLowerCase() === c.country.toLowerCase();
    }).sort(function (a, b) {
      return (b.valNumber || 0) - (a.valNumber || 0);
    });

    const share = ((c.count / 1286) * 100).toFixed(1);

    document.getElementById('drawerCompany').textContent = c.flag + ' ' + c.country;
    document.getElementById('drawerValuation').textContent = (countryUnicorns.length || c.count) + ' Unicorns (' + c.valuation + ')';
    document.getElementById('drawerTagline').textContent = 'Rank #' + c.rank + ' Global Unicorn Ecosystem • ' + share + '% of World Total';

    // Precise Country and Hubs
    document.getElementById('drawerLocationLabel').textContent = 'Key Tech Hub Cities & Country';
    document.getElementById('drawerCity').textContent = c.capital_cities;
    document.getElementById('drawerCountry').textContent = c.country + ' (' + c.code + ')';
    const latStr = Math.abs(c.lat).toFixed(2) + '° ' + (c.lat >= 0 ? 'N' : 'S');
    const lngStr = Math.abs(c.lng).toFixed(2) + '° ' + (c.lng >= 0 ? 'E' : 'W');
    document.getElementById('drawerCoords').textContent = latStr + ', ' + lngStr;

    const catBadge = document.getElementById('drawerCategory');
    if (catBadge) {
      catBadge.textContent = 'Rank #' + c.rank + ' Global Ecosystem';
      catBadge.style.borderColor = 'var(--primary)';
    }

    document.getElementById('drawerSectionTitle').textContent = 'Ecosystem Overview & Flagship Ventures';
    document.getElementById('drawerSummary').textContent = c.country + ' ranks #' + c.rank + ' worldwide with ' + (countryUnicorns.length || c.count) + ' verified unicorn companies representing ' + c.valuation + ' in total market capitalization across hubs in ' + c.capital_cities + '.';

    // Hide single-company meta-grid & synergy; Show interactive list of unicorns in this nation
    const metaGrid = document.getElementById('drawerMetaGrid');
    const synergyBox = document.getElementById('drawerSynergyBox');
    const countrySection = document.getElementById('drawerCountryUnicornsSection');
    const countryListEl = document.getElementById('drawerCountryUnicornsList');
    const countryTitleEl = document.getElementById('drawerCountryUnicornsTitle');

    if (metaGrid) metaGrid.style.display = 'none';
    if (synergyBox) synergyBox.style.display = 'none';
    const peersSection = document.getElementById('drawerPeersSection');
    if (peersSection) peersSection.style.display = 'none';

    if (countrySection && countryListEl) {
      countrySection.style.display = 'flex';
      if (countryTitleEl) {
        countryTitleEl.textContent = '🦄 Unicorns in ' + c.country + ' (' + countryUnicorns.length + ' Total)';
      }

      if (countryUnicorns.length > 0) {
        countryListEl.innerHTML = countryUnicorns.map(function (u) {
          return [
            '<div class="drawer-unicorn-item" data-id="' + u.id + '">',
              '<div class="dui-left">',
                '<strong class="dui-name">' + u.name + '</strong>',
                '<div class="dui-meta">',
                  '<span>📍 ' + u.city + '</span>',
                  '<span class="dui-tag" style="border-left:2px solid ' + (CATEGORY_COLORS[u.industry] || '#4ade80') + '">' + u.industry + '</span>',
                '</div>',
              '</div>',
              '<div class="dui-right">',
                '<span class="dui-val">' + u.valuation + '</span>',
                '<span style="font-size:10.5px;color:var(--text-muted);">' + (u.date || 'Verified') + '</span>',
              '</div>',
            '</div>'
          ].join('');
        }).join('');

        countryListEl.querySelectorAll('.drawer-unicorn-item').forEach(function (item) {
          item.addEventListener('click', function () {
            const id = item.dataset.id;
            const found = UNICORNS_DATA.find(function (u) { return u.id === id; });
            if (found) {
              selectUnicorn(found, true);
            }
          });
        });
      } else {
        countryListEl.innerHTML = '<div style="font-size:13px;color:var(--text-muted);padding:10px 0;">' + c.top + '</div>';
      }
    }

    const link = document.getElementById('drawerLink');
    if (link) {
      link.href = 'https://worldpopulationreview.com/country-rankings/unicorns-by-country';
      link.textContent = 'View World Population Review Official Ranking ↗';
    }

    drawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
  }

  function closeDetailDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    selectedEntity = null;
    rebuild3DBeacons();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDetailDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDetailDrawer);

  /* ==========================================================================
     16. Directory Lists (Unicorns vs Countries)
     ========================================================================== */
  let currentUnicornsList = [];
  let renderedUnicornCount = 0;
  const BATCH_SIZE = 50;

  function renderUnicornsList(unicorns) {
    const listContainer = document.getElementById('unicornListContainer');
    if (!listContainer) return;

    currentUnicornsList = unicorns;
    listContainer.innerHTML = '';
    renderedUnicornCount = 0;

    if (!unicorns.length) {
      listContainer.innerHTML = '<div class="empty-state"><p>No unicorns match your criteria.</p></div>';
      return;
    }

    appendNextUnicornBatch();
  }

  function appendNextUnicornBatch() {
    const listContainer = document.getElementById('unicornListContainer');
    if (!listContainer || renderedUnicornCount >= currentUnicornsList.length) return;

    const nextBatch = currentUnicornsList.slice(renderedUnicornCount, renderedUnicornCount + BATCH_SIZE);
    renderedUnicornCount += nextBatch.length;

    const fragment = document.createDocumentFragment();
    nextBatch.forEach(function (u) {
      const isActive = (selectedEntity && selectedEntity.id === u.id);
      const itemEl = document.createElement('div');
      itemEl.className = 'unicorn-list-item' + (isActive ? ' active' : '');
      itemEl.dataset.id = u.id;
      itemEl.innerHTML = [
        '<div class="uli-top">',
          '<strong class="uli-name">' + u.name + '</strong>',
          '<span class="uli-val">' + u.valuation + '</span>',
        '</div>',
        '<div class="uli-meta">',
          '<span>📍 <strong>' + u.city + '</strong>, ' + u.country + '</span>',
          '<span class="uli-dot" style="background:' + (CATEGORY_COLORS[u.industry] || '#4ade80') + '"></span>',
          '<span>' + u.industry + '</span>',
        '</div>'
      ].join('');

      itemEl.addEventListener('click', function () {
        const found = UNICORNS_DATA.find(function (item) { return item.id === u.id; });
        if (found) selectUnicorn(found, true);
      });

      fragment.appendChild(itemEl);
    });

    listContainer.appendChild(fragment);
  }

  function renderCountriesList(countries) {
    const listContainer = document.getElementById('unicornListContainer');
    if (!listContainer) return;

    if (!countries.length) {
      listContainer.innerHTML = '<div class="empty-state"><p>No country matches your query.</p></div>';
      return;
    }

    listContainer.innerHTML = countries.map(function (c) {
      const isActive = (selectedEntity && selectedEntity.country === c.country);
      return [
        '<div class="unicorn-list-item ' + (isActive ? 'active' : '') + '" data-country="' + c.country + '">',
          '<div class="uli-top">',
            '<strong class="uli-name"><span class="rank-badge">#' + c.rank + '</span> ' + c.flag + ' ' + c.country + '</strong>',
            '<span class="uli-val">' + c.count + ' 🦄</span>',
          '</div>',
          '<div class="uli-meta">',
            '<span>Valuation: <strong style="color:#ffffff">' + c.valuation + '</strong></span>',
            '<span class="uli-dot" style="background:#55d982"></span>',
            '<span class="uli-top-preview">' + c.capital_cities.split(',').slice(0, 2).join(',') + '</span>',
          '</div>',
        '</div>'
      ].join('');
    }).join('');

    listContainer.querySelectorAll('.unicorn-list-item').forEach(function (item) {
      item.addEventListener('click', function () {
        const name = item.dataset.country;
        const found = COUNTRIES_DATA.find(function (c) { return c.country === name; });
        if (found) selectCountry(found, true);
      });
    });
  }

  /* ==========================================================================
     17. Mode Switcher (Synchronized Across HUD & Sidebar)
     ========================================================================== */
  function setViewMode(newMode) {
    viewMode = newMode;

    // Update all mode buttons
    document.querySelectorAll('.mode-pill, .mode-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.mode === viewMode);
    });

    // Show category filter bar only for unicorns
    const catBar = document.querySelector('.category-filter-bar');
    if (catBar) {
      catBar.style.display = (viewMode === 'unicorns') ? 'flex' : 'none';
    }

    closeDetailDrawer();
    updateUI();
  }

  document.querySelectorAll('.mode-pill, .mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const m = btn.dataset.mode;
      if (m && m !== viewMode) {
        setViewMode(m);
      }
    });
  });

  const searchInput = document.getElementById('unicornSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      searchQuery = e.target.value;
      updateUI();
    });
  }

  const unicornListEl = document.getElementById('unicornListContainer');
  if (unicornListEl) {
    unicornListEl.addEventListener('scroll', function () {
      if (viewMode === 'unicorns') {
        if (unicornListEl.scrollTop + unicornListEl.clientHeight >= unicornListEl.scrollHeight - 200) {
          appendNextUnicornBatch();
        }
      }
    }, { passive: true });
  }

  const catBar = document.querySelector('.category-filter-bar');
  if (catBar) {
    catBar.addEventListener('wheel', function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        catBar.scrollLeft += e.deltaY * 0.9;
      }
    }, { passive: false });
  }

  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      filterChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeFilter = chip.dataset.category;
      try {
        chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (err) {}
      updateUI();
    });
  });

  /* ==========================================================================
     18. Region Presets & Camera Toolbar
     ========================================================================== */
  const PRESET_REGIONS = {
    'all': { lat: 20, lng: 10, zoom: 250 },
    'us': { lat: 38, lng: -98, zoom: 170 },
    'europe': { lat: 50, lng: 10, zoom: 165 },
    'southasia': { lat: 20, lng: 78, zoom: 165 },
    'southeastasia': { lat: 4, lng: 103, zoom: 175 },
    'latam': { lat: -15, lng: -55, zoom: 180 }
  };

  const presetBtns = document.querySelectorAll('.preset-btn');
  presetBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const region = btn.dataset.region;
      if (PRESET_REGIONS[region]) {
        presetBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        isAutoRotating = false;
        updateRotateBtnUI();
        const p = PRESET_REGIONS[region];
        flyToCoordinate(p.lat, p.lng, p.zoom);
      }
    });
  });

  const rotateBtn = document.getElementById('toggleRotateBtn');
  function updateRotateBtnUI() {
    if (!rotateBtn) return;
    if (isAutoRotating) {
      rotateBtn.classList.add('active');
      rotateBtn.innerHTML = '<span>⏸</span> Pause Orbit';
    } else {
      rotateBtn.classList.remove('active');
      rotateBtn.innerHTML = '<span>▶</span> Auto Orbit';
    }
  }

  if (rotateBtn) {
    rotateBtn.addEventListener('click', function () {
      isAutoRotating = !isAutoRotating;
      updateRotateBtnUI();
    });
  }

  const resetBtn = document.getElementById('resetViewBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      isAutoRotating = true;
      updateRotateBtnUI();
      flyToCoordinate(20, 10, 250);
      closeDetailDrawer();
    });
  }

  /* ==========================================================================
     19. Mobile Drawer & Header Scroll
     ========================================================================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('open');
      mobileDrawer.classList.toggle('open');
      document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    });

    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('open');
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  const header = document.querySelector('.site-header');
  function handleScroll() {
    if (window.scrollY > 20) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     20. Boot
     ========================================================================== */
  window.addEventListener('DOMContentLoaded', function () {
    initGoogleEarth();
  });

})();
