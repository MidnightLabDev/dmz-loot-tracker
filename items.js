// MW4 DMZ item values (DMZ Cash). Sources: metaradar.gg FOB sell values (Oct 28 2026), codmunity.gg item DB (Oct 26 2026).
// Early-access values; may change in patches. call: keep | sell | craft | use
const ITEMS = [
 // Valuables
 ["Gold Bar","Valuables","Ultra",25000,"keep","Stash Weapon Upgrade III needs 5. Sell spares."],
 ["Gold Skull","Valuables","Ultra",25000,"keep","Stash Item Upgrade IV needs 5. Sell spares."],
 ["Sanctioned Assassination List","Valuables","Legendary",10000,"sell","Check MIA Recovery upgrades first."],
 ["Cipher Code Ledger","Valuables","Epic",5000,"sell","No upgrade use known."],
 ["W.M.D. Manifest","Valuables","Epic",5000,"keep","Tier III MIA Recovery Discount needs 5."],
 ["Foreign Intelligence Targets","Valuables","Epic",0,"keep","Value unconfirmed."],
 ["Degraded Execution Footage","Valuables","Rare",2000,"keep","Bank Upgrade V needs 10; MIA Discount II needs 5."],
 ["Encrypted Archive","Valuables","Valuable",2000,"keep","Bank Upgrade VI needs 10."],
 ["Nuclear Program Files","Valuables","Valuable",2000,"keep","MIA Discount II needs 5."],
 ["Ballistic Flight Logs","Valuables","Uncommon",1000,"keep","Bank Upgrade IV needs 5."],
 ["Infantry Invasion Plans","Valuables","Valuable",1000,"keep","Bank Upgrade III needs 5."],
 ["Regional Combat Notes","Valuables","Uncommon",1000,"sell",""],
 ["Steel Dog Tag","Valuables","Common",0,"sell",""],
 ["Scavenger's Dog Tag","Valuables","Legendary",0,"keep","Boss tag."],
 ["Bale's Dog Tag","Valuables","Legendary",0,"keep","Boss tag."],
 ["Roze's Dog Tag","Valuables","Legendary",0,"keep","Boss tag."],
 ["Gorani's Dog Tag","Valuables","Legendary",0,"keep","Boss tag."],
 // Extract-pay items
 ["Weapon Manual","Other","Special",5000,"use","Pays 5,000 on extract + gun unlock."],
 ["Recipe","Other","Special",5000,"use","Pays 5,000 on extract + recipe unlock."],
 // Backpacks
 ["Large Backpack","Backpacks","Legendary",8000,"use","Run it if you can; top sale."],
 ["Medium Scavenger Backpack","Backpacks","Epic",2500,"use",""],
 ["Medium Backpack","Backpacks","Rare",5000,"use","Has Secure slots."],
 ["Small Backpack","Backpacks","Common",1000,"sell",""],
 // Armor
 ["3-Plate Armor Vest","Plate Carriers","Epic",7500,"use",""],
 ["2-Plate Armor Vest","Plate Carriers","Rare",1000,"use",""],
 ["1-Plate Armor Vest","Plate Carriers","Uncommon",500,"sell",""],
 ["Armor Plate","Other","Common",150,"use",""],
 // Consumables
 ["Self-Revive Kit","Consumables","Legendary",4000,"use","Always carry one."],
 ["Medkit","Consumables","Epic",2000,"use",""],
 ["Door Breacher Charge","Consumables","Ultra",600,"use",""],
 ["Smelling Salts","Consumables","Rare",500,"use",""],
 ["Radiation Blockers","Consumables","Rare",300,"use",""],
 ["Painkillers","Consumables","Uncommon",250,"sell",""],
 ["Energy Drink","Consumables","Uncommon",200,"sell",""],
 ["Bandage","Consumables","Uncommon",100,"sell",""],
 ["Sedative Inhaler","Consumables","Uncommon",100,"sell",""],
 // Gear / support
 ["Parachute","Gear","Legendary",5000,"use",""],
 ["Night Vision Goggles","Gear","Rare",3000,"use",""],
 ["Gas Mask","Gear","Rare",1200,"use",""],
 ["UAV","Fire Support","Rare",2500,"use",""],
 ["Revive Pistol","Field Upgrades","Legendary",2500,"use",""],
 ["Fulton Drop Marker","Field Upgrades","Ultra",2500,"use",""],
 ["Trophy System","Field Upgrades","Rare",900,"use",""],
 ["Armor Box","Field Upgrades","Rare",300,"use",""],
 ["Ammo Box","Field Upgrades","Uncommon",300,"use",""],
 ["Stim","Tacticals","Uncommon",400,"use",""],
 ["Smoke Grenade","Tacticals","Common",200,"sell",""],
 ["Frag Grenade","Lethals","Common",250,"sell",""],
 ["Throwing Knife","Lethals","Uncommon",100,"sell",""],
 // Ingredients
 ["Military Composites","Ingredients","Legendary",3500,"craft",""],
 ["Alloyed Plating","Ingredients","Epic",2500,"craft",""],
 ["Binding Catalyst","Ingredients","Rare",1200,"craft","Goes into every Medkit."],
 ["Detonators","Ingredients","Uncommon",900,"craft",""],
 ["Biomaterials","Ingredients","Uncommon",300,"craft",""],
 ["Electronic Sensors","Ingredients","Uncommon",600,"craft",""],
 ["Stock Rod","Ingredients","Rare",500,"craft",""],
 ["CPU","Ingredients","Rare",500,"craft",""],
 ["Control Unit","Ingredients","Uncommon",400,"craft",""],
 ["Reactive Metals","Ingredients","Uncommon",400,"craft","2-Plate Vest needs 5."],
 ["Rigid Synthetics","Ingredients","Uncommon",200,"craft","Medium Backpack needs 5."],
 ["Structural Alloy","Ingredients","Rare",500,"craft",""],
 ["Nylon Cloth","Ingredients","Rare",0,"craft",""],
 ["Printed Circuit Board","Ingredients","Rare",0,"craft",""],
 ["High-Tenacity Fibers","Ingredients","Rare",0,"craft",""],
 ["Nitro Compounds","Ingredients","Rare",0,"craft",""],
 ["Experimental Compounds","Ingredients","Legendary",0,"craft",""],
 // Keys
 ["Key (any)","Keys","Rare",100,"keep","Keep if the room is on your route."],
 // Cash
 ["Cash bag","Cash","Common",1500,"sell","Approx. per bag."],
];

// Item icons (from dmzcodex.com game icons), stored in /img
const IMG={"Gold Bar": "gold-bar", "Cipher Code Ledger": "cipher-code-ledger", "W.M.D. Manifest": "wmd-manifest", "Encrypted Archive": "encrypted-archive", "Nuclear Program Files": "nuclear-program-files", "Infantry Invasion Plans": "infantry-invasion-plans", "Steel Dog Tag": "silver-dog-tag", "Scavenger's Dog Tag": "scavengers-dog-tag", "Bale's Dog Tag": "bale-s-dog-tag", "Roze's Dog Tag": "rozes-dog-tag", "Weapon Manual": "weapon-manual", "Recipe": "recipe", "Large Backpack": "large-backpack", "Medium Scavenger Backpack": "medium-scavenger-backpack", "Medium Backpack": "medium-backpack", "Small Backpack": "small-backpack", "3-Plate Armor Vest": "3-plate-armor-vest", "2-Plate Armor Vest": "2-plate-armor-vest", "1-Plate Armor Vest": "1-plate-armor-vest", "Armor Plate": "armor-plate", "Self-Revive Kit": "self-revive-kit", "Medkit": "medkit", "Door Breacher Charge": "door-breacher-charge", "Smelling Salts": "smelling-salts", "Radiation Blockers": "radiation-blockers", "Painkillers": "pain-killers", "Energy Drink": "energy-drink", "Bandage": "bandage", "Sedative Inhaler": "sedative-inhaler", "Parachute": "parachute", "Night Vision Goggles": "nvgs", "Gas Mask": "gas-mask", "UAV": "uav", "Revive Pistol": "revive-pistol", "Fulton Drop Marker": "fulton-drop-marker", "Trophy System": "trophy-system", "Armor Box": "armor-box", "Ammo Box": "ammo-box", "Stim": "stim", "Smoke Grenade": "smoke-grenade", "Frag Grenade": "frag-grenade", "Throwing Knife": "throwing-knife", "Military Composites": "military-composites", "Alloyed Plating": "alloyed-plating", "Binding Catalyst": "binding-catalyst", "Detonators": "detonators", "Biomaterials": "biomaterials", "Electronic Sensors": "electronic-sensors", "CPU": "cpu", "Control Unit": "control-units", "Reactive Metals": "reactive-metals", "Rigid Synthetics": "rigid-synthetics", "Structural Alloy": "structural-alloy", "Nylon Cloth": "nylon-cloth", "Printed Circuit Board": "printed-circuit-board", "High-Tenacity Fibers": "high-tenacity-fibers", "Nitro Compounds": "nitro-compounds", "Experimental Compounds": "experimental-compounds", "Key (any)": "vault-armory"};
