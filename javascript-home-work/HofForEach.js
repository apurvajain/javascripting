// forEach calls a function once for every element in the array
const professionals = ["Doctor", "Engineer"];
function greeting(professional) {
  console.log("Hello " + professional);
}
const updatedProfessionals = professionals.forEach(greeting);
