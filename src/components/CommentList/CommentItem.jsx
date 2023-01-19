export function CommentItem({ email, theme, text }) {
  return (
    <li className="list-group-item border border-dark-subtle">
      <p>
        <span className="fw-bold">email</span>: <span>{email}</span>
      </p>
      <p>
        <span className="fw-bold">theme</span>: <span>{theme}</span>
      </p>
      <p>
        <span className="fw-bold">text</span>
        <span className="d-block border border-dark-subtle rounded p-2">{text}</span>
      </p>

      <button type="button" className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
