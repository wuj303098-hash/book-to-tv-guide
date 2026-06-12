import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const siteUrl = process.env.SITE_URL || "https://booktotvguide.com";
const date = "2026-06-12";

const guideLinks = [
  ["Every Year After hub", "/every-year-after/"],
  ["Season 2 status", "/every-year-after-season-2/"],
  ["Ending explained", "/every-year-after-ending-explained/"],
  ["Does Charlie die?", "/does-charlie-die-in-every-year-after/"],
  ["What did Percy do?", "/what-did-percy-do-in-every-year-after/"],
  ["Cast and characters", "/every-year-after-cast/"],
  ["Book vs show changes", "/every-year-after-vs-every-summer-after/"],
  ["Episode guide", "/every-year-after-episodes/"]
];

const commonSources = [
  ["Prime Video title page", "https://www.primevideo.com/detail/0H54EQHZIV8TEJOVYJBDCTFLF1"],
  ["People finale explainer", "https://people.com/every-year-after-ending-explained-11994983"],
  ["Good Housekeeping season 2 status", "https://www.goodhousekeeping.com/entertainment/tv-shows/a71535153/every-year-after-prime-season-2-release-date-cast-news/"],
  ["Decider ending explainer", "https://decider.com/2026/06/11/every-year-after-ending-explained-prime-video/"]
];

const pages = [
  {
    slug: "",
    title: "Book to TV Guide",
    description: "Book to TV Guide tracks romance shows, book adaptations, ending explainers, cast guides, episode recaps, and season renewal updates for fast-moving TV fans.",
    heading: "Book to TV Guide",
    eyebrow: "Romance shows and book adaptations",
    deck: "Fast, spoiler-aware guides for the shows readers are searching for right now.",
    type: "WebSite",
    hero: true,
    sections: [
      {
        title: "Start With Every Year After",
        body: [
          "Every Year After is the first active guide on this site because search demand moved quickly after the Prime Video release. Viewers are not only searching the show title. They are asking whether season 2 will happen, what Charlie's finale collapse means, what Percy did, who plays each character, and how the series compares with Carley Fortune's book Every Summer After.",
          "The site is built around those real questions. Each guide opens with a direct answer, then adds context, spoiler boundaries, character notes, and links to the next useful page. That structure helps readers move from a quick answer into deeper coverage without feeling trapped in a thin recap."
        ],
        links: guideLinks
      },
      {
        title: "How We Cover Adaptations",
        body: [
          "Book-to-screen fans usually search in clusters. A viewer who asks about the ending often also asks about the book, the cast, the next season, and the meaning of a character decision. Book to TV Guide is organized for that search behavior. A show hub collects the major pages, while each article targets one clear question and links back to the hub.",
          "The goal is not to replace official streaming pages or fan communities. The goal is to explain plot points, renewal status, episode order, and book differences in plain English with current sources and clear update dates."
        ]
      },
      {
        title: "Current Editorial Focus",
        body: [
          "The launch focus is Every Year After, Every Summer After, One Golden Summer, and nearby romance adaptation searches. As new shows break out, this site can add compact guide hubs for other series such as Off Campus, The Summer I Turned Pretty, Sweet Magnolias, and future BookTok adaptations.",
          "Every page is static, crawlable, and written as complete text in the HTML source. That keeps the site friendly to readers, search engines, and lightweight hosting."
        ]
      }
    ],
    faqs: [
      ["What is Book to TV Guide?", "Book to TV Guide is an independent guide site for TV shows adapted from books, with a focus on romance, young adult drama, endings, casts, and renewal updates."],
      ["Is this site affiliated with Prime Video or any publisher?", "No. Book to TV Guide is an independent editorial site and links to official sources when useful."]
    ]
  },
  {
    slug: "every-year-after",
    title: "Every Year After Guide",
    description: "A complete Every Year After guide covering season 2 status, the ending, Charlie's cliffhanger, Percy and Sam, cast, episodes, and book differences.",
    heading: "Every Year After Guide",
    eyebrow: "Prime Video romance guide",
    deck: "Everything to read after finishing season 1: ending, season 2 clues, cast, episodes, book links, and the questions fans are searching now.",
    sections: [
      {
        title: "Quick Answer",
        body: [
          "Every Year After is a Prime Video romantic drama based on Carley Fortune's novel Every Summer After. Season 1 follows Percy Fraser and Sam Florek across formative summers and a painful reunion years later in Barry's Bay. The series launched with eight episodes, and the biggest search questions right now are about the season 1 ending, Charlie's cliffhanger, Percy's secret, and whether Amazon will renew the show for season 2.",
          "As of June 12, 2026, season 2 has not been officially confirmed. The finale clearly leaves room for more story, especially through Charlie and the One Golden Summer connection, but renewal status should be treated as pending until Prime Video or the producers announce it."
        ]
      },
      {
        title: "What To Read First",
        body: [
          "If you finished the show and only need the fastest path, start with the season 2 status page and the ending explained page. Those two guides answer the largest active search cluster. If you are confused about the finale collapse, read the Charlie page next. If your question is about the betrayal that shaped Percy and Sam's relationship, read the Percy explainer.",
          "The cast guide is best for identifying Sadie Soverall, Matt Cornett, Michael Bradway, Abigail Cowen, Aurora Perrineau, Joseph Chiu, Elisha Cuthbert, and recurring players. The episode guide is useful if you are trying to remember where a plot point happened or whether the series released weekly or all at once."
        ],
        links: guideLinks.filter(([label]) => label !== "Every Year After hub")
      },
      {
        title: "Why The Search Demand Is Spiking",
        body: [
          "The trend data points to a classic streaming-release pattern. After viewers binge a short season, they search questions instead of broad reviews. Phrases like season 2, ending explained, does Charlie die, what did Percy do, cast, book, and episodes are all intent-rich. These are not casual curiosity terms. They come from people who have watched, are watching, or are deciding whether the show is worth starting.",
          "That makes the best content format a guide cluster rather than a single review. A review can rank for the title, but a cluster can answer many long-tail questions and keep readers moving through the site."
        ]
      },
      {
        title: "Spoiler Note",
        body: [
          "The deeper guides include spoilers for season 1 and may discuss book context from Every Summer After and One Golden Summer. Each page gives a direct answer early, then expands carefully. If you have not finished season 1, start with the cast guide or episode guide before reading the ending pages."
        ]
      }
    ],
    faqs: [
      ["Is Every Year After based on a book?", "Yes. The series is based on Carley Fortune's novel Every Summer After, though the TV adaptation changes some story details and uses the title Every Year After."],
      ["How many episodes are in Every Year After season 1?", "Season 1 has eight episodes on Prime Video."],
      ["Is Every Year After season 2 confirmed?", "Not as of June 12, 2026. The finale sets up more story, but renewal is still unconfirmed."]
    ]
  },
  {
    slug: "every-year-after-season-2",
    title: "Every Year After Season 2",
    description: "Every Year After season 2 renewal status, release date clues, likely cast, Charlie story setup, and what One Golden Summer could mean for the next chapter.",
    heading: "Every Year After Season 2: Renewal Status, Release Date Clues, Cast and Story Setup",
    eyebrow: "Updated June 12, 2026",
    deck: "The short answer: season 2 is not officially renewed yet, but the finale was built to make viewers ask for it.",
    sections: [
      {
        title: "Is Every Year After Getting A Season 2?",
        body: [
          "As of June 12, 2026, Every Year After has not been officially renewed for season 2. That is the most important answer because many search results and social posts use hopeful language. Hope is different from confirmation. Until Prime Video, Amazon MGM Studios, or the creative team announces a renewal, the accurate status is pending.",
          "The reason season 2 speculation is so active is simple: season 1 ends with unresolved emotional threads and a sharp cliffhanger around Charlie. The show also comes from existing book material. Carley Fortune's Every Summer After connects to One Golden Summer, and entertainment outlets have noted that a future season could use Charlie's story as a blueprint."
        ]
      },
      {
        title: "When Could Season 2 Be Released?",
        body: [
          "There is no official release date. If the show is renewed soon, a new season would still need writing, production, post-production, marketing, and scheduling. For a streaming romantic drama with location work and a returning ensemble, a practical expectation would be a later 2027 window at the earliest, but that is an estimate, not an announcement.",
          "The safest way to read the timeline is this: first watch for a renewal announcement, then casting or production updates, then a trailer, then a release date. Any site claiming a precise season 2 release date before renewal is guessing."
        ]
      },
      {
        title: "What Would Season 2 Be About?",
        body: [
          "The finale points toward Charlie. In the last stretch of season 1, Charlie's health scare and his unresolved bond with Sam create the strongest continuation hook. If season 2 adapts ideas from One Golden Summer, it could shift more attention to Charlie's future while still revisiting Percy, Sam, Barry's Bay, and the emotional fallout from the first season.",
          "That does not mean Percy and Sam disappear. Their relationship is not sealed in a simple happily-ever-after at the end of season 1. The final kitchen scene gives hope, but the show leaves room for rebuilding trust, family repair, and adult consequences. A second season could balance a new central romance with continuing arcs for the existing characters."
        ]
      },
      {
        title: "Who Would Return In The Cast?",
        body: [
          "No season 2 cast list has been announced because the season itself is unconfirmed. If the show continues directly from the finale, the expected returning names would likely include Sadie Soverall as Percy Fraser, Matt Cornett as Sam Florek, Michael Bradway as Charlie Florek, Abigail Cowen as Delilah, Aurora Perrineau as Chantal, and Joseph Chiu as Jordie. Elisha Cuthbert's Sue remains important through memory and season 1's emotional foundation, even though the present-day story begins after Sue's death.",
          "A One Golden Summer influenced season could also introduce Alice Everly, depending on how closely the writers follow that book's setup. That character has not been officially announced for a future season."
        ]
      },
      {
        title: "Why Fans Think Season 2 Is Likely",
        body: [
          "Fans are reading the finale as an intentional setup because it does more than resolve the first romance. It opens a new question at the exact moment the season ends. Charlie sees a photo tied to the past, recognizes its meaning, and then experiences a frightening medical emergency. That kind of final beat is rarely accidental in a streaming romance drama.",
          "The title also gives the adaptation room to move beyond one summer. A show called Every Year After can return to Barry's Bay in different seasons, relationships, and time periods. That flexibility is useful if the creators want to expand beyond a one-book adaptation."
        ]
      },
      {
        title: "What To Watch For Next",
        body: [
          "Watch for three signals: an official renewal from Prime Video, public production listings, and new casting notices. Social posts, fan edits, and speculative YouTube videos can be fun, but they are not confirmation. This page should be updated whenever a reliable source changes the status from pending to renewed, canceled, filming, or dated."
        ]
      }
    ],
    faqs: [
      ["Is Every Year After season 2 confirmed?", "No. As of June 12, 2026, season 2 has not been officially confirmed."],
      ["Could season 2 adapt One Golden Summer?", "It could. The season 1 finale points strongly toward Charlie, and One Golden Summer gives the series a natural direction for his story."],
      ["Will Percy and Sam return in season 2?", "No cast has been confirmed, but if season 2 continues from the finale, Percy and Sam would be expected to remain important."]
    ]
  },
  {
    slug: "every-year-after-ending-explained",
    title: "Every Year After Ending Explained",
    description: "Every Year After ending explained, including Percy and Sam's final scene, Charlie's collapse, Sue's Tavern, Delilah, Chantal, Jordie, and season 2 setup.",
    heading: "Every Year After Ending Explained: Does Charlie Die and Do Percy and Sam End Up Together?",
    eyebrow: "Spoilers for season 1",
    deck: "The finale offers emotional closure, but it also leaves one huge question open for a possible second season.",
    sections: [
      {
        title: "The Ending In One Minute",
        body: [
          "Every Year After ends with hope for Percy and Sam, but not a clean resolution. Percy returns to Barry's Bay after Sue's death, faces the secret she carried for years, and eventually receives the keys to Sue's Tavern. Sam is still hurt by the truth about Percy and Charlie, yet his final return to the Tavern suggests he may be ready to start again.",
          "The more dramatic cliffhanger belongs to Charlie. After seeing a photograph tied to his past at the lake, Charlie appears to suffer a serious medical emergency. The scene strongly suggests a heart-related crisis and points toward story material associated with One Golden Summer."
        ]
      },
      {
        title: "Do Percy And Sam End Up Together?",
        body: [
          "Not exactly. The finale does not end with Percy and Sam officially back together as a stable couple. They share intimacy, grief, and emotional honesty, but Sam cannot instantly move past the hurt caused by Percy's history with Charlie. That choice makes the ending more open than a simple romantic reunion.",
          "The final Tavern scene is still hopeful. Percy is working in the place Sue left her, and Sam arrives after the reopening. The moment mirrors the emotional language of coming home. It suggests that Sam has not closed the door on Percy, and that their next step would be a slower rebuilding rather than an instant reset."
        ]
      },
      {
        title: "What Happens To Charlie?",
        body: [
          "Charlie ends the season in the most dangerous position. He recognizes himself, Sam, and Percy in an old photo, then collapses while clutching his body. The show does not give viewers a hospital scene or a final medical answer before the credits. That is why search demand for does Charlie die in Every Year After rose so quickly after release.",
          "The most likely reading is that Charlie survives if the show follows the connected book direction. One Golden Summer gives Charlie more story, which would be hard to adapt if the TV version ended his life in this cliffhanger. Still, the series itself leaves the answer unresolved until another season or official explanation confirms it."
        ]
      },
      {
        title: "Why Sue's Tavern Matters",
        body: [
          "Sue's Tavern is more than a location. It is a test of belonging. Sue leaving the Tavern to Percy creates anger, confusion, and grief because Percy has been absent for years while the Florek family carried the everyday weight of the place. At the same time, Sue's choice shows that she understood Percy's bond with Barry's Bay even when Percy could not face it herself.",
          "By the end, Percy reopening the Tavern is a visible sign that she is no longer running from the lake, the town, or the people connected to her most painful mistake. It also gives Sam a place to return to when he is ready."
        ]
      },
      {
        title: "What Happens With Delilah, Chantal, And Jordie?",
        body: [
          "Delilah repairs part of her friendship with Percy and steps away from her plan to turn the Tavern into something more exclusive. That choice helps the finale feel less like a property dispute and more like a story about returning a place to its emotional center.",
          "Chantal and Jordie move toward a clearer relationship. Their arc gives the finale a softer romantic counterpoint while Percy and Sam remain unresolved. Delilah's reaction to seeing Jordie and Chantal together hints that this triangle may not be completely finished if the show continues."
        ]
      },
      {
        title: "How The Finale Sets Up Season 2",
        body: [
          "The season 2 setup has two layers. The emotional layer is Percy and Sam's unfinished reconciliation. The plot layer is Charlie's collapse and the photo that links him back to Barry's Bay, Sam, Percy, and possibly a future romantic storyline. Together, those threads give the show a reason to come back without simply repeating season 1.",
          "That is why the ending works as both a finale and a launch point. Viewers get enough hope to feel the first season mattered, but enough unanswered story to search for season 2 immediately."
        ]
      }
    ],
    faqs: [
      ["Does Every Year After end on a cliffhanger?", "Yes. Percy and Sam receive a hopeful final scene, while Charlie collapses in a cliffhanger that points toward a possible season 2."],
      ["Are Percy and Sam together at the end?", "They are not clearly established as a couple. The final scene suggests hope and possible reconciliation."],
      ["What does Charlie's ending mean?", "Charlie's ending appears to be a serious medical emergency and a setup for future story, likely connected to One Golden Summer."]
    ]
  },
  {
    slug: "does-charlie-die-in-every-year-after",
    title: "Does Charlie Die in Every Year After",
    description: "Does Charlie die in Every Year After? A spoiler guide to Charlie's finale collapse, the likely heart attack clue, and what One Golden Summer suggests.",
    heading: "Does Charlie Die in Every Year After? The Finale Cliffhanger Explained",
    eyebrow: "Character explainer",
    deck: "The show leaves Charlie's fate unresolved on screen, but the book connection gives fans a strong clue.",
    sections: [
      {
        title: "Short Answer",
        body: [
          "Every Year After does not confirm Charlie's death in season 1. The finale shows him collapsing after a powerful emotional trigger, but the episode ends before viewers learn what happens next. The scene is designed as a cliffhanger, not a confirmed death scene.",
          "The likely answer is that Charlie does not die if the series continues in the direction suggested by Carley Fortune's connected books. Charlie has more story available through One Golden Summer, and the finale appears to open that door rather than close it."
        ]
      },
      {
        title: "What Happens To Charlie In The Finale?",
        body: [
          "Charlie sees an old photograph that appears to capture a meaningful moment from the lake. The photo connects him to Sam, Percy, and the past he has tried to manage through distance, work, charm, and avoidance. After recognizing the image, he returns to it and then suffers a frightening physical episode.",
          "The body language points toward a medical emergency. Viewers see distress, collapse, and a sudden loss of control. The show does not cut to a doctor, ambulance, or family reaction, which is why the question immediately became a breakout search term."
        ]
      },
      {
        title: "Is It A Heart Attack?",
        body: [
          "The scene strongly suggests a heart-related crisis, and many viewers read it as a heart attack. That interpretation fits the connected book context, where Charlie's health becomes a major part of his story. Still, the show itself has not fully diagnosed the event on screen.",
          "For SEO and accuracy, the careful answer is: Charlie appears to have a serious medical emergency, likely heart-related, but the show does not officially confirm the diagnosis within season 1."
        ]
      },
      {
        title: "Why The Photo Matters",
        body: [
          "The photo is not just a random object. It pulls Charlie back into the emotional geography of Barry's Bay. He is confronted with a version of himself connected to Sam and Percy before the betrayals, distance, and grief hardened into adult patterns. That shock matters because Charlie's outward confidence often hides unresolved guilt.",
          "By placing the collapse right after the photo, the show ties Charlie's physical crisis to emotional reckoning. It is a dramatic way to say that the past has finally caught up with him."
        ]
      },
      {
        title: "What One Golden Summer Suggests",
        body: [
          "One Golden Summer is important because it gives Charlie a path beyond being the obstacle in Percy and Sam's romance. Without spoiling every detail, the connected book material makes it likely that Charlie is meant to become a fuller romantic lead in a future season, not simply a casualty of the finale.",
          "That is why many book readers interpret the cliffhanger as a setup rather than an ending. It raises stakes for Charlie and invites viewers to care about what happens to him next."
        ]
      },
      {
        title: "What To Expect If Season 2 Happens",
        body: [
          "If Every Year After gets season 2, Charlie's recovery, health, guilt, relationship with Sam, and possible new romance would likely be central. His collapse also gives Sam and Percy another reason to face the damage within the Florek family rather than only focusing on their own relationship.",
          "The show can use Charlie's crisis to shift from one couple's second chance into a broader Barry's Bay ensemble story."
        ]
      }
    ],
    faqs: [
      ["Does Charlie die in Every Year After?", "Season 1 does not confirm that Charlie dies. It ends with his fate unresolved."],
      ["Did Charlie have a heart attack?", "The finale strongly suggests a serious heart-related emergency, but season 1 does not give a full on-screen diagnosis."],
      ["Why is Charlie important for season 2?", "Charlie's cliffhanger and the One Golden Summer connection make him the clearest setup for a possible second season."]
    ]
  },
  {
    slug: "what-did-percy-do-in-every-year-after",
    title: "What Did Percy Do in Every Year After",
    description: "What did Percy do in Every Year After? A spoiler guide to the Percy, Sam, and Charlie secret, why Percy left, and why the reveal changes everything.",
    heading: "What Did Percy Do in Every Year After? The Percy, Sam and Charlie Secret Explained",
    eyebrow: "Spoilers for the central secret",
    deck: "Percy's mistake is the emotional fracture behind the whole season.",
    sections: [
      {
        title: "Short Answer",
        body: [
          "Percy's biggest mistake is that she had a sexual encounter with Charlie, Sam's brother, during the painful period when her relationship with Sam was falling apart. The secret becomes devastating because Sam is not only Percy's first love. He is Charlie's brother, Sue's son, and one of the people most deeply tied to Percy's summers in Barry's Bay.",
          "That betrayal is why Percy leaves, why she avoids Barry's Bay for years, and why the present-day reunion is so tense. The show uses the secret to test whether love can survive not only distance, but shame and family damage."
        ]
      },
      {
        title: "Why Did Percy Leave Barry's Bay?",
        body: [
          "Percy leaves because Barry's Bay becomes unbearable after the relationship with Sam breaks apart and the secret with Charlie hangs over her. The place that once felt like freedom turns into a reminder of the person she hurt and the version of herself she cannot forgive.",
          "Her absence is not simple indifference. It is avoidance. She stays away from the lake, from Sue, from Sam, from Charlie, and from the life that might force her to face what happened."
        ]
      },
      {
        title: "Why Is The Secret So Damaging?",
        body: [
          "The secret damages three relationships at once. It hurts Percy and Sam because it breaks trust inside a first-love story. It hurts Sam and Charlie because the betrayal comes from inside the family. It hurts Percy and herself because she spends years treating one decision as proof that she cannot return to the person she used to be.",
          "The reveal also arrives in a context of grief. Sue's death has already made everyone raw. When the truth comes out, Sam is not processing it as an isolated romantic betrayal. He is processing it as another loss inside a family already shaken by death."
        ]
      },
      {
        title: "Does Percy Tell Sam The Truth?",
        body: [
          "In the TV version, Percy directly revealing the truth gives the moment a different force than a secret exposed by someone else. It means she is no longer running, but it does not mean the truth becomes easy for Sam to forgive. Honesty is necessary, but it does not erase the damage.",
          "That is why the finale does not rush Sam into instant forgiveness. The show lets him love Percy, miss Percy, and still be unable to fully move past the betrayal in one conversation."
        ]
      },
      {
        title: "How Charlie Fits Into Percy's Story",
        body: [
          "Charlie is not only a plot twist. He represents the way messy, impulsive decisions can reshape a whole family. His charm and avoidance make him easy to blame, but the show also suggests he carries guilt and loneliness of his own. That complexity becomes more important after the finale cliffhanger.",
          "For Percy, Charlie is the person connected to her worst choice. For Sam, Charlie is both brother and betrayer. For the show, he is the bridge from Percy and Sam's romance into a wider Barry's Bay story."
        ]
      },
      {
        title: "Does Percy Get Forgiven?",
        body: [
          "Season 1 ends with hope, not complete forgiveness. Sue's Tavern, the final kitchen scene, and Sam's return all suggest that Percy is not permanently shut out. But the show does not pretend that one apology solves everything. If season 2 happens, the question is not only whether Percy and Sam love each other. It is whether they can build a life after the truth."
        ]
      }
    ],
    faqs: [
      ["What did Percy do in Every Year After?", "Percy had a sexual encounter with Charlie, Sam's brother, after her relationship with Sam fell apart."],
      ["Why did Percy leave?", "Percy left because Barry's Bay became tied to shame, heartbreak, and the secret she could not face."],
      ["Does Sam forgive Percy?", "Season 1 leaves forgiveness unresolved, though the final scene suggests hope."]
    ]
  },
  {
    slug: "every-year-after-cast",
    title: "Every Year After Cast",
    description: "Every Year After cast and characters guide, including Sadie Soverall as Percy, Matt Cornett as Sam, Michael Bradway as Charlie, and more.",
    heading: "Every Year After Cast and Characters: Percy, Sam, Charlie, Delilah and More",
    eyebrow: "Cast guide",
    deck: "A spoiler-light guide to the main Every Year After characters and the actors who play them.",
    sections: [
      {
        title: "Main Cast At A Glance",
        body: [
          "The Every Year After cast is led by Sadie Soverall as Percy Fraser and Matt Cornett as Sam Florek. Their relationship is the center of the season, moving between childhood summers, first love, separation, grief, and a present-day return to Barry's Bay.",
          "Michael Bradway plays Charlie Florek, Sam's older brother and one of the most important figures in the season's central secret. Abigail Cowen plays Delilah, a childhood friend whose relationship with Percy carries its own wounds. Aurora Perrineau plays Chantal, Percy's friend and one of the season's steadier voices. Joseph Chiu plays Jordie, Sam's friend and Chantal's romantic interest. Elisha Cuthbert plays Sue Florek, whose death brings Percy back and whose choices shape the present-day story."
        ]
      },
      {
        title: "Sadie Soverall As Percy Fraser",
        body: [
          "Percy Fraser is the person the story keeps returning to. As a teenager, Percy finds a second home at the lake and forms a bond with Sam that becomes the defining romance of her youth. As an adult, she returns to Barry's Bay carrying grief, shame, and the fear that everyone she left behind will see her only through her worst decision.",
          "Sadie Soverall plays Percy across that split between memory and aftermath. The character has to feel guarded in the present while still making viewers believe in the open, fearless girl she once was."
        ]
      },
      {
        title: "Matt Cornett As Sam Florek",
        body: [
          "Sam Florek is Percy's first love and the emotional anchor of Barry's Bay. He is tied to the lake through family, work, grief, and memory. His relationship with Percy is not just a romantic question. It is also about whether he can trust someone who disappeared from his life and returned at the worst possible time.",
          "Matt Cornett's Sam carries hurt in a quiet way. That matters because the finale depends on Sam being both loving and unable to immediately forgive."
        ]
      },
      {
        title: "Michael Bradway As Charlie Florek",
        body: [
          "Charlie Florek starts as the older-brother complication and becomes one of the show's clearest future hooks. He is charming, flawed, evasive, and more emotionally damaged than he first appears. His history with Percy changes the meaning of almost every scene involving Sam, and his finale cliffhanger suggests that the series may have much more planned for him.",
          "Michael Bradway gives Charlie enough charisma that the character can remain watchable even when his choices hurt people around him."
        ]
      },
      {
        title: "Abigail Cowen As Delilah",
        body: [
          "Delilah is Percy's old friend and one of the people whose life in Barry's Bay continued while Percy stayed away. Her interest in the Tavern and her personal history with Charlie make her more than a side character. She helps show how the past did not freeze while Percy was gone.",
          "By the finale, Delilah's choices help reset the Tavern's future and leave open questions about her own romantic direction."
        ]
      },
      {
        title: "Aurora Perrineau As Chantal And Joseph Chiu As Jordie",
        body: [
          "Chantal and Jordie provide one of the season's cleaner romantic arcs. Their relationship gives the finale warmth while Percy and Sam remain complicated. Chantal also helps ground Percy outside the Florek family drama.",
          "Jordie matters because he is not only Sam's friend. His connection with Chantal and Delilah gives the show a wider ensemble shape that could matter more in future seasons."
        ]
      },
      {
        title: "Elisha Cuthbert As Sue Florek",
        body: [
          "Sue Florek's present-day absence drives the season, but her presence is everywhere. Her death brings Percy home. Her Tavern becomes the central location of conflict and healing. Her decision to leave the Tavern to Percy forces the characters to confront what family, belonging, and forgiveness mean.",
          "Elisha Cuthbert's Sue gives the story its emotional reason for gathering everyone back in Barry's Bay."
        ]
      }
    ],
    faqs: [
      ["Who plays Percy in Every Year After?", "Sadie Soverall plays Percy Fraser."],
      ["Who plays Sam in Every Year After?", "Matt Cornett plays Sam Florek."],
      ["Who plays Charlie in Every Year After?", "Michael Bradway plays adult Charlie Florek."]
    ]
  },
  {
    slug: "every-year-after-vs-every-summer-after",
    title: "Every Year After vs Every Summer After",
    description: "Every Year After vs Every Summer After explained, including the title change, Percy and Sam, Sue's Tavern, Charlie, and major book-to-show differences.",
    heading: "Every Year After vs Every Summer After: Biggest Book-to-Show Changes",
    eyebrow: "Book adaptation guide",
    deck: "The show keeps the emotional core of Carley Fortune's novel, but it changes structure, emphasis, and future setup.",
    sections: [
      {
        title: "Why The Title Changed",
        body: [
          "The book is Every Summer After. The Prime Video series is Every Year After. That change matters because it signals a wider frame. The novel's title points strongly toward summer memories and the specific rhythm of Percy and Sam's lake years. The show title gives the adaptation room to explore how those choices affect every year that follows.",
          "That broader title also helps if the series continues beyond the first book's central romance. A future season can still belong under the same banner even if it shifts focus to Charlie, another relationship, or another season in Barry's Bay."
        ]
      },
      {
        title: "The Core Story Is Still Percy And Sam",
        body: [
          "The emotional foundation remains the same: Percy and Sam grow close through summers at the lake, fall in love, lose each other after a painful mistake, and face the past years later. The series keeps that second-chance romance engine because it is the reason readers and viewers care.",
          "What changes is the amount of ensemble texture around the couple. TV needs recurring characters, parallel conflicts, and reasons to stay in the present-day world. That means Delilah, Chantal, Jordie, Charlie, Sue's Tavern, and the broader town all carry more visible weight."
        ]
      },
      {
        title: "Sue's Tavern Has A Bigger Role",
        body: [
          "One of the most important TV changes is the role of Sue's Tavern. In the show, the Tavern becomes a physical symbol of belonging, inheritance, anger, and return. Sue leaving it to Percy adds conflict because Percy has been absent, while Sam and Charlie remain tied to the family and the town.",
          "That change gives the adaptation a strong present-day anchor. Instead of only asking whether Percy and Sam can reconcile, the show asks whether Percy has any right, or any courage, to come home."
        ]
      },
      {
        title: "The Reveal Lands Differently",
        body: [
          "The TV version makes the central secret more explosive by shaping when and how Sam learns about Percy and Charlie. In a novel, readers can sit inside one character's point of view and process memory gradually. On television, the reveal needs to hit through performance, confrontation, and immediate reaction.",
          "That is why the show lets Sam's hurt remain unresolved longer. It creates a stronger finale question and avoids making forgiveness feel automatic."
        ]
      },
      {
        title: "Charlie Is More Clearly A Future Lead",
        body: [
          "The finale's Charlie cliffhanger is one of the clearest signs that the adaptation is thinking beyond a single-season romance. By using a medical scare and a meaningful photo, the show points toward Charlie's internal life and toward story material that book readers associate with One Golden Summer.",
          "This is a smart television move. Charlie stops being only the brother connected to Percy's mistake and becomes a character whose recovery, guilt, and romantic future can carry a new chapter."
        ]
      },
      {
        title: "Should You Read The Book After The Show?",
        body: [
          "Yes, if you liked the emotional core of Percy and Sam. Reading Every Summer After after watching Every Year After gives you a more intimate version of the romance and lets you compare how the adaptation reshaped the same wounds for television. If you want clues about Charlie, One Golden Summer is the next connected book to know.",
          "The best order is Every Summer After first, then One Golden Summer. That keeps the Percy and Sam story in context before moving deeper into Charlie's orbit."
        ]
      }
    ],
    faqs: [
      ["Is Every Year After the same as Every Summer After?", "Every Year After is the TV adaptation of Every Summer After, but it changes the title and several story details."],
      ["Why did the show change the title?", "The title Every Year After gives the series a broader frame beyond one summer-based romance."],
      ["Should I read Every Summer After before One Golden Summer?", "Yes. Reading Every Summer After first gives useful context for One Golden Summer."]
    ]
  },
  {
    slug: "every-year-after-episodes",
    title: "Every Year After Episodes",
    description: "Every Year After episodes guide with season 1 release details, episode count, story arc, binge order, and what to read after each major plot turn.",
    heading: "Every Year After Episodes Guide: Full Season 1 Recap and Release Details",
    eyebrow: "Episode guide",
    deck: "Season 1 is built as a bingeable eight-episode romance with a present-day funeral, years of lake memories, and a finale cliffhanger.",
    sections: [
      {
        title: "How Many Episodes Are There?",
        body: [
          "Every Year After season 1 has eight episodes. The season is designed for binge viewing, which explains why ending and season 2 searches rose quickly after release. Viewers could reach the cliffhanger fast, then immediately search for explanations.",
          "The episode structure moves between past summers and present-day Barry's Bay. That time-shifted format lets the show slowly reveal why Percy left, what happened with Sam, how Charlie fits into the fracture, and why Sue's death changes everything."
        ]
      },
      {
        title: "Episode 1 Sets The Homecoming",
        body: [
          "The opening episode brings Percy back to Barry's Bay after Sue Florek's death. It establishes the core emotional question: can Percy return to the place she abandoned without being swallowed by memory and guilt? The episode also reintroduces Sam as both a lost love and a person with every reason to be guarded.",
          "For search users, the important setup is Sue's role. Even though Sue is gone in the present, her influence shapes the whole season."
        ]
      },
      {
        title: "The Middle Episodes Build The Secret",
        body: [
          "The middle of the season uses flashbacks to make Percy and Sam's romance feel real before showing why it broke. These episodes are where the show earns the later betrayal. If viewers did not believe in the lake summers, the present-day grief would feel thin.",
          "The middle episodes also expand Delilah, Chantal, Jordie, and Charlie. That matters because the finale relies on more than one couple. Barry's Bay has to feel like a network of people who remember different versions of the same past."
        ]
      },
      {
        title: "The Final Episodes Reveal The Damage",
        body: [
          "As the season moves toward the finale, the truth around Percy, Sam, and Charlie becomes impossible to avoid. The show turns the romance into a family crisis because the secret does not hurt only one relationship. It changes how Sam sees his brother, how Percy sees herself, and how everyone understands the years of silence.",
          "This is where viewers start searching for what did Percy do in Every Year After and why did Percy leave. Those questions are the emotional engine of the season."
        ]
      },
      {
        title: "Episode 8 Leaves The Biggest Questions",
        body: [
          "The finale gives Percy and Sam a hopeful but unresolved ending. Sam returning to the Tavern suggests that the story is not over, but the show does not declare them healed. Charlie's collapse is the sharper cliffhanger and the biggest reason season 2 searches are rising.",
          "If you only read one follow-up after episode 8, read the ending explained guide. If your main question is Charlie, read the dedicated Charlie page."
        ],
        links: [
          ["Read the ending explained guide", "/every-year-after-ending-explained/"],
          ["Read the Charlie cliffhanger guide", "/does-charlie-die-in-every-year-after/"],
          ["Check season 2 status", "/every-year-after-season-2/"]
        ]
      },
      {
        title: "Best Viewing Order",
        body: [
          "Watch season 1 in release order from episode 1 through episode 8. Do not skip around on a first watch because the emotional reveals depend on timing. After finishing, use the book comparison guide if you want to know why some adaptation choices feel different from the novel.",
          "The show is especially built for viewers who like first-love stories, grief-driven homecomings, lake-town romance, and complicated second chances."
        ]
      }
    ],
    faqs: [
      ["How many episodes are in Every Year After?", "Season 1 has eight episodes."],
      ["Should I watch Every Year After in order?", "Yes. The flashback structure and central secret work best in episode order."],
      ["Which guide should I read after the finale?", "Start with the ending explained guide, then read the season 2 and Charlie pages."]
    ]
  },
  {
    slug: "about",
    title: "About Book to TV Guide",
    description: "About Book to TV Guide, an independent editorial site for book adaptations, romance TV shows, ending explainers, cast guides, and renewal updates.",
    heading: "About Book to TV Guide",
    eyebrow: "Independent editorial guide",
    deck: "Clear answers for readers and viewers tracking book-to-screen shows.",
    sections: [
      {
        title: "What We Publish",
        body: [
          "Book to TV Guide publishes independent explainers for shows adapted from books, with a special focus on romance, young adult drama, ensemble relationships, and streaming releases. The site is built for readers who finish an episode and want a clear answer without digging through scattered social posts.",
          "Coverage includes ending explainers, season renewal status, cast and character guides, book-to-show changes, episode recaps, and reading order notes. Each page is written as a complete guide with an update date and links to related articles."
        ]
      },
      {
        title: "Editorial Approach",
        body: [
          "We separate confirmed facts from speculation. Renewal status, release dates, cast changes, and streaming availability should be tied to reliable public sources. When a page discusses a likely direction, it is labeled as an interpretation rather than a confirmed announcement.",
          "This site is independent and is not affiliated with Prime Video, Amazon MGM Studios, Carley Fortune, publishers, or any streaming platform."
        ]
      }
    ],
    faqs: [
      ["Is Book to TV Guide independent?", "Yes. The site is independent and not affiliated with the shows, streamers, or publishers it covers."]
    ]
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "Privacy policy for Book to TV Guide, including basic information about analytics, advertising, cookies, contact, and third-party links.",
    heading: "Privacy Policy",
    eyebrow: "Site policy",
    deck: "How Book to TV Guide handles basic site data, links, and future advertising.",
    sections: [
      {
        title: "Information We Collect",
        body: [
          "Book to TV Guide is a content site. We do not ask readers to create accounts or submit personal profiles. If analytics tools are added, they may collect standard website data such as pages visited, device type, browser, approximate location, and referral source. This information is used to understand which guides are useful and to improve site structure.",
          "If you contact the site by email, we may receive your email address and the contents of your message. That information is used only to respond to the inquiry."
        ]
      },
      {
        title: "Cookies And Advertising",
        body: [
          "The site may use cookies or similar technologies for analytics, performance measurement, and advertising if advertising is enabled in the future. Third-party advertising partners may use cookies to serve relevant ads and measure performance according to their own policies.",
          "Readers can manage cookies through browser settings. Blocking cookies may affect some measurement features, but the main editorial content should remain readable."
        ]
      },
      {
        title: "Third-Party Links",
        body: [
          "Book to TV Guide links to streaming platforms, publisher pages, entertainment outlets, and other external sources for context. We are not responsible for the privacy practices or content of those third-party websites."
        ]
      }
    ],
    faqs: [
      ["Does Book to TV Guide sell personal information?", "No. The site does not sell personal information."],
      ["Can I read the site without an account?", "Yes. The site does not require reader accounts."]
    ]
  },
  {
    slug: "contact",
    title: "Contact",
    description: "Contact Book to TV Guide for corrections, source updates, editorial questions, rights concerns, or suggestions for book-to-screen coverage.",
    heading: "Contact",
    eyebrow: "Corrections and suggestions",
    deck: "Send corrections, source updates, or suggestions for future book-to-screen guides.",
    sections: [
      {
        title: "How To Reach Us",
        body: [
          "For corrections, source updates, editorial suggestions, or rights concerns, contact the site owner at contact@booktotvguide.com. If the domain email is not active yet, use the contact option provided wherever this site is hosted.",
          "When sending a correction, please include the page URL, the specific sentence or section, and a reliable source if one is available. That helps updates happen quickly and accurately."
        ]
      },
      {
        title: "Coverage Suggestions",
        body: [
          "Book to TV Guide is especially interested in streaming shows adapted from romance, young adult, fantasy, mystery, and BookTok titles. Suggestions that include active search demand, new release timing, or a clear reader question are the most useful."
        ]
      }
    ],
    faqs: [
      ["Can I suggest a show to cover?", "Yes. Send the title, source book if applicable, and the main questions viewers are asking."],
      ["Do you accept corrections?", "Yes. Corrections are welcome when they include a page URL and reliable source."]
    ]
  }
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function urlFor(slug = "") {
  return `${siteUrl}${slug ? `/${slug}/` : "/"}`;
}

function articleSchema(page) {
  const base = {
    "@context": "https://schema.org",
    "@type": page.type || "Article",
    "name": page.title,
    "headline": page.heading,
    "description": page.description,
    "url": urlFor(page.slug),
    "datePublished": date,
    "dateModified": date,
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Book to TV Guide",
      "url": siteUrl
    }
  };
  if (!page.type) {
    base.author = {
      "@type": "Organization",
      "name": "Book to TV Guide Editorial"
    };
  }
  return base;
}

function breadcrumbSchema(page) {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${siteUrl}/`
    }
  ];
  if (page.slug) {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": page.title,
      "item": urlFor(page.slug)
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}

function faqSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (page.faqs || []).map(([q, a]) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };
}

function navHtml() {
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Book to TV Guide home">
        <span class="brand-mark">BT</span>
        <span>Book to TV Guide</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/every-year-after/">Every Year After</a>
        <a href="/every-year-after-season-2/">Season 2</a>
        <a href="/every-year-after-ending-explained/">Ending</a>
        <a href="/every-year-after-cast/">Cast</a>
      </nav>
    </header>`;
}

function linksHtml(links = []) {
  if (!links.length) return "";
  return `<div class="link-grid">${links.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("")}</div>`;
}

function sourceHtml(page) {
  if (!page.slug || page.slug === "about" || page.slug === "privacy" || page.slug === "contact") return "";
  return `
    <section class="sources" aria-labelledby="sources-title">
      <h2 id="sources-title">Sources checked</h2>
      <p>These guides are independent summaries and interpretations. Current-status pages should be updated when official sources change.</p>
      <ul>
        ${commonSources.map(([label, href]) => `<li><a href="${href}" rel="nofollow noopener">${esc(label)}</a></li>`).join("")}
      </ul>
    </section>`;
}

function faqHtml(page) {
  if (!page.faqs?.length) return "";
  return `
    <section class="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      ${page.faqs.map(([q, a]) => `
        <details>
          <summary>${esc(q)}</summary>
          <p>${esc(a)}</p>
        </details>`).join("")}
    </section>`;
}

function relatedHtml(currentSlug) {
  const links = guideLinks.filter(([, href]) => href !== `/${currentSlug}/`);
  if (!currentSlug || currentSlug === "about" || currentSlug === "privacy" || currentSlug === "contact") return "";
  return `
    <aside class="related" aria-labelledby="related-title">
      <h2 id="related-title">Related Every Year After guides</h2>
      ${linksHtml(links)}
    </aside>`;
}

function pageHtml(page) {
  const schemas = [articleSchema(page), breadcrumbSchema(page), ...(page.faqs?.length ? [faqSchema(page)] : [])];
  const isHome = page.slug === "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)} | Book to TV Guide</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${urlFor(page.slug)}">
  <meta property="og:title" content="${esc(page.heading)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="${isHome ? "website" : "article"}">
  <meta property="og:url" content="${urlFor(page.slug)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="/styles.css">
  ${schemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("\n  ")}
</head>
<body>
  ${navHtml()}
  <main>
    <section class="${page.hero ? "hero home-hero" : "hero"}">
      <div class="hero-copy">
        <p class="eyebrow">${esc(page.eyebrow)}</p>
        <h1>${esc(page.heading)}</h1>
        <p class="deck">${esc(page.deck)}</p>
        <div class="hero-actions">
          <a class="button primary" href="/every-year-after/">Open the guide</a>
          <a class="button secondary" href="/every-year-after-season-2/">Check season 2</a>
        </div>
      </div>
      <figure class="hero-visual">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="A quiet mountain lake landscape, used as an original visual mood for lake town romance coverage">
        <figcaption>Lake-town romance coverage, updated ${date}</figcaption>
      </figure>
    </section>
    <div class="content-shell">
      <article class="article">
        ${page.sections.map((section) => `
          <section>
            <h2>${esc(section.title)}</h2>
            <div class="section-body">
              ${section.body.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("\n")}
              ${linksHtml(section.links)}
            </div>
          </section>`).join("\n")}
      </article>
      ${faqHtml(page)}
      ${relatedHtml(page.slug)}
      ${sourceHtml(page)}
    </div>
  </main>
  <footer>
    <div>
      <strong>Book to TV Guide</strong>
      <p>Independent guides for romance shows and book adaptations.</p>
    </div>
    <nav aria-label="Footer navigation">
      <a href="/about/">About</a>
      <a href="/privacy/">Privacy</a>
      <a href="/contact/">Contact</a>
    </nav>
  </footer>
</body>
</html>
`;
}

const css = `:root {
  color-scheme: light;
  --ink: #17201d;
  --muted: #5d6a64;
  --line: #d9e1dc;
  --paper: #fbfcfa;
  --panel: #ffffff;
  --accent: #0b6b57;
  --accent-strong: #084b3f;
  --soft: #e8f2ee;
  --gold: #b8872d;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.65;
}

a {
  color: inherit;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 74px;
  padding: 16px clamp(18px, 4vw, 56px);
  border-bottom: 1px solid var(--line);
  background: rgb(251 252 250 / 0.92);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--accent);
  color: white;
  font-size: 0.82rem;
}

nav {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 24px);
  flex-wrap: wrap;
}

nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 650;
}

nav a:hover {
  color: var(--accent-strong);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(280px, 0.7fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
  padding: clamp(42px, 7vw, 84px) clamp(18px, 4vw, 56px) clamp(32px, 5vw, 64px);
  max-width: 1420px;
  margin: 0 auto;
}

.home-hero {
  min-height: 72dvh;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--accent-strong);
  font-weight: 800;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h1,
h2,
h3 {
  letter-spacing: 0;
  line-height: 1.05;
}

h1 {
  margin: 0;
  max-width: 980px;
  font-size: clamp(2.6rem, 6vw, 5.8rem);
}

.deck {
  max-width: 760px;
  margin: 22px 0 0;
  color: var(--muted);
  font-size: clamp(1.08rem, 2vw, 1.35rem);
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  border-radius: 12px;
  padding: 0 18px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 140ms ease, background 140ms ease;
}

.button:active {
  transform: translateY(1px);
}

.primary {
  background: var(--accent);
  color: #fff;
}

.primary:hover {
  background: var(--accent-strong);
}

.secondary {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--accent-strong);
}

.hero-visual {
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  background: var(--panel);
  box-shadow: 0 22px 70px rgb(23 32 29 / 0.12);
}

.hero-visual img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.hero-visual figcaption {
  padding: 13px 16px;
  color: var(--muted);
  font-size: 0.88rem;
}

.content-shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 clamp(18px, 4vw, 56px) 76px;
}

.article,
.faq,
.related,
.sources {
  border-top: 1px solid var(--line);
  padding-top: clamp(28px, 5vw, 48px);
  margin-top: clamp(30px, 5vw, 56px);
}

.article section {
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) minmax(0, 1fr);
  gap: clamp(18px, 4vw, 48px);
  padding: 28px 0;
  border-bottom: 1px solid var(--line);
}

.article h2,
.faq h2,
.related h2,
.sources h2 {
  margin: 0 0 16px;
  font-size: clamp(1.55rem, 3vw, 2.3rem);
}

.article p {
  margin: 0 0 17px;
  color: var(--muted);
  font-size: 1.04rem;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.link-grid a {
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  color: var(--accent-strong);
  font-weight: 800;
  text-decoration: none;
}

.link-grid a:hover {
  background: var(--soft);
}

.faq details {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  padding: 14px 16px;
  margin: 10px 0;
}

.faq summary {
  cursor: pointer;
  font-weight: 800;
}

.faq p,
.sources p,
footer p {
  color: var(--muted);
}

.sources ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 24px;
  padding-left: 20px;
}

footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 34px clamp(18px, 4vw, 56px);
  border-top: 1px solid var(--line);
  background: #fff;
}

footer p {
  margin: 8px 0 0;
}

@media (max-width: 820px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: clamp(2.3rem, 13vw, 4.4rem);
  }

  .hero-visual img {
    aspect-ratio: 16 / 10;
  }

  .article section {
    grid-template-columns: 1fr;
  }

  .link-grid {
    grid-column: 1;
    grid-template-columns: 1fr;
  }

  .sources ul {
    grid-template-columns: 1fr;
  }

  footer {
    flex-direction: column;
  }
}
`;

for (const page of pages) {
  const file = page.slug ? join(root, page.slug, "index.html") : join(root, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, pageHtml(page));
}

writeFileSync(join(root, "styles.css"), css);

writeFileSync(join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`);

writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${urlFor(page.slug)}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${page.slug === "" ? "daily" : "weekly"}</changefreq>
    <priority>${page.slug === "" ? "1.0" : page.slug.startsWith("every-year-after") ? "0.9" : "0.6"}</priority>
  </url>`).join("\n")}
</urlset>
`);

writeFileSync(join(root, "vercel.json"), `${JSON.stringify({
  buildCommand: "npm run build",
  outputDirectory: ".",
  cleanUrls: true,
  trailingSlash: true,
  headers: [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        }
      ]
    }
  ]
}, null, 2)}
`);

console.log(`Generated ${pages.length} pages for ${siteUrl}.`);
