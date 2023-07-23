import "./ExpenseFilter.css";

interface Props {
  onSelectItems: (category: string) => void;
}

const ExpenseFilter = ({ onSelectItems }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectItems(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
