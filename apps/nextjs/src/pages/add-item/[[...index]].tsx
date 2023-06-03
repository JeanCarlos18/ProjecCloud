import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <button
      type="button"
      className="absolute top-0 left-0 mt-4 ml-4 flex items-center rounded-full border border-gray-300 bg-white p-2 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      onClick={handleBack}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </button>
  );
};

const NewItemForm = () => {
  // Formik logic

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
    },
    // Validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must not exceed 50 characters"),
      description: Yup.string()
        .required("Description is required")
        .min(10, "Description must be at least 10 characters")
        .max(200, "Description must not exceed 200 characters"),
      price: Yup.number().moreThan(0, "Price must be more than 0"),
    }),

    // Submit form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative flex w-1/2 rounded-lg bg-white"
    >
      <div className="flex-1 p-20 text-gray-700">
        <h1 className="pb-2 text-3xl">
          Add new Item into the list for the user
        </h1>
        <p className="text-lg text-gray-500">
          agregar un nuevo item para user metadata
        </p>
        <div className="mt-4">
          {/* Name input field */}
          <div className="pb-4">
            <label className="block pb-2 text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-md border-2 border-gray-500 p-2 focus:border-purple-500 focus:ring-purple-500"
              type="text"
              name="name"
              placeholder="Enter Item name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          {/* ... */}
        </div>
        <div className="mt-4">
          {/* Description input field */}
          <div className="pb-4">
            <label className="block pb-2 text-sm" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full resize-none rounded-md border-2 border-gray-500 p-2 focus:border-purple-500 focus:ring-purple-500"
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Shiny object!"
              rows={3}
            />
          </div>
        </div>
        <div className="mt-4">
          {/* Price input field */}
          <div className="pb-4">
            <label className="block pb-2 text-sm" htmlFor="price">
              Price
            </label>
            <div className="flex flex-row">
              <span className="flex items-center rounded-l-md border border-gray-300 bg-gray-50 p-2 text-gray-900">
                $
              </span>
              <input
                className="flex-1 rounded-r-md border border-gray-300 p-2 focus:border-purple-500 focus:ring-purple-500"
                type="number"
                name="price"
                id="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
        {/* ... */}
        <button
          type="submit"
          className="absolute bottom-0 right-0 mb-4 mr-4 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const AddItemPage = () => (
  <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    <BackButton />
    <NewItemForm />
  </main>
);

export default AddItemPage;
