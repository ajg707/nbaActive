const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence typeDefs)
// that together define the shape of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This Book type defines the queryable fields for every book in our data source.
  type Player {
    id: ID!
    first_name: String
    last_name: String
    team: String
    team_abbr: String
    position: String
    number: Int
    height: Int
  }

  # The Query type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the books query returns an array of zero or more Books (defined above).
  type Query {
    players: [Player]
  }
`;
const players = [
  {
    id: 101,
    first_name: "Alex",
    last_name: "Abrines",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 8,
    height: 78
  },
  {
    id: 102,
    first_name: "Jaylen",
    last_name: "Adams",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard",
    number: 10,
    height: 74
  },
  {
    id: 103,
    first_name: "Steven",
    last_name: "Adams",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Center",
    number: 12,
    height: 84
  },
  {
    id: 104,
    first_name: "Bam",
    last_name: "Adebayo",
    team: "Heat",
    team_abbr: "MIA",
    position: "Center-Forward",
    number: 13,
    height: 82
  },
  {
    id: 105,
    first_name: "DeVaughn",
    last_name: "Akoon-Purcell",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard-Forward",
    number: 23,
    height: 78
  },
  {
    id: 106,
    first_name: "LaMarcus",
    last_name: "Aldridge",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 12,
    height: 83
  },
  {
    id: 107,
    first_name: "Rawle",
    last_name: "Alkins",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 20,
    height: 77
  },
  {
    id: 108,
    first_name: "Grayson",
    last_name: "Allen",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 24,
    height: 77
  },
  {
    id: 109,
    first_name: "Jarrett",
    last_name: "Allen",
    team: "Nets",
    team_abbr: "BKN",
    position: "Center",
    number: 31,
    height: 83
  },
  {
    id: 110,
    first_name: "Al-Farouq",
    last_name: "Aminu",
    team: "Blazers",
    team_abbr: "POR",
    position: "Forward",
    number: 8,
    height: 81
  },
  {
    id: 111,
    first_name: "Justin",
    last_name: "Anderson",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard-Forward",
    number: 1,
    height: 78
  },
  {
    id: 112,
    first_name: "Kyle",
    last_name: "Anderson",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Forward",
    number: 1,
    height: 81
  },
  {
    id: 113,
    first_name: "Ryan",
    last_name: "Anderson",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 15,
    height: 82
  },
  {
    id: 114,
    first_name: "Ike",
    last_name: "Anigbogu",
    team: "Pacers",
    team_abbr: "IND",
    position: "Center",
    number: 13,
    height: 82
  },
  {
    id: 115,
    first_name: "Giannis",
    last_name: "Antetokounmpo",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 34,
    height: 83
  },
  {
    id: 116,
    first_name: "Kostas",
    last_name: "Antetokounmpo",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward",
    number: 37,
    height: 82
  },
  {
    id: 117,
    first_name: "Carmelo",
    last_name: "Anthony",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward",
    number: 7,
    height: 80
  },
  {
    id: 118,
    first_name: "OG",
    last_name: "Anunoby",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward",
    number: 3,
    height: 80
  },
  {
    id: 119,
    first_name: "Ryan",
    last_name: "Arcidiacono",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 51,
    height: 75
  },
  {
    id: 120,
    first_name: "Trevor",
    last_name: "Ariza",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 3,
    height: 80
  },
  {
    id: 121,
    first_name: "D.J.",
    last_name: "Augustin",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard",
    number: 14,
    height: 72
  },
  {
    id: 122,
    first_name: "Deandre",
    last_name: "Ayton",
    team: "Suns",
    team_abbr: "PHX",
    position: "Center",
    number: 22,
    height: 85
  },
  {
    id: 123,
    first_name: "Dwayne",
    last_name: "Bacon",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard-Forward",
    number: 7,
    height: 79
  },
  {
    id: 124,
    first_name: "Marvin",
    last_name: "Bagley III",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 35,
    height: 83
  },
  {
    id: 125,
    first_name: "Ron",
    last_name: "Baker",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 31,
    height: 76
  },
  {
    id: 126,
    first_name: "Wade",
    last_name: "Baldwin IV",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 2,
    height: 76
  },
  {
    id: 127,
    first_name: "Lonzo",
    last_name: "Ball",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 2,
    height: 78
  },
  {
    id: 128,
    first_name: "Mo",
    last_name: "Bamba",
    team: "Magic",
    team_abbr: "ORL",
    position: "Center",
    number: 5,
    height: 84
  },
  {
    id: 129,
    first_name: "J.J.",
    last_name: "Barea",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard",
    number: 5,
    height: 72
  },
  {
    id: 130,
    first_name: "Harrison",
    last_name: "Barnes",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward",
    number: 40,
    height: 80
  },
  {
    id: 131,
    first_name: "Will",
    last_name: "Barton",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard",
    number: 5,
    height: 78
  },
  {
    id: 132,
    first_name: "Keita",
    last_name: "Bates-Diop",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 31,
    height: 81
  },
  {
    id: 133,
    first_name: "Nicolas",
    last_name: "Batum",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Forward-Guard",
    number: 5,
    height: 80
  },
  {
    id: 134,
    first_name: "Jerryd",
    last_name: "Bayless",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 8,
    height: 75
  },
  {
    id: 135,
    first_name: "Aron",
    last_name: "Baynes",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Center-Forward",
    number: 46,
    height: 82
  },
  {
    id: 136,
    first_name: "Kent",
    last_name: "Bazemore",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard",
    number: 24,
    height: 77
  },
  {
    id: 137,
    first_name: "Bradley",
    last_name: "Beal",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Guard",
    number: 3,
    height: 77
  },
  {
    id: 138,
    first_name: "Malik",
    last_name: "Beasley",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard",
    number: 25,
    height: 77
  },
  {
    id: 139,
    first_name: "Michael",
    last_name: "Beasley",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Forward",
    number: 11,
    height: 81
  },
  {
    id: 140,
    first_name: "Marco",
    last_name: "Belinelli",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard-Forward",
    number: 18,
    height: 77
  },
  {
    id: 141,
    first_name: "Jordan",
    last_name: "Bell",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 2,
    height: 81
  },
  {
    id: 142,
    first_name: "DeAndre'",
    last_name: "Bembry",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Forward",
    number: 95,
    height: 78
  },
  {
    id: 143,
    first_name: "Dragan",
    last_name: "Bender",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 35,
    height: 85
  },
  {
    id: 144,
    first_name: "Davis",
    last_name: "Bertans",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 42,
    height: 82
  },
  {
    id: 145,
    first_name: "Patrick",
    last_name: "Beverley",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 21,
    height: 73
  },
  {
    id: 146,
    first_name: "Khem",
    last_name: "Birch",
    team: "Magic",
    team_abbr: "ORL",
    position: "Center",
    number: 24,
    height: 81
  },
  {
    id: 147,
    first_name: "Jabari",
    last_name: "Bird",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard",
    number: null,
    height: 78
  },
  {
    id: 148,
    first_name: "Bismack",
    last_name: "Biyombo",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Center",
    number: 8,
    height: 81
  },
  {
    id: 149,
    first_name: "Nemanja",
    last_name: "Bjelica",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 88,
    height: 82
  },
  {
    id: 150,
    first_name: "Antonio",
    last_name: "Blakeney",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 9,
    height: 76
  },
  {
    id: 151,
    first_name: "Eric",
    last_name: "Bledsoe",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 6,
    height: 73
  },
  {
    id: 152,
    first_name: "Trevon",
    last_name: "Bluiett",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard-Forward",
    number: 5,
    height: 78
  },
  {
    id: 153,
    first_name: "Bogdan",
    last_name: "Bogdanovic",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 8,
    height: 78
  },
  {
    id: 154,
    first_name: "Bojan",
    last_name: "Bogdanovic",
    team: "Pacers",
    team_abbr: "IND",
    position: "Forward",
    number: 44,
    height: 80
  },
  {
    id: 155,
    first_name: "Jonah",
    last_name: "Bolden",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Forward",
    number: 43,
    height: 82
  },
  {
    id: 156,
    first_name: "Isaac",
    last_name: "Bonga",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 17,
    height: 80
  },
  {
    id: 157,
    first_name: "Devin",
    last_name: "Booker",
    team: "Suns",
    team_abbr: "PHX",
    position: "Guard",
    number: 1,
    height: 78
  },
  {
    id: 158,
    first_name: "Chris",
    last_name: "Boucher",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward",
    number: 25,
    height: 82
  },
  {
    id: 159,
    first_name: "Avery",
    last_name: "Bradley",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 11,
    height: 74
  },
  {
    id: 160,
    first_name: "Tony",
    last_name: "Bradley",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Center",
    number: 13,
    height: 82
  },
  {
    id: 161,
    first_name: "Mikal",
    last_name: "Bridges",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 25,
    height: 79
  },
  {
    id: 162,
    first_name: "Miles",
    last_name: "Bridges",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Forward",
    number: 0,
    height: 79
  },
  {
    id: 163,
    first_name: "Isaiah",
    last_name: "Briscoe",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard",
    number: 13,
    height: 75
  },
  {
    id: 164,
    first_name: "Ryan",
    last_name: "Broekhoff",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard-Forward",
    number: 45,
    height: 79
  },
  {
    id: 165,
    first_name: "Malcolm",
    last_name: "Brogdon",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 13,
    height: 77
  },
  {
    id: 166,
    first_name: "Dillon",
    last_name: "Brooks",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard-Forward",
    number: 24,
    height: 78
  },
  {
    id: 167,
    first_name: "MarShon",
    last_name: "Brooks",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard",
    number: 8,
    height: 77
  },
  {
    id: 168,
    first_name: "Troy",
    last_name: "Brown Jr.",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 6,
    height: 79
  },
  {
    id: 169,
    first_name: "Bruce",
    last_name: "Brown",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 6,
    height: 77
  },
  {
    id: 170,
    first_name: "Jaylen",
    last_name: "Brown",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard",
    number: 7,
    height: 79
  },
  {
    id: 171,
    first_name: "Lorenzo",
    last_name: "Brown",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard",
    number: 4,
    height: 77
  },
  {
    id: 172,
    first_name: "Sterling",
    last_name: "Brown",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 23,
    height: 78
  },
  {
    id: 173,
    first_name: "Jalen",
    last_name: "Brunson",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard",
    number: 13,
    height: 75
  },
  {
    id: 174,
    first_name: "Thomas",
    last_name: "Bryant",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Center",
    number: 13,
    height: 83
  },
  {
    id: 175,
    first_name: "Reggie",
    last_name: "Bullock",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard-Forward",
    number: 25,
    height: 79
  },
  {
    id: 176,
    first_name: "Trey",
    last_name: "Burke",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 23,
    height: 73
  },
  {
    id: 177,
    first_name: "Alec",
    last_name: "Burks",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 10,
    height: 78
  },
  {
    id: 178,
    first_name: "Deonte",
    last_name: "Burton",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 30,
    height: 77
  },
  {
    id: 179,
    first_name: "Jimmy",
    last_name: "Butler",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard-Forward",
    number: 23,
    height: 80
  },
  {
    id: 180,
    first_name: "Jose",
    last_name: "Calderon",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 81,
    height: 75
  },
  {
    id: 181,
    first_name: "Kentavious",
    last_name: "Caldwell-Pope",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 1,
    height: 77
  },
  {
    id: 182,
    first_name: "Isaiah",
    last_name: "Canaan",
    team: "Suns",
    team_abbr: "PHX",
    position: "Guard",
    number: 0,
    height: 72
  },
  {
    id: 183,
    first_name: "Clint",
    last_name: "Capela",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Center",
    number: 15,
    height: 82
  },
  {
    id: 184,
    first_name: "DeMarre",
    last_name: "Carroll",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward",
    number: 9,
    height: 80
  },
  {
    id: 185,
    first_name: "Wendell",
    last_name: "Carter Jr.",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward",
    number: 34,
    height: 82
  },
  {
    id: 186,
    first_name: "Michael",
    last_name: "Carter-Williams",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Guard",
    number: 1,
    height: 78
  },
  {
    id: 187,
    first_name: "Jevon",
    last_name: "Carter",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard",
    number: 3,
    height: 74
  },
  {
    id: 188,
    first_name: "Vince",
    last_name: "Carter",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Forward-Guard",
    number: 15,
    height: 78
  },
  {
    id: 189,
    first_name: "Alex",
    last_name: "Caruso",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 4,
    height: 77
  },
  {
    id: 190,
    first_name: "Omri",
    last_name: "Casspi",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Forward",
    number: 18,
    height: 81
  },
  {
    id: 191,
    first_name: "Willie",
    last_name: "Cauley-Stein",
    team: "Kings",
    team_abbr: "SAC",
    position: "Center",
    number: 0,
    height: 84
  },
  {
    id: 192,
    first_name: "Troy",
    last_name: "Caupain",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard",
    number: 3,
    height: 76
  },
  {
    id: 193,
    first_name: "Tyler",
    last_name: "Cavanaugh",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward",
    number: 34,
    height: 81
  },
  {
    id: 194,
    first_name: "Tyson",
    last_name: "Chandler",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Center",
    number: 5,
    height: 85
  },
  {
    id: 195,
    first_name: "Wilson",
    last_name: "Chandler",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Forward",
    number: 22,
    height: 81
  },
  {
    id: 196,
    first_name: "Joe",
    last_name: "Chealey",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 31,
    height: 75
  },
  {
    id: 197,
    first_name: "Marquese",
    last_name: "Chriss",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward",
    number: 0,
    height: 82
  },
  {
    id: 198,
    first_name: "Gary",
    last_name: "Clark",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward",
    number: 6,
    height: 80
  },
  {
    id: 199,
    first_name: "Ian",
    last_name: "Clark",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard",
    number: 2,
    height: 75
  },
  {
    id: 200,
    first_name: "Jordan",
    last_name: "Clarkson",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard",
    number: 8,
    height: 77
  },
  {
    id: 201,
    first_name: "John",
    last_name: "Collins",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Forward-Center",
    number: 20,
    height: 82
  },
  {
    id: 202,
    first_name: "Zach",
    last_name: "Collins",
    team: "Blazers",
    team_abbr: "POR",
    position: "Forward-Center",
    number: 33,
    height: 84
  },
  {
    id: 203,
    first_name: "Darren",
    last_name: "Collison",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 2,
    height: 72
  },
  {
    id: 204,
    first_name: "Mike",
    last_name: "Conley",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard",
    number: 11,
    height: 73
  },
  {
    id: 205,
    first_name: "Pat",
    last_name: "Connaughton",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 24,
    height: 76
  },
  {
    id: 206,
    first_name: "Quinn",
    last_name: "Cook",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard",
    number: 4,
    height: 74
  },
  {
    id: 207,
    first_name: "DeMarcus",
    last_name: "Cousins",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Center",
    number: 0,
    height: 83
  },
  {
    id: 208,
    first_name: "Robert",
    last_name: "Covington",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 33,
    height: 81
  },
  {
    id: 209,
    first_name: "Allen",
    last_name: "Crabbe",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard-Forward",
    number: 33,
    height: 78
  },
  {
    id: 210,
    first_name: "Torrey",
    last_name: "Craig",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 3,
    height: 79
  },
  {
    id: 211,
    first_name: "Jamal",
    last_name: "Crawford",
    team: "Suns",
    team_abbr: "PHX",
    position: "Guard",
    number: 11,
    height: 77
  },
  {
    id: 212,
    first_name: "Jae",
    last_name: "Crowder",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward",
    number: 99,
    height: 78
  },
  {
    id: 213,
    first_name: "Dante",
    last_name: "Cunningham",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 33,
    height: 80
  },
  {
    id: 214,
    first_name: "Seth",
    last_name: "Curry",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 31,
    height: 74
  },
  {
    id: 215,
    first_name: "Stephen",
    last_name: "Curry",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard",
    number: 30,
    height: 75
  },
  {
    id: 216,
    first_name: "Troy",
    last_name: "Daniels",
    team: "Suns",
    team_abbr: "PHX",
    position: "Guard",
    number: 30,
    height: 76
  },
  {
    id: 217,
    first_name: "Anthony",
    last_name: "Davis",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward-Center",
    number: 23,
    height: 82
  },
  {
    id: 218,
    first_name: "Ed",
    last_name: "Davis",
    team: "Nets",
    team_abbr: "BKN",
    position: "Center",
    number: 17,
    height: 82
  },
  {
    id: 219,
    first_name: "Tyler",
    last_name: "Davis",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Center",
    number: 34,
    height: 82
  },
  {
    id: 220,
    first_name: "Dewayne",
    last_name: "Dedmon",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Center",
    number: 14,
    height: 84
  },
  {
    id: 221,
    first_name: "Sam",
    last_name: "Dekker",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Forward",
    number: 15,
    height: 81
  },
  {
    id: 222,
    first_name: "Angel",
    last_name: "Delgado",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Center",
    number: 31,
    height: 82
  },
  {
    id: 223,
    first_name: "Matthew",
    last_name: "Dellavedova",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 8,
    height: 76
  },
  {
    id: 224,
    first_name: "Luol",
    last_name: "Deng",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 9,
    height: 81
  },
  {
    id: 225,
    first_name: "DeMar",
    last_name: "DeRozan",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard",
    number: 10,
    height: 79
  },
  {
    id: 226,
    first_name: "Marcus",
    last_name: "Derrickson",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 32,
    height: 79
  },
  {
    id: 227,
    first_name: "Cheick",
    last_name: "Diallo",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward",
    number: 13,
    height: 81
  },
  {
    id: 228,
    first_name: "Hamidou",
    last_name: "Diallo",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 6,
    height: 77
  },
  {
    id: 229,
    first_name: "Gorgui",
    last_name: "Dieng",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Center",
    number: 5,
    height: 83
  },
  {
    id: 230,
    first_name: "Spencer",
    last_name: "Dinwiddie",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard",
    number: 8,
    height: 78
  },
  {
    id: 231,
    first_name: "Donte",
    last_name: "DiVincenzo",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 9,
    height: 76
  },
  {
    id: 232,
    first_name: "Luka",
    last_name: "Doncic",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward-Guard",
    number: 77,
    height: 79
  },
  {
    id: 233,
    first_name: "Tyler",
    last_name: "Dorsey",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard",
    number: 2,
    height: 77
  },
  {
    id: 234,
    first_name: "Damyean",
    last_name: "Dotson",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 21,
    height: 78
  },
  {
    id: 235,
    first_name: "PJ",
    last_name: "Dozier",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard-Forward",
    number: 50,
    height: 78
  },
  {
    id: 236,
    first_name: "Goran",
    last_name: "Dragic",
    team: "Heat",
    team_abbr: "MIA",
    position: "Guard",
    number: 7,
    height: 75
  },
  {
    id: 237,
    first_name: "Andre",
    last_name: "Drummond",
    team: "Pistons",
    team_abbr: "DET",
    position: "Center",
    number: 0,
    height: 83
  },
  {
    id: 238,
    first_name: "Jared",
    last_name: "Dudley",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward",
    number: 6,
    height: 79
  },
  {
    id: 239,
    first_name: "Kris",
    last_name: "Dunn",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 32,
    height: 76
  },
  {
    id: 240,
    first_name: "Kevin",
    last_name: "Durant",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 35,
    height: 81
  },
  {
    id: 241,
    first_name: "Trevon",
    last_name: "Duval",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 0,
    height: 74
  },
  {
    id: 242,
    first_name: "Vincent",
    last_name: "Edwards",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward",
    number: 12,
    height: 80
  },
  {
    id: 243,
    first_name: "Henry",
    last_name: "Ellenson",
    team: "Pistons",
    team_abbr: "DET",
    position: "Forward",
    number: 8,
    height: 83
  },
  {
    id: 244,
    first_name: "Wayne",
    last_name: "Ellington",
    team: "Heat",
    team_abbr: "MIA",
    position: "Guard",
    number: 2,
    height: 77
  },
  {
    id: 245,
    first_name: "Joel",
    last_name: "Embiid",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Forward-Center",
    number: 21,
    height: 84
  },
  {
    id: 246,
    first_name: "James",
    last_name: "Ennis III",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward",
    number: 8,
    height: 79
  },
  {
    id: 247,
    first_name: "Drew",
    last_name: "Eubanks",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 14,
    height: 82
  },
  {
    id: 248,
    first_name: "Jacob",
    last_name: "Evans",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard",
    number: 10,
    height: 78
  },
  {
    id: 249,
    first_name: "Keenan",
    last_name: "Evans",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 12,
    height: 75
  },
  {
    id: 250,
    first_name: "Tyreke",
    last_name: "Evans",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 12,
    height: 78
  },
  {
    id: 251,
    first_name: "Dante",
    last_name: "Exum",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 11,
    height: 78
  },
  {
    id: 252,
    first_name: "Kenneth",
    last_name: "Faried",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward-Center",
    number: 35,
    height: 80
  },
  {
    id: 253,
    first_name: "Derrick",
    last_name: "Favors",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward-Center",
    number: 15,
    height: 82
  },
  {
    id: 254,
    first_name: "Cristiano",
    last_name: "Felicio",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward-Center",
    number: 6,
    height: 82
  },
  {
    id: 255,
    first_name: "Raymond",
    last_name: "Felton",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 2,
    height: 73
  },
  {
    id: 256,
    first_name: "Terrance",
    last_name: "Ferguson",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 23,
    height: 79
  },
  {
    id: 257,
    first_name: "Yogi",
    last_name: "Ferrell",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 3,
    height: 72
  },
  {
    id: 258,
    first_name: "Dorian",
    last_name: "Finney-Smith",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward",
    number: 10,
    height: 80
  },
  {
    id: 259,
    first_name: "Bryn",
    last_name: "Forbes",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard",
    number: 11,
    height: 75
  },
  {
    id: 260,
    first_name: "Evan",
    last_name: "Fournier",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard-Forward",
    number: 10,
    height: 79
  },
  {
    id: 261,
    first_name: "De'Aaron",
    last_name: "Fox",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 5,
    height: 75
  },
  {
    id: 262,
    first_name: "Melvin",
    last_name: "Frazier Jr.",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard-Forward",
    number: 35,
    height: 78
  },
  {
    id: 263,
    first_name: "Tim",
    last_name: "Frazier",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard",
    number: 10,
    height: 73
  },
  {
    id: 264,
    first_name: "Channing",
    last_name: "Frye",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Forward-Center",
    number: 9,
    height: 84
  },
  {
    id: 265,
    first_name: "Markelle",
    last_name: "Fultz",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 20,
    height: 76
  },
  {
    id: 266,
    first_name: "Wenyen",
    last_name: "Gabriel",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 32,
    height: 81
  },
  {
    id: 267,
    first_name: "Danilo",
    last_name: "Gallinari",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Forward",
    number: 8,
    height: 82
  },
  {
    id: 268,
    first_name: "Langston",
    last_name: "Galloway",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 9,
    height: 74
  },
  {
    id: 269,
    first_name: "Marc",
    last_name: "Gasol",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Center",
    number: 33,
    height: 85
  },
  {
    id: 270,
    first_name: "Pau",
    last_name: "Gasol",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Center-Forward",
    number: 16,
    height: 84
  },
  {
    id: 271,
    first_name: "Rudy",
    last_name: "Gay",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 22,
    height: 80
  },
  {
    id: 272,
    first_name: "Paul",
    last_name: "George",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Forward",
    number: 13,
    height: 81
  },
  {
    id: 273,
    first_name: "Taj",
    last_name: "Gibson",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 67,
    height: 81
  },
  {
    id: 274,
    first_name: "Harry",
    last_name: "Giles III",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward-Center",
    number: 20,
    height: 82
  },
  {
    id: 275,
    first_name: "Shai",
    last_name: "Gilgeous-Alexander",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 2,
    height: 78
  },
  {
    id: 276,
    first_name: "Rudy",
    last_name: "Gobert",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Center",
    number: 27,
    height: 85
  },
  {
    id: 277,
    first_name: "Aaron",
    last_name: "Gordon",
    team: "Magic",
    team_abbr: "ORL",
    position: "Forward",
    number: 0,
    height: 81
  },
  {
    id: 278,
    first_name: "Eric",
    last_name: "Gordon",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Guard",
    number: 10,
    height: 76
  },
  {
    id: 279,
    first_name: "Marcin",
    last_name: "Gortat",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Center",
    number: 13,
    height: 83
  },
  {
    id: 280,
    first_name: "Devonte'",
    last_name: "Graham",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 4,
    height: 74
  },
  {
    id: 281,
    first_name: "Treveon",
    last_name: "Graham",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward",
    number: 21,
    height: 77
  },
  {
    id: 282,
    first_name: "Jerami",
    last_name: "Grant",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Forward",
    number: 9,
    height: 81
  },
  {
    id: 283,
    first_name: "Jerian",
    last_name: "Grant",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard",
    number: 22,
    height: 76
  },
  {
    id: 284,
    first_name: "Danny",
    last_name: "Green",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard-Forward",
    number: 14,
    height: 78
  },
  {
    id: 285,
    first_name: "Draymond",
    last_name: "Green",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 23,
    height: 79
  },
  {
    id: 286,
    first_name: "Gerald",
    last_name: "Green",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Guard-Forward",
    number: 14,
    height: 79
  },
  {
    id: 287,
    first_name: "JaMychal",
    last_name: "Green",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Forward",
    number: 0,
    height: 81
  },
  {
    id: 288,
    first_name: "Jeff",
    last_name: "Green",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 32,
    height: 81
  },
  {
    id: 289,
    first_name: "Blake",
    last_name: "Griffin",
    team: "Pistons",
    team_abbr: "DET",
    position: "Forward",
    number: 23,
    height: 82
  },
  {
    id: 290,
    first_name: "Daniel",
    last_name: "Hamilton",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard-Forward",
    number: 5,
    height: 79
  },
  {
    id: 291,
    first_name: "Tim",
    last_name: "Hardaway Jr.",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 3,
    height: 78
  },
  {
    id: 292,
    first_name: "James",
    last_name: "Harden",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Guard",
    number: 13,
    height: 77
  },
  {
    id: 293,
    first_name: "Maurice",
    last_name: "Harkless",
    team: "Blazers",
    team_abbr: "POR",
    position: "Forward",
    number: 4,
    height: 81
  },
  {
    id: 294,
    first_name: "Montrezl",
    last_name: "Harrell",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Forward-Center",
    number: 5,
    height: 80
  },
  {
    id: 295,
    first_name: "Devin",
    last_name: "Harris",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard",
    number: 34,
    height: 75
  },
  {
    id: 296,
    first_name: "Gary",
    last_name: "Harris",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard",
    number: 14,
    height: 76
  },
  {
    id: 297,
    first_name: "Joe",
    last_name: "Harris",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward-Guard",
    number: 12,
    height: 78
  },
  {
    id: 298,
    first_name: "Andrew",
    last_name: "Harrison",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard",
    number: 55,
    height: 78
  },
  {
    id: 299,
    first_name: "Shaquille",
    last_name: "Harrison",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 3,
    height: 76
  },
  {
    id: 300,
    first_name: "Tobias",
    last_name: "Harris",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Forward",
    number: 34,
    height: 81
  },
  {
    id: 301,
    first_name: "Isaiah",
    last_name: "Hartenstein",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward-Center",
    number: 55,
    height: 84
  },
  {
    id: 302,
    first_name: "Josh",
    last_name: "Hart",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 3,
    height: 77
  },
  {
    id: 303,
    first_name: "Udonis",
    last_name: "Haslem",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward",
    number: 40,
    height: 80
  },
  {
    id: 304,
    first_name: "Gordon",
    last_name: "Hayward",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Forward",
    number: 20,
    height: 80
  },
  {
    id: 305,
    first_name: "John",
    last_name: "Henson",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 31,
    height: 83
  },
  {
    id: 306,
    first_name: "Juancho",
    last_name: "Hernangomez",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 41,
    height: 81
  },
  {
    id: 307,
    first_name: "Willy",
    last_name: "Hernangomez",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Center",
    number: 41,
    height: 83
  },
  {
    id: 308,
    first_name: "Mario",
    last_name: "Hezonja",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward",
    number: 8,
    height: 80
  },
  {
    id: 309,
    first_name: "Isaiah",
    last_name: "Hicks",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward",
    number: 4,
    height: 81
  },
  {
    id: 310,
    first_name: "Buddy",
    last_name: "Hield",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 24,
    height: 76
  },
  {
    id: 311,
    first_name: "George",
    last_name: "Hill",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard",
    number: 3,
    height: 75
  },
  {
    id: 312,
    first_name: "Solomon",
    last_name: "Hill",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward",
    number: 44,
    height: 79
  },
  {
    id: 313,
    first_name: "Aaron",
    last_name: "Holiday",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 3,
    height: 73
  },
  {
    id: 314,
    first_name: "Jrue",
    last_name: "Holiday",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard",
    number: 11,
    height: 76
  },
  {
    id: 315,
    first_name: "Justin",
    last_name: "Holiday",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward-Guard",
    number: 7,
    height: 78
  },
  {
    id: 316,
    first_name: "Rondae",
    last_name: "Hollis-Jefferson",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward",
    number: 24,
    height: 79
  },
  {
    id: 317,
    first_name: "Richaun",
    last_name: "Holmes",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward-Center",
    number: 21,
    height: 82
  },
  {
    id: 318,
    first_name: "Rodney",
    last_name: "Hood",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard",
    number: 1,
    height: 80
  },
  {
    id: 319,
    first_name: "Al",
    last_name: "Horford",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Center-Forward",
    number: 42,
    height: 82
  },
  {
    id: 320,
    first_name: "Dwight",
    last_name: "Howard",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Center",
    number: 21,
    height: 83
  },
  {
    id: 321,
    first_name: "Kevin",
    last_name: "Huerter",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard",
    number: 3,
    height: 79
  },
  {
    id: 322,
    first_name: "Chandler",
    last_name: "Hutchison",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward",
    number: 15,
    height: 79
  },
  {
    id: 323,
    first_name: "Serge",
    last_name: "Ibaka",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward-Center",
    number: 9,
    height: 82
  },
  {
    id: 324,
    first_name: "Andre",
    last_name: "Iguodala",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard-Forward",
    number: 9,
    height: 78
  },
  {
    id: 325,
    first_name: "Ersan",
    last_name: "Ilyasova",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 77,
    height: 82
  },
  {
    id: 326,
    first_name: "Joe",
    last_name: "Ingles",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward",
    number: 2,
    height: 80
  },
  {
    id: 327,
    first_name: "Brandon",
    last_name: "Ingram",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Forward",
    number: 14,
    height: 81
  },
  {
    id: 328,
    first_name: "Kyrie",
    last_name: "Irving",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard",
    number: 11,
    height: 75
  },
  {
    id: 329,
    first_name: "Jonathan",
    last_name: "Isaac",
    team: "Magic",
    team_abbr: "ORL",
    position: "Forward",
    number: 1,
    height: 82
  },
  {
    id: 330,
    first_name: "Wes",
    last_name: "Iwundu",
    team: "Magic",
    team_abbr: "ORL",
    position: "Forward",
    number: 25,
    height: 79
  },
  {
    id: 331,
    first_name: "Jaren",
    last_name: "Jackson Jr.",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Forward-Center",
    number: 13,
    height: 83
  },
  {
    id: 332,
    first_name: "Demetrius",
    last_name: "Jackson",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 11,
    height: 73
  },
  {
    id: 333,
    first_name: "Frank",
    last_name: "Jackson",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard",
    number: 15,
    height: 75
  },
  {
    id: 334,
    first_name: "Josh",
    last_name: "Jackson",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 20,
    height: 80
  },
  {
    id: 335,
    first_name: "Justin",
    last_name: "Jackson",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 25,
    height: 80
  },
  {
    id: 336,
    first_name: "Reggie",
    last_name: "Jackson",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 1,
    height: 75
  },
  {
    id: 337,
    first_name: "LeBron",
    last_name: "James",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Forward",
    number: 23,
    height: 80
  },
  {
    id: 338,
    first_name: "Amile",
    last_name: "Jefferson",
    team: "Magic",
    team_abbr: "ORL",
    position: "Forward",
    number: 11,
    height: 81
  },
  {
    id: 339,
    first_name: "Jonas",
    last_name: "Jerebko",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 21,
    height: 82
  },
  {
    id: 340,
    first_name: "Alize",
    last_name: "Johnson",
    team: "Pacers",
    team_abbr: "IND",
    position: "Forward",
    number: 24,
    height: 81
  },
  {
    id: 341,
    first_name: "Amir",
    last_name: "Johnson",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Center-Forward",
    number: 5,
    height: 81
  },
  {
    id: 342,
    first_name: "James",
    last_name: "Johnson",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward",
    number: 16,
    height: 80
  },
  {
    id: 343,
    first_name: "Stanley",
    last_name: "Johnson",
    team: "Pistons",
    team_abbr: "DET",
    position: "Forward",
    number: 7,
    height: 79
  },
  {
    id: 344,
    first_name: "Tyler",
    last_name: "Johnson",
    team: "Heat",
    team_abbr: "MIA",
    position: "Guard",
    number: 8,
    height: 76
  },
  {
    id: 345,
    first_name: "Wesley",
    last_name: "Johnson",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward-Guard",
    number: 33,
    height: 79
  },
  {
    id: 346,
    first_name: "Nikola",
    last_name: "Jokic",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Center",
    number: 15,
    height: 84
  },
  {
    id: 347,
    first_name: "Derrick",
    last_name: "Jones Jr.",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward-Guard",
    number: 5,
    height: 79
  },
  {
    id: 348,
    first_name: "Damian",
    last_name: "Jones",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Center",
    number: 15,
    height: 84
  },
  {
    id: 349,
    first_name: "Tyus",
    last_name: "Jones",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 1,
    height: 74
  },
  {
    id: 350,
    first_name: "DeAndre",
    last_name: "Jordan",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Center",
    number: 6,
    height: 83
  },
  {
    id: 351,
    first_name: "Cory",
    last_name: "Joseph",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 6,
    height: 75
  },
  {
    id: 352,
    first_name: "Frank",
    last_name: "Kaminsky",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Forward-Center",
    number: 44,
    height: 84
  },
  {
    id: 353,
    first_name: "Enes",
    last_name: "Kanter",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Center",
    number: 0,
    height: 83
  },
  {
    id: 354,
    first_name: "Luke",
    last_name: "Kennard",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 5,
    height: 77
  },
  {
    id: 355,
    first_name: "Michael",
    last_name: "Kidd-Gilchrist",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Forward",
    number: 14,
    height: 79
  },
  {
    id: 356,
    first_name: "George",
    last_name: "King",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 8,
    height: 78
  },
  {
    id: 357,
    first_name: "Maxi",
    last_name: "Kleber",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward",
    number: 42,
    height: 83
  },
  {
    id: 358,
    first_name: "Brandon",
    last_name: "Knight",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Guard",
    number: 2,
    height: 75
  },
  {
    id: 359,
    first_name: "Kevin",
    last_name: "Knox",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward",
    number: 20,
    height: 81
  },
  {
    id: 360,
    first_name: "Furkan",
    last_name: "Korkmaz",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard-Forward",
    number: 30,
    height: 79
  },
  {
    id: 361,
    first_name: "Luke",
    last_name: "Kornet",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward-Center",
    number: 2,
    height: 85
  },
  {
    id: 362,
    first_name: "Kyle",
    last_name: "Korver",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard-Forward",
    number: 26,
    height: 79
  },
  {
    id: 363,
    first_name: "Kosta",
    last_name: "Koufos",
    team: "Kings",
    team_abbr: "SAC",
    position: "Center",
    number: 41,
    height: 84
  },
  {
    id: 364,
    first_name: "Rodions",
    last_name: "Kurucs",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward",
    number: 0,
    height: 81
  },
  {
    id: 365,
    first_name: "Kyle",
    last_name: "Kuzma",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Forward",
    number: 0,
    height: 81
  },
  {
    id: 366,
    first_name: "Skal",
    last_name: "Labissiere",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 7,
    height: 83
  },
  {
    id: 367,
    first_name: "Jeremy",
    last_name: "Lamb",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 3,
    height: 77
  },
  {
    id: 368,
    first_name: "Zach",
    last_name: "LaVine",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 8,
    height: 77
  },
  {
    id: 369,
    first_name: "Jake",
    last_name: "Layman",
    team: "Blazers",
    team_abbr: "POR",
    position: "Forward",
    number: 10,
    height: 81
  },
  {
    id: 370,
    first_name: "TJ",
    last_name: "Leaf",
    team: "Pacers",
    team_abbr: "IND",
    position: "Forward",
    number: 22,
    height: 82
  },
  {
    id: 371,
    first_name: "Courtney",
    last_name: "Lee",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 5,
    height: 77
  },
  {
    id: 372,
    first_name: "Damion",
    last_name: "Lee",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard",
    number: 1,
    height: 78
  },
  {
    id: 373,
    first_name: "Alex",
    last_name: "Len",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Center",
    number: 25,
    height: 85
  },
  {
    id: 374,
    first_name: "Kawhi",
    last_name: "Leonard",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward",
    number: 2,
    height: 79
  },
  {
    id: 375,
    first_name: "Meyers",
    last_name: "Leonard",
    team: "Blazers",
    team_abbr: "POR",
    position: "Forward-Center",
    number: 11,
    height: 85
  },
  {
    id: 376,
    first_name: "Jon",
    last_name: "Leuer",
    team: "Pistons",
    team_abbr: "DET",
    position: "Forward",
    number: 30,
    height: 82
  },
  {
    id: 377,
    first_name: "Caris",
    last_name: "LeVert",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard",
    number: 22,
    height: 79
  },
  {
    id: 378,
    first_name: "Damian",
    last_name: "Lillard",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 0,
    height: 75
  },
  {
    id: 379,
    first_name: "Jeremy",
    last_name: "Lin",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard",
    number: 7,
    height: 75
  },
  {
    id: 380,
    first_name: "Shaun",
    last_name: "Livingston",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard",
    number: 34,
    height: 79
  },
  {
    id: 381,
    first_name: "Zach",
    last_name: "Lofton",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 18,
    height: 76
  },
  {
    id: 382,
    first_name: "Kevon",
    last_name: "Looney",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 5,
    height: 81
  },
  {
    id: 383,
    first_name: "Brook",
    last_name: "Lopez",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Center",
    number: 11,
    height: 84
  },
  {
    id: 384,
    first_name: "Robin",
    last_name: "Lopez",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Center",
    number: 42,
    height: 84
  },
  {
    id: 385,
    first_name: "Kevin",
    last_name: "Love",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Forward-Center",
    number: 0,
    height: 82
  },
  {
    id: 386,
    first_name: "Kyle",
    last_name: "Lowry",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard",
    number: 7,
    height: 73
  },
  {
    id: 387,
    first_name: "Jordan",
    last_name: "Loyd",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard",
    number: 8,
    height: 76
  },
  {
    id: 388,
    first_name: "Timothe",
    last_name: "Luwawu-Cabarrot",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard-Forward",
    number: 7,
    height: 78
  },
  {
    id: 389,
    first_name: "Tyler",
    last_name: "Lydon",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 20,
    height: 82
  },
  {
    id: 390,
    first_name: "Trey",
    last_name: "Lyles",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 7,
    height: 82
  },
  {
    id: 391,
    first_name: "Shelvin",
    last_name: "Mack",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard",
    number: 6,
    height: 75
  },
  {
    id: 392,
    first_name: "Daryl",
    last_name: "Macon",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard",
    number: 3,
    height: 75
  },
  {
    id: 393,
    first_name: "J.P.",
    last_name: "Macura",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 55,
    height: 77
  },
  {
    id: 394,
    first_name: "Ian",
    last_name: "Mahinmi",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Center",
    number: 28,
    height: 83
  },
  {
    id: 395,
    first_name: "Thon",
    last_name: "Maker",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 7,
    height: 85
  },
  {
    id: 396,
    first_name: "Boban",
    last_name: "Marjanovic",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Center",
    number: 51,
    height: 87
  },
  {
    id: 397,
    first_name: "Lauri",
    last_name: "Markkanen",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward",
    number: 24,
    height: 84
  },
  {
    id: 398,
    first_name: "Jarell",
    last_name: "Martin",
    team: "Magic",
    team_abbr: "ORL",
    position: "Forward",
    number: 2,
    height: 82
  },
  {
    id: 399,
    first_name: "Frank",
    last_name: "Mason",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 10,
    height: 71
  },
  {
    id: 400,
    first_name: "Yante",
    last_name: "Maten",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward",
    number: 0,
    height: 80
  },
  {
    id: 401,
    first_name: "Wesley",
    last_name: "Matthews",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard-Forward",
    number: 23,
    height: 77
  },
  {
    id: 402,
    first_name: "Luc",
    last_name: "Mbah a Moute",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Forward",
    number: 12,
    height: 80
  },
  {
    id: 403,
    first_name: "CJ",
    last_name: "McCollum",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 3,
    height: 75
  },
  {
    id: 404,
    first_name: "T.J.",
    last_name: "McConnell",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 12,
    height: 74
  },
  {
    id: 405,
    first_name: "Doug",
    last_name: "McDermott",
    team: "Pacers",
    team_abbr: "IND",
    position: "Forward",
    number: 20,
    height: 80
  },
  {
    id: 406,
    first_name: "JaVale",
    last_name: "McGee",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Center",
    number: 7,
    height: 84
  },
  {
    id: 407,
    first_name: "Rodney",
    last_name: "McGruder",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward-Guard",
    number: 17,
    height: 76
  },
  {
    id: 408,
    first_name: "Alfonzo",
    last_name: "McKinnie",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Forward",
    number: 28,
    height: 80
  },
  {
    id: 409,
    first_name: "Ben",
    last_name: "McLemore",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 23,
    height: 77
  },
  {
    id: 410,
    first_name: "Jordan",
    last_name: "McRae",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Guard",
    number: 52,
    height: 77
  },
  {
    id: 411,
    first_name: "Jodie",
    last_name: "Meeks",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 20,
    height: 76
  },
  {
    id: 412,
    first_name: "Salah",
    last_name: "Mejri",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Center",
    number: 50,
    height: 86
  },
  {
    id: 413,
    first_name: "De'Anthony",
    last_name: "Melton",
    team: "Suns",
    team_abbr: "PHX",
    position: "Guard",
    number: 14,
    height: 76
  },
  {
    id: 414,
    first_name: "Chimezie",
    last_name: "Metu",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 7,
    height: 82
  },
  {
    id: 415,
    first_name: "Khris",
    last_name: "Middleton",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 22,
    height: 80
  },
  {
    id: 416,
    first_name: "CJ",
    last_name: "Miles",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward-Guard",
    number: 0,
    height: 78
  },
  {
    id: 417,
    first_name: "Darius",
    last_name: "Miller",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward",
    number: 21,
    height: 80
  },
  {
    id: 418,
    first_name: "Paul",
    last_name: "Millsap",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 4,
    height: 80
  },
  {
    id: 419,
    first_name: "Patty",
    last_name: "Mills",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard",
    number: 8,
    height: 72
  },
  {
    id: 420,
    first_name: "Shake",
    last_name: "Milton",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 18,
    height: 78
  },
  {
    id: 421,
    first_name: "Nikola",
    last_name: "Mirotic",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward",
    number: 3,
    height: 82
  },
  {
    id: 422,
    first_name: "Donovan",
    last_name: "Mitchell",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 45,
    height: 75
  },
  {
    id: 423,
    first_name: "Naz",
    last_name: "Mitrou-Long",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 30,
    height: 76
  },
  {
    id: 424,
    first_name: "Malik",
    last_name: "Monk",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 1,
    height: 75
  },
  {
    id: 425,
    first_name: "Greg",
    last_name: "Monroe",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Center",
    number: 15,
    height: 83
  },
  {
    id: 426,
    first_name: "Ben",
    last_name: "Moore",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 26,
    height: 80
  },
  {
    id: 427,
    first_name: "E'Twaun",
    last_name: "Moore",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard",
    number: 55,
    height: 76
  },
  {
    id: 428,
    first_name: "Jaylen",
    last_name: "Morris",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 30,
    height: 77
  },
  {
    id: 429,
    first_name: "Marcus",
    last_name: "Morris",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Forward",
    number: 13,
    height: 81
  },
  {
    id: 430,
    first_name: "Markieff",
    last_name: "Morris",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 5,
    height: 82
  },
  {
    id: 431,
    first_name: "Monte",
    last_name: "Morris",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard",
    number: 11,
    height: 75
  },
  {
    id: 432,
    first_name: "Johnathan",
    last_name: "Motley",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Forward",
    number: 15,
    height: 82
  },
  {
    id: 433,
    first_name: "Timofey",
    last_name: "Mozgov",
    team: "Magic",
    team_abbr: "ORL",
    position: "Center",
    number: 21,
    height: 85
  },
  {
    id: 434,
    first_name: "Emmanuel",
    last_name: "Mudiay",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 1,
    height: 77
  },
  {
    id: 435,
    first_name: "Dejounte",
    last_name: "Murray",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard",
    number: 5,
    height: 77
  },
  {
    id: 436,
    first_name: "Jamal",
    last_name: "Murray",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard",
    number: 27,
    height: 76
  },
  {
    id: 437,
    first_name: "Dzanan",
    last_name: "Musa",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard-Forward",
    number: 30,
    height: 81
  },
  {
    id: 438,
    first_name: "Mike",
    last_name: "Muscala",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Forward-Center",
    number: 31,
    height: 83
  },
  {
    id: 439,
    first_name: "Svi",
    last_name: "Mykhailiuk",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 10,
    height: 80
  },
  {
    id: 440,
    first_name: "Abdel",
    last_name: "Nader",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Forward",
    number: 11,
    height: 78
  },
  {
    id: 441,
    first_name: "Larry",
    last_name: "Nance Jr.",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Forward",
    number: 22,
    height: 81
  },
  {
    id: 442,
    first_name: "Shabazz",
    last_name: "Napier",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard",
    number: 13,
    height: 73
  },
  {
    id: 443,
    first_name: "Nene",
    last_name: "",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Center-Forward",
    number: 42,
    height: 83
  },
  {
    id: 444,
    first_name: "Raul",
    last_name: "Neto",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 25,
    height: 73
  },
  {
    id: 445,
    first_name: "Georges",
    last_name: "Niang",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward",
    number: 31,
    height: 80
  },
  {
    id: 446,
    first_name: "Nerlens",
    last_name: "Noel",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Forward-Center",
    number: 3,
    height: 83
  },
  {
    id: 447,
    first_name: "Dirk",
    last_name: "Nowitzki",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward",
    number: 41,
    height: 84
  },
  {
    id: 448,
    first_name: "Frank",
    last_name: "Ntilikina",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 11,
    height: 78
  },
  {
    id: 449,
    first_name: "James",
    last_name: "Nunnally",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 7,
    height: 79
  },
  {
    id: 450,
    first_name: "Jusuf",
    last_name: "Nurkic",
    team: "Blazers",
    team_abbr: "POR",
    position: "Center",
    number: 27,
    height: 84
  },
  {
    id: 451,
    first_name: "David",
    last_name: "Nwaba",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard",
    number: 12,
    height: 76
  },
  {
    id: 452,
    first_name: "Royce",
    last_name: "O'Neale",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward",
    number: 23,
    height: 78
  },
  {
    id: 453,
    first_name: "Kyle",
    last_name: "O'Quinn",
    team: "Pacers",
    team_abbr: "IND",
    position: "Center",
    number: 10,
    height: 82
  },
  {
    id: 454,
    first_name: "Semi",
    last_name: "Ojeleye",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Forward",
    number: 37,
    height: 79
  },
  {
    id: 455,
    first_name: "Jahlil",
    last_name: "Okafor",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Center",
    number: 8,
    height: 83
  },
  {
    id: 456,
    first_name: "Elie",
    last_name: "Okobo",
    team: "Suns",
    team_abbr: "PHX",
    position: "Guard",
    number: 2,
    height: 75
  },
  {
    id: 457,
    first_name: "Josh",
    last_name: "Okogie",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 20,
    height: 76
  },
  {
    id: 458,
    first_name: "Victor",
    last_name: "Oladipo",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 4,
    height: 76
  },
  {
    id: 459,
    first_name: "Kelly",
    last_name: "Olynyk",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward",
    number: 9,
    height: 84
  },
  {
    id: 460,
    first_name: "Cedi",
    last_name: "Osman",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Forward",
    number: 16,
    height: 80
  },
  {
    id: 461,
    first_name: "Kelly",
    last_name: "Oubre Jr.",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 12,
    height: 79
  },
  {
    id: 462,
    first_name: "Zaza",
    last_name: "Pachulia",
    team: "Pistons",
    team_abbr: "DET",
    position: "Center",
    number: 27,
    height: 83
  },
  {
    id: 463,
    first_name: "Jabari",
    last_name: "Parker",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward",
    number: 2,
    height: 80
  },
  {
    id: 464,
    first_name: "Tony",
    last_name: "Parker",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 9,
    height: 74
  },
  {
    id: 465,
    first_name: "Chandler",
    last_name: "Parsons",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Forward",
    number: 25,
    height: 82
  },
  {
    id: 466,
    first_name: "Patrick",
    last_name: "Patterson",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Forward",
    number: 54,
    height: 81
  },
  {
    id: 467,
    first_name: "Justin",
    last_name: "Patton",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Center",
    number: 0,
    height: 84
  },
  {
    id: 468,
    first_name: "Chris",
    last_name: "Paul",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Guard",
    number: 3,
    height: 72
  },
  {
    id: 469,
    first_name: "Cameron",
    last_name: "Payne",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 22,
    height: 75
  },
  {
    id: 470,
    first_name: "Elfrid",
    last_name: "Payton",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard",
    number: 4,
    height: 76
  },
  {
    id: 471,
    first_name: "Theo",
    last_name: "Pinson",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard-Forward",
    number: 10,
    height: 78
  },
  {
    id: 472,
    first_name: "Mason",
    last_name: "Plumlee",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward-Center",
    number: 24,
    height: 83
  },
  {
    id: 473,
    first_name: "Miles",
    last_name: "Plumlee",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Center",
    number: 18,
    height: 83
  },
  {
    id: 474,
    first_name: "Jakob",
    last_name: "Poeltl",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Center",
    number: 25,
    height: 84
  },
  {
    id: 475,
    first_name: "Quincy",
    last_name: "Pondexter",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Forward",
    number: 3,
    height: 79
  },
  {
    id: 476,
    first_name: "Michael",
    last_name: "Porter Jr.",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 1,
    height: 82
  },
  {
    id: 477,
    first_name: "Otto",
    last_name: "Porter Jr.",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 22,
    height: 80
  },
  {
    id: 478,
    first_name: "Bobby",
    last_name: "Portis",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Forward",
    number: 5,
    height: 83
  },
  {
    id: 479,
    first_name: "Kristaps",
    last_name: "Porzingis",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward-Center",
    number: 6,
    height: 87
  },
  {
    id: 480,
    first_name: "Dwight",
    last_name: "Powell",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward-Center",
    number: 7,
    height: 83
  },
  {
    id: 481,
    first_name: "Norman",
    last_name: "Powell",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward-Guard",
    number: 24,
    height: 76
  },
  {
    id: 482,
    first_name: "Alex",
    last_name: "Poythress",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Forward",
    number: 22,
    height: 81
  },
  {
    id: 483,
    first_name: "Billy",
    last_name: "Preston",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Forward",
    number: 20,
    height: 82
  },
  {
    id: 484,
    first_name: "Taurean",
    last_name: "Prince",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Forward",
    number: 12,
    height: 80
  },
  {
    id: 485,
    first_name: "Zhou",
    last_name: "Qi",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward-Center",
    number: 9,
    height: 85
  },
  {
    id: 486,
    first_name: "Ivan",
    last_name: "Rabb",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Forward",
    number: 10,
    height: 82
  },
  {
    id: 487,
    first_name: "Chasson",
    last_name: "Randle",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Guard",
    number: 9,
    height: 74
  },
  {
    id: 488,
    first_name: "Julius",
    last_name: "Randle",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Forward",
    number: 30,
    height: 81
  },
  {
    id: 489,
    first_name: "Zach",
    last_name: "Randolph",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 50,
    height: 81
  },
  {
    id: 490,
    first_name: "JJ",
    last_name: "Redick",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 17,
    height: 76
  },
  {
    id: 491,
    first_name: "Davon",
    last_name: "Reed",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 32,
    height: 77
  },
  {
    id: 492,
    first_name: "Josh",
    last_name: "Richardson",
    team: "Heat",
    team_abbr: "MIA",
    position: "Guard-Forward",
    number: 0,
    height: 78
  },
  {
    id: 493,
    first_name: "Malachi",
    last_name: "Richardson",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard",
    number: 22,
    height: 78
  },
  {
    id: 494,
    first_name: "Austin",
    last_name: "Rivers",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Guard",
    number: 1,
    height: 76
  },
  {
    id: 495,
    first_name: "Andre",
    last_name: "Roberson",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard-Forward",
    number: 21,
    height: 79
  },
  {
    id: 496,
    first_name: "Glenn",
    last_name: "Robinson III",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard-Forward",
    number: 22,
    height: 78
  },
  {
    id: 497,
    first_name: "Devin",
    last_name: "Robinson",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 7,
    height: 80
  },
  {
    id: 498,
    first_name: "Duncan",
    last_name: "Robinson",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward",
    number: 55,
    height: 80
  },
  {
    id: 499,
    first_name: "Jerome",
    last_name: "Robinson",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 10,
    height: 77
  },
  {
    id: 500,
    first_name: "Mitchell",
    last_name: "Robinson",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Center",
    number: 26,
    height: 85
  },
  {
    id: 501,
    first_name: "Rajon",
    last_name: "Rondo",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 9,
    height: 73
  },
  {
    id: 502,
    first_name: "Derrick",
    last_name: "Rose",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 25,
    height: 75
  },
  {
    id: 503,
    first_name: "Terrence",
    last_name: "Ross",
    team: "Magic",
    team_abbr: "ORL",
    position: "Guard-Forward",
    number: 31,
    height: 79
  },
  {
    id: 504,
    first_name: "Terry",
    last_name: "Rozier",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard",
    number: 12,
    height: 73
  },
  {
    id: 505,
    first_name: "Ricky",
    last_name: "Rubio",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Guard",
    number: 3,
    height: 76
  },
  {
    id: 506,
    first_name: "D'Angelo",
    last_name: "Russell",
    team: "Nets",
    team_abbr: "BKN",
    position: "Guard",
    number: 1,
    height: 77
  },
  {
    id: 507,
    first_name: "Domantas",
    last_name: "Sabonis",
    team: "Pacers",
    team_abbr: "IND",
    position: "Forward",
    number: 11,
    height: 83
  },
  {
    id: 508,
    first_name: "Dario",
    last_name: "Saric",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 36,
    height: 82
  },
  {
    id: 509,
    first_name: "Tomas",
    last_name: "Satoransky",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Guard-Forward",
    number: 31,
    height: 79
  },
  {
    id: 510,
    first_name: "Dennis",
    last_name: "Schroder",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 17,
    height: 73
  },
  {
    id: 511,
    first_name: "Mike",
    last_name: "Scott",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Forward",
    number: 30,
    height: 80
  },
  {
    id: 512,
    first_name: "Thabo",
    last_name: "Sefolosha",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Forward",
    number: 22,
    height: 79
  },
  {
    id: 513,
    first_name: "Wayne",
    last_name: "Selden",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard-Forward",
    number: 7,
    height: 77
  },
  {
    id: 514,
    first_name: "Collin",
    last_name: "Sexton",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Guard",
    number: 2,
    height: 74
  },
  {
    id: 515,
    first_name: "Landry",
    last_name: "Shamet",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 1,
    height: 77
  },
  {
    id: 516,
    first_name: "Iman",
    last_name: "Shumpert",
    team: "Kings",
    team_abbr: "SAC",
    position: "Guard",
    number: 9,
    height: 77
  },
  {
    id: 517,
    first_name: "Pascal",
    last_name: "Siakam",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Forward",
    number: 43,
    height: 81
  },
  {
    id: 518,
    first_name: "Ben",
    last_name: "Simmons",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard-Forward",
    number: 25,
    height: 82
  },
  {
    id: 519,
    first_name: "Jonathon",
    last_name: "Simmons",
    team: "Magic",
    team_abbr: "ORL",
    position: "Forward",
    number: 17,
    height: 78
  },
  {
    id: 520,
    first_name: "Anfernee",
    last_name: "Simons",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 24,
    height: 76
  },
  {
    id: 521,
    first_name: "Marcus",
    last_name: "Smart",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard",
    number: 36,
    height: 76
  },
  {
    id: 522,
    first_name: "Dennis",
    last_name: "Smith Jr.",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Guard",
    number: 1,
    height: 75
  },
  {
    id: 523,
    first_name: "Ish",
    last_name: "Smith",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 14,
    height: 72
  },
  {
    id: 524,
    first_name: "Jason",
    last_name: "Smith",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward-Center",
    number: 14,
    height: 84
  },
  {
    id: 525,
    first_name: "Zhaire",
    last_name: "Smith",
    team: "Sixers",
    team_abbr: "PHI",
    position: "Guard",
    number: 8,
    height: 76
  },
  {
    id: 526,
    first_name: "Tony",
    last_name: "Snell",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Guard",
    number: 21,
    height: 79
  },
  {
    id: 527,
    first_name: "Ray",
    last_name: "Spalding",
    team: "Mavericks",
    team_abbr: "DAL",
    position: "Forward",
    number: 26,
    height: 82
  },
  {
    id: 528,
    first_name: "Omari",
    last_name: "Spellman",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Forward",
    number: 6,
    height: 81
  },
  {
    id: 529,
    first_name: "Nik",
    last_name: "Stauskas",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 6,
    height: 78
  },
  {
    id: 530,
    first_name: "DJ",
    last_name: "Stephens",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard-Forward",
    number: 20,
    height: 77
  },
  {
    id: 531,
    first_name: "Lance",
    last_name: "Stephenson",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Guard",
    number: 6,
    height: 78
  },
  {
    id: 532,
    first_name: "Edmond",
    last_name: "Sumner",
    team: "Pacers",
    team_abbr: "IND",
    position: "Guard",
    number: 5,
    height: 78
  },
  {
    id: 533,
    first_name: "Caleb",
    last_name: "Swanigan",
    team: "Blazers",
    team_abbr: "POR",
    position: "Forward",
    number: 50,
    height: 81
  },
  {
    id: 534,
    first_name: "Jayson",
    last_name: "Tatum",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Forward",
    number: 0,
    height: 80
  },
  {
    id: 535,
    first_name: "Jeff",
    last_name: "Teague",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 0,
    height: 74
  },
  {
    id: 536,
    first_name: "Garrett",
    last_name: "Temple",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard-Forward",
    number: 17,
    height: 78
  },
  {
    id: 537,
    first_name: "Milos",
    last_name: "Teodosic",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 4,
    height: 77
  },
  {
    id: 538,
    first_name: "Jared",
    last_name: "Terrell",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 3,
    height: 75
  },
  {
    id: 539,
    first_name: "Daniel",
    last_name: "Theis",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Forward",
    number: 27,
    height: 80
  },
  {
    id: 540,
    first_name: "Isaiah",
    last_name: "Thomas",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Guard",
    number: 0,
    height: 69
  },
  {
    id: 541,
    first_name: "Khyri",
    last_name: "Thomas",
    team: "Pistons",
    team_abbr: "DET",
    position: "Guard",
    number: 13,
    height: 75
  },
  {
    id: 542,
    first_name: "Lance",
    last_name: "Thomas",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward",
    number: 42,
    height: 80
  },
  {
    id: 543,
    first_name: "Klay",
    last_name: "Thompson",
    team: "Warriors",
    team_abbr: "GSW",
    position: "Guard",
    number: 11,
    height: 79
  },
  {
    id: 544,
    first_name: "Tristan",
    last_name: "Thompson",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Center-Forward",
    number: 13,
    height: 82
  },
  {
    id: 545,
    first_name: "Sindarius",
    last_name: "Thornwell",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 0,
    height: 77
  },
  {
    id: 546,
    first_name: "Anthony",
    last_name: "Tolliver",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward",
    number: 43,
    height: 80
  },
  {
    id: 547,
    first_name: "Karl-Anthony",
    last_name: "Towns",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Center",
    number: 32,
    height: 84
  },
  {
    id: 548,
    first_name: "Gary",
    last_name: "Trent Jr.",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard",
    number: 9,
    height: 78
  },
  {
    id: 549,
    first_name: "Allonzo",
    last_name: "Trier",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Guard",
    number: 14,
    height: 77
  },
  {
    id: 550,
    first_name: "PJ",
    last_name: "Tucker",
    team: "Rockets",
    team_abbr: "HOU",
    position: "Forward",
    number: 17,
    height: 78
  },
  {
    id: 551,
    first_name: "Evan",
    last_name: "Turner",
    team: "Blazers",
    team_abbr: "POR",
    position: "Guard-Forward",
    number: 1,
    height: 79
  },
  {
    id: 552,
    first_name: "Myles",
    last_name: "Turner",
    team: "Pacers",
    team_abbr: "IND",
    position: "Center-Forward",
    number: 33,
    height: 83
  },
  {
    id: 553,
    first_name: "Ekpe",
    last_name: "Udoh",
    team: "Jazz",
    team_abbr: "UTA",
    position: "Center-Forward",
    number: 33,
    height: 82
  },
  {
    id: 554,
    first_name: "Tyler",
    last_name: "Ulis",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 0,
    height: 70
  },
  {
    id: 555,
    first_name: "Jonas",
    last_name: "Valanciunas",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Center",
    number: 17,
    height: 84
  },
  {
    id: 556,
    first_name: "Denzel",
    last_name: "Valentine",
    team: "Bulls",
    team_abbr: "CHI",
    position: "Guard",
    number: 45,
    height: 78
  },
  {
    id: 557,
    first_name: "Jarred",
    last_name: "Vanderbilt",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Forward",
    number: 8,
    height: 81
  },
  {
    id: 558,
    first_name: "Fred",
    last_name: "VanVleet",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard",
    number: 23,
    height: 72
  },
  {
    id: 559,
    first_name: "Noah",
    last_name: "Vonleh",
    team: "Knicks",
    team_abbr: "NYK",
    position: "Forward",
    number: 32,
    height: 81
  },
  {
    id: 560,
    first_name: "Nikola",
    last_name: "Vucevic",
    team: "Magic",
    team_abbr: "ORL",
    position: "Center",
    number: 9,
    height: 84
  },
  {
    id: 561,
    first_name: "Dwyane",
    last_name: "Wade",
    team: "Heat",
    team_abbr: "MIA",
    position: "Guard",
    number: 3,
    height: 76
  },
  {
    id: 562,
    first_name: "Moritz",
    last_name: "Wagner",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Center",
    number: 15,
    height: 83
  },
  {
    id: 563,
    first_name: "Dion",
    last_name: "Waiters",
    team: "Heat",
    team_abbr: "MIA",
    position: "Guard",
    number: 11,
    height: 76
  },
  {
    id: 564,
    first_name: "Lonnie",
    last_name: "Walker IV",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard",
    number: 1,
    height: 77
  },
  {
    id: 565,
    first_name: "Kemba",
    last_name: "Walker",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Guard",
    number: 15,
    height: 73
  },
  {
    id: 566,
    first_name: "Tyrone",
    last_name: "Wallace",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 9,
    height: 77
  },
  {
    id: 567,
    first_name: "John",
    last_name: "Wall",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Guard",
    number: 2,
    height: 76
  },
  {
    id: 568,
    first_name: "Brad",
    last_name: "Wanamaker",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Guard",
    number: 9,
    height: 76
  },
  {
    id: 569,
    first_name: "T.J.",
    last_name: "Warren",
    team: "Suns",
    team_abbr: "PHX",
    position: "Forward",
    number: 12,
    height: 80
  },
  {
    id: 570,
    first_name: "Yuta",
    last_name: "Watanabe",
    team: "Grizzlies",
    team_abbr: "MEM",
    position: "Guard",
    number: 12,
    height: 81
  },
  {
    id: 571,
    first_name: "Thomas",
    last_name: "Welsh",
    team: "Nuggets",
    team_abbr: "DEN",
    position: "Center",
    number: 45,
    height: 84
  },
  {
    id: 572,
    first_name: "Russell",
    last_name: "Westbrook",
    team: "Thunder",
    team_abbr: "OKC",
    position: "Guard",
    number: 0,
    height: 75
  },
  {
    id: 573,
    first_name: "Derrick",
    last_name: "White",
    team: "Spurs",
    team_abbr: "SAS",
    position: "Guard",
    number: 4,
    height: 76
  },
  {
    id: 574,
    first_name: "Okaro",
    last_name: "White",
    team: "Wizards",
    team_abbr: "WAS",
    position: "Forward",
    number: 15,
    height: 80
  },
  {
    id: 575,
    first_name: "Hassan",
    last_name: "Whiteside",
    team: "Heat",
    team_abbr: "MIA",
    position: "Center",
    number: 21,
    height: 84
  },
  {
    id: 576,
    first_name: "Andrew",
    last_name: "Wiggins",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Forward-Guard",
    number: 22,
    height: 80
  },
  {
    id: 577,
    first_name: "Robert",
    last_name: "Williams III",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Center-Forward",
    number: 44,
    height: 82
  },
  {
    id: 578,
    first_name: "Alan",
    last_name: "Williams",
    team: "Nets",
    team_abbr: "BKN",
    position: "Forward-Center",
    number: 15,
    height: 80
  },
  {
    id: 579,
    first_name: "C.J.",
    last_name: "Williams",
    team: "Timberwolves",
    team_abbr: "MIN",
    position: "Guard",
    number: 12,
    height: 77
  },
  {
    id: 580,
    first_name: "Johnathan",
    last_name: "Williams",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Forward",
    number: 19,
    height: 81
  },
  {
    id: 581,
    first_name: "Kenrich",
    last_name: "Williams",
    team: "Pelicans",
    team_abbr: "NOP",
    position: "Guard-Forward",
    number: 34,
    height: 79
  },
  {
    id: 582,
    first_name: "Lou",
    last_name: "Williams",
    team: "Clippers",
    team_abbr: "LAC",
    position: "Guard",
    number: 23,
    height: 73
  },
  {
    id: 583,
    first_name: "Marvin",
    last_name: "Williams",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Forward",
    number: 2,
    height: 81
  },
  {
    id: 584,
    first_name: "Troy",
    last_name: "Williams",
    team: "Kings",
    team_abbr: "SAC",
    position: "Forward",
    number: 19,
    height: 79
  },
  {
    id: 585,
    first_name: "D.J.",
    last_name: "Wilson",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 5,
    height: 82
  },
  {
    id: 586,
    first_name: "Justise",
    last_name: "Winslow",
    team: "Heat",
    team_abbr: "MIA",
    position: "Forward",
    number: 20,
    height: 79
  },
  {
    id: 587,
    first_name: "Christian",
    last_name: "Wood",
    team: "Bucks",
    team_abbr: "MIL",
    position: "Forward",
    number: 35,
    height: 82
  },
  {
    id: 588,
    first_name: "Delon",
    last_name: "Wright",
    team: "Raptors",
    team_abbr: "TOR",
    position: "Guard",
    number: 55,
    height: 77
  },
  {
    id: 589,
    first_name: "Guerschon",
    last_name: "Yabusele",
    team: "Celtics",
    team_abbr: "BOS",
    position: "Forward",
    number: 30,
    height: 80
  },
  {
    id: 590,
    first_name: "Thaddeus",
    last_name: "Young",
    team: "Pacers",
    team_abbr: "IND",
    position: "Forward",
    number: 21,
    height: 80
  },
  {
    id: 591,
    first_name: "Trae",
    last_name: "Young",
    team: "Hawks",
    team_abbr: "ATL",
    position: "Guard",
    number: 11,
    height: 74
  },
  {
    id: 592,
    first_name: "Cody",
    last_name: "Zeller",
    team: "Hornets",
    team_abbr: "CHA",
    position: "Center",
    number: 40,
    height: 84
  },
  {
    id: 593,
    first_name: "Ante",
    last_name: "Zizic",
    team: "Cavaliers",
    team_abbr: "CLE",
    position: "Center",
    number: 41,
    height: 83
  },
  {
    id: 594,
    first_name: "Ivica",
    last_name: "Zubac",
    team: "Lakers",
    team_abbr: "LAL",
    position: "Center",
    number: 40,
    height: 85
  }
];

const resolvers = {
  Query: {
    players: () => players
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
