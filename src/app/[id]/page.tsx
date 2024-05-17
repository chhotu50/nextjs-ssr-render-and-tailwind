import React, { FC } from 'react'
const getData = async (id:any) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };
const ToDoDetails:FC<any> = async({params}) => {
    const data = await getData(params?.id);
    console.log(data,'---')
  return (
    <div>
        <p>{data?.id}</p>
        <p>{data?.title}</p>
    </div>
  )
}

export default ToDoDetails;