function updateLight(current) {
  let lights = ["green","yellow","red"];
  return (lights [lights.indexOf(current) + 1]) || "green"
  }