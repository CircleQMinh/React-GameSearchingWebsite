export function parseGameModeName(id:number){
    switch (id) {
      case 1:
        return "Single player";
      case 2:
        return "Multiplayer";
      case 3:
        return "Co-operative";
      case 4:
        return "Split screen";
      case 5:
        return "Massively Multiplayer Online (MMO)";
      case 6:
        return "Battle Royale";
      default:
        return "";
    }
}