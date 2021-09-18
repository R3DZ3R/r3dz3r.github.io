const key = ['Nano', 'Binary', 'Lab', 'Warp', 'Module', 'House', 'Action', 'Ship', 'Block', 'Player', 'Byte', 'Castle', 'Aid', 'Truck', 'Gear', 'Spin', 'Turn', 'Drag', 'Help', 'Tree', 'Virtual', 'Run', 'Danger', 'Gizmo', 'Orbit', 'Bot', 'Zero', 'Dream', 'Swipe', 'You', 'Cyber', 'Zone', 'Kingdom', 'Shield', 'Vector', 'Island', 'Pixel', 'Atomic', 'Land', 'Race', 'Golf', 'Smash', 'Park', 'Remix', 'Demake', 'Touch', 'Slide', 'Get', 'Floppy', 'Snake', 'Mobile', 'Void', 'Tiny', 'Quantum', 'Zoo', 'Area', 'Racing', 'Mod', 'Sword', 'Ninja', 'Arena', 'Stone', 'Cube', 'Neon', 'Citizen', 'Wheel', 'Bird', 'Light', 'Plaza', 'Move', 'Life', 'Risky', 'Out', 'Club', 'Star', 'Cat', 'Pocket', 'Holo', 'City', 'Team', '3D', 'Twisted', 'Ball', 'Robot', 'Mini', 'Bit', 'Data', 'Hyper', 'Ice', 'Skull', 'Golem', 'Hack', 'Cell', 'Score', 'Toy', 'Rune', 'Up', 'Code', 'Jam', 'Mix', 'Twist', 'Craft', 'Atom', 'Room', 'Garden', 'Double', 'Anarchy', 'Walk', 'Climb', 'Quest', 'Silly', 'Cipher', 'Gadget', 'Mass', 'Shadow', 'Cubed', 'Disk', 'One', 'Boss', 'Voxel', 'Square', 'Chunky', 'Polygon', 'Push', 'Infinite', 'Evolution', 'Link', 'Tower', 'Planet', 'Maze', 'Base', 'Relic', 'Down', 'Path', 'Micro', 'Rage', 'World', 'Forest', 'Sim', 'Car', 'System', 'Dungeon', 'Tangle'];

function randomize() { 
  var keyl = key.length;
  var out1 = key[Math.random() * keyl];
  var out2 = key[Math.random() * keyl];
  document.getElementById("demo").innerHTML = out1.concat(" ", out2);
}
