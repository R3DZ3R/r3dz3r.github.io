const game = ['Odd Bot', 'Drive Mad', 'Roller', 'Speed King', 'Longcat', 'Recoil', 'Pool', 'Cookie Blast', 'Roper', 'Gobble', 'Monster Match', 'Popix', 'Dino Bros', 'Chirpz', 'Mini Golf', 'Fixel', 'Frames', 'Blocked', 'Gap Passer Bot', 'Rotix', 'GRAvity', 'Turbo Tracks', 'Fruit Jam', 'Crawler Balance', 'Loading', 'Color Break', 'Railgunner', 'Canals', 'Blob', 'Power Boxes', 'BreakPix', 'Turn The World', 'Billiards', 'Tumble', 'Dash', 'Pushbox', 'Little Jump', 'Cube Quest', 'Pivot', 'Transporter', 'The Four', 'Ngglinding', 'Bomb Blast', 'Nick', 'Wheally RC', 'Painty Tumbler', 'BOOMpix', 'PuzzleFaces', 'Park The Van', 'Stacktris', 'Paint The Beat', 'Void', 'Gravitix', 'Dinoman', 'Helicade', 'Blocky Goal', 'Light Bounce', 'Gravity Collide', 'JumpCade', 'Drop Down', 'Painty Cube', 'Ruin Castle', 'Shoot It', 'ArcTan', 'Flatland', 'Differ Hall', 'Fanjong', 'Path Seeker', 'Dungeon Dash', 'Color It', 'Multislide', 'Switch', 'Rebound', 'Plumbing', 'Away', 'Tower Of Hanoi', 'Replacement', 'Puffin Road', 'Solitaire', 'Untangle', 'Floppy Fish', 'Fixed Path', 'Minecade', 'Bumbly Bee', 'Ditto', 'Pianist', 'SnakeMania', 'Dodging Game', 'BOLT', 'Turnbox', 'Word Search', 'Dark Castle', 'RedBlue', 'Square Wars', 'Vanilla Ball', 'Noodle', '3D Sokoban', 'Worm Out', 'Rapid Fire', 'Floods', 'Layerue', 'This Side Up', 'Bridge Builder'];
const genre = ['Action', 'Puzzle', 'RPG', 'Shooter', 'Memory', 'High-Score', 'Strategy', 'Idle-Game', 'Tycoon', 'Sandbox', 'Open-World', 'FPS', 'Platformer', 'Roguelike'];
const obj = ['Box', 'Glass', 'Tile', 'Unbreakable', 'Gas', 'Wood', 'Fire', 'Ice', 'Water', 'Steam', 'Laser', 'Slime', 'Lava', 'Stone', 'Diamond', 'Gold', 'Sound Generator', 'Waveform', 'Void', 'Animal', 'Human', 'Plant', 'Robot', 'Portal', 'Keyboard', 'Letter', 'Tree', 'Sand', 'Shard', 'Number block', 'Screen', 'Camera', 'Ball', 'Planet', 'Sun', 'Electricity'];
const mech = ['Push', 'Pull', 'Move', 'Swap', 'Distinguish', 'Destroy', 'Eliminate', 'Shoot', 'Replace', 'Clone', 'Loop', 'Repeat', 'Trace', 'Jump', 'Crash', 'Teleport', 'Guess', 'Pick', 'Unknown', 'Define', 'Add', 'Substract', 'Multiply', 'Divide', 'Recreate', 'Spawn', 'Crop', 'Bounce', 'Fall', 'Raise', 'Type', 'Command', 'Include', 'Exclude', 'End', 'Start', 'Slingshot'];
const extra = ['Universal', 'Can\'t left behind', 'One side', 'Multitasked', 'Inability', 'The more the worse', 'Overload', 'Semi-broken', 'I have two side', 'You know the rules', 'Stick together', 'It\'s a lie', 'Together', 'Alone', 'Complexity', 'Simple', 'Low resolution', 'Unavailable', 'It does not exists', 'Weird', 'Quality over quantitiy', 'Too many objects', 'Infinite loop', 'It\'s all the same', '????????', 'Common mistake', 'Intentional bugs', 'Inside', 'Outside', 'Paradox', 'Nested', 'It\'s not there', 'Skull', 'Combine', 'Hybrid'];

var gamel = game.length;
var genrel = genre.length;
var objl = obj.length;
var mechl = mech.length;
var extral = extra.length;

function rgame() { 
  out = game[Math.floor(Math.random() * gamel)];
  document.getElementById("game").innerHTML = out;
}

function rgenre() { 
  out = genre[Math.floor(Math.random() * genrel)];
  document.getElementById("genre").innerHTML = out;
}

function robj() { 
  out = obj[Math.floor(Math.random() * objl)];
  document.getElementById("obj").innerHTML = out;
}

function rmech() { 
  out = mech[Math.floor(Math.random() * mechl)];
  document.getElementById("mech").innerHTML = out;
}

function rextra() { 
  out = extra[Math.floor(Math.random() * extral)];
  document.getElementById("extra").innerHTML = out;
}

function random() {
	rgame();
	rgenre();
	robj();
	rmech();
	rextra();
}