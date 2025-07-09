function canAttack(Character) {
  return {
    attack: () => {
      console.log(`${Character} attacks with a weapon!`);
    },
  };
}

function canDefend(Character) {
  return {
    defend: () => {
      console.log(`${character} defends with a shield!`);
    },
  };
}

function canCastSpell(Character) {
  return {
    castSpell: () => {
      console.log(`${Character} casts a spell!`);
    },
  };
}


