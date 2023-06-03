const NewItemForm = () => {
  return (
    <div>
      <main className="flex h-screen items-center justify-center">
        <form className="flex w-1/2 rounded-lg bg-white">
          <div className="flex-1 p-20 text-gray-700">
            <h1 className="text-3x1 pb-2">Add new Item</h1>
            <p className="text-lg text-gray-500">
              agregar un nuevo item para user metadata
            </p>
          </div>
          <div className="mt-u">
            {/* Name input field */}
            <div className="pb-4">
              <label htmlFor="name">name</label>
              <input type="text" name="name" placeholder="Enter Item name" />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewItemForm;
