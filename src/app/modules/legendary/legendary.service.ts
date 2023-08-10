import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LegendaryService {

	constructor() { }

	get() {
		return of([
			{
				keyword: 'Abomination'
				,source: ['Captain America 75th Anniversary','Realm of Kings']
				,content: [
					{ flavor: 'This keyword ability is used by Villains that are horrific, unpredictable and even monsterous.' }
					,{
						list: [
							'It means "<strong>This Villain gets +[Attack] equal to the printed [Attack] of the Hero in the HQ space under this Villain\'s city space</strong>".'
							,'An Abomination Villain\'s [Attack] can go up and down as the Villain moves through the city.'
							,'Likewise, "Ultimate Abomination" means "This Mastermind gets +[Attack] equal to the total printed [Attack] of all the Heroes in the HQ".'
							,'You can recruit a Hero under an Abomination to try to reduce its [Attack]... but you might also increase it!'
							,'The Hero Gorgon has abilities like "<strong>Sewers Abomination</strong>". It gives [Attack] equal to the printed [Attack] of the Hero in the HQ space under the Sewers.'
							,'The highly-evolved Mastermind Maximus and Gorgon also use "<strong>Highest Abomination</strong>". This gives [Attack] equal to the highest printed [Attack] of any single card in the HQ.  So if the five Heroes in the HQ have printed [Attack] of 2, 4, 3+, 0+, and no printed [Attack], then Highest Abomination would give 4 [Attack].'
							,'"<strong>Double Abomination</strong>" doubles the [Attack] bonus. Some "Divided Cards" from sets like Legendary®: Civil War have two printed [Attack] numbers, one on each side. If you need to know that card\'s "printed [Attack]", and the card is not currently being played, add both those [Attack] numbers together. This applies to Abomination and Berserk (from Legendary®: X-Men).'
						]
					}
				]
			}
			,{
				keyword: 'Ultimate Abomination'
				,source: ['Captain America 75th Anniversary']
				,content: [
					{ flavor: 'This keyword ability is used by Masterminds that are the twisted genetic experiments of HYDRA scientists.' }
					,{
						list: [
							'It means "This Mastermind gets +[Attack] equal to the total printed [Attack] of all the Heroes in the HQ".'
							,'Likewise, "Abomination" means "This Villain gets +[Attack] equal to the printed [Attack] of the Hero in the HQ space under this Villain\'s city space".'
							,'An Abomination Villain\'s [Attack] can go up and down as the Villain moves through the city.'
						]
					}
				]
			}
			,{
				keyword: 'Adapting Masterminds'
				,source: ['S.H.I.E.L.D.']
				,content: [
					{ flavor: 'The HYDRA Super-Adaptoid and the HYDRA High Council constantly adapt their tactics to attack the Heroes in new ways.  Accordingly, each of these Masterminds is a new "Adapting Mastermind" with 4 different Master Strikes.' }
					,{
						list: [
							'A Normal Mastermind has a Mastermind card and 4 Mastermind Tactic cards. An Adapting Mastermind instead has just 4 Mastermind Tactic cards. Whichever Tactic is currently on top of the stack of Tactics counts as the current Mastermind card.'
							,'Say you are using Hydra Super-Adaptoid as your Mastermind. Keep all his tactics in a face up stack. Use only the rules on that top card, ignoring the rest of the cards in the stack.'
							,'Whenever an Adapting Mastermind does a Master Strike, it says "<strong>Adapt</strong>" at the end. This means "<strong>Shuffle the Mastermind Tactics and randomly put one on top, face up</strong>". You might randomly pick the same Tactic that was previously on top, or it might be a different Tactic.'
							,'Likewise, when you fight an Adapting Mastermind, you always fight the Tactic currently on top of the stack. You ignore all the card abilities and [Attack] bonuses that are not currently on top of the stack. The "Fight" ability also says "Adapt" at the end. So you put the Tactic you just fought into your Victory Pile, do its Fight effect, then shuffle the remaining Tactics and randomly put one on top, face up.'
						]
					}
				]
			}
			,{
				keyword: 'Artifacts'
				,source: ['Guardians of the Galaxy','Heroes of Asgard','Marvel Studios Guardians of the Galaxy']
				,content: [
					{ text: 'Some Hero cards are also Artifacts. (They still count as Hero your turns. This means you "control" that Artifact. At the end of your turn, when you discard all the cards you played that turn, the Artifacts you control stay in.' }
					,{
						list: [
							'You can use an Artifact on the first turn you play it.'
							,'You can control multiple Artifacts with the same card name and use each of them.'
							,'You cant use your Artifacts\' "once per turn" abilities during other players\' turns.'
							,'If a card effect during any players\' turn asks you to "Reveal a [Ranged] Hero", you may reveal a [Ranged] Hero Artifact you control. Card effects that say "your Heroes" or "Heroes you have" include Hero Artifacts you control as well.'
							,'However, you only "played" an Artifact on the turn you put it out, so it only activates Superpower abilities (like [Strength]: You get +1 [Attack]") on the turn you play the Artifact, not every turn of the game. Likewise, card effects that count "each [Tech] Hero you played this turn" only count an Artifact if you played it this turn.'
							,'You don\'t have to use an Artifact\'s abilities on a turn if you don\'t want to.'
							,'If you are using Final Showdown, you can use Artifacts during your Showdown Turn.'
							,'If a card like Rogue or Chameleon would let you "copy" an Artifact card, then you can use that Artifact\'s "Once per turn" ability once, and there is no other effect.'
						]
					}
				]
			}
			,{
				keyword: 'Berserk'
				,source: ['X-Men']
				,content: [
					{ flavor: 'This Keyword represents some X-Men going into a berserker rage of unpredictable violence.' }
					,{
						list: [
							'"Berserk" means "<strong>Discard the top card of your deck. You get + [Attack] equal to the discarded card\'s printed [Attack] </strong>". (So if the discarded card gives "2+ [Attack] ", you just count 2.)'
							,'Some cards say "Berserk, Berserk, Berserk" so you discard three cards in a row.'
							,'Some cards say things like "<strong>Berserk. X-Gene [Tech]</strong>: You get +1 [Attack]".  You do the card abilities in order, so Berserk might discard a [Tech] card from your deck, letting you use your X-Gene ability.'
							,'Berserk gives no benefit from discarding printed [Recruit] or [Piercing Energy] values.'
						]
					}
				]
			}
			,{
				keyword: 'Bribe'
				,source: ['Dark City','Secret Wars Vol. 1','Civil War']
				,content: [
					{ text: 'You can fight villains with the keyword "Bribe" by spending any combination of Attack and/or Recruit points.' }
					,{
						list: [
							'For example, you may play two S.H.I.E.L.D. Agents and two S.H.I.E.L.D. Troopers to fight a +4 [Attack] Villain.'
						]
					}
				]
			}
			,{
				keyword: 'Burning Shards'
				,source: ['Into the Cosmos']
				,content: [
					{ definition: 'Once this turn, you may spend the specified number of Shards to do the listed effect.' }
					,{
						list: [
							'You can wait to use this until later in the turn.'
							,'You don\'t get the normal +1 [Attack] per Shard when you burn Shards this way.'
						]
					}
				]
			}
			,{
				keyword: 'Burrow'
				,source: ['Fantastic 4']
				,content: [
					{ flavor: 'Subterranea Villains can burrow, allowing them to retreat by digging to safety when they are attacked.' }
					,{ definition: 'When you defeat this Villain do all of the Fight effects and rescue any Bystanders the Villain may have captured as normal.  Then, if the "Streets" city space was empty, put this Villain back into that Streets space.' }
					,{
						list: [
							'If you fight a Villain with <strong>Burrow</strong> twice in a turn, you\'ll do that Villain\'s "<strong>Fight</strong>" effects twice.'
							,'Cards that do something "when you defeat" a Villain still work if the Villain burrows to the Streets.'
							,'When a Villain burrows it does not re-trigger any Ambush effects.'
						]
					}
					,{ text: 'This means that in order to stop a Villain with <strong>Burrow</strong> permanently, you have to:' }
					,{
						list: [
							'Fight it while it\'s in the Streets, or'
							,'Fight it while another Villain occupies the Streets, or'
							,'Fight it once to drive it back to the Streets then fight it again in the Streets to finish it.'
						]
					}
					,]
			}
			,{
				keyword: 'Bystanders that Become Villains'
				,content: [
					{ text: 'If you defeat them, you still get any "rescue" effects on Special Bystanders. They count as Bystanders in your Victory Pile, not Villains.' }
				]
			}
			,{
				keyword: 'Celestial Boons'
				,source: ['Into the Cosmos']
				,content: [
					{ flavor: 'The Celestials are millions of years old and immeasurably powerful. They cannot be truly defeated by mere mortals. However, if you manage to fight a Celestial, it is impressed with your efforts and grants you a Celestial Boon.' }
					,{ text: '<strong>This is a permanent bonus that helps you for the rest of the game</strong>, as long as the Celestial is in your Victory Pile. You can use multiple Celestial Boons, even multiple copies of the same one.' }
				]
			}
			,{
				keyword: 'Charge'
				,source: ['Secret Wars Vol. 2']
				,content: [
					{ text: '"Ambush: Charge one space" means "(After this Villain enters the Sewers,) it charges forward an extra space, pushing other Villains forward".' }
					,{
						list: [
							'This might cause more escapes.'
							,'Some Villains charge multiple spaces!'
						]
					}
				]
			}
			,{
				keyword: 'Cheering Crowds'
				,source: ['Champions']
				,content: [
					{ flavor: 'This Keyword represents the Champions being inspired to redouble their efforts by adoring fans.' }
					,{ definition: 'You may play this card twice in a row if you return a Bystander from your Victory Pile to the bottom of the Bystander Stack.' }
					,{ text: '<strong>Example</strong>: Say your first play of the turn was a [Instinct] card that gives 2 [Attack] and says "[Instinct]: Draw a card. <strong>Cheering Crowds</strong>".  You return a Bystander to play this card twice in a row.  The first play wouldn\'t get the "[Instinct]: Draw a card". ability, since you hadn\'t played a [Instinct] card earlier in the turn.  However, the second play would get that ability.  The first play would trigger the [Instinct] effect on the bonus copy.  So you would end up getting 4 [Attack] and drawing one card.' }
					,{
						list: [
							'Essentially you play the card itself, and then you play a bonus copy of that card.'
							,'The bonus copy card\'s effects can be triggered by the initial card'
						]
					}
					,{ text: '<strong>Example</strong>: Say your first play is using Cheering Crowds to play a [Tech] card twice. Then, you play another card that says "[Tech]: You get +1 [Tech] for each other [Tech] Hero you played this turn".  That ability would count both plays of your Cheering Crowds card, giving you +2 [Attack] total.' }
					,{
						list: [
							'Playing the bonus copy of that card acts as an entirely separate card'
							,]
					}
					,{ text: 'When playing out a big turn, some people like to put the Bystander they\'re returning temporarily on the Cheering Crowds card to remind themselves that they played it twice.' }
				]
			}
			,{
				keyword: 'Chivalrous Duel'
				,source: ['Ant-Man']
				,content: [
					{ flavor: 'This keyword represents how Morgan le Fay and the knights of her "Queen\'s Vengeance" hail from a realm of honorable single combat. You can\'t gang up on an enemy in a Chivalrous Duel – you have to pick just one Hero Name to duel the enemy.' }
					,{ definition: 'To fight an enemy with "Chivalrous Duel", you can only use [Attack] from a single Hero Name.' }
					,{
						list: [
							'<strong>Example</strong>: To fight a 3 [Attack] Villain with Chivalrous Duel, you can spend 3 [Attack] from two different Black Knight hero cards. But you can\'t combine 2 [Attack] from Black Knight cards and 1 [Attack] from a Wasp card.'
							,'If a Hero (like "S.H.I.E.L.D. Trooper") doesn\'t have a Hero Name listed, then its Hero Name is the card name.  So you can play three S.H.I.E.L.D. Troopers then fight a 3 [Attack] Villain with Chivalrous Duel.  But you can\'t spend 2 [Attack] from Black Knight cards and 1 [Attack] from a S.H.I.E.L.D. Trooper to fight an enemy with Chivalrous Duel.'
							,'You can\'t use [Attack] you get from anything that\'s not a Hero card, including Microscopic Size-Changing Villains, Mastermind Tactics, Shard tokens from other sets, etc.'
							,'You can use [Attack] from Hero Artifacts as long as they share the same Hero Name, since those are Hero cards.'
						]
					}
					,{ text: 'In a setup with lots of Chivalrous Duels, like fighting Morgan le Fay or the Scheme "Pull Earth into Medieval Times", you will want to build your deck to concentrate your [Attack] cards into just one or two Hero Names!' }
				]
			}
			,{
				keyword: 'Circle of Kung-Fu (and Quack-Fu)'
				,source: ['Secret Wars Vol. 2']
				,content: [
					{ definition: 'Nth Circle of Kung-Fu" means "During your turn, this Villain has <strong>+N [Attack]</strong> unless you reveal a Hero that costs N or more".' }
					,{
						list: [
							'For example, a 5th Circle of Kung-Fu Villain gets +5 [Attack] unless you reveal a Hero that costs 5 or more.'
							,'Likewise, the 7th Circle gets +7 [Attack] unless you reveal a Hero that costs 7 or more, etc.'
							,'If a Villain or Mastermind already has Circle of Kung-Fu, and a Scheme gives them another one, only count the highest circle – don\'t add them up.'
						]
					}
				]
			}
			,{
				keyword: 'Contest of Champions'
				,source: ['Into the Cosmos']
				,content: [
					{ flavor: 'The Grandmaster and the Elders of the Universe are literally immortal. To them, mortals are merely playthings. This is shown with the new Contest of Champions keyword.' }
					,{ definition: 'Each player in turn reveals a single card either from their hand, that they played this turn or the top card of their deck.  Each player\'s "Contest Score" is that card\'s printed cost, doubled if it\'s class ([Strength], [Instinct], etc) matches the class specified.' }
					,{ definition: 'After all players have announced their Contest Score, Evil tries to win the contest.  Reveal the top two cards of the Hero Deck.  Evil uses whichever card gives the highest Contest Score (taking account of any doubling).  Then put both of those cards on the bottom of the Hero Deck.' }
					,{ text: 'Some Villains and Masterminds say things like "Ambush: Contest of Champions [STRENGTH]".  When this happens:' }
					,{
						list: [
							'Whichever score is highest <em>(or tied for highest)</em> "wins" the contest. Everyone else "loses".'
							,'The card lists outcomes for winning & losing.'
							,'Some contests say that Evil reveals 4 or 6 cards from the Hero Deck. Evil\'s Contest Score is still the highest-scoring single card.'
							,'A few cards reveal a Hero card and use its colors for a contest. This can create contests that are multicolor, such as "Contest of Champions [TECH] [RANGED]".  In this case, any card that includes either [TECH] or [RANGED] will match the contest and have its score doubled. (A card that\'s both [TECH] and [RANGED] won\'t be quadrupled.)'
							,'For example, in a 3-player game, Player 1\'s score is 6, Player 2\'s score is 6, Player 3\'s score is 4, and Evil\'s score is 6.  Players 1, 2 and Evil all win the contest, and Player 3 loses the contest.'
							,]
					}
				]
			}
			,{
				keyword: 'Conqueror'
				,source: ['Marvel Studios Phase 1','Heroes of Asgard']
				,content: [
					{ flavor: 'Asgard\'s fiercest enemies lead legions of monsters to conquer all of the Nine Realms, including Midgard (Earth) and Asgard itself.' }
					,{ definition: '"Location Conqueror N" means this Villain gets <strong>+N [Attack]</strong> if any Villain occupies the specified location.' }
					,{
						list: [
							'For example, "<strong>Bridge Conqueror 3</strong>". means "This Villain gets +3 [Attack] while any Villain is on the Bridge".'
							,'This Villain gets the bonus while it itself is on the Bridge or while another Villain is on the Bridge.'
							,'Various Villains and the Hela Mastermind have different Conqueror abilities, with different bonus numbers and referring to different city spaces.'
							,'Some Hero cards also have abilities like "<strong>Rooftops Conqueror 1</strong>", which likewise means "You get +1 [Attack], usable on any city space or Mastermind, if any Villain is on the Rooftops".'
						]
					}
				]
			}
			,{
				keyword: 'Coordinate'
				,source: ['Spider-Man Homecoming']
				,content: [
					{ text: 'This keyword allows you to let another player "borrow" one of your cards. It is a critical way to help other players defeat tough enemies. During another player\'s turn, you can Coordinate with them like this:' }
					,{
						list: [
							'Discard a Coordinate card from your hand and then draw a new card to replace it.'
							,'That player can now play a copy of the card you coordinated with them. (A copy counts as playing the exact same card including its [Attack], [Recruit], special abilities, and Hero Class symbol.)'
						]
					}
					,{ text: 'You can only Coordinate one card to each player on their turn. However, multiple players can each Coordinate one card to the player whose turn it is, in order to give that player a huge advantage.' }
					,{
						list: [
							'If you are playing a solo game, once per turn, you may discard a card with Coordinate to draw a card.'
							,'Coordinate is printed on cards in red text to make it easier to notice during other players\' turns.'
						]
					}
					,{ text: 'There are a couple of things about Coordinate specific to Marvel Legendary® that don\'t apply to Legendary®: Encounters' }
					,{
						list: [
							'When you offer to Coordinate a card to another player, that player can decline. If so, you don\'t discard that card and that player doesn\'t play a copy of it.'
							,'If you are playing with the Final Showdown, you can\'t Coordinate during that Showdown.'
						]
					}
				]
			}
			,{
				keyword: 'Cosmic Threat'
				,source: ['Fantastic 4','Into the Cosmos']
				,content: [
					{ flavor: 'Some cosmic Villains use the Cosmic Threat keyword, returning all the way from Legendary®: Fantastic Four in 2013. Villains with this keyword have incredibly high Attack values with a special vulnerability.' }
					,{ text: 'If an enemy has Cosmic Threat [RANGED], that means: "<strong>Once per turn, for each [RANGED] card you reveal, this Enemy gets -3 [Attack] this turn".' }
					,{
						list: [
							'The Shaper of Worlds has "Cosmic Threat [RANGED]" and 10* [Attack]. If you reveal two [RANGED] cards, he gets -6 [Attack] this turn, so he has 4 [Attack] left. If you reveal four [Ranged] cards, he gets -12 [ATTACK] this turn, so he has 0 [Attack], and you can fight him without spending any [Attack].'
							,'The Celestials say things like "Cosmic Threat [STRENGTH] or [INSTINCT]" You can choose to use either [STRENGTH] or [INSTINCT] cards for its Cosmic Threat in a single turn, <strong>but you can\'t use both to reduce its [Attack]</strong>.'
							,'You can use the same [RANGED] cards to reduce the [Attack] of different "Cosmic Threat [RANGED]" Villains in one turn.'
						]
					}
				]
			}
			,{
				keyword: 'Cross-Dimensional Rampage'
				,source: ['Secret Wars Vol. 1','Secret Wars Vol. 2','World War Hulk']
				,content: [
					{ text: 'As different Hulks storm across parallel realities, only another Hulk can stop them! "Cross-Dimensional Hulk Rampage" means "Each player reveals one of their Hulk Heroes or a Hulk card in their Victory Pile or gains a Wound".' }
					,{
						list: [
							'"Cross-Dimensional Hulk Rampage" means "<strong>Each player reveals one of their Hulk Heroes or a Hulk card in their Victory Pile or gains a Wound</strong>".'
							,'This counts any card that includes "Hulk" in its card name or Hero name, plus alternate Hulks "Maestro" and "Nul, Breaker of Worlds".'
							,'Likewise, "Cross-Dimensional Wolverine Rampage" counts any card with "Wolverine", "Weapon", or "Old Man Logan".'
							,'You can reveal any card that includes the word "Hulk" in its card name, Hero name, Villain Group name, or Tactics for Hulk Masterminds. This includes any Red Hulk, She-Hulk, Red She-Hulk, Skaar, Son of Hulk, Joe Fixit Grey Hulk, Hulkling, Hulk Gang, Cosmic Hulk Robot, Hulkbuster, Enchain the Hulk, and so on.'
							,'Some Heroes can transform into Hulks, like Bruce Banner and Amadeus Cho. A puny "Bruce Banner" card doesn\'t say "Hulk" on it, so it can\'t stop a Hulk Rampage. But revealing the transformed Bruce Banner card named "Savage Hulk Unleashed" works.'
							,'When a Cross-Dimensional Hulk Rampage happens, you can choose to gain the Wound, even if you have a Hulk that you already played or could otherwise reveal. You might want the Wound if you have Wounded Fury cards.'
							,'There are also Cross-Dimensional Void Rampages, etc.'
						]
					}
				]
			}
			,{
				keyword: 'Danger Sense'
				,source: ['Spider-Man Homecoming','Into the Cosmos']
				,content: [
					{ text: 'This keyword represents Spider-Man using his famous "Spider-Sense" superpower to detect danger and evade it. It also covers Tony Stark, Happy Hogan, and Vulture watching for threats and rapidly reacting to them.' }
					,{
						list: [
							'Some cards say things like "<strong>Danger Sense 2</strong>".  This means "<strong>Reveal the top 2 cards of the Villain Deck. You get +1 [Attack] for each Villain you revealed. Put all the cards back on top in any order</strong>".'
							,'Cards can say Danger Sense 1, 2, 3, or even 4, revealing that many cards.'
							,'Several Danger Sense cards also say they have additional effects when they reveal particular kinds of cards.'
							,'Sometimes you can use one Danger Sense card to put a particular card on top of the Villain Deck, and then use a different Danger Sense card to benefit from that card being on top of that deck.'
							,'Danger Sense can also be a good way to delay nasty Scheme Twists, Master Strikes, and powerful Villains. But you won\'t be able to avoid them forever!'
						]
					}
					,{ text: 'New twists added in the Into the Cosmos expansion.' }
					,{
						list: [
							'Some cards say things like "Danger Sense 2".  This means "<strong>Reveal the top 2 cards of the Villain Deck. You get +1 [Attack] for each Villain you revealed. Put all the cards back on top in any order</strong>".'
							,'Cards can say Danger Sense 1, 2, 3, 4, etc. revealing that many cards.'
							,'Several Danger Sense cards say they have additional effects when they reveal particular kinds of cards.'
							,'Sometimes you can use one Danger Sense card to put a particular card on top of the Villain Deck and then use a different Danger Sense card to benefit from that card being on top of that deck.'
							,'Danger Sense can also be a good way to delay nasty Scheme Twists, Master Strikes, and powerful Villains. But you won\'t be able to avoid them forever!'
						]
					}
					,{ text: '<span><strong>Danger Sense on Villains</strong></span>' }
					,{ text: 'The arrival of the Black Order of Thanos often signals a world\'s imminent destruction. Although that world can sense grave danger approaching, they are often powerless to stop it. The Black Order work together to guard each other and their lord. To represent this, these Villains use Danger Sense in a new way.' }
					,{
						list: [
							'Some cards say" Ambush: Danger Sense 2, helping all Black Order Villains and the Mastermind".'
							,'To do this, reveal the top cards of the Villain Deck and rearrange them, just like normal Danger Sense. However, <strong>the +1 [Attack] bonus for each Villain card revealed is gained by all Black Order Villains in the city and the Mastermind this turn, instead of being gained by a player</strong>.'
							,'This bonus wears off at the end of the turn.'
						]
					}
				]
			}
			,{
				keyword: 'Dark Memories'
				,source: ['Revelations']
				,content: [
					{ text: 'In the theme of Revelations, this new keyword represents the way The Hood and his gang find every dark secret in a Hero\'s past and use it against them.' }
					,{
						list: [
							'Some Villains and Masterminds have the keyword "Dark Memories".  This means "<strong>This gets +1 [Attack] for each Hero Class among cards in discard pile</strong>".'
							,'Likewise, some Hero cards like Ronin and Scarlet Witch also have "Dark Memories", drawing power from the tragedies of their pasts. Playing a Hero card with this keyword gives you the same bonus: "You get +1 [Attack] for each Hero Class among cards in your discard pile".'
							,'The Hero Classes are [Strength], [Instinct], [Covert], [Tech], and [Ranged], so Dark Memories can give anywhere from +0 [Attack] to +5 [Attack]. Grey cards like S.H.I.E.L.D. Agents don\'t have a Hero Class.'
							,'It doesn\'t matter how many cards of a particular Hero Class you have in your discard pile. So if your discard pile were three [Strength] cards, four [Instinct] cards, and five grey S.H.I.E.L.D. Agents, Dark Memories would give +2 [Attack].'
							,'Recruiting Heroes, Hyperspeed, and other discard abilities may increase the Dark Memories bonus. Likewise, if you draw or reveal enough cards that you have to shuffle your discard pile to make a new deck, the Dark Memories bonus will go back to +0 [Attack]. Time your plays and build your deck carefully to turn Dark Memories to your advantage!'
							,'You can minimize the [Attack] of The Hood and his gang by building a deck with very few Hero Classes. Or you can maximize the [Attack] of Heroes with Dark Memories by recruiting many Hero Classes.'
							,'"Double Dark Memories" means double the bonus.'
						]
					}
				]
			}
			,{
				keyword: 'Demolish'
				,source: ['Fear Itself','Champions']
				,content: [
					{ text: 'This keyword represents the Heroes being devestated by the enchanted weapons of the Wrecking Crew and enormous Monsters Unleashed.' }
					,{
						list: [
							'"<strong>Demolish each player</strong>" means "<strong>Reveal the top card of the Hero Deck, note its cost, and put it on the bottom of the Hero Deck. Each player reveals their hand and discards a card with that cost</strong>".'
							,'Reveal only one card from the Hero Deck – don\'t reveal a different card from the Hero Deck for each player.'
						]
					}
				]
			}
			,{
				keyword: 'Digest'
				,source: ['Venom']
				,content: [
					{ text: 'This grisly keyword represents how the Venom and Carnage symbiotes get stronger as they devour people and absorb their energy.' }
					,{
						list: [
							'Some Heroes say things like "<strong>Digest 2</strong>: Draw a card".'
							,'<strong>Use this Digest ability only if you have at least that many cards in your Victory Pile</strong>.'
							,'All kinds of cards in your Victory Pile count for Digest. This includes Henchman Villains, regular Villains, Bystanders, Mastermind Tactics, Traps from other sets, etc.'
							,'You don\'t have to remove any cards from your Victory Pile to use Digest.'
							,'Even if you have 10 cards in your Victory Pile, you can\'t use a card\'s "Digest 2" ability five times – just once.'
						]
					}
				]
			}
			,{
				keyword: 'Dodge'
				,content: [
					{ text: 'This Keyword means "During your turn, you may discard this card from your hand to draw another card".  This ability represents the trickiness and resourcefulness of the Villainous Allies. Many Dodge cards have conditional effects so that sometimes you want to play them, and sometimes you want to Dodge them away. Dodge also helps you sculpt your hand towards Recruit Points or Attack as you desire.' }
					,{
						list: [
							'When you Dodge a card from your hand, ignore all the other text on that card. (The only exception is when a card specifically tells you to do something when you Dodge with it.)'
							,'When you Dodge a card from your hand, you didn\'t "play" that card, so the Dodged card\'s Ally Class/color doesn\'t help you use the Superpower abilities of other cards you play that turn.'
							,'Some Allies count the number of cards you discarded this turn. This includes cards you discarded with Dodge.'
						]
					}
				]
			}
			,{
				keyword: 'Dominate'
				,source: ['X-Men']
				,content: [
					{ text: 'This keyword represents Villains using telepathy, sorcery, or illusions to twist Heroes\' minds to evil.' }
					,{
						list: [
							'Some Villains and Masterminds say they "Dominate" Hero cards from various places. This means "<strong>Put those Heroes under this enemy. This enemy gets +1 [Attack] for each Hero it\'s Dominating</strong>".'
							,'When you fight that enemy, put one of those Dominated Heroes into each player\'s discard pile. You choose which player gets which Hero, including yourself. There might not be enough for every player to get one. KO any excess Dominated Heroes.'
							,'If a Villain escapes, any Heroes Dominated by that Villain go to the Escape Pile too.'
						]
					}
				]
			}
			,{
				keyword: 'Double-Sided Transforming Schemes'
				,source: ['Revelations']
				,content: [
					{ text: 'In keeping with the </em>Revelations<em> theme, all the Schemes in this set are double-sided "Transforming Schemes".  Start with the side face up that says "Setup".  Whenever it tells you to "Transform this Scheme", flip it over. Use only the rules showing on the side currently face up.' }
				]
			}
			,{
				keyword: 'Elusive'
				,content: [
					{ text: '"Elusive 6" means "You can only fight this Adversary if you have made at least 6 [Recruit] this turn".  You don\'t have to spend that [Recruit] to fight this Adversary, you just have to have made that much [Recruit] this turn. You can still spend that [Recruit] on recruiting Allies. Elusive represents how some Adversaries are hard to pin down, can\'t be defeated with sheer brute force, and need to be cornered in a more subtle way.' }
				]
			}
			,{
				keyword: 'Empowered'
				,source: ['Ant-Man','Black Panther']
				,content: [
					{ text: 'This keyword represents Heroes and Villains who draw power from ambient energy, technology, or superpowers around them.' }
					,{
						list: [
							'Some Heroes say things like "You get <strong>Empowered</strong> by [Strength]".  This means "<strong>You get +1 [Attack] for each [Strength] card in the HQ</strong>".'
							,'Likewise, some Villains and Masterminds say things like "<strong>Empowered by [Tech]</strong>". This means "<strong>This gets +1 [Attack] for each [Tech] card in the HQ</strong>".'
							,'As cards enter and leave the HQ, an Empowered card can get stronger or weaker. You only check the [Attack] bonus at the moment you play your Empowered Hero or at the moment you fight the Empowered enemy.'
							,'One clever move is to recruit a Hero from the HQ at the right time, changing the colors in the HQ to weaken an Empowered enemy or try to strengthen an Empowered Hero in your hand.'
							,'Some cards are even "<strong>Double Empowered</strong>" or "<strong>Triple Empowered</strong>" meaning that they get +2 [Attack] or +3 [Attack] for each appropriate card in the HQ.'
							,'Multi-class or divided cards from other sets counts if either half is the correct color. For example, an "Empowered by [Ranged] and [Strength]" ability can get +1 [Attack] from a "[Covert][Ranged]" card or from a "[Instinct][Strength]" card. However, a "[Ranged][Strength]" card in the HQ would only give +1 [Attack], not +2 [Attack].'
							,'Abilities that let you put cards from the HQ on the bottom of the Hero Deck are especially useful at setting up Empowered Heroes or Empowered Villains. They are also great at giving you more Hero Ambushes!'
						]
					}
				]
			}
			,{
				keyword: 'Excessive Violence'
				,source: ['Deadpool','Venom','Marvel Studios Guardians of the Galaxy']
				,content: [
					{ text: 'This keyword represents how Venom and Carnage are often way more over-the-top violent than necessary to get a job done.' }
					,{
						list: [
							'Some Heroes say things like "<strong>Excessive Violence: Draw a card</strong>".'
							,'<strong>Once per turn, you can spend 1 [Attack] more than you need to fight a Villain or Mastermind "using Excessive Violence".  If you do, you get to use all the "Excessive Violence" abilities on cards you played this turn</strong>.'
							,'Say you\'ve played three Heroes with Excessive Violence abilities this turn. If you spend 8 [Attack] to fight a Villain or Mastermind that has 7 [Attack], then you\'ll get to use all three Excessive Violence abilities!'
							,'If you don\'t fight anything this turn, or if you don\'t spend an extra 1 [Attack] on someone, then you won\'t be able to use Excessive Violence.'
							,'Since you can only fight "using Excessive Violence" once per turn, you can only use a card\'s Excessive Violence ability once per turn.'
							,'(It\'s OK to play two cards with the same card name, fight an enemy "using Excessive Violence" and use both of those cards\' Excessive Violence abilities.)'
							,'If you fight using Excessive Violence and then draw or play more cards with Excessive Violence abilities later in the turn, it will be too late to use those abilities.'
							,'Gravity Mines says "Triggered Artifact - Whenever you use Excessive Violence, draw a card".  You can use this even if this artifact is the only Excessive Violence card you have or combine it with other Excessive Violence cards.'
						]
					}
				]
			}
			,{
				keyword: 'Fateful Resurrection'
				,source: ['Secret Wars Vol. 2']
				,content: [
					{ text: 'On a Villain card, "Fight: Fateful Ressurection" means "Fight: Reveal the top card of the Villain Deck. If it\'s a Scheme Twist or Master Strike, this Villain reenters the city".' }
					,{
						list: [
							'If a Villain resurrects this way, you still rescue its Bystanders and do its other Fight effects.'
							,'The Villain pushes into the Sewers and does any Ambush abilities as normal.'
							,'If a Mastermind Tactic resurrects this way, shuffle it back into the other face down Tactics.'
							,'If a Villain that has ascended to become a Mastermind resurrects this way, it stays a Mastermind and does not reenter the city.'
						]
					}
				]
			}
			,{
				keyword: 'Feast'
				,source: ['Paint the Town Red','World War Hulk']
				,content: [
					{ text: 'This Keyword states that when you fight a Villain or Mastermind with this ability you treat it as a fight effect.' }
					,{
						list: [
							'For example: "<strong>Feast</strong>" means "<strong>Fight: KO the top card of your deck</strong>.'
							,'Likewise, "<strong>Feast on each player</strong>" means "<strong>KO the top card of each player\'s deck</strong>".'
						]
					}
					,{ text: 'Some Maximum Carnage Villains create special effects when they feast on certain cards' }
					,{
						list: [
							'Carnage\'s Master Strike starts with "Feast on each player".  That means each player does the "<strong>Feast</strong>" effect. Then Carnage\'s Master Strike causes Wounds when he feasts on certain cards.'
							,'Note that Carnage\'s Master Strike is the only effect that feasts on every player. The "Maximum Carnage" Villains and Carnage\'s Mastermind Tactics each feast on only one player.'
							,'While Carnage\'s Master Strike causes Wounds, the Feast abilities on his Mastermind Tactics and most of his Villains don\'t cause Wounds.'
						]
					}
				]
			}
			,{
				keyword: 'Focus'
				,source: ['Fantastic 4']
				,content: [
					{ text: 'This keyword lets you transform your Recruit Points into powerful, flexible effects. It looks like this:' }
					,{ definition: 'You can pay the cost on the left side of the arrow to get the effect on the right side of the arrow. You can use that "Focus" ability as many times as you want for the rest of the turn.' }
					,{
						list: [
							'For example, say you play a card that says: "<strong>Focus 2 [Recruit]:</strong> Draw a card".  For the rest of your turn, you can use 2 Recruit Points to draw a card, as many times as you want, as long as you have the Recruit points available. You can even play more Heroes, recruit, fight, then use the Focus ability more.'
							,'<strong>Note</strong>: You can use <strong>Focus</strong> abilities and still use the "Healing" ability on Wounds.'
						]
					}
				]
			}
			,{
				keyword: 'Fortify'
				,source: ['Civil War']
				,content: [
					{ flavor: 'This keyword represents Villains setting up nasty traps for the players.' }
					,{ definition: 'Put this Villain on or near the specified place.  While it\'s there, it has the listed effect.  Any player can fight that Villain as normal to end that Fortify effect and put that Villain into their Victory Pile.' }
					,{
						list: [
							'If a card would fortify a place, don\'t do anything if there\'s already a Villain fortifying that place.'
						]
					}
				]
			}
			,{
				keyword: 'Grey Heroes'
				,source: ['World War Hulk']
				,content: [
					{ text: 'When a card refers to "grey Heroes", it means grey-colored cards with no Hero Class, like S.H.I.E.L.D. Agents, Troopers, Officers, etc.' }
					,{
						list: [
							'Grey Hulk and Jean Grey are not "grey Heroes".'
						]
					}
				]
			}
			,{
				keyword: 'Hidden Witnesses'
				,source: ['Nior']
				,content: [
					{ flavor: 'In a world of Noir, conspiracies are hard to unravel, betrayal is commonplace, and it\'s hard to determine who the real Villains are.  Villains and Masterminds hide behind layers of informants, victims, and stooges. To find these Villains, you must track down and interview Hidden Witnesses who know their locations.' }
					,{ definition: 'Hidden Witnesses are Bystanders placed face-down on Villains or Masterminds.  You can\'t fight a Villain while it has a Hidden Witness.',}
					,{
						list: [
							'For example "Ambush: This Villain captures 2 Hidden Witnesses". means the Villain captures the top 2 cards of the Bystander Stack, face-down, as Hidden Witnesses.'
							,'During your turn <strong>you can pay 2</strong> [Recruit] to rescue a Hidden Witness any number of times and put it in your Victory Pile.'
							,'Hidden Witnesses still count as Bystanders. When you rescue one, you get any special "When you rescue this Bystander …" effect written on it. It stays in your Victory Pile as a normal, face-up Bystander.'
							,'A Villain can have face-up Bystanders and face-down Hidden Witnesses at the same time. You\'ll need to pay to rescue the face-down Hidden Witnesses. Then, you can fight the Villain, which will automatically rescue the face-up Bystanders.'
							,'If a Villain escapes with any number of Bystanders, including Hidden Witnesses, it will cause all players to discard a single card, just like a Villain escaping with any normal Bystanders. Hidden Witnesses carried away by escaping Villains stay in the Escape Pile as normal, face-up Bystanders.'
							,'You can pay to rescue Hidden Witnesses even if you\'re not going to fight that Villain during that turn. You can also rescue just some of the Hidden Witnesses and leave others for later.'
							,'If a special ability lets you "Defeat a Villain for free", you automatically rescue all the Hidden Witnesses on it without paying [Recruit] .'
							,'Masterminds and Schemes can have Hidden Witnesses on them too. They work the same way.'
						]
					}
				]
			}
			,{
				keyword: 'Human Shields'
				,source: ['X-Men']
				,content: [
					{ flavor: 'This keyword represents enemies hiding behind innocent people to prevent Heroes\' attacks.' }
					,{ definition: 'Human Shields are Bystanders placed face-down on Villains or Masterminds.  You can\'t fight a Villain while it has a Hidden Witness.',}
					,{
						list: [
							'For example "Ambush: This Villain captures 2 Human Shields" means the Villain captures the top 2 cards of the Bystander Stack, face-down, as Human Shields.'
							,'During your turn, any number of times, you can pay [Attack] equal to that Villain\'s [Attack] value to rescue one of its Human Shields at random and put it in your Victory Pile. (The * on their [Attack] is a reminder.)'
							,'A Villain can have face up Bystanders and face-down Human Shields at the same time. You\'ll need to pay to rescue the face-down Human Shields. Then you can fight the Villain, which will rescue the face-up Bystanders automatically.'
							,'Human Shields still count as Bystanders. Villains escaping with Human Shields still make players discard as normal.'
						]
					}
				]
			}
			,{
				keyword: 'Hydra Level'
				,source: ['S.H.I.E.L.D.']
				,content: [
					{ flavor: 'Some Villain Groups try to rise through the ranks of the Hydra organization, achieving higher Hydra Levels and ever-greater power. To do this, they help Hydra operatives achieve their missions and escape the city unharmed. They also subvert double agents to infiltrate S.H.I.E.L.D., then escape with key intel.' }
					,{ definition: 'The Hydra Level is the number of S.H.I.E.L.D. and/or HYDRA cards in the Escape Pile.' }
					,{
						list: [
							'Some Villains and Masterminds say things like "Growing Man gets +[Attack] equal to the Hydra Level".'
							,'Like S.H.I.E.L.D. Level, this includes any card with the <strong>[S.H.I.E.L.D.]</strong> or [HYDRA] team icons, as well as any card with "S.H.I.E.L.D".  or "Hydra" in its card name, Villain Group name, or Mastermind name.'
							,'Some abilities put <strong>[S.H.I.E.L.D.]</strong> cards directly from S.H.I.E.L.D. Officer Stack into the Escape Pile to increase Hydra Level. This is not an "escape" unless it\'s a Villain escaping from the city, so it won\'t KO a Hero of cost 6 or less from the HQ.'
						]
					}
				]
			}
			,{
				keyword: 'Hyperspeed'
				,source: ['Revelations']
				,content: [
					{ flavor: 'This new keyword represents how Heroes like Quicksilver and Speed move blindingly fast, battering opponents with a flurry of unpredictable strikes. It also includes hyperspeed flight, hypersonic cannons and hyper-fast volleys of arrows.' }
					,{
						list: [
							'Some Hero cards say things like "Hyperspeed 5".  This means "<strong>Reveal the top 5 cards of your deck. You get +1 [Attack] for each card with an icon you revealed this way. Discard all those cards</strong>".'
							,'It doesn\'t matter what numbers are in the [Attack] icons. Ignore [Recruit] and other icons on the revealed cards.'
							,'When building a deck with lots of Hyperspeed, you will want as many cards with [Attack] icons as you can get – including cards with "0+" printed inside their [Attack] icon.'
							,'You can also cleverly use abilities that let you set up the top card of your deck to have a [Attack] icon right before you play a card with Hyperspeed.'
							,'Some cards explicitly tell you to "Hyperspeed 3 for [Recruit]".  This means "Reveal the top 3 cards of your deck. You get +1 [Recruit] for each card with a [Recruit] icon you revealed this way. Discard all those cards.'
							,' Finally, some cards say "Hyperspeed 3 for [Recruit] and [Attack]".  In this case, if you revealed one card with a [Recruit] icon and two cards that each had [Recruit] and [Attack] icons, you would get +3 [Recruit] and +2 [Attack]. Cards with both [Recruit] and [Attack] icons can be very useful with Hyperspeed!'
						]
					}
				]
			}
			,{
				keyword: 'Indigestion'
				,source: ['Venom']
				,content: [
					{ flavor: 'Venompool shares a twisted sense of humor with the original Venom and Carnage. It wasn\'t enough for them to have Digest abilities while eating people – they had to have Indigestion abilities too! Let\'s just say you don\'t want to see what happens when Carnage is eating somebody and gets Indigestion…' }
					,{ definition: 'If you don\'t have enough cards in your Victory Pile to use a card\'s Digest ability, use its Indigestion ability instead.' }
					,{
						list: [
							'For example, some Heroes say things like: "<strong>Digest 4</strong>: Draw two cards. <strong>Indigestion</strong>: You get +2 [Recruit]".'
							,'When you play this card, if you have at least 4 cards in your Victory Pile, then you use the Digest ability and draw two cards.'
							,'If you have zero to three cards in your Victory Pile, then you use the Indigestion ability instead, getting +2 [Recruit].'
							,'If you have enough cards in your Victory Pile to use the Digest ability, you cannot choose to use the Indigestion ability instead.'
						]
					}
				]
			}
			,{
				keyword: 'Investigate'
				,source: ['Nior','Dimensions']
				,content: [
					{ flavor: 'This keyword represents hard-bitten Noir detectives investigating mysteries and searching for evidence and allies.' }
					,{
						list: [
							'Some cards say things like "<strong>Investigate</strong> for a [Tech] card".  That means "<strong>Look at the top two cards of your deck. Reveal a [Tech] card from among them and draw it. Put the rest of those cards back on the top and/or bottom of your deck in any order</strong>".'
							,'Other abilities let you investigate for cards with certain costs, teams, [Attack] icons, and other traits.'
							,'Whether your investigation finds the right kind of card or not, you can still decide which cards go back on the top or bottom of your deck. This lets you set up your next Investigation or make powerful combos with other abilities that care about the top card of your deck.'
							,'Some abilities tell you to investigate entirely different decks, like the Villain, Hero and Bystander Decks. They will tell you what to do with the card you find. Like before, put the rest of the cards you looked at back on the top and/or bottom of that deck in any order.'
						]
					}
				]
			}
			,{
				keyword: 'Last Stand'
				,source: ['Revelations']
				,content: [
					{ flavor: 'This new keyword represents how a Dark Avenger fights hardest when all alone, back to the wall, making a last stand. Treacherous and cruel, they don\'t understand the teamwork of the real Avengers.' }
					,{
						list: [
							'Some Villains say "Last Stand".  This means "This gets +1 [Attack] for each empty space in the city".'
							,'Some Captain Marvel and Photon cards also say "Last Stand", representing how they fight their hardest near the end of a battle. Likewise, this means "<strong>You get +1 [Attack] for each empty space in the city</strong>".'
							,'Choose the order you fight Villains carefully when Last Stand is in the game!'
							,'If a Mastermind or Scheme causes a city space not to exist, that does not count as an "empty space".'
							,'"Double Last Stand" means double the bonus.'
						]
					}
				]
			}
			,{
				keyword: 'Lightshow'
				,source: ['X-Men']
				,content: [
					{ flavor: 'This keyword represents X-Men using fireworks and blinding bursts in spectacular combinations.' }
					,{
						list: [
							'Some Heroes say things like "<strong>Lightshow:</strong> You get +3 <strong>[Attack] ".  Once per turn, if you played at least two Lightshow cards this turn, you can use a single Lightshow ability from any of those cards</strong>.'
							,'If you play three, four, or more Lightshow cards you still use only a single Lightshow ability.'
						]
					}
				]
			}
			,{
				keyword: 'Locations'
				,source: ['Revelations']
				,content: [
					{ flavor: 'These cards represent infamous strongholds in the Marvel Universe.' }
					,{ definition: 'When a Location is played from the Villain Deck, place it above the nearest city space that does not have a Location. Leave enough room that Villains can move through the city as normal.' }
					,{
						list: [
							'Once placed, Locations don\'t move. Villains don\'t push Locations forward. You can have a Villain in a city space that has a Location above it.'
							,'Most Locations specify special abilities that happen when you fight Villains in that space. Some Locations become stronger when there\'s a Villain in that space. Some Villains and Masterminds say they become stronger based on Locations.'
							,'You can fight a Location by spending the listed amount of [Attack], putting it into your Victory Pile, and doing any Fight ability the Location may have.'
							,'If a new Location is played, and every city space already has a Location, then KO the Location with the lowest [Attack] to make room. (If tied, the current player chooses.) This might KO the newly played Location or one of the previous Locations.'
							,'In 1-player solo mode, when a Location tells "each other player" to do something, do it yourself.'
						]
					}
					,{ text: 'Location Clarifications' }
					,{
						list: [
							'<strong>Locations do not count as Villains</strong>. Special abilities that mention Villains do not work on Locations.'
							,'If a Mastermind or Scheme destroys a city space with a Location, KO that Location.'
							,'A city space with a Location above it and no Villains still counts as "empty" for abilities like Last Stand.'
							,'Each Mastermind in the set has at least one Tactic that becomes a Location. You win when the Mastermind has no face down Tactics left under them. You don\'t also have to defeat all the Tactic cards that have turned into Locations in the city.'
							,'Locations don\'t usually capture Bystanders, but some card abilities can make them capture Bystanders. Rescue them when you fight that Location.'
						]
					}
				]
			}
			,{
				keyword: 'Man (and Woman) Out of Time'
				,source: ['Captain America 75th Anniversary','Annihilation']
				,content: [
					{ flavor: 'Heroes traveling through time use this keyword ability to represent fighting in the past, present and future.' }
					,{ definition: 'After you use this card\'s abilities, set it aside. At the beginning of your next turn, play this card a second time and then discard it.' }
					,{
						list: [
							'The card is discarded the second time you play it, so you play the card only twice total. You can\'t use Man Out of Time again to play that card a third time.'
							,'Play your returning Man Out of Time cards after the "Play a Villain Card" part of your turn and before you start playing out of your hand.'
							,'You "played" a Man Out of Time card on both the first turn you played it and the second turn when you replayed it, so it can help activate your Superpower Abilities on both turns.'
							,'You can use a Focus ability on a Man Out of Time card throughout the first and second turnes you played the card.'
							,'If a special ability lets you copy (or play a copy of) a hero card, you can\t use Man Out of Time on the copy.'
							,'Some enemies send your cards Out of Time, setting them aside in the same way.  When you play and discard that card at the start of your next turn, you can\'t use Man Out of Time again.'
						]
					}
				]
			}
			,{
				keyword: 'Mandarin\'s Rings'
				,source: ['Revelations']
				,content: [
					{ text: 'Mandarin\'s Rings are the first Henchman Group that isn\'t 10 identical cards. Instead, it\'s 10 unique cards. When using these with a Mastermind besides Mandarin, they represent blasts of power from a distance, without facing the full might of Mandarin in person.' }
				]
			}
			,{
				keyword: 'Microscopic Size-Changing'
				,source: ['Ant-Man']
				,content: [
					{ flavor: 'Far beyond other Heroes that can stretch or grow, Ant-Man and Wasp can change their size to a whole new scale. They can shrink down smaller than an atom, to the quantum Microverse. Here, the very laws of physics can be broken and even reversed! This ability works like regular Size-Changing, but with a couple of twists.' }
					,{
						list: [
							'Some Heroes and Villains in this set say things like "Microscopic Size-Changing <strong>[Tech] [Tech] [Tech]</strong>".'
							,'This means "<strong>You can recruit this card for 2 [Recruit] less for each [Tech] card you played this turn, counting up to three [Tech] cards</strong>".'
							,'So if you played one [Tech] Hero this turn, this card costs 2 less. If you played two [Tech] Heroes, it costs 4 less. If you played three or more [Tech] Heroes, it costs 6 less.'
							,'Playing a fourth [Tech] card wouldn\'t reduce this cost any further since there are only three [Tech] icons listed in this particular Microscopic Size-Changing ability.'
							,'The second twist is that Microscopic Size-Changing can actually <strong>reduce a card\'s Recruit cost to zero or even a negative number!</strong> When you recruit a Microscopic Size-Changing Hero with a negative cost, <strong>you actually gain that many Recruit points!</strong>'
							,'Some Villains also have Microscopic Size-Changing. It works the same way, letting you fight that Villain for 2 [Attack] less for each card of the correct color you played this turn, counting up to the number of icons shown in the Microscopic Size-Changing ability.'
							,'Likewise, if you fight a Villain with Microscopic Size-Changing and reduce its [Attack] value to a negative number, you actually gain that many [Attack] points when you fight it. You don\'t even need to have any [Attack] points before you fight them.'
							,'For example, say you play five [Covert] Heroes, then fight a Villain with 3 [Attack] and "Microscopic Size-Changing <strong>[Covert] [Covert] [Covert] [Covert]</strong>".  The Villain\'s [Attack] decreases to -5, and you actually gain 5 [Attack] when you fight them! (The 5th [Covert] Hero you played didn\'t reduce the [Attack], since the Microscopic Size-Changing ability only had 4 icons.)'
							,'Building the right deck and shrinking down to the crazy backwards physics of the Microverse can create some very powerful turns!'
						]
					}
				]
			}
			,{
				keyword: 'Moonlight and Sunlight'
				,source: ['The New Mutants']
				,content: [
					{ flavor: 'As a werewolf, Wolfsbane gets extra powerful at night or under a full moon. By contrast, Sunspot absorbs solar energy to fuel his powers, gaining strength from the force of full sunlight. To fight at their best, they must carefully consider when to engage the enemy, by moonlight or sunlight. This is represented by this new matched pair of keywords.' }
					,{
						list: [
							'Some Hero cards say things like "<strong>Moonlight:</strong> You get +2 [Attack]".  Others say things like "<strong>Sunlight:</strong> Draw a card".'
							,'<strong>Moonlight abilities work only when most of the Heroes in the HQ have odd-numbered costs. Likewise, Sunlight abilities work only when most of the Heroes in the HQ have even-numbered costs</strong>.'
							,'Besides Heroes, some Villains and Masterminds also say they get extra [Attack] or abilities during Moonlight or Sunlight.'
							,'If there are a tied number of odd and even numbered Heroes in the HQ (because some HO spaces have been added or destroyed), then neither Moonlight nor Sunlight is in effect.'
							,'Only the printed costs matter. Abilities that change the costs of Heroes in the HO won\'t affect Moonlight and Sunlight.'
							,'"Divided Cards" from Civil War and other sets count as just one card for Moonlight/Sunlight.'
						]
					}
					,{ text: 'Manipulating Moonlight and Sunlight' }
					,{
						list: [
							'Clever players can recruit cards out of the HQ at crucial times to manipulate whether it is Moonlight or Sunlight.'
							,'When Villains escape, KO\'ing Heroes in the HQ, you can also use this opportunity to shift towards Moonlight or Sunlight.'
							,'In a game with many Moonlight and Sunlight effects, some players like to shift the odd-numbered cost cards in the HQ down a little bit, as shown below. This makes it easier to tell at a glance whether Moonlight or Sunlight is in effect.'
						]
					}
					,{ text: 'Moonlight and Sunlight Timing' }
					,{ text: 'As always, do a card\'s abilities in the order they are listed. You check Moonlight or Sunlight at the moment when you would use that ability.' }
					,{
						list: [
							'For example, Sunspot has a card that says "<strong>Moonlight:</strong> You may put a Hero from the HQ on the bottom of the Hero Deck.  <strong>Sunlight:</strong> Draw a card".  Sunspot\'s cards primarily benefit from Sunlight, so the Moonlight ability here mostly helps him push the HQ towards Sunlight.'
							,'You do these abilities in the order they are listed. So if there are three odd-numbered cards in the HQ, and you play this card, you might be able to use the Moonlight ability to change the HQ to have only two odd-numbered cards, and then you could immediately use the Sunlight ability.'
							,'Once you are completely done playing a Hero card or fighting a Villain with a Moonlight or Sunlight ability, move on. If later in the turn you change Moonlight or Sunlight, you don\'t go back in time to change the past.'
						]
					}
					,{ text: 'Remembering Odd and Even' }
					,{
						list: [
							'To help you remember that Moonlight uses odd-numbered cards, all the Moonlight-loving Hero cards have odd-numbered costs. Likewise, all the Sunlight-loving Hero cards have even-numbered costs.'
							,'Similarly, Moonlight-loving Villains all have odd-numbered [Attack] while Sunlight-loving Villains all have even-numbered [Attack]. Of course, some cards use both Sunlight and Moonlight, so they don\'t follow this guideline.'
							,'You can also remember with the phrase "The odd ones come out at night … "'
						]
					}
				]
			}
			,{
				keyword: 'Sunlight and Moonlight'
				,source: ['The New Mutants']
				,content: [
					{ flavor: 'As a werewolf, Wolfsbane gets extra powerful at night or under a full moon. By contrast, Sunspot absorbs solar energy to fuel his powers, gaining strength from the force of full sunlight. To fight at their best, they must carefully consider when to engage the enemy, by moonlight or sunlight. This is represented by this new matched pair of keywords.' }
					,{
						list: [
							'Some Hero cards say things like "<strong>Moonlight:</strong> You get +2 [Attack]".  Others say things like "<strong>Sunlight:</strong> Draw a card".'
							,'<strong>Moonlight abilities work only when most of the Heroes in the HQ have odd-numbered costs. Likewise, Sunlight abilities work only when most of the Heroes in the HQ have even-numbered costs</strong>.'
							,'Besides Heroes, some Villains and Masterminds also say they get extra [Attack] or abilities during Moonlight or Sunlight.'
							,'If there are a tied number of odd and even numbered Heroes in the HQ (because some HO spaces have been added or destroyed), then neither Moonlight nor Sunlight is in effect.'
							,'Only the printed costs matter. Abilities that change the costs of Heroes in the HO won\'t affect Moonlight and Sunlight.'
							,'"Divided Cards" from Civil War and other sets count as just one card for Moonlight/Sunlight.'
						]
					}
					,{ text: 'Manipulating Moonlight and Sunlight' }
					,{
						list: [
							'Clever players can recruit cards out of the HQ at crucial times to manipulate whether it is Moonlight or Sunlight.'
							,'When Villains escape, KO\'ing Heroes in the HQ, you can also use this opportunity to shift towards Moonlight or Sunlight.'
							,'In a game with many Moonlight and Sunlight effects, some players like to shift the odd-numbered cost cards in the HQ down a little bit, as shown below. This makes it easier to tell at a glance whether Moonlight or Sunlight is in effect.'
						]
					}
					,{ text: 'Moonlight and Sunlight Timing' }
					,{ text: 'As always, do a card\'s abilities in the order they are listed. You check Moonlight or Sunlight at the moment when you would use that ability.' }
					,{
						list: [
							'For example, Sunspot has a card that says "<strong>Moonlight:</strong> You may put a Hero from the HQ on the bottom of the Hero Deck.  <strong>Sunlight:</strong> Draw a card".  Sunspot\'s cards primarily benefit from Sunlight, so the Moonlight ability here mostly helps him push the HQ towards Sunlight.'
							,'You do these abilities in the order they are listed. So if there are three odd-numbered cards in the HQ, and you play this card, you might be able to use the Moonlight ability to change the HQ to have only two odd-numbered cards, and then you could immediately use the Sunlight ability.'
							,'Once you are completely done playing a Hero card or fighting a Villain with a Moonlight or Sunlight ability, move on. If later in the turn you change Moonlight or Sunlight, you don\'t go back in time to change the past.'
						]
					}
					,{ text: 'Remembering Odd and Even' }
					,{
						list: [
							'To help you remember that Moonlight uses odd-numbered cards, all the Moonlight-loving Hero cards have odd-numbered costs. Likewise, all the Sunlight-loving Hero cards have even-numbered costs.'
							,'Similarly, Moonlight-loving Villains all have odd-numbered [Attack] while Sunlight-loving Villains all have even-numbered [Attack]. Of course, some cards use both Sunlight and Moonlight, so they don\'t follow this guideline.'
							,'You can also remember with the phrase "The odd ones come out at night … "'
						]
					}
				]
			}
			,{
				keyword: 'Multiple Masterminds'
				,source: ['Secret Wars Vol. 1','Secret Wars Vol. 2']
				,content: [
					{ text: 'When some powerful Villains escape, they ascend to become new Masterminds, so there are multiple Masterminds in the game!  Schemes can do this too. Players must defeat all the Masterminds to win.' }
					,{ list: ['When a Master Strike occurs, each Mastermind does its Master Strike ability. The player whose turn it is picks the order.'] }
				]
			}
			,{
				keyword: 'Outwit'
				,source: ['World War Hulk']
				,content: [
					{ flavor: 'In the duality of Bruce Banner\'s brains and Hulk\'s brawn, the Outwit keyword is the brains. It represents how Bruce Banner, Amadeus Cho, the Illuminati, and the Intelligencia are among the smartest characters in the Marvel universe.' }
					,{
						list: [
							'Some Heroes say things like "Outwit: Draw a card".'
							,'<strong>You can use this Outwit ability only if you reveal Heroes with 3 different costs</strong>.'
							,'You can count the Outwit card itself. So you can reveal a 2-cost Hero in your hand, plus a 6-cost Outwit card and 0-cost S.H.I.E.L.D. Agent Hero you already played.'
							,'Some Villains and Masterminds also say they get stronger or harm you in special ways if you fail to Outwit them. For example: "Ambush: If you can\'t Outwit the Leader, play the top card of the Villain Deck".'
							,'You can choose not to Outwit, even if you are able.'
						]
					}
				]
			}
			,{
				keyword: 'Patrol'
				,source: ['Secret Wars Vol. 2']
				,content: [
					{ text: 'Some cards have abilities like "Patrol Sewers: If it\'s empty, rescue a Bystander".  When you play that card, you can use that ability only if that city space has no cards in it.' }
					,{
						list: [
							'If that city space becomes empty later in the turn, it\'s too late to use the Patrol ability.'
							,'If playing a Patrol card gives you [Attack] points, and you use those [Attack] points to clear out that city space, it\'s too late to use the Patrol ability, since the space wasn\'t empty when you played the Patrol card.'
							,'This can also say "Fight: Patrol the Bank: If it\'s empty, you get +2 [Recruit] points. If it\'s not, you get +2 [Attack] points".'
							,'Other cards let you patrol even stranger places, like the Escape Pile, or a Victory Pile. Similarly, you can use those Patrol abilities if that place has no cards in it.'
							,'If a Mastermind or Scheme causes a city space not to exist, you can\'t patrol that space.'
						]
					}
				]
			}
			,{
				keyword: 'Phasing'
				,source: ['Civil War']
				,content: [
					{ flavor: 'This keyword represents Heroes becoming insubstantial and moving through solid objects.' }
					,{
						list: [
							'During your turn, if a card with Phasing is in your hand, <strong>you may swap it with the top card of your deck</strong>.'
							,'This lets you get a different card instead, save a crucial Phasing card for next turn, or set up a combo that cares about the top card of your deck.'
							,'Swapping cards this way isn\'t "playing a card" or "drawing a card", so it doesn\'t count for other abilities that trigger on those things.'
						]
					}
				]
			}
			,{
				keyword: 'Piercing Energy'
				,source: ['X-Men']
				,content: [
					{ flavor: 'This keyword represents X-Men using psychic knives & sonic screams to pierce enemy defenses.' }
					,{
						list: [
							'Some Heroes give you a new kind of points called "Piercing Energy", using the [Piercing Energy] icon. <strong>You can fight a Villain or Mastermind by spending [Piercing Energy] points equal to that enemy\'s printed Victory Points ([Victory Points]) value</strong>. You ignore that enemy\'s [Attack] and any [Attack] modifiers.'
							,'You can also ignore any special conditions for fighting that enemy, automatically rescuing any Human Shields.'
							,'You can\'t use Piercing Energy against cards that have no printed VP value, like Shadow-X Villains, or Master Strikes that become Villains.'
						]
					}
				]
			}
			,{
				keyword: 'Poison Villains'
				,source: ['Venom']
				,content: [
					{ flavor: 'Poison Villains use Symbiote Bonds in a special way.' }
					,{
						list: [
							'For example, Poison Dr. Octopus says "<strong>Fight</strong>: This <strong>Symbiote Bonds</strong> with a Villain in the Bank. If already bonded or unable to bond, gain this as a Hero instead".'
							,'So Dr. Octopus enters the city as a normal Villain. When you fight him, if there\'s a Villain in the Bank, then Poison Dr. Octopus will bond with that Villain. If there\'s no Villain in the Bank, then you gain Poison Dr. Octopus as a Hero instead, putting him in your discard pile.'
							,'Once Poison Dr. Octopus becomes bonded, if you fight that Combined Villain, you choose one of the two Villains and do its Fight effect. If you choose Poison Dr. Octopus, then since he is currently bonded, you gain him as a Hero.'
							,'When facing Poison Villains, be careful about when you fight them, so you can turn them into Heroes as soon as possible!'
						]
					}
				]
			}
			,{
				keyword: 'Revenge'
				,source: ['Deadpool']
				,content: [
					{ flavor: 'This keyword represents Villains getting madder as you defeat their fellow team members.' }
					,{ definition: 'This Villain gets +1 Attack for each specified Villain type in your Victory Pile.' }
					,{
						list: [
							'For example, "Revenge for Deadpool\'s Friends" means this Villain gets +1 Attack for each ‘Deadpool\'s Friends\' Villain in your Victory Pile.'
						]
					}
				]
			}
			,{
				keyword: 'Rise of the Living Dead'
				,source: ['Secret Wars Vol. 1']
				,content: [
					{ definition: 'Each player checks the top card of their Victory Pile. If that card is a Villain with a "Rise of Living Dead" ability, that Villain reenters the city.' }
					,{
						list: [
							'Mastermind Tactics never return this way.'
							,'If you put a Villain with Bystanders into your Victory Pile, you choose the order.'
						]
					}
				]
			}
			,{
				keyword: 'Savior'
				,source: ['Captain America 75th Anniversary']
				,content: [
					{ flavor: 'This Keyword ability on Heroes and Villains rewards you for saving the innocent.' }
					,{ definition: 'Use this ability if you have at least 3 Bystanders in your Victory Pile.' }
					,{
						list: [
							'If you defeat a Villain with bystanders, place Rescued bystanders into your Victory Pile before checking any Savior ability on that Villain.'
							,'If a Hero Card rescues a Bystander, that Bystander counts towards any Savior ability on that Hero.'
						]
					}
				]
			}
			,{
				keyword: 'Shards'
				,source: ['Guardians of the Galaxy','Into the Cosmos']
				,content: [
					{ flavor: '"Shard" tokens represent cosmic energy. These tokens can be gained by players, Villains, and Masterminds. Shards first appeared in Legendary®: Guardians of the Galaxy in 2014. Many players like to personalize their Shards by using glass beads, wooden cubes, or plastic tokens instead.' }
					,{ text: 'Beginning with the Into the Cosmos set there is <strong>no limit to the number of Shards that can be in the game at once</strong>. This is a change from rules prior to the release of the Into the Cosmos expansion.' }
					,{
						list: [
							'Players: When you gain a Shard, put it in front of you. You can spend a Shard to get +1 [Attack] (returning the Shard to the supply). You can use the Shard immediately, or you can keep it to use on any future turn. You can spend as many Shards as you wish in a single turn. Shards are not worth Victory Points.'
							,'<strong>Villains:</strong> When a Villain gains Shards, put them on that Villain. That Villain gets +1 [Attack] for each Shard it has. After you defeat a Villain, <strong>you take one of its Shards</strong>. Return the rest of that Villain\'s Shards to the supply. When a Villain escapes, <strong>the Mastermind gains one of the Shards on that Villain</strong>. Return the rest to the supply.'
							,'<strong>Masterminds:</strong> When a Mastermind gains Shards, put them on that Mastermind. That Mastermind gets +1 [Attack] for each Shard it has. After you fight a Mastermind, <strong>you take one of its Shards</strong>. Return the rest to the supply. Then do the Fight effect on the Mastermind Tactic, which may give the Mastermind additional Shards.'
						]
					}
				]
			}
			,{
				keyword: 'S.H.I.E.L.D. Clearance'
				,source: ['Civil War']
				,content: [
					{ flavor: 'This keyword represents pro-registration S.H.I.E.L.D. forces that can be only defeated with the help of S.H.I.E.L.D. information.' }
					,{
						list: [
							'If a Villain says "S.H.I.E.L.D. Clearance", <strong>then you must discard a [S.H.I.E.L.D.] Hero as an additional cost to fight that Villain</strong>.'
							,'Likewise, if a Mastermind has "Double S.H.I.E.L.D. Clearance", then you must discard two <strong>[S.H.I.E.L.D.]</strong> Heroes each time you fight them.'
							,'If you are playing with [HYDRA] Heroes, you may discard them instead of <strong>[S.H.I.E.L.D.]</strong> Heroes.'
						]
					}
				]
			}
			,{
				keyword: 'S.H.I.E.L.D. Level'
				,source: ['S.H.I.E.L.D.']
				,content: [
					{ flavor: 'This keyword represents how S.H.I.E.L.D. Agents unlock special operations, resources, and abilities as they rise through the ranks of the organization. Sending agents on undercover missions, fighting Hydra, and defeating rogue S.H.I.E.L.D. operatives are all good ways to increase your S.H.I.E.L.D. Level.' }
					,{ definition: 'Your S.H.I.E.L.D. Level is the number of S.H.I.E.L.D. and/or HYDRA cards in your Victory Pile.' }
					,{
						list: [
							'Some cards say things like "S.H.I.E.L.D. Level 2: Draw a card".  You can use this ability only if your S.H.I.E.L.D. Level is 2 or higher.'
							,'This counts any card with the <strong>[S.H.I.E.L.D.]</strong> or [HYDRA] team icons, as well as any card with "S.H.I.E.L.D".  or "Hydra" in its card name, Villain Group name, or Mastermind name. So this includes S.H.I.E.L.D. Assault Squads, Hydra Kidnappers, Hydra High Council Tactics, etc.'
							,'This never <em>consumes</em> the cards in your Victory Pile – it just checks to make sure you have them.'
							,'Heroes that use S.H.I.E.L.D. Level all have ways to get the needed cards into your Victory Pile.'
							,'Note: When playing with Hydra Villain Groups and/or multiple Heroes that use S.H.I.E.L.D. Levels, your S.H.I.E.L.D. Levels will naturally be higher.'
						]
					}
				]
			}
			,{
				keyword: 'Sidekicks'
				,source: ['Secret Wars Vol. 1']
				,content: [
					{ text: 'Secret Wars adds a new Sidekick Stack to the game. Players can pay to recruit <strong>up to one Sidekick per turn</strong>. When card effects tell you to "gain Sidekicks", that doesn\'t count against that one-per-turn limit.' }
				]
			}
			,{
				keyword: 'Size-Changing'
				,source: ['Civil War','Champions','Ant-Man']
				,content: [
					{ flavor: 'This keyword represents Heroes and Villains using superpowers to shrink, grow, or massively change their size. It\'s also used by characters that can change the size of a weapon, technology, or energy.' }
					,{
						list: [
							'Some Hero cards say, "<strong>Size-Changing:[Covert]</strong>".  This means "You can recruit this card for <strong>2 [Recruit] less</strong> if you played a [Covert] card this turn".'
							,'Likewise, some Villain cards say, "<strong>Size-Changing:[Tech]</strong>".  This means "You can fight this Villain for <strong>2 [Attack] less</strong> if you played a [Tech] card this turn".'
							,'Some Divided Cards say "<strong>Size-Changing:[Tech]</strong>"on one side and "<strong>Size-Changing:[Strength]</strong>" on the other side. You can recruit either side of the card with its own Size-Changing discount, but you can\'t get both discounts at once.'
							,'Some Heroes and Villains say things like "<strong>Size-Changing: [Strength],[Covert]</strong>" If you played any [Strength] Heroes this turn, the cost is 2 less. If you played any [Covert] Heroes this turn, the cost is 2 less. If you played both a [Strength] Hero and a [Covert] Hero this turn, then the cost is 4 less.'
							,'Fin Fang Foom and one of his Monsters Unleashed even say "<strong>Size-Changing: [Strength], [Instinct], [Covert], [Tech], [Ranged]</strong>". You can pay 2 [Attack] less to fight them for each of these Hero Classes you played this turn.'
							,'<strong>Note</strong>: For any Size-Changing card, it doesn\'t matter how many Heroes of that Hero Class you played – it only matters whether or not you played any Heroes of that Hero Class.'
							,'After you\'ve recruited a card, Size-Changing doesn\'t do anything else on that card.'
							,'If a Hero in the HQ already has "<strong>Size-Changing: [Tech]</strong>" and it gains "<strong>Size-Changing: [Tech], [Ranged]</strong>" from another special ability like the Sporr Villain, it just ends up with "<strong>Size-Changing: [Tech], [Ranged]</strong>".  A card can\'t have Size-Changing for the same Hero Class twice.'
						]
					}
				]
			}
			,{
				keyword: 'Smash'
				,source: ['World War Hulk']
				,content: [
					{ text: 'This keyword covers the brawn. It represents how when Hulks get angry, they SMASH hard, no matter what they have to toss aside.' }
					,{
						list: [
							'Some Heroes say things like "Smash 3".  This means "You may discard another card from your hand. If you do, you get +3 [Attack]".'
						]
					}
				]
			}
			,{
				keyword: 'Soaring Flight'
				,source: ['X-Men']
				,content: [
					{ flavor: 'This ability represents X-Men flying into action as rapid reinforcements.' }
					,{
						definition: [
							'When you recruit a Hero with "Soaring Flight", set it aside. At the end of this turn, add it to your new hand as an extra card.'
						]
					}
				]
			}
			,{
				keyword: 'Grievous Wounds'
				,source: ['Civil War']
				,content: [
					{ text: 'Civil War comes with 15 new "Grievous Wonds" that are more difficult to heal.  Shuffle them all into the Wound Stack face down, so you have 45 total Wounds.' }
					,{
						list: [
							'Instead of normal Wound text, a Grievous Wound says something like "<strong>Healing</strong>: You mey spend 5 [Recruit].  If you do, KO this Wound".'
							,'Using these Healing abilities doesn\'t prevent you from recruiting or fighting that turn.'
							,'You can only use these Healing abilities during your turn.'
							,'Grievous Wounds still count as "Wounds" for all card effects.'
							,'If you have a normal Wound, you can use its normal "KO all your wounds" Healing ability to KO your Grievous Wounds too.  But if you don\'t have a normal Wound in hand, then you can\'t'
						]
					}
				]
			}
			,{
				keyword: 'Special Sidekicks: Pet Avengers'
				,source: ['Civil War']
				,content: [
					{ text: 'Pet Avengers are super-powered "Special Sidekicks".  When you set up, shuffle them <strong>face down</strong> into a Sidekick Stack. <strong>Once per turn</strong>, a player can pay 2[recruit] to recruit a Sidekick from the top of the Sidekick Stack. When you play and Sidekick, return it to the bottom of the Sidekick Stack.' }
					,{
						list: [
							'You still "played" that Sidekick and can use Superpower abilities based on its Hero Class.'
							,'When a card effect says "gain a Sidekick", put the top card of the Sidekick Stack into your discard pile. That doesn\'t count against the pay-to-recruit-once-per-turn limit.'
							,'If you have other Sidekicks from various expansions, shuffle them all into a single face-down Sidekick Stack.'
						]
					}
				]
			}
			,{
				keyword: 'Spectrum'
				,source: ['Secret Wars Vol. 2']
				,content: [
					{ text: 'Some cards have abilities like "Spectrum: Draw a Card".  You can use a card\'s Spectrum abilities only if you have at least 3 classes of Hero. (e.g. [Covert], [Strength] and [Ranged]).' }
					,{
						list: [
							'Grey S.H.I.E.L.D. Heroes, HYDRA Allies, New Recruits and Sidekicks don\'t have classes, so they don\'t help.'
							,' You can count all the classes you have among cards you played this turn and cards in your hand.'
							,' Multiclass cards work especially well with Spectrum.'
						]
					}
				]
			}
			,{
				keyword: 'Striker'
				,source: ['Spider-Man Homecoming']
				,content: [
					{ text: 'This keyword represents Villains and Masterminds that get more confident and powerful as the Mastermind smashes Heroes. It means "<strong>This gets +1 [Attack] for each Master Strike in the KO pile and/or stacked next to the Mastermind</strong>".' }
					,{
						list: [
							'A couple of Hero cards also have the Striker ability and give you + [Attack] the same way.'
							,'A couple of cards say "Double Striker", meaning they get +2 [Attack] per Strike, or even "Triple Striker" meaning +3 [Attack] per Strike. By default, most Master Strikes go to the KO pile when they occur. However, some Masterminds specifically put their Master Strikes in unusual places. Striker also counts all face-up Master Strike cards in any of these unusual places.'
						]
					}
					,{ text: 'By default, most Master Strikes go to the KO pile when they occur. However, some Masterminds specifically put their Master Strikes in unusual places. Striker also counts all face-up Master Strike cards in any of these unusual places. For example, for these Masterminds:' }
					,{
						list: [
							'<strong>Galactus</strong> – Count Master Strikes in the city.'
							,'<strong>Macho Gomez</strong> – Count Master Strikes in front of all players.'
							,'<strong>Deathbird</strong> – Count Master Strikes in the city, Escape Pile, and all players\' Victory Piles.'
							,'<strong>Mysterio</strong> – Count Master Strikes in all players\' Victory Piles. Don\'t count Master Strikes shuffled into his Tactics, since they\'re not face up.'
						]
					}
				]
			}
			,{
				keyword: 'Switcheroo'
				,source: ['Dimensions']
				,content: [
					{ flavor: 'This keyword represents how Heroes like Squirrel Girl and Jessica Jones unpredictably switch up their tactics. Sometimes they instantly switch to new fighting stances, while other times they switch in new Heroes altogether.' }
					,{
						list: [
							'Some Hero cards say things like "<strong>Switcheroo 4</strong>".'
							,'This means "<strong>You can reveal this card from your hand and put it on the bottom of the Hero Deck. If you do, you may put a Hero of the specified printed cost from the HQ into your hand</strong>".'
							,'So when you have a Switcheroo card in your hand, you can choose to play it as normal [Recruit], [Attack], and other effects. Or you can choose to permanently swap it for another card in the HQ instead.'
							,'You use Switcheroo <em>instead</em> of playing the card. So when you Switcheroo, you don\'t get any [Recruit], [Attack], or other effects from the Switcheroo card that you put on the bottom of the Hero Deck.'
						]
					}
				]
			}
			,{
				keyword: 'Symbiote Bonds'
				,source: ['Venom']
				,content: [
					{ flavor: 'This keyword represents how symbiotes like Hybrid, Riot, and Lasher bond with other characters, enhancing them with a dark shell. You must fight the combined strength of the host and symbiote to split them apart, then finish what remains in a second fight.' }
					,{
						list: [
							'Some Villains say things like "<strong>Ambush</strong>: A Henchman Villain from your Victory Pile <strong>Symbiote Bonds</strong> with Lasher".'
							,'<strong>This means stack this card onto the specified Villain, combining them into a single Villain with both cards\' [Attack] and text added together</strong>.'
							,'To fight a Combined Villain, you must spend the total [Attack] of both Villain cards combined. Rescue all the Bystanders that Combined Villain had. <strong>Then put either one of the Villain cards from that Combined Villain into your Victory Pile and do that card\'s Fight effect</strong>. The other card from that Combined Villain stays in that city space, and you don\'t do its Fight effect.'
							,'<strong>If a Combined Villain escapes</strong>, it\'s only a single escape, so it only KOs one Hero that costs 6 or less from the HQ. (If it\'s carrying any number of Bystanders, it makes all players discard a single card as normal.) Do the Escape abilities of both those Villain cards in any order. Once in the Escape Pile, they are two unattached Villains again.'
							,'Keep one card of the Combined Villain tucked under the other, so you can see both cards\' [Attack] and text.'
							,'Since a Combined Villain has the text of both its Villain cards, it can get extra [Attack] or restrictions from various special abilities on either of its cards. It also counts as both cards\' Villain Groups.'
							,'Symbiote Bonds never combine more than two Villains in the same city space. Ignore any effect that would combine a third Villain in that space.'
							,'Once two Villains are bonded, only fighting can break them up. Other Symbiote Bonds abilities can\'t break up a Combined Villain to attach one of the cards to something else.'
							,'If a Symbiote Bonds ability puts a new Villain card into the city from the Villain Deck, Escape Pile, Victory Pile, etc., do any Ambush ability on the newly entering card. However, that Ambush ability won\'t be able to break up a Combined Villain or add a third card to it.'
							,'If a special ability automatically "defeats" a Combined Villain, you still put just one of its cards into your Victory Pile and do that card\'s Fight effect.'
							,'A combined Villain has the VP of both its cards combined. So you can spend Piercing Energy equal to both cards\' total combined VP to fight the Combined Villain, putting one of its cards into your Victory Pile as normal.'
						]
					}
				]
			}
			,{
				keyword: 'Teleport'
				,source: ['Dark City','Secret Wars Vol. 1','Secret Wars Vol. 2','Dimensions']
				,content: [
					{ definition: 'Instead of playing a card with "Teleport", you may set it aside.  At the end of this turn add it to your new hand as an extra card.' }
				]
			}
			,{
				keyword: 'Thrown Artifacts'
				,source: ['Fear Itself','Heroes of Asgard']
				,content: [
					{ text: 'Thor\'s mighty hammer Mjolnir is the most famous Thrown Artifact in the entire Marvel universe. So Legendary®: Heroes of Asgard is the perfect time to bring back the "Thrown Artifact" keyword, which debuted in Legendary®: Fear Itself. All the Hero Artifacts in this set are Thrown Artifacts. These follow all the normal Artifact rules, and you can also "throw" them at the perfect moment.' }
					,{
						list: [
							'<strong>To "throw" a Thrown Artifact, put it on the bottom of your deck and use its listed ability</strong>.'
							,'You can throw it on the same turn that you play the Thrown Artifact, or you can wait until a later turn.'
							,'If you use this when your deck has not many cards left, you might draw the Thrown Artifact again quite soon. (Much like Thor\'s hammer, a Thrown Artifact can return to your hand very quickly!)'
							,'You can throw as many Artifacts as you want in a turn, including multiple Artifacts with the same card name.'
							,'You can only throw artifacts during your turn (unless it specifically says otherwise).'
							,'If a card effect like Rogue, Hulkling, or Scarlet Witch would let you "copy" an Artifact card, you can use that Artifact\'s "Once per turn" or "When you throw this" ability once, and there is no other effect. (Don\'t put anything on the bottom of your deck.)'
						]
					}
				]
			}
			,{
				keyword: 'Transforming Heroes'
				,source: ['World War Hulk']
				,content: [
					{ text: 'Duality and transformation are key themes of Hulk stories: the puny, brilliant scientist transforming into a raging monster. The "Transform" keyword highlights this theme.' }
					,{
						list: [
							'Each Hero in this set has some special "Transformed" cards that go along with it. When you use these Heroes, don\'t shuffle their "Transformed" cards into the Hero Deck. Instead, set them aside in a special Transformation Pile. You can\'t recruit cards from this pile. Instead, you transform other cards into them.'
							,'Some Hero cards like "Bruce Banner: Gamma Ray Experiments" say things like "…Transform this into Savage Hulk Unleashed".'
							,'When you play a Hero card that says it transforms into another card, you complete all effects on the card you played and get its normal [Recruit] and [Attack].'
							,'Then remove the transforming card from the game (putting it in the Transformation Pile) and put the newly transformed card into your hand instead (from the Transformation Pile). You can play the new Transformed card immediately that same turn.'
							,'You still count as having played the transforming card you played and removed from the game, including effects like "You get +1 [Attack] for each [Tech] card you played this turn".  But if an effect asks you to reveal one of your cards, you can only reveal the new, transformed card, not the old card that you removed from the game.'
							,'Some transforming cards tell you to put the new card on top of your deck or in your discard pile instead.'
							,'You can look through the Transformation Pile at any time.'
							,'At the end of the game, store a Hero\'s Transformed cards with the rest of that Hero\'s cards. To start a game, you only need to bring out the Transformed cards for the Heroes you\'re using. Don\'t bring out all the Transformed cards in the entire game.'
							,'If you sleeve your cards, you can put the Transformed version of the card in the same sleeve, behind the Transforming card. When it\'s time to transform, you just pull the back card to the front of the sleeve. It\'s a little thicker in the sleeve, but it still shuffles well.'
						]
					}
				]
			}
			,{
				keyword: 'Transforming Masterminds'
				,source: ['World War Hulk']
				,content: [
					{ text: 'Each Mastermind in this set is a double-sided "Transforming Mastermind" that transforms back and forth between two forms during the game.' }
					,{
						list: [
							'The side with the "Always Leads" ability starts face up.'
							,'When a Master Strike or Mastermind Tactic ability occurs, it will tell you to "Transform" the Mastermind, meaning flip it over to its other side. (Don\'t also do the Master Strike ability of the new side.)'
							,'A Mastermind only uses the abilities and [Attack] of its currently face up side. Ignore the special abilities and values on the currently face down side.'
						]
					}
				]
			}
			,{
				keyword: 'Traps'
				,source: ['X-Men','World War Hulk']
				,content: [
					{ text: 'Enemies that can\'t beat Hulks with raw strength often try to trap them instead. World War Hulk features an additional card type: <strong>Traps</strong>. Each Villain Group in this set has a Trap.' }
					,{
						list: [
							'When a Trap is played from the Villain Deck, it gives you a challenge to complete this turn to avoid the Trap. If you complete the challenge, put the Trap in your Victory Pile and get its VP.'
							,'If you fail to complete the challenge, then at the end of the turn you must suffer the listed consequences! (<em>Do this after you draw your new hand</em>)'
							,'Traps don\'t push forward Villains in the city.'
						]
					}
				]
			}
			,{
				keyword: 'Undercover'
				,source: ['S.H.I.E.L.D.']
				,content: [
					{ text: 'This keyword represents sending S.H.I.E.L.D. agents off the grid on special missions to recover valuable intel.' }
					,{
						list: [
							'Some cards say things like "You may send a <strong>[S.H.I.E.L.D.]</strong> Hero from your hand Undercover".  This means "<strong><em>Put that Hero into your Victory Pile. It\'s worth 1VP".</em></strong>'
							,'This helps get your starting S.H.I.E.L.D. Agents and Troopers out of your deck so that you draw more powerful Heroes more often. You can also use it to get rid of other S.H.I.E.L.D. cards like Officers that you might not need later in the game. The main Heroes in this set are all part of the <strong>[S.H.I.E.L.D.]</strong> team too, so you can also send their cards Undercover.'
							,'If you play a card, and it sends itself Undercover, you still get its [Recruit] and [Attack].'
							,'Sending <strong>[S.H.I.E.L.D.]</strong> Heroes Undercover is also key to increasing your S.H.I.E.L.D. Level.'
						]
					}
				]
			}
			,{
				keyword: 'Ultron Mastermind'
				,content: [
					{ text: 'This Mastermind\'s abilities put Heroes into a "<strong>Threat Analysis</strong>" pile. He says "<strong>Ultron is Empowered by each color in his Threat Analysis pile</strong>". This means he gets +1 [Attack] for each card in the HQ that matches any color among all the cards in his pile. It doesn\'t matter whether he has one [Ranged] card or three [Ranged] cards in his pile – either way he gets +1 [Attack] for each [Ranged] card in the HQ. A * symbol on a card\'s [Cost] or [Attack] is a signal that there\'s something unusual about that value, like Size-Changing, Chivalrous Duel, or another special condition needed to fight that Villain.' }
				]
			}
			,{
				keyword: 'Versatile'
				,source: ['Dark City','Champions']
				,content: [
					{ text: 'This keyword represents Heroes who think quickly on their feet to react perfectly to any situation.' }
					,{
						list: [
							'"<strong>Versatile 2</strong>" means "<strong>You get</strong> +2 [Recruit] or +2 [Attack]".  Other cards use different Versatile numbers.'
							,'You choose to get all [Recruit] or all [Attack] when you play the card. You can\'t divide it up.'
							,'However, if you play multiple Versatile cards in a turn, you can choose [Recruit] for some cards and [Attack] for others, if you wish.'
							,'If you use Cheering Crowds to play a Versatile card twice, you could get [Recruit] with one play and get [Attack] with the other play, or choose the same for both.'
						]
					}
				]
			}
			,{
				keyword: 'Villainous Weapons'
				,source: ['Heroes of Asgard','Marvel Studios Guardians of the Galaxy']
				,content: [
					{ text: 'As a new twist on the Artifacts of past sets, Legendary®: Heroes of Asgard introduces an all-new card type: "Villainous Weapons".  Villains and Masterminds can capture these ancient weapons to become even more powerful. But if you defeat them, you can seize those weapons to use as Artifacts of your own.' }
					,{
						list: [
							'Villainous Weapons are not Villains.'
							,'When a Villainous Weapon is played from the Villain Beck, <strong>the Weapon is captured by the Villain in the city that\'s closest to the Villain Deck. <u>If there are no Villains in the city, then KO the Weapon instead</u></strong>.'
							,'Villainous Weapons empower the Villain holding them, adding the [Attack] bonus printed on the Weapon. Tuck the Weapon under the Villain so you can see the Weapon\'s [Attack] bonus right under the Villain\'s [Attack].'
							,'An enemy can use any number of Weapons at the same time, getting all of their bonuses combined.'
							,'<strong>When a Villain with any number of Villainous Weapons escapes the city, the Mastermind captures all those Weapons</strong>, getting their [Attack] bonuses.'
							,'When you fight a Villain or Mastermind holding any number of Weapons, <strong>put all those Weapons into your discard pile as Artifacts</strong>.'
							,'When you have a Villainous Weapon in your hand, you can play it just like any other Artifact.'
							,'<strong>You never get the Weapon\'s printed [Attack] bonus</strong> when you play the Artifact or control it. Only Villains and Masterminds get that [Attack] bonus. You only get the specific Artifact abilities written on the card.'
							,'Villainous Weapons you have captured as Artifacts <strong>have 0 cost</strong>, have no color or Hero Class, and don\'t count as Hero cards or Villain cards. Since they have no cost, Villainous Weapons can never make you Worthy. (How appropriate… )'
							,'If you have gained a Villainous Weapon, and a card effect makes an enemy capture that Weapon again, then it works as a Villainous Weapon again until someone defeats that enemy to reclaim it.'
							,'Malekith and Hela both have Mastermind Tactics that turn into Villainous Weapons. You win when the Mastermind has no face down Tactics left under them, even if there are still some Tactics that have turned into other card types somewhere.'
						]
					}
				]
			}
			,{
				keyword: 'Villains You Gain as Heroes'
				,source: ['Secret Wars Vol. 1','Secret Wars Vol. 2']
				,content: [
					{ text: 'The Ultimates and Thor Corps start as Villains, but when you fight them, they become Hero cards and join you. If a card effect wants to know their cost as Heroes, use their old Villain Attack value.' }
				]
			}
			,{
				keyword: 'Wall-Crawl'
				,source: ['Paint the Town Red','Secret Wars Vol. 2','Spider-Man Homecoming']
				,content: [
					{ text: 'This Keyword lets Heroes set up powerful combos by placing cards at the top of their decks. "Wall-Crawl" means: "<strong>When you recruit this Hero, you may put it on top of your deck</strong>".' }
					,{
						list: [
							'Remember: When you use Wall-Crawl to put a card on top of your deck,don\'t use any other abilities on that card until it gets drawn from your deck.'
							,'If you "gain" a Hero through some special ability like Skrull Shapeshifters, you can\'t use Wall-Crawl because you didn\'t "recruit" that Hero.'
						]
					}
					,{ text: 'Keep an eye out for powerful combos you can create if you recruit a Wall-Crawl Hero early in your turn. Try doing it before you play cards that reveal the top card of your deck, revealing the Wall-Crawl card you just put there.' }
				]
			}
			,{
				keyword: 'Waking Nightmare'
				,source: ['The New Mutants']
				,content: [
					{ text: 'The New Mutants often confront demons, monsters, sadists, trauma, and psychological horror. This keyword represents these attacks on their very sanity. It\'s also used to represent how the Hero Mirage uses her powers to bring dream and nightmare constructs to life.' }
					,{
						list: [
							'Some cards tell you to "have a Waking Nightmare".  This means "<strong>Discard a non-grey Hero from your hand. If you discard a Hero this way, draw a card</strong>".'
							,'Getting pummeled by Waking Nightmares can downgrade your hand from powerful superheroes to mere S.H.I.E.L.D. Agents. However, you can sometimes find new courage in a nightmare: you may be able to discard a non-grey Hero you don\'t need very much and have a chance to draw something more helpful.'
							,'Some Mirage Hero cards also let you have a Waking Nightmare and give you specific benefits for it.'
						]
					}
				]
			}
			,{
				keyword: 'Worthy'
				,source: ['Heroes of Asgard']
				,content: [
					{ text: 'Many Marvel stories involve Thor and others proving whether they are worthy of wielding Asgard\'s mightiest weapons, like Mjolnir and Storm breaker. This is represented by the new "Worthy" keyword. Some Hero cards say things like "If you are Worthy, draw a card".' }
					,{
						list: [
							'<strong>You are Worthy if you have a Hero that costs 5 or more</strong>.'
							,'As usual, the phrases "your Heroes" and "Heroes you have" include both cards in your hand and cards you have played this turn. They also include Hero Artifacts you control. (Heroes in your deck and discard pile don\'t count.)'
							,'Some Villains and Schemes also check if you are Worthy and reward or punish you accordingly.'
							,'When you consider whether to recruit a card that asks you to be Worthy, you may find yourself hesitating, wondering whether you truly have enough to prove Worthy at the crucial moment. This is a great fit to how Thor and other Heroes question whether they will be Worthy at the crucial moment in Marvel stories.'
						]
					}
				]
			}
			,{
				keyword: 'Wounded Fury'
				,source: ['World War Hulk']
				,content: [
					{ text: 'This keyword represents how wounding a Hulk often just makes it ANGRIER and STRONGER! It also includes Villains attacking with more furious bloodlust as they wound you.' }
					,{
						list: [
							'When a Hero card says "Wounded Fury", it means "<strong>You get +1 [Attack] for each Wound in your discard pile</strong>".'
							,'Likewise, when a Villain or Mastermind says "Wounded Fury", it means "<strong>It gets +1 [Attack] for each Wound in your discard pile</strong>".'
						]
					}
				]
			}
			,{
				keyword: 'X-Gene'
				,source: ['X-Men']
				,content: [
					{ text: 'This Keyword represents X-Men combining unique mutant powers with their signature teamwork.' }
					,{
						list: [
							'Some Heroes say things like "<strong>X-Gene [Ranged]</strong>: You get +2 [Attack]". This means "If you have a [Ranged] card in your discard pile, you get +2 [Attack]".  <strong>You can use a card\'s X-Gene ability only if you have the specified kind of card in your discard pile</strong>.'
							,'You can only use a card\'s X-Gene ability once, no matter how many matching cards you have in your discard pile.'
							,'Remember: when you play a card during your turn, it stays in front of you until the end of turn. Then all the cards you played that turn go to the discard pile. So if you have an empty discard pile, you can\'t play a [Tech] card from your hand, then immediately play a card with "<strong>X-Gene [Tech]</strong> " and use that X-Gene ability.'
							,'One cool combo is to recruit a [Strength] Hero into your discard pile, then play your "<strong>X-Gene [Strength]</strong>" card, and you\'ll get to use its X-Gene ability.'
						]
					}
				]
			}
			,{
				keyword: 'X-Treme Attack'
				,content: [
					{ text: 'This Keyword means "This Adversary gets +1 [Attack] for each other Adversary in the city with "X-Treme Attack".  This ability shows how X-Men are especially powerful when they work as a team. Some "ex-X-Men" in the Uncanny Avengers use the ability as well, cooperating with their old colleagues.' }
				]
			}
			,{
				keyword: 'Ambush'
				,source: ['Black Panther']
				,content: [
					{ flavor: 'Ambush abilities on heroes represent how Black Panther and White Wolf have mastered the pouncing attacks of their animal namesakes.  Similarly this new ability matches how Storm, Shuri and Okoye are also full of surprises.' }
					,{ text: 'Some Heroes say things like "[Instinct] Ambush: Draw a card". This is similar to how a Villain does its Ambush ability when it enters the city.' }
					,{
						list: [
							'<strong>When a Hero with a "[Instinct] Ambush" ability enters the HQ during your turn, you may use that Ambush ability if you have a [Instinct] Hero</strong>.'
							,'As always, you "have a [Instinct] Hero" if you have played a [Instinct] Hero this turn or if you have a [Instinct] Hero in your hand (or if you control a [Instinct] Hero Artifact).'
							,'New Heroes usually enter the HQ when you recruit a Hero or a Villain escapes from the city, creating an empty space in the HQ that you refill.'
							,'In games with Hero Ambushe abilities, you may want to recruit before you fight, in case a new Hero entering the HQ gives you extra [Attack] or cards that you can use to fight stronger enemies.'
						]
					}
				]
			}
			,{
				keyword: 'Wound'
				,source: ['Black Panther']
				,content: [
					{ flavor: 'Some Wakandans are also inspired by Panthers and Wolves to stalk their villainous prey.  They wear enemies down and harrying attacks, slashing claws, and wounds before closing in to finish them off for good.' }
					,{ text: 'Some Hero cards say things like "Wound a Villain".' }
					,{
						list: [
							'To do this: <strong>Put a Wound onto a Villain from the Wound Stack or from the KO pile. A Villain gets -1 [Attack] for each Wound on it. When that Villain is defeated or leaves the city, return all Wounds on it to the Wound Stack</strong>.'
							,'If a Villain has 0 [Attack] or negative [Attack], they don\'t disappear automatically, but you can fight them during your turn by spending 0 [Attack]. (If you fight a Villain with negative [Attack], you won\'t get a refund.)'
							,'Some cards specifically say they Wound the Mastermind. This works the same way, with all of the Mastermind\'s Wounds returning to the Wound Stack after a Mastermind Tactic is fought. The Wounds go away even if the Mastermind Tactic tells you to shuffle the Tactic back into the Mastermind\'s other Tactics or put the Tactic somewhere else.'
							,'Killmonger has 5 [Attack] and says "While Killmonger has more than <strong>O [Attack]</strong>, you cannot fight him. Instead, you may spend [Attack] equal to his [Attack] to Wound him and get +1 [Recruit]". So players will have to spend 5 [Attack], then 4 [Attack], 3 [Attack], 2 [Attack], and 1 [Attack], getting 5 [Recruit] along the way. Then a player can fight him at <strong>O [Attack]</strong> to take a random Tactic, remove Killmonger\'s Wounds (and not get +1 [Recruit]). Malice and Preyy work similarly. You can Wound them this way multiple times per turn. This does not count as a "Fight". Don\'t rescue captured Bystanders. You can still use the "Healing" ability on your own Wounds the same turn you Wound an enemy this way.'
							,'If your Wound Stack contains different kinds of Wounds, like the Grievous Wounds from Legendary®: Civil War, then whenever you return Wounds to the Wound Stack, put them on the bottom. Wounds on enemies are face up.'
							,'If an effect causes "each player" to gain a Wound (or do anything else), start with the current player then go clockwise.'
						]
					}
				]
			}
			,{
				keyword: 'Throne\'s Favor'
				,source: ['Black Panther','Realm of Kings']
				,content: [
					{ flavor: 'Whoever holds the Wakandan throne of the favor of its monarch can direct its vast powers.  This is represented by "Throne\'s Favor".' }
					,{
						list: [
							'Some Heroes say "You gain the Throne\'s Favor".  When this happens, take a nearby object to represent the Throne\'s Favor, like a coin, key, miniature, or pawn. There is only ever one Throne\'s Favor in the game. If another player or Mastermind already has the Throne\'s Favor, and you gain it, then you take it from them.'
							,'If an ability tells you to gain the Throne\'s Favor, you must take it. You cannot leave it where it is.'
							,'Some Heroes say things like "You may spend the Throne\'s Favor to get +2 [Attack]" This means <strong>if you have the Throne\'s Favor, you may give it up to use the listed ability</strong>.  You set aside the Throne\'s Favor object, and no one has the Throne\'s Favor until someone gains it again.'
							,'You can only spend the Throne\'s Favor at the moment the card you\'re playing tells you to do so. You can\'t wait and spend it later in the turn.'
							,'The Throne\'s Favor is not a card. It never goes into decks or discard piles. Instead, when it comes up, just use whatever cool object is easily at hand. There\'s no need to store a special Throne\'s Favor object with the game.'
							,'Cards can also cause the Mastermind to gain the Throne\'s Favor and/or benefit from having it. When the Mastermind gains the Throne\'s Favor, they take it away from any player that may already have it. Likewise, a card ability that causes a player to gain the Throne\'s Favor will take it away from the Mastermind and give it to the player.'
							,'The Throne\'s Favor first appeared in <i>Legendary®: Realm of Kings</i>.  There it represented the Inhuman and Shi\'ar thrones, but it all still uses the same, single Throne\'s Favor object.  You can even combine both sets to stimulate Wakanda and the Inhumans struggling for Power!'
						]
					}
				]
			}
			,{
				keyword: 'Momentum'
				,source: ['Annihilation']
				,content: [
					{ flavor: 'The Annihilation Wave is a fast-moving invasion force.  While pushing forward, they feed on the resources of new territory, becoming more powerful.  This is represented by the new "Momentum" keyword.' }
					,{
						list: [
							'Some Villains say things like "<strong>Momentum 3</strong>". This means "<strong>This Villain gets +3 [Attack] if it entered another city space this turn</strong>".'
							,'This works on the turn the Villain enters the city. It also works on any other turn when it is pushed into another city space by another Villain, or by a special ability moving or swapping it to another space.'
							,'The Mastermind Annihilus has the variant "<strong>Mass Momentum 2</strong>". This means <strong>he gets +2 [Attack] for each Villain currently in the city that entered a new city space this turn</strong>. (This doesn\'t include Villains who entered the Escape Pile this turn.)'
							,'For both Momentum and Mass Momentum, it doesn\'t matter how many different city spaces a Villain entered during a turn. It only matters if it entered any new city spaces at all.'
							,'If a board gets complicated, with special abilities moving Villains around, some players like to shift Momentum Villains up a bit to help signal that they have entered a new space this turn.'
						]
					}
				]
			}
			,{
				keyword: 'Galactus Consumes the Earth'
				,source: ['Annihilation']
				,content: [
					{
						list: [
							'Two Galactus cards in the Annihilation set can destroy city spaces. You can mark this by moving the Mastermind to cover the destroyed city spaces or by putting Wounds on the destroyed spaces. Whenever Villains are pushed out of the new end space of the city, they escape as normal.'
							,'If a city space like the Rooftops is destroyed, act as if that city space no longer exists, and the word Rooftops is not written on the board anymore. So card effects won\'t do anything that say "If there is a Villain on the Rooftops.".. (like Conqueror) or "Move a Villain to the Rooftops.".. or "If the Rooftops are empty."..'
							,'<strong>Note:</strong> Firelord\'s ability specifically overrides this.'
						]
					}
				]
			}
			,{
				keyword: '"When Recruited" Abilities'
				,source: ['Realm of Kings']
				,content: [
					{ flavor: 'The Inhumans\' powerful decision to go to war is shown with new special abilities they use "When Recruited".' }
					,{
						list: [
							'Some Heroes say things like: "When Recruited: You get +3 [Attack]".  <strong>Use this "When Recruited" ability immediately when you recruit this Hero</strong>.'
							,'You pay the Hero\'s normal recruit cost, move it from the HQ into your discard pile, and refill that HQ space with a card from the Hero Deck. When all that is done, then you must use the "When Recruited" ability.'
							,'When you play that card from your hand in later turns, don\'t use the "When Recruited" ability again. Instead, use the card\'s normal abilities [Recruit] and [Attack]. A horizontal line separates the "When Recruited" ability from the card\'s normal abilities.'
							,'If a special ability tells you to "<strong>gain</strong>" a Hero or "<strong>put</strong>" a Hero somewhere, then you <strong>don\'t</strong> use that Hero\'s "When Recruited" ability, since you didn\'t pay [Recruit] and you didn\'t recruit that Hero. This is true even if the special ability tells you to "gain the Hero from the HQ".'
							,'However, you <strong>do</strong> use the "When Recruited" ability if a special ability lets you "recruit a Hero for free" or recruit it at a reduced cost or from some unusual place, since then you are still recruiting the Hero.'
							,'You may wish to keep some Heroes In the HQ until you especially need their "When Recruited" ability.'
						]
					}
				]
			}
			,{
				keyword: 'Demonic Bargain'
				,source: ['Doctor Strange and The Shadows of Nightmare']
				,content: [
					{
						list: [
							'Some Villains like Satana Hellstrom say things like "Fight: Choose a player to make a Demonic Bargain with Satana Hellstrom to rescue three Bystanders".'
							,'<strong>That player discards the top card of their deck to see if they are corrupted by power. If that discarded card costs 1 or more, that player is too powerful and arrogant to resist temptation and gains a Wound, to the demon\'s delight</strong>.'
							,'If that discarded card costs O, then that player has been humble enough to resist corruption.'
							,'Whether that player gained a Wound or not, they then gain the Demonic Bargain\'s listed benefit.'
							,'Some cards have you choose which player must make a Bargain for a benefit. Think carefully about how many cards in your deck cost O. If most of your deck is still O-cost cards, it may be worthwhile to seize the power of the Demonic Bargain for yourself. But if your deck has lots of high-cost cards, then it may be wiser to choose another player to make the Demonic Bargain instead. Just beware: mortals who think they can outwit and outbargain a Demon are often left regretting their hubris.'
							,'When you choose a player to make a Demonic Bargain, that player cannot decline.'
							,'Dormammu can force players to make cruel, all-downside Demonic Bargains, with the chance of a Wound plus an additional negative effect.'
							,'If you use card abilities to look at or manipulate the top card of your deck, you may gain valuable insight as to whether a Demonic Bargain will punish you.'
						]
					}
				]
			}
			,{
				keyword: 'Astral Plane'
				,source: ['Doctor Strange and The Shadows of Nightmare']
				,content: [
					{
						list: [
							'Some Villains say things like "Fight: If this Villain was in the city, it enters the Astral Plane".'
							,'The Astral Plane is a single, unique space that only exists in games with cards that use the Astral Plane. It sits immediately to the right of the Villain Deck.'
							,'While a Villain is in the Astral Plane, it has no physical form: <strong>It can only be fought with [Recruit], not [Attack]</strong>. To fight a 5 [Attack] Villain you must spend 5 [Recruit]. When you fight a Villain in the Astral Plane, put it in your Victory Pile and do its Fight effect as normal.'
							,'<strong>When a Villain enters the Astral Plane, any Villain already there escapes</strong>. This causes all the same effects as if that Villain had escaped the city (including KO\'ing from the HQ, discarding from captured Bystanders, and Escape abilities).'
							,'Villains still get - [Attack] and + [Attack] bonuses while in the Astral Plane. You just use [Recruit] to fight the total [Attack].'
							,'The Mastermind "Nightmare" can also enter the Astral Plane. While there, he can only be fought with [Recruit], not [Attack]. If he escapes the Astral Plane, do all the normal effects for a Villain escaping the city. Then do the Escape ability written on Nightmare, which moves him to the Mastermind space.'
							,'The Astral Plane is not a city space. It\'s not "adjacent" to any city spaces. Card effects can\'t move or swap Villains to or from the Astral Plane unless they explicitly mention the Astral Plane.'
							,'Villains do Ambush effects when they enter the city. The Astral Plane is not part of the city, so Villains that enter the Astral Plane don\'t do their Ambush effects at that time.'
							,'For keywords from other sets: To fight a "Chivalrous Duel" enemy in the Astral Plane, you must spend [Recruit] from a single Hero name. You must spend [Recruit] to use Excessive Violence or Human Shields from the Astral Plane. You can\'t use "Piercing Energy" on enemies in the Astral Plane. "Bribe" and other cards that say "You can spend any combination of [Recruit] and [Fight] to fight that villain this turn" do not work against enemies in the Astral Plane.'
						]
					}
				]
			}
			,{
				keyword: 'Ritual Artifacts'
				,source: ['Doctor Strange and The Shadows of Nightmare']
				,content: [
					{ flavor: 'Marvel\s sorcerers invoke Rituals of awesome power, anchored by mystic talismans.  This is represented with a special type of Artifact appearing for the first time in this set: Ritual Artifacts.  These use the Artifact rules, with some new twists.' }
					,{
						list: [
							'They say things like "Ritual Artifact - If you draw a new card, you may discard this artifact to get +3 [Attack]".'
							,'If you have fulfilled the listed Ritual condition this turn, you can discard the Ritual Artifact to get the listed effect.'
							,'You don\'t have to use the Ritual Artifact even if you fulfill the Ritual condition.  You might want to save it for a future turn instead of discarding it.'
							,'You can use as many Ritual Artifacts as you wish in a turn, including using multiple Ritual Artifacts with the same name.  If you draw one card, that\'s enough to use the Rituals of multiple Artifacts that each have athe condition "Draw a card".'
							,'If you use a "draw a card" ability, and it draws you a Ritual Artifact with the condition "draw a card", then you can play that Artifact and use it right away.  It\s ok that the Artifact wasn\'t in play when you fulfilled the Ritual condition earlier in the turn.'
							,'If a card lets you "copy" a Ritual Artifact card or "play a copy of it", then you can use its Ritual effect (or "Thrown Artifact" or "Once per turn" Artifact ability) once, and you don\t need to fulfill the ritual condition.  You don\'t need to immediately discard the copy card to use the Ritual.  The copy doesn\'t stay in play as an Artifact.'
						]
					}
				]
			}
			,{
				keyword: 'Clone'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'Multiple Man and the Stepford Cuckoos are literal clones.  M and her sisters can transform into copies of each other.  Shatterstar is genetically engineered from cloned DNA.  All of these use the new Clone keyword, saying things like "[Instinct]: Clone".' }
					,{
						list: [
							'Clone means: <strong>You may gain another copy of this card from the HQ. If there are none in the HQ, you may gain a copy from the Hero Deck and shuffle it</strong>.'
							,'"Gain" means "put it into your discard pile".'
							,'If you a Clone a S.H.I.E.L.D. Officer or Sidekick, search and shuffle that stack instead.'
						]
					}
				]
			}
			,{
				keyword: '"When Recruited" Clones'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'Some Heroes say "When Recruited: Clone". This means <strong>Use the Clone ability immediately when you recruit this Hero</strong>. (Do this right after you put the recruited Hero in your discard pile, after you refill its HQ space.)' }
					,{
						list: [
							'Use a "When Recruited" ability only when you recruit a Hero, not when an ability causes you to "gain" a Hero or "put it in your hand". So the copy you gain from "When Recruited: Clone" <strong>won\'t</strong> make you gain more copies.'
							,'Some Heroes say things like "When Recruited  - [Covert]: Clone".  <strong>Use this ability only if you have played a [Covert] Hero turn before recruiting this card.'
							,'Clone Villains'
							,'On a Villain, "Ambush: Clone" means: Search the Villain Deck for a copy of this Villain, and it enters the city, ignoring any further Clone effects. Shuffle that deck. When you Clone a "Predator X" Villain, just use the first "Predator X" you find in the Villain Deck. If you can\'t find a Clone copy of a Villain (or Hero), just move on.'
						]
					}
				]
			}
			,{
				keyword: 'Clone Villains'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'On a Villain, "Ambush: Clone" means: <strong>Search the Villain Deck for a copy of this Villain, and it enters the city, ignoring any further Clone effects. Shuffle that deck</strong>. When you Clone a "Predator X" Villain, just use the first "Predator X" you find in the Villain Deck. If you can\'t find a Clone copy of a Villain (or Hero), just move on.' }
				]
			}
			,{
				keyword: 'Shatter'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'Rictor\'s earthquake powers, Siryn\'s sonic shrieks and Shatterstar\'s bioelectric shocks can Shatter even the strongest defenses.  Some Heroes say things like "Shatter a Villain in the Sewers".' }
					,{
						list: [
							'This means "<strong>Halve that enemy\'s current [Attack]. (round up to the nearest whole number.)</strong>" This effect lasts until the end of this turn.'
							,'You can shatter the same Villain multiple times, halving their [Attack] (rounding up) each time.'
							,'"Shatter a Villain" can\'t be used on a Mastermind.'
							,'"Shatter the Mastermind" lasts for one fight against one Mastermind.'
							,'A few cards even let you Shatter a Hero in the HQ, halving their current cost (round up) the same way.'
							,'Technically, the Villain gets - [Attack] equal to half its current [Attack]. For example: Pestilence has 5 printed [Attack]. Apocalypse says "Four Horsemen Villains get +2 [Attack]". Shattering gives her -3 [Attack], from 7 [Attack] to 4 [Attack].'
						]
					}
				]
			}
			,{
				keyword: 'Tactical Formation'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'X-Force is known for precise strike force tactics.  X-Factor Investigations likewise plans their missions to the finest detail.  With this new keyword, some Heroes say things like "Tactical Formation 445: You get +3 [Attack]' }
					,{
						list: [
							'<strong>You can use this ability only if you have two Heroes that cost 4 and one Hero that costs 5</strong>.'
							,'You can count the "Tactical Formation" card itself.'
							,'"Heroes you have" includes Heroes in your hand and Heroes you already played this turn (unless they have been put somewhere else, like the KO pile or bottom of the Sidekick stack.)'
						]
					}
				]
			}
			,{
				keyword: 'Prey'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'Some Villains say things like "Ambush: Prey on the fewest [Tech]". After this Villain enters the Sewers, each player reveals their hand, and you check which player has the fewest [Tech] cards. (The current player decides how to break ties, including ties of 0 [Tech] cards.) <strong>Put this Villain in front of that player, "Preying" on them</strong>.' }
					,{
						list: [
							'Any player may still fight that Villain as normal. However: <strong>if no player defeats that Villain by the end of the preyed- on player\'s turn, use that Villain\'s "Finish the Prey" ability against that player, then that Villain enters the Sewers, ignoring its Ambush effects</strong>.'
							,'<strong>Important: Do the "Finish the Prey" ability after that player draws their new hand at end of turn</strong>. Some players like to lean the Prey Villain on their deck as a reminder to Finish the Prey then.'
							,'After Lady Deathstrike Finishes the Prey, or if you fight her while she\'s Preying on a player, return her to the Mastermind space. You still take one of her Tactics if you fight her while she\'s Preying.'
							,'Multiple enemies can prey on a player at once.'
						]
					}
				]
			}
			,{
				keyword: 'Chivalrous Duel'
				,source: ['Messiah Complex']
				,content: [
					{ flavor: 'This keyword represents how Morgan le Fay and the knights of her "Queen\'s Vengeance" hail from a realm of honorable single combat. You can\'t gang up on an enemy in a Chivalrous Duel you have to pick just one Hero Name to duel the enemy.' }
					,{ flavor: 'This keyword represents how Clan Yashida samurai hail from a realm of honorary single combat.  You can\'t gang up on an enemy in Chialrous Duel - you have to pick just one Hero Name to duel the enemy.  This keyword debuted in Legendary®: Ant-Man.' }
					,{
						list: [
							'<strong>To fight and enemy with "Chivalrous Duel", all the [Attack] you spend must come from a single Hero Name</strong>.'
							,'For example, to fight a 3 [Attack] Villain with Chivalrous Duel, you can spend 3 [Attack] from two different Black Knight hero cards. But you can\'t combine 2 [Attack] from Black Knight cards and 1 [Attack] from a Wasp card.'
							,'If a Hero has no Hero Name listed, (like S.H.I.E.L.D. Trooper, or any Sidekick, or a Villain that became a Hero) then its Hero Name is the same as its card name. So you can play three S.H.I.E.L.D. Troopers then fight a 3 [Attack] Villain with Chivalrous Duel. But you can\'t spend 2 [Attack] from Shatterstar cards and 1 [Attack] from a S.H.I.E.L.D. Trooper to fight a Chivalrous Duel.'
							,'You can\'t use [Attack] from anything that\'s not a Hero card, including Microscopic Size-Changing Villains, Masterminds Tactics, Shard tokens from other sets, etc. You can use [Attack] from Hero Artifacts in other sets with the right Hero Name, since those are Hero cards.'
							,'In a setup with lots of Chivalrous Duels, like fighting Morgan le Fay or the Scheme "Pull Earth into Medieval Times", you will want to build your deck to concentrate your cards into just one or two Hero Names!'
						]
					}
				]
			}
			,{
				keyword: 'Divided Cards'
				,source: ['Civil War','X-Men','Marvel Studios Guardians of the Galaxy']
				,content: [
					{ flavor: '"Divided Cards" have two miniature cards printed on the same card.  This increases the number of different cards per Hero.' }
					,{
						list: [
							'If a Divided Card costs "3" on each side, its cost is 3.  Pay 3 [Recruit] to recruit it from the HQ, not 6 [Recruit].'
							,'When you play a Divided Card, you choose which side to play.  You generate all the [Recruit], [Attack] and special abilities of that side as normal.  You ignore the other side as if it didn\'t exist.'
							,'While a Divided Card is in your hand, deck or the HQ, it counts as all its Hero Classes, Teams, card names and Hero names.  (It still counts as 1 card, not 2.)  While there, its "printed [Attack]" is the total of both [Attack] numbers printed on it.  However, once you play the card, it only counts as the side you choose.'
						]
					}
				]
			}
			,{
				keyword: 'Triggered Artifacts'
				,source: ['Marvel Studios Guardians of the Galaxy']
				,content: [
					{ flavor: 'Each Artifact in this set is a new variety called a "Triggered Artifact".  From gadgets to cannons, many of these literally have triggers.' }
					,{
						list: [
							'Some cards say things like "Triggered Artifact - Whenever you draw a card during your turn, you get +1 [Attack]".  While you control this Artifact, <strong>every time you do that trigger, you get the listed effect</strong>.'
							,'If a card lets you "copy" a Triggered Artifact card or "play a copy of it", then you can use that Triggered Artifact ability (or "Thrown Artifact", "Once per turn" Artifact or "Ritual Artifact" ability) once and you don\'t need to fulfill the trigger.  The copy doesn\'t stay in play as an Artifact.  The "Legendary Outlaw" card from the 2014 Guardians set cannot copy any Artifacts in this set.'
						]
					}
				]
			}
			,{
				keyword: 'Excessive Kindness'
				,source: ['Marvel Studios Guardians of the Galaxy']
				,content: [
					{ flavor: 'In contrast to Excessive Violence, the empath Mantis and the adorable Baby Groot are often way kinder than necessary.  Their "Excessive Kindness" abilities work just like Excessive Violence, except that you trigger them by spending 1 [Recruit] more than you need when recruiting a Hero.' }
				]
			}
			,{
				keyword: 'Commands'
				,source: ['Marvel Studios Guardians of the Galaxy']
				,content: [
					{ flavor: 'Some Villains say things like "Taserface gets +2 [Attack] while he Commands the Ravagers".' }
					,{
						list: [
							'<strong>A Villain "Commands" their group and gets these abilities as long as it\'s the leftmost Villain of that Villain Group in the city</strong>.'
							,'If there\'s only one Villain of a Villain Group in the city, it still Commands that Villain Group.'
						]
					}
				]
			}
		]);
	}
}
