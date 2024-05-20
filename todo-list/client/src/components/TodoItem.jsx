export default function TodoItem({text, isCompleted}) {
  return (
    <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
      <td>{text}</td>
      <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
      <td className="todo-action">
        <button className="btn todo-btn">Change status</button>
      </td>
    </tr>
  );
}
