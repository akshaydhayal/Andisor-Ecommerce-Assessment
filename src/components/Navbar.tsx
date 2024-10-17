export default function Navbar() {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-semibold text-indigo-400">Inventory</div>
            <div className="ml-10 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                Collections
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                Analytics
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">+ Add New Product</button>
            <button className="text-gray-300 hover:text-white">Import Data</button>
            <button className="text-gray-300 hover:text-white">Export CSV</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
