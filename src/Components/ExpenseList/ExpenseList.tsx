import "./ExpenseList.css";

interface Item {
  description: string;
  amount: number;
  category: string;
  id: string;
}

interface Props {
  items: Item[];
  onDelete: (id: string) => void;
}

const ExpenseList = ({ items, onDelete }: Props) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ description, amount, category, id }) => {
            return (
              <tr key={id}>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              ${items.reduce((acc, item) => item.amount + acc, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
