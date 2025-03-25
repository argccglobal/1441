export const Switch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-9 h-[26px] bg-gray-300 focus:outline-none peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:-translate-x-[3%]  after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-[97%] after:-translate-y-1/2 after:bg-background  after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};
