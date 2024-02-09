/* eslint-disable react/prop-types */
function Expense({ expenses, onDelete }) {
  const totalAmount = expenses.reduce((accumulator, expense) => {
    return accumulator + parseInt(expense.amount);
  }, 0);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-gray-300 text-xl">
              <th>Category</th>
              <th>Description</th>
              <th>Amount ($)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th>{expense.category}</th>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    className="btn btn-circle btn-outline"
                    onClick={() => onDelete(expense.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-base text-lime-300">
              <td></td>
              <td>Total</td>
              <td>$ {totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Expense;
