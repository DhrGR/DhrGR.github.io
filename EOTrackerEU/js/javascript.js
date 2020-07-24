var monsters = ['Alraune', 'Armoroll', 'Armoth', 'Assassin', 'Blader', 'Bloodant', 'Bud', 'Burstgel', 'Cernunos', 'Clawbug', 'Clawfly', 'Clawlord', 'Clover', 'Cotrangl', 'Cruella', 'Curoller', 'Cutcrab', 'Cutter', 'Darkhare', 'Deathant', 'Desouler', 'Diabolix', 'Dinolich', 'Direwolf', 'Dragoid', 'Dragon', 'Drake', 'Drakoid', 'Druid', 'Etreant', 'Eviloid', 'Evilroot', 'Faerie', 'Fangleaf', 'Fender', 'Fenrir', 'Fireater', 'Firebird', 'Flamegel', 'Flamerat', 'Glowbird', 'Goldeer', 'Golem', 'Guardant', 'Hare', 'Hazefly', 'Hellbull', 'Hellfly', 'Hexfrog', 'Hexroot', 'Hextoad', 'Hunter', 'Immoa', 'Ironcrab', 'Iwaopeln', 'Killclaw', 'Kingapis', 'Kingdile', 'Kingfrog', 'Kingyana', 'Kuyutha', 'Largeant', 'Lucifird', 'Macabre', 'Madworm', 'Mandrake', 'Maneater', 'Manticor', 'Mantis', 'Maul', 'Meltworm', 'Metalion', 'Moa', 'Mole', 'Monocyte', 'Moriyana', 'Muckdile', 'Muskoid', 'Mystic', 'Nightoad', 'Ogre', 'Omnivore', 'Petaloid', 'Pixie', 'Pondclaw', 'Primevil', 'Ragelope', 'Red Cell', 'Redbeak', 'Redclaw', 'Ren', 'Rockwood', 'Roller', 'Royalant', 'Sabremaw', 'Scorpion', 'Servant', 'Shellord', 'Shelltor', 'Sickwood', 'Silker', 'Skoll', 'Sleepgel', 'Sloth', 'Soldier', 'Songbird', 'Spider', 'Sprout', 'Stalker', 'Steelweb', 'Stingmaw', 'Sworder', 'Teralich', 'Tlachtga', 'Toxinfly', 'Treefrog', 'Treerat', 'Treetusk', 'Vampbat', 'Varaha', 'Venomfly', 'Venomgel', 'Warbull', 'Warrior', 'Waspior', 'Wolf', 'Woodbat', 'Woodfly', 'Wyrm', 'Wyrmoid', 'Wyvern']
var items = ['100 Shell', '1000 Shell', 'Amber Lump', 'Ambrosia', 'Angel Wing', 'Ant Honey', "Ant's Jaw", 'Armroot', 'Azure Ore', 'Barbel', 'Bat Wing', 'Bear Fur', 'Beast Bone', 'Beast Eye', 'Bent Claw', 'Bird Limb', 'Bird Talon', 'Black Root', 'Blood Fang', 'Blue Blood', 'Bone Shard', 'Broken Eye', 'Bug Nest', 'Bug Scales', 'Bug Wing', 'Carapace', 'Carminite', 'Charcoal', 'Cold Scales', 'Cordyceps', 'Corundum', 'Crab Leg', 'Crabapple', 'Cross Seed', 'Crystwall', 'Cullinan', 'Curse Tusk', 'Death Claw', 'Death Stem', 'Demon Core', 'Demon Fur', 'Dried Vine', 'Dry Peach', 'Drywall', 'Dye Petals', 'Ebon Plume', 'Elastic', 'Evil Crest', 'Evil Plume', 'Evil Scale', 'Evil Shell', 'Fairy Sap', 'Fairy Wing', 'Feather', 'Fire Fang', 'Fire Scale', 'Fire Tail', 'Fish Fin', 'Fish Scales', 'Flame Skin', 'Fossil', 'Frost Bone', 'Frost Skin', 'Gator Skin', 'Gem Core', 'Gem Plume', 'Gem Scale', 'Glass Eye', 'Gold Fur', 'Gold Horn', 'Gold Plume', 'Gold Shell', 'Gold Tusk', 'Golem Rock', 'Great Tusk', 'Gum Hide', 'Gum String', 'Gum Thread', 'Gum Throat', 'Gum Vine', 'Hard Shard', 'Hard Shell', 'Hardwood', 'Hare Tail', 'Harvester', 'Headroot', 'Heated Fur', 'Hell Wing', 'Hex Chain', 'Hex Marrow', 'Holed Limb', 'Horn', 'Huge Fang', 'Huge Fin', 'Ice Scale', 'Ice Spine', 'Ink Stick', 'Insect Eye', 'Iron Shell', 'L Leaf', 'Large Fang', 'Legroot', 'Life Honey', 'Light Wood', 'Lily', 'M Leaf', 'Metal Horn', 'Mint Leaf', 'Moschino', 'Mugwort', 'Musk', 'Narcissus', 'Nyx Scythe', 'Odd Fruit', 'Old Shell', 'Oleander', 'Pure Root', 'Pyroxene', 'Red Beak', 'Red Blade', 'Red Blood', 'Red Fruit', 'Red Fur', 'Red Hide', 'Red Ore', 'Red Plume', 'Red String', 'Red Thread', 'Rex Throat', 'Rock Coral', 'Rose Whip', 'Royal Hide', 'Royal Mane', 'Royal Vine', 'Ruby Bone', 'Ruby Skull', 'S Leaf', 'Sand Cloth', 'Sand Twig', 'Sap Wine', 'Scent Wood', 'Scrap Iron', 'Scythe', 'Sea Branch', 'Sharp Horn', 'Shiny Goo', 'Shiny Horn', 'Shiny Seed', 'Shiny Vine', 'Shred Nail', 'Shroud', 'Silver Eye', 'Small Fang', 'Soft Hide', 'Space Claw', 'Space Husk', 'Space Nail', 'Stab Shell', 'Starseed', 'Statue Arm', 'Steel Bone', 'Steel Chip', 'Steel Claw', 'Steel Lump', 'Sternum', 'Sticky Goo', 'Sticky Web', 'Stiff Hide', 'Stinger', 'Strawberry', 'Sword Rib', 'Tailbone', 'Tendon', 'Thick Leaves', 'Thin Shell', 'Thorn', 'Throb Vine', 'Tiger Fang', 'Tiger Fur', 'Tiny Tooth', 'Tough Fang', 'Tough Wing', 'Toxic Barb', 'Toxic Hand', 'Tri-Color', 'Velvet', 'Vine', 'Volt Core', 'Volt Scale', 'Volt Skin', 'White Fang', 'White Hide', 'White Skin', 'Whitestone', 'Wine Whip', 'Yellow Ore']
var quests = ["A Certain Shop's Request", 'A Favor to Shilleka I', 'A Favor to Shilleka II', 'A Favor to Shilleka III', "Apothecary's Request I", "Apothecary's Request II", "Apothecary's Request III", "A Sister's Parting Gift", 'Awakening the Serpent', 'Call of the Wyvern', "Chef's Demand", "Chef's Latest Request I", "Chef's Latest Request II", "Chef's Odd Request I", "Chef's Odd Request II", "Chef's Request I", "Chef's Request II", 'Emblem of Love', 'Fashionista I', 'Fashionista II', 'Feat of Strength I', 'Feat of Strength II', 'Feat of Strength III', 'Fond Memories of You...', "Gourmand's Request", 'Guildhouse Trial', 'Horticulture', 'Identity Unknown', 'I Refuse Thee, Death', 'Item Compendium', "Ivory Princess' Dream I", "Ivory Princess' dream II", 'Lost Pet; Reward Offered', "Love's Uncertain Promise", 'Love, Cast in Silver', 'Monster at Sunrise', 'Monstrous Codex', 'Official Business I', 'Official Business II', 'Official Business III', 'Orphans of the Forest', 'Pest Control', 'Phantom of the Forest', 'Prayer to the Stars', 'Proof of Heroism', 'Remembering the Fallen', 'Remembrance of a Friend', 'Remnants of an Age Past', 'Reversal of the Poles', 'Scavenging for Ian I', 'Scavenging for Ian II', 'Shadow in the Grove', 'Song from the Depths', 'Subduing the Woodflies', 'The Azure Colossus', "The Bandit's Treasure", 'The Crystal Maiden', 'The Diamond Charm', 'The Dread Wyrm', 'The Foreign Seeker', 'The Fossil Charm', 'The Gold Enthusiast', 'The Ivory Charm', "The Leathersmith's Favor", 'The Legendary Bird', 'The Lucky Coin', 'To Meet a Blademaster...', 'To Meet a Holy Knight...', 'To Meet a Swordsman...', 'To Taste it Once More...', 'Under Construction', 'Versus the Unknown', 'Work Stoppage']
var monsters_got = [];
var items_got = [];
var quests_got = [];
var monsters_save = [];
var items_save = [];
var quests_save = [];

function reload_autocomplete() {
	$(function() {
		$( "#monsters" ).autocomplete({
			source: $(monsters).not(monsters_got).get()
		});
		$( "#items" ).autocomplete({
			source: $(items).not(items_got).get()
		});
		$( "#quests" ).autocomplete({
			source: $(quests).not(quests_got).get()
		});
	});
}

function reload_progress() {
	document.getElementById("progress_monsters").value = monsters_save.length;
	document.getElementById("progress_items").value = items_save.length;
	document.getElementById("progress_quests").value = quests_save.length;
	document.getElementById("text_monsters").textContent = Math.floor(100 / document.getElementById("progress_monsters").max  * document.getElementById("progress_monsters").value) + "% (" + document.getElementById("progress_monsters").value + "/" + document.getElementById("progress_monsters").max + ")";
	document.getElementById("text_items").textContent = Math.floor(100 / document.getElementById("progress_items").max  * document.getElementById("progress_items").value) + "% (" + document.getElementById("progress_items").value + "/" + document.getElementById("progress_items").max + ")";
	document.getElementById("text_quests").textContent = Math.floor(100 / document.getElementById("progress_quests").max  * document.getElementById("progress_quests").value) + "% (" + document.getElementById("progress_quests").value + "/" + document.getElementById("progress_quests").max + ")";
}

function readSingleFile(e) {
	var file = e.target.files[0];
	if (!file) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e) {
		var contents = e.target.result;
		var parsed = JSON.parse(contents);
		monsters_save = jQuery.extend(true, [], parsed.monsters);
		monsters_got = jQuery.extend(true, [], parsed.monsters);
		items_save = jQuery.extend(true, [], parsed.items);
		items_got = jQuery.extend(true, [], parsed.items);
		quests_save = jQuery.extend(true, [], parsed.quests);
		quests_got = jQuery.extend(true, [], parsed.quests);
		reload_progress();
		reload_autocomplete();
	};
	reader.readAsText(file);
}