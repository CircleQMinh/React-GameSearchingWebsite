export function getRandomColor(id:number){
    const colors = [
      "warning text-dark",
      "primary",
      "success",
      "danger",
      "info",
      "light text-dark",
      "secondary",
    ];
    return colors[id%colors.length]
}