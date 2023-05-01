import React from "react";

export default function Blog() {
  const BlogCard = ({ question, answer }) => (
    <div className="bg-indigo-50 border border-indigo-700 p-5 rounded-lg">
      <h1 className="font-bold text-indigo-600">{question}</h1>
      <p className="text-lg mt-5 text-justify tracking-wider text-indigo-500">
        {answer}
      </p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto font-common mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-2xl p-2">
      {/* Blog-1 */}
      <BlogCard
        question="When should you use context API?"
        answer={
          "We need to pass the data through component and there might be many child component of a parent component so we need pass prop children by children. But all the children components may not using these data and it's complex also. If We miss any component it's hard to find the error. So, solve this props drilling problem we use context API. Which can broadcast the data all over the components. And we easily get the data using useContext function from the component. But the component must be children component."
        }
      />
      {/* Blog-2 */}
      <BlogCard
        question="What is a custom hook?"
        answer={
          "Sometimes we need to make our own customized hook like useState, useEffect. By Using Custom hook we can use it multiple times. We can return multiple value through object and next time when we use it wen can silply destructures by calling the hook and we get the data. Data can be anything. Its work like a function but we need to give the name like useSomething. ex: useAuth, useFetch etc."
        }
      />
      {/* Blog-3 */}
      <BlogCard
        question="What is useRef?"
        answer={
          "To referencing any data and not need for rendering we can use useRef. By using useRef we can change the value cause it is mutable we can use it in input field for when using form."
        }
      />
      {/* Blog-4 */}
      <BlogCard
        question="What is useMemo?"
        answer={
          "A React Hook called useMemo enables us to cache a calculation's outcome in between re-renders. useMemo must be called at the top level of component or one of own Hooks because it is a Hook. It cannot be called from within loops or conditions. Extract a new component and transfer the state into it if you require that."
        }
      />
    </div>
  );
}
