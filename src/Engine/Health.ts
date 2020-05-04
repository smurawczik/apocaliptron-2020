const HealthApi = () => {
  let HEALTH = 100;

  const setHealth = (newHealth: number) => {
    if (newHealth + HEALTH > 100) {
      HEALTH = 100;
    } else {
      HEALTH += newHealth;
    }
    return HEALTH;
  };
  const getHealth = () => HEALTH;

  return {
    getHealth,
    setHealth,
  };
};

export default HealthApi();
