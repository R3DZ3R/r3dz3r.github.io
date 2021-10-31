const key = ['Nano', 'Binary', 'Lab', 'Warp', 'Module', 'House', 'Action', 'Ship', 'Block', 'Player', 'Byte', 'Castle', 'Aid', 'Truck', 'Gear', 'Spin', 'Turn', 'Drag', 'Help', 'Tree', 'Virtual', 'Run', 'Danger', 'Gizmo', 'Orbit', 'Bot', 'Zero', 'Dream', 'Swipe', 'You', 'Cyber', 'Zone', 'Kingdom', 'Shield', 'Vector', 'Island', 'Pixel', 'Atomic', 'Land', 'Race', 'Golf', 'Smash', 'Park', 'Remix', 'Demake', 'Touch', 'Slide', 'Get', 'Floppy', 'Snake', 'Mobile', 'Void', 'Tiny', 'Quantum', 'Zoo', 'Area', 'Racing', 'Mod', 'Sword', 'Ninja', 'Arena', 'Stone', 'Cube', 'Neon', 'Citizen', 'Wheel', 'Bird', 'Light', 'Plaza', 'Move', 'Life', 'Risky', 'Out', 'Club', 'Star', 'Cat', 'Pocket', 'Holo', 'City', 'Team', '3D', 'Twisted', 'Ball', 'Robot', 'Mini', 'Bit', 'Data', 'Hyper', 'Ice', 'Skull', 'Golem', 'Hack', 'Cell', 'Score', 'Toy', 'Rune', 'Up', 'Code', 'Jam', 'Mix', 'Twist', 'Craft', 'Atom', 'Room', 'Garden', 'Double', 'Anarchy', 'Walk', 'Climb', 'Quest', 'Silly', 'Cipher', 'Gadget', 'Mass', 'Shadow', 'Cubed', 'Disk', 'One', 'Boss', 'Voxel', 'Square', 'Chunky', 'Polygon', 'Push', 'Infinite', 'Evolution', 'Link', 'Tower', 'Planet', 'Maze', 'Base', 'Relic', 'Down', 'Path', 'Micro', 'Rage', 'World', 'Forest', 'Sim', 'Car', 'System', 'Dungeon', 'Tangle'];
const keyPlus = ['Itch', '.EXE', 'Laser', 'Destructive', 'Giga', 'Flower', 'Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Cyan', 'Orange', 'Neo', 'Freeze', 'Clock', 'Coder', 'Flex', 'Redzer', 'Struck', 'Stroke', 'I', 'They', 'Frog', 'Stack', 'Mixed', 'Mashup', 'Strong', 'Weak', 'Zombie', 'Virus', 'Xenon', 'Gartic', 'Phone', 'Step', 'Dub', 'Ditto', 'Robot', 'Never', 'Give', 'You', 'Apple', 'Banana', 'Cherry', 'Donut', 'Eclipse', 'Solar', 'Think', 'Complex', 'Shape-shifting', 'Make', 'Mining', 'HTML', 'Unknown', 'Undefined', 'NaN', 'Laughing', 'Let', 'Gigantic', 'Fan', 'Edit', 'Me', 'Generator', 'Test', 'Exam', 'Property', 'Key', 'Board', 'Tanks', 'Fire', 'Base', 'Sound', 'Cloud', 'What', 'App', 'Tube', 'Mail', 'E', 'G', 'Face', 'Book', 'Kit', 'Canvas', 'Resolve', 'Difference', 'Sun', 'Substraction', 'Multiply', 'Division', 'Part', 'Body', 'Garage', 'Constraints', 'Help', 'Project', 'Bug', 'Buggy', 'Show', 'Touch', 'Invisible', 'Save', 'Broke', 'UWU', 'XD', 'Invisible', 'Undescribable', 'Lollipop', 'Hit', 'Raycast', 'Detect', 'Usage', 'Bow', 'Soft', 'Hard', 'Extreme', 'Pianist', 'No', 'Yes', 'Browser', 'Click', 'Random', 'Land', 'Nonsense', 'Versus', 'Button', 'Weird', 'Dimension', 'Vacuum', 'Super', 'Octagon', 'Heptagon', 'Hexagon', 'Pentagon', 'Square', 'Triangle', 'Line', '1D', '2D', '3D', '4D', 'Dot', 'Triple', 'Double', 'Monochrome', 'IDK', 'Waste', 'SUS', 'Among', 'Us', 'Math', 'Floor', 'Lava', 'Document', 'Concatenation', 'Plant', 'City', 'Cement', 'Holographic', 'Futuristic', 'Demo', 'CPU', 'Burn', 'Decimate', 'Advertise', 'RPG', 'Computer', 'Desktop', 'Look', 'Jumbo', 'Elephant', 'Pixelate', 'Tag', 'Simple', 'UFO', 'Villain', 'Ore', 'Diamond', 'Iron', 'Golden', 'Ruby', 'Glitched', 'Furry', 'Stretch', 'Sticky', 'Nodes', 'Typo', 'Text', 'Sentence', 'Poem', 'Cascade', 'Script', 'Language', 'Revamp', 'Slider', 'Sokoban', 'Fun', 'Awkward', 'Doll', 'Bell', 'Door', 'Window', 'Telephone', 'Sophisticated', 'In', 'Shot', 'Sniper', 'Bazoka', 'Flow', 'Dandelion', 'Slime', 'Skateboard', 'Blob', 'Sharp', 'Teeth', 'Syntax', 'Error', 'Unexpected', 'Token', '?', 'Title', 'Ping', 'Mention', 'Feel', 'Grass', 'Hate', 'Much', 'Cubie', 'Proton', 'Neutron', 'Anti', 'Matter', 'Problem', 'Cinema', 'Sweat', 'Smile', 'Sweet', 'Song', 'Float', 'Joy', 'Return', 'Screen', 'Desk', 'Top', 'Bottom', 'Wide', 'Narrow', 'Reverb', 'Synth', 'Synthesizer', 'Synthetic', 'Drum', 'Loop', '16D', 'Wait', 'Outer', 'Inner', 'Never', 'End', 'Begin', 'Passcode', 'Commit', 'Change', 'Update', 'Optional', 'Extend', 'Contact', 'API', 'Marine', 'Sub', 'Super', 'Function', 'Fancy', 'Single', 'Cell', 'Software', 'Hardware', 'Brain', 'Smile', 'Shrugging', 'Confusing', 'Bored', 'Chat', 'Flood', 'Seriously', 'Rose', 'Cosmos', 'Brown', 'Zer', 'French', 'Fries', 'Inside', 'Outside', 'Furry', 'Calculator', 'Seizure', 'OHNO', '64-bit', '32-bit', '16-bit', '8-bit', '4-bit', '2-bit', '1-bit', 'Quick', 'Fly', 'Flying', 'Giant', 'Rotate', 'Rotating', 'Big', 'Falling', 'Fall', 'Human', 'Ghost', 'Open', 'Long', 'Short', 'Suspicious', 'Moving', 'Famous', 'Teleport', 'Port']

var keyl = key.length;
var keyPlusl = keyPlus.length;
var out = '', list = [], listl = 0;

function randomize() { 
  out = ''
  for (let i = 0; i < 2; i++) {
    out = out.concat(key[Math.floor(Math.random() * keyl)]).concat(' ');
  }
  document.getElementById("demo").innerHTML = out;
}

function randomizePlus() { 
  out = ''
  for (let i = 0; i < 2; i++) {
    if (Math.random() < 0.5) {
      list = key;
      listl = keyl;
    } else {
      list = keyPlus;
      listl = keyPlusl;
    }
    out = out.concat(list[Math.floor(Math.random() * listl)]).concat(' ');
  }
  document.getElementById("demo").innerHTML = out;
}
