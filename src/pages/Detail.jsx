import { useSelector } from "react-redux";


const Detail = () => {

  const todos = useSelector((state) => {
    return state.todos
  })

  return <div></div>;
};

export default Detail;
