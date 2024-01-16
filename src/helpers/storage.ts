export const getItem = (name: string): string => {
  return localStorage.getItem(name);
};
export function setItem<T extends string>(name: string, data: T) {
  localStorage.setItem(name, data);
}
