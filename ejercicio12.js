/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
 
  function findMutantByPower(mutants, power) {
    const mutantsPower = mutants.filter(mutant => mutant.power === power);
    if(mutantsPower.length > 0){
      const mutantName = mutantsPower.map(mutant => mutant.name);
      console.log("Se han encontrado " + mutantsPower.length + " mutantes con el poder " + power +" : " + mutantName.join(", ")); 
    } else {
      console.log("No se han encontrado Mutantes con  el poder: " + power +".");
    }

}
  
findMutantByPower(mutants, "invisible");