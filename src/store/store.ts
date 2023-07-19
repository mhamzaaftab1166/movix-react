import { create } from "zustand";

interface ConfigStore {
  config: string;
  setConfig: () => void;
}
const useConfigStore = create<ConfigStore>((set) => ({
  config: "",
  setConfig: () => {},
}));
export default useConfigStore;
