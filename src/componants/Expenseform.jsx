/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

function Expenseform({ addExpense }) {
  const category = [
    "Housing",
    "Transportation",
    "Food",
    "Utilities",
    "Healthcare",
    "Insurance",
    "Entertainment",
    "Debt",
    "Personal Care",
    "Education",
    "Savings/Investments",
    "Clothing",
    "Gifts/Donations",
    "Travel",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const submitData = (data) => {
  //   addExpense(data);
  //   reset();
  // };

  const submitData = (data) => {
    const expenseAmount = data.amount || 0; // Default to 0 if amount is not provided
    const expenseData = { ...data, amount: expenseAmount };
    addExpense(expenseData);
    reset();
  };

  return (
    <>
      <div className="text-3xl mb-4 font-bold">Track Expenses</div>
      <form onSubmit={handleSubmit((data) => submitData(data))}>
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full max-w-xs rounded-lg"
          {...register("description", {
            required: true,
            minLength: 4,
            maxLength: 18,
          })}
        />
        {errors.description?.type == "required" && (
          <p className="text-red-400 px-1 py-2">Field is required</p>
        )}
        {errors.description?.type == "minLength" && (
          <p className="text-red-400 px-1 py-2">
            Too Short Minimum Character Is Upto 4
          </p>
        )}
        {errors.description?.type == "maxLength" && (
          <p className="text-red-400 px-1 py-2">
            Too Big Maximum Character Is 18!
          </p>
        )}
        <br />
        <input
          type="Number"
          placeholder="$0"
          className="input input-bordered w-full max-w-xs my-4 rounded-lg"
          {...register("amount", { valueAsNumber: true })}
        />
        <br />
        <select
          className="select select-bordered w-full max-w-xs rounded-lg"
          {...register("category", { required: true })}
        >
          <option value="">Choose Category</option>
          {category.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="text-red-400 px-1 py-2">Choose a category!</p>
        )}
        <br />
        <input
          type="submit"
          value="Add Expenses"
          className="btn btn-outline mt-4 w-full max-w-xs rounded-lg"
        />
      </form>
    </>
  );
}

export default Expenseform;
