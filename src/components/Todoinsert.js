import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = event => {
    // submit 이벤트는 브라우저에서 새로고침 발생시킴 그래서 이를 방지하기 위해
    // 아래 함수를 호출한다(event.preventDefault();)
    event.preventDefault();
    setValue("");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        {/* MdAdd는 리액트 아이콘임 */}
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
