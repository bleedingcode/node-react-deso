import Deso from "deso-protocol";

// Global Variables
let deso: any = null;

export const initDeso = () => {
  if (!deso) deso = new Deso();
};

export const getDeso = () => {
  return deso;
};
