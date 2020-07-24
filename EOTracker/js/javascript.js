var monsters = ['Alraune', 'Armoroll', 'Armoth', 'Assassin', 'Blader', 'Bloodant', 'Bud', 'Burstgel', 'Cernunos', 'Clawbug', 'Clawfly', 'Clawlord', 'Clover', 'Cotrangl', 'Cruella', 'Curoller', 'Cutcrab', 'Cutter', 'Darkhare', 'Deathant', 'Desouler', 'Diabolix', 'Dinolich', 'Direwolf', 'Dragoid', 'Dragon', 'Drake', 'Drakoid', 'Druid', 'Etreant', 'Eviloid', 'Evilroot', 'Faerie', 'Fangleaf', 'Fender', 'Fenrir', 'Fireater', 'Firebird', 'Flamegel', 'Flamerat', 'Glowbird', 'Goldeer', 'Golem', 'Guardant', 'Hare', 'Hazefly', 'Hellbull', 'Hellfly', 'Hexfrog', 'Hexroot', 'Hextoad', 'Hunter', 'Immoa', 'Ironcrab', 'Iwaopeln', 'Killclaw', 'Kingapis', 'Kingdile', 'Kingfrog', 'Kingyana', 'Kuyutha', 'Largeant', 'Lucifird', 'Macabre', 'Madworm', 'Mandrake', 'Maneater', 'Manticor', 'Mantis', 'Maul', 'Meltworm', 'Metalion', 'Moa', 'Mole', 'Monocyte', 'Moriyana', 'Muckdile', 'Muskoid', 'Mystic', 'Nightoad', 'Ogre', 'Omnivore', 'Petaloid', 'Pixie', 'Pondclaw', 'Primevil', 'Ragelope', 'Red Cell', 'Redbeak', 'Redclaw', 'Ren', 'Rockwood', 'Roller', 'Royalant', 'Sabremaw', 'Scorpion', 'Servant', 'Shellord', 'Shelltor', 'Sickwood', 'Silker', 'Skoll', 'Sleepgel', 'Sloth', 'Soldier', 'Songbird', 'Spider', 'Sprout', 'Stalker', 'Steelweb', 'Stingmaw', 'Sworder', 'Teralich', 'Tlachtga', 'Toxinfly', 'Treefrog', 'Treerat', 'Treetusk', 'Vampbat', 'Varaha', 'Venomfly', 'Venomgel', 'Warbull', 'Warrior', 'Waspior', 'Wolf', 'Woodbat', 'Woodfly', 'Wyrm', 'Wyrmoid', 'Wyvern']
var items = ['100 Shell', '1000 Shell', 'Amber Lump', 'Ambrosia', 'Angel Wing', 'Ant Honey', "Ant's Jaw", 'Armroot', 'Azure Ore', 'Barbel', 'Bat Wing', 'Bear Fur', 'Beast Bone', 'Beast Eye', 'Bent Claw', 'Bird Limb', 'Bird Talon', 'Black Root', 'Blood Fang', 'Blue Blood', 'Bone Shard', 'Broken Eye', 'Bug Nest', 'Bug Scale', 'Bug Wing', 'Carapace', 'Carminite', 'Charcoal', 'Cold Scale', 'Cordyceps', 'Corundum', 'Crab Leg', 'Crabapple', 'Cross Seed', 'Crystwall', 'Cullinan', 'Curse Tusk', 'Death Claw', 'Death Stem', 'Demon Core', 'Demon Fur', 'Dried Vine', 'Dry Peach', 'Drywall', 'Dye Petal', 'Ebon Plume', 'Elastic', 'Evil Crest', 'Evil Plume', 'Evil Scale', 'Evil Shell', 'Fairy Sap', 'Fairy Wing', 'Feather', 'Fire Fang', 'Fire Scale', 'Fire Tail', 'Fish Fin', 'Fish Scale', 'Flame Skin', 'Fossil', 'Frost Bone', 'Frost Skin', 'Gator Skin', 'Gem Core', 'Gem Plume', 'Gem Scale', 'Glass Eye', 'Gold Fur', 'Gold Horn', 'Gold Plume', 'Gold Shell', 'Gold Tusk', 'Golem Rock', 'Great Tusk', 'Gum Hide', 'Gum String', 'Gum Thread', 'Gum Throat', 'Gum Vine', 'Hard Shard', 'Hard Shell', 'Hardwood', 'Hare Tail', 'Harvester', 'Headroot', 'Heated Fur', 'Hell Wing', 'Hex Chain', 'Hex Marrow', 'Holed Limb', 'Horn', 'Huge Fang', 'Huge Fin', 'Ice Scale', 'Ice Spine', 'Ink Stick', 'Insect Eye', 'Iron Shell', 'L Leaf', 'Large Fang', 'Legroot', 'Life Honey', 'Light Wood', 'M Leaf', 'Metal Horn', 'Mint Leaf', 'Moschino', 'Mugwort', 'Musk', 'Narcissus', 'Nyx Scythe', 'Odd Fruit', 'Old Shell', 'Oleander', 'Pure Root', 'Pyroxene', 'Red Beak', 'Red Blade', 'Red Blood', 'Red Fruit', 'Red Fur', 'Red Hide', 'Red Ore', 'Red Plume', 'Red String', 'Red Thread', 'Rex Throat', 'Rock Coral', 'Rose Whip', 'Royal Hide', 'Royal Mane', 'Royal Vine', 'Ruby Bone', 'Ruby Skull', 'S Leaf', 'Sand Cloth', 'Sand Twig', 'Sap Wine', 'Scent Wood', 'Scrap Iron', 'Scythe', 'Sea Branch', 'Sharp Horn', 'Shiny Goo', 'Shiny Horn', 'Shiny Seed', 'Shiny Vine', 'Shred Nail', 'Shroud', 'Silver Eye', 'Small Fang', 'Soft Hide', 'Space Claw', 'Space Husk', 'Space Nail', 'Stab Shell', 'Starseed', 'Statue Arm', 'Steel Bone', 'Steel Chip', 'Steel Claw', 'Steel Lump', 'Sternum', 'Sticky Goo', 'Sticky Web', 'Stiff Hide', 'Stinger', 'Strawberry', 'Sword Rib', 'Tailbone', 'Tendon', 'Thick Leaf', 'Thin Shell', 'Thorn', 'Throb Vine', 'Tiger Fang', 'Tiger Fur', 'Tiny Petal', 'Tiny Tooth', 'Tough Fang', 'Tough Wing', 'Toxic Barb', 'Toxic Hand', 'Tri-Color', 'Velvet', 'Vine', 'Volt Core', 'Volt Scale', 'Volt Skin', 'White Fang', 'White Hide', 'White Skin', 'Whitestone', 'Wine Whip', 'Yellow Ore'];
var quests = ["A certain Shop's request", 'A favor to Shilleka I', 'A favor to Shilleka II', 'A favor to Shilleka III', 'A sisters parting gift', "Apothecary's request I", "Apothecary's request II", "Apothecary's request III", 'Awakening the serpent', 'Call of the Wyvern', "Chef's demand", "Chef's latest request I", "Chef's latest request II", "Chef's odd request I", "Chef's odd request II", "Chef's request II", 'Chefs request I', 'Emblem of love', 'Explorers Guild trial', 'Fashionista I', 'Fashionista II', 'Feat of strength I', 'Feat of strength II', 'Feat of strength III', 'Fond memories of you...', "Gourmand's request", 'Horticulture', 'I refuse thee, death', 'Identity unknown', 'Item compendium', "Ivory princess' dream I", "Ivory princess' dream II", 'Lost pet; reward offered', "Love's uncertain promise", 'Love, cast in silver', 'Monster at sunrise', 'Monstrous codex', 'Official business I', 'Official business II', 'Official business III', 'Orphans of the forest', 'Pest control', 'Phantom of the forest', 'Prayer to the stars', 'Proof of heroism', 'Remembering the fallen', 'Remembrence of a friend', 'Remnants of an age past', 'Reversal of the poles', 'Scavenging for Ian I', 'Scavenging for Ian II', 'Shadow in the grove', 'Song from the depths', 'Subduing the woodflies', 'The azure colossus', "The bandit's treasure", 'The crystal maiden', 'The diamond charm', 'The dread wrym', 'The foreign seeker', 'The fossil Charm', 'The gold enthusiast', 'The ivory charm', "The leathersmiths's favor", 'The legendary bird', 'The lucky coin', 'To meet a blademaster...', 'To meet a holy knight...', 'To meet a swordsman...', 'To taste it once more', 'Under contruction', 'Versus the unknown', 'Work Stoppage'];
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