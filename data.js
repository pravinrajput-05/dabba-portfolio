/* Edit text, notes and katori positions (spot = x%, y% on trays.png) here. Images sit inside each "full" text, in doc order. */
const TIERS=["Tehelka Posts","Chatpati Writing","Sweet Growth"];
const TAGS=[{"n": "Tehelka", "s": "Posts", "x": 12, "y": 12}, {"n": "Chatpati", "s": "Writing", "x": 2, "y": 44}, {"n": "Sweet", "s": "Growth", "x": 76, "y": 22}];
const NOTES={"closed": "No ghar ka khana today. Just some food for thought.", "trays": "Fine print: you might not see the creativity in the design itself, but you’ll definitely see it in the ideas and perspective.", "bowl": "Careful, still warm.", "tiers": ["Packed with a pinch of fresh perspective.", "Words, seasoned to taste.", "The part that keeps a business fed."]};
const CONTACT={email:"pravinrajput17102005@gmail.com",linkedin:"www.linkedin.com/in/sohansingh-rajput-8a34b425a"}; /* replace with your real links */
/* The "dabba owner" card shown before the final message. Replace the facts with TRUE ones. */
const ABOUT={title:"The dabba owner",line:"Three completely unnecessary facts about the dabba owner, free of charge:",facts:["Can catch mosquitoes alive with hands(a few attempts required).","Already a successful poet in his 1 audience world.","Believes in 'life serious lene vali chiz hi nahi hai'."]};
/* "Short on time?" card on the trays page. i = position in PORTFOLIO (0 = first katori). Edit freely. */
const PICKS=[{i:0,t:"Starter",why:"Quick to read, and it is how this portfolio was written."},{i:4,t:"Main",why:"Chatpati. Four push notifications, thirty seconds."},{i:7,t:"Side",why:"One receipt, two ad slots. Sharp and short."},{i:6,t:"Dessert",why:"Small observation. Big impact"}];
const PORTFOLIO=[
 {
  "tier": 0,
  "brand": "Wispr Flow",
  "headline": "A different brand positioning for India",
  "short": "A LinkedIn post that opens up a new perspective on the brand.",
  "full": "<img src=\"assets/creatives/wispr-flow-linkedin.png\" alt=\"Wispr Flow creative\"><p>This brand perspective can be adopted as a little different brand positioning for India or at least a full campaign around this over various social media platforms.</p>",
  "spot": [
   47.5,
   21
  ],
  "code": "WF-1-LI",
  "decode": "Wispr Flow: 1 LinkedIn post",
  "note": "Stop selling what you make. Start solving what they face."
 },
 {
  "tier": 0,
  "brand": "Proteinest",
  "headline": "Stop selling the product. Start teaching it.",
  "short": "Meta ad to educational blog to product page, tested against a direct ad.",
  "full": "<h4>For a brand who is creating/entering a realatively new market, educating audience should be primary.</h4><h4>1. The Insight</h4><p>Proteinest is a relatively new brand in the plant protein category. While the product exists, the challenge is that consumers may not fully understand plant protein, its benefits, or why they should consider switching.</p><p>Most brands follow the same advertising approach: Run an ad, highlight the product and redirect users straight to a product page.</p><p>But are consumers always ready to buy?</p><p>What if, instead of selling immediately, we first educated them?</p><h4>2. The Proposed Strategy</h4><p>Introduce an education-led advertising journey through Meta Ads.</p><p>Instead of the usual <b>&quot;Shop Now&quot;</b> CTA, experiment with <b>&quot;Learn &amp; Buy&quot;</b>.</p><p>The advertisement redirects users to a relevant educational blog rather than directly to the product page.</p><p>For example: <i>Why Do Some Protein Supplements Cause Bloating? Exploring Plant Protein as an Alternative.</i></p><p>The blog educates consumers about the topic while featuring a Proteinest hero product in a sticky panel on the right side (desktop) or bottom (mobile).</p><p>This way, consumers learn about the product while having an easy path to purchase.</p><h4>3. Reel Script</h4><p><b>Hook:</b> &quot;Ever felt bloated after having your protein shake?&quot;</p><p><b>Problem:</b> &quot;Some people experience digestive discomfort with certain protein supplements. But did you know that different protein sources can affect people differently?&quot;</p><p><b>Education:</b> &quot;Plant protein offers an alternative worth exploring, depending on your nutritional needs and individual tolerance.&quot;</p><p><b>CTA:</b> &quot;Want to understand the difference? Learn more about plant protein. Click below!&quot;</p><p>Button: <b>Learn &amp; Buy</b></p><h4>4. What Do We Measure?</h4><p>Compare two approaches:</p><ul><li><b>Control:</b> Meta Ad → Product Page.</li><li><b>Variant:</b> Meta Ad → Educational Blog → Product Page.</li></ul><p>Track CTR, blog engagement, blog-to-product clicks, add-to-cart rate, purchase conversion rate and CPA.</p><p>The objective is to understand whether educating consumers before selling improves purchase intent and conversion efficiency.</p><h4>The Bigger Picture</h4><p>For a new brand, performance marketing shouldn&#x27;t just be about generating immediate sales. It should also be about building awareness, trust and product understanding.</p><h4>Sometimes, the best way to sell a product isn&#x27;t to ask someone to buy it. It&#x27;s to first help them understand why they might need it.</h4>",
  "spot": [
   61.2,
   20
  ],
  "code": "PN-2-MA",
  "decode": "Proteinest: 1 Meta ad funnel",
  "note": "Immediate sell is not always the best journey."
 },
 {
  "tier": 0,
  "brand": "Offlyn",
  "headline": "From event app to experience brand",
  "short": "Signature recurring events like Offlyn Unplugged, After Dark and Playdate.",
  "full": "<img src=\"assets/creatives/offlyn-event.png\" alt=\"Offlyn creative\"><p>Proposed building recurring signature event properties like Offlyn Unplugged, After Dark and Playdate to establish Offlyn as an experience brand rather than just an event-discovery platform. The objective is to strengthen brand recall, build loyal communities, encourage organic word-of-mouth and create new brand sponsorship opportunities.</p>",
  "spot": [
   51.9,
   32.7
  ],
  "code": "OF-3-EV",
  "decode": "Offlyn: signature events",
  "note": "Phone neeche rakho. Life upar."
 },
 {
  "tier": 1,
  "brand": "VipShaadi",
  "headline": "Two audiences, two exit pop-ups",
  "short": "One pop-up nudges Indian visitors, another speaks to NRIs missing home.",
  "full": "<p>Objective: Convert visitors who are about to leave into potential leads through audience-specific messaging, improving the landing-page-to-lead-submission ratio.</p><p>Indian Audience: Challenging the conventional “it’ll happen if it’s meant to be” mentality but not in a harsh way.</p><img src=\"assets/creatives/vipshaadi-popup-indian.jpeg\" alt=\"VipShaadi creative\"><p>NRI Audience: Created a separate pop-up for NRI visitors, connecting with the emotion of finding a sense of home while living abroad.</p><img src=\"assets/creatives/vipshaadi-popup-nri.jpeg\" alt=\"VipShaadi creative\">",
  "spot": [
   31.6,
   58.6
  ],
  "code": "VS-4-PU",
  "decode": "VipShaadi: 2 exit pop-ups",
  "note": "Har dil ka apna pop-up hota hai."
 },
 {
  "tier": 1,
  "brand": "Rapido",
  "headline": "Push notifications that sound like your group chat",
  "short": "Witty, meme-inspired notifications that drive ride bookings.",
  "full": "<p>Objective: Create a series of witty, culturally relevant, meme-inspired Rapido push notifications that leverage humour, relatability and everyday Indian situations to grab attention, strengthen brand recall and encourage ride bookings.</p><img src=\"assets/creatives/rapido-notification-1.jpeg\" alt=\"Rapido creative\"><img src=\"assets/creatives/rapido-notification-2.jpeg\" alt=\"Rapido creative\"><img src=\"assets/creatives/rapido-notification-3.jpeg\" alt=\"Rapido creative\"><img src=\"assets/creatives/rapido-notification-4.jpeg\" alt=\"Rapido creative\">",
  "spot": [
   45.6,
   58.1
  ],
  "code": "RP-5-PN",
  "decode": "Rapido: 4 push notifications",
  "note": "Kuchh chatpata ho jaye?"
 },
 {
  "tier": 1,
  "brand": "Matiks Billboards",
  "headline": "The USA, in 20 seconds of mental math",
  "short": "Billboard copy for the Matiks US expansion.",
  "full": "<p>Objective: Copywriting for their USA expansion</p><p>I wanted to write 'neighborhood asian kid' but couldn't generate the image of it for obvious reasons.</p><img src=\"assets/creatives/matiks-billboard-1.jpeg\" alt=\"Matiks Billboards creative\"><img src=\"assets/creatives/matiks-billboard-2.jpeg\" alt=\"Matiks Billboards creative\">",
  "spot": [
   38,
   71.8
  ],
  "code": "MT-6-BB",
  "decode": "Matiks: 2 US billboards",
  "note": "Truth is not the sweetest serum known but it works."
 },
 {
  "tier": 2,
  "brand": "Matiks Streaks",
  "headline": "Streaks should count play, not presence",
  "short": "We don't want attendance warriors. We want people who actually play.",
  "full": "<h4>Matiks: Turning Daily Streaks into Meaningful Engagement</h4><h4>1. The Insight</h4><p>Currently, users can maintain their Matiks streak by simply opening the app and solving one puzzle in 20–30 seconds.</p><p>While this helps maintain daily active users, it doesn&#x27;t necessarily encourage meaningful engagement. Many users might just be showing up to protect their streak rather than actually playing and exercising their brains.</p><p>It&#x27;s similar to how Snapchat users used to exchange blank snaps just to maintain streaks.</p><h4>We&#x27;re rewarding users for showing up, not necessarily for participating.</h4><h4>2. The Proposed Strategy: Redefining Streaks</h4><p>Instead of maintaining a streak through a single puzzle, introduce minimum daily engagement requirements.</p><p>For example, users must complete at least one daily quest, play five games, or spend a minimum amount of meaningful time engaging with the app.</p><p>The idea is to make streak maintenance an outcome of actual participation rather than just logging in.</p><p>Duolingo follows a similar philosophy by encouraging users to complete meaningful learning activities to maintain their streaks.</p><h4>3. The Growth Opportunity</h4><p>Matiks already offers milestone rewards at 50, 100, 200, 365 and 700 days. This gives users a strong incentive to maintain their streaks.</p><p>By increasing the effort required to maintain them, we can potentially:</p><ul><li>Increase average session duration.</li><li>Encourage users to explore more games and daily quests.</li><li>Build stronger daily engagement habits.</li><li>Increase usage of streak shields, which consume in-game currency (Pies).</li><li>Create additional opportunities for Pies purchases when users run out of currency.</li></ul><h4>4. How to Communicate the Change</h4><p>Instead of presenting this as a restriction, position it as a brand decision.</p><h4>Suggested communication:</h4><p>&quot;We noticed something interesting. Many of you were visiting Matiks every day, solving one puzzle and leaving within seconds, just to keep your streak alive.</p><p>But that&#x27;s not why we built Matiks.</p><p>We built it to make your brain work, challenge your thinking and make you sharper every day.</p><p>So we&#x27;re making a small change: Your streak will now count when you actually play, not just when you show up.&quot;</p>",
  "spot": [
   68.7,
   57.6
  ],
  "code": "MT-7-ST",
  "decode": "Matiks: 1 streak rule",
  "note": "Let's make Matiks more than a proxy attendance for your brain."
 },
 {
  "tier": 2,
  "brand": "DMart",
  "headline": "One receipt. Two ad slots.",
  "short": "Contextual ads on the front of the receipt, fixed sponsorships on the back.",
  "full": "<h4>DMart Receipts: Turning Transaction Data into Contextual Advertising</h4><h4>1. The Insight</h4><p>Consumers naturally examine their grocery bills, making receipts an overlooked but valuable advertising touchpoint.</p><p>But what if DMart could make these advertisements more relevant by understanding what customers are purchasing?</p><h4>2. The Proposed Strategy</h4><p>Introduce two advertising opportunities:</p><h4>A. Contextual Advertising – Front of the Receipt</h4><p>Develop a system that analyses purchase categories and generates relevant advertisements based on shopping behaviour.</p><p>For example:</p><ul><li>Customers purchasing baby products could receive advertisements for baby care brands.</li><li>Customers purchasing paints or home improvement products could see Asian Paints promotions.</li><li>Customers purchasing kitchen essentials could receive Prestige appliance offers.</li></ul><p>The advertisement gets printed at the bottom of the receipt, making it more relevant to the customer&#x27;s actual shopping interests.</p><h4>B. Fixed Sponsorship – Back of the Receipt</h4><p>Monetise the otherwise unused backside of receipts through fixed advertising placements.</p><p>Brands can purchase dedicated advertising space for a fixed campaign fee, regardless of the customer&#x27;s purchase basket.</p><p>This creates an additional revenue stream for DMart through sponsored placements, seasonal campaigns and long-term brand partnerships.</p><h4>3. Measuring the Impact</h4><ul><li>QR code scans and offer redemptions.</li><li>Advertisement engagement.</li><li>Incremental sales for advertisers.</li><li>Cost per redemption.</li><li>Revenue generated per sponsored receipt.</li></ul><h4>The Bigger Picture</h4><h4>One receipt. Two advertising opportunities.</h4><p>DMart can turn purchase behaviour into contextual advertising while monetising unused physical advertising space through fixed brand partnerships.</p>",
  "spot": [
   82.8,
   57.1
  ],
  "code": "DM-8-RC",
  "decode": "DMart: 1 receipt, 2 ad slots",
  "note": "Bill bhi bol sakta hai, bas suno toh sahi."
 },
 {
  "tier": 2,
  "brand": "Cult.fit",
  "headline": "Skipping the gym now has a witness",
  "short": "The Jodi Pass: pairs share a pot, so every member brings one more.",
  "full": "<h4>Cult.fit Gym Jodi: Turning Gym Memberships into Accountability Partnerships</h4><h4>1. The Insight</h4><p>Most people don’t quit the gym because they stop wanting to be fit. They quit because nobody notices when they skip.</p><p>A gym membership is a solo promise with no witness, which makes it easy to break quietly.</p><p>What if skipping a session had a witness?</p><h4>2. The Proposed Strategy</h4><p>Introduce a Jodi Pass, where two people join Cult.fit together as a pair.</p><ul><li>Each partner locks a small refundable amount into a shared monthly pot.</li><li>If one partner misses their planned sessions, the other earns Cult credits from the missed partner’s share.</li><li>If both partners hit their targets, both get their amount back along with a bonus.</li></ul><p>Every member now has a reason to bring one new person, so retention and acquisition work together.</p><h4>3. Measuring the Impact</h4><ul><li>Pair formation rate.</li><li>30, 60 and 90-day retention of pairs versus solo members.</li><li>Weekly attendance per member.</li><li>Referral conversion and CAC.</li></ul><h4>The Bigger Picture</h4><h4>Skipping the gym now has a witness.</h4><p>Cult.fit can turn every membership into a pair, improving retention and acquisition at the same time.</p>",
  "spot": [
   76.5,
   71.6
  ],
  "code": "CF-9-JP",
  "decode": "Cult.fit: the Jodi Pass",
  "note": "Gym skip karoge? Jodi ko pata chal jayega."
 }
];
