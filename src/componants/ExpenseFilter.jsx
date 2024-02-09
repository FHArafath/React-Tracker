/* eslint-disable react/prop-types */
function ExpenseFilter({ onSelectCategory }) {
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

  return (
    <>
      <select
        className="select select-bordered w-full max-w-xs my-4"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">Show All</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default ExpenseFilter;
