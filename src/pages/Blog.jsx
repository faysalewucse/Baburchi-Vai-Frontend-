import React from "react";

export default function Blog() {
  const BlogCard = ({ question, answer }) => (
    <div className="bg-orange-50 border border-orange-700 p-5 rounded-lg">
      <h1 className="font-bold text-orange-600">{question}</h1>
      <p className="text-lg mt-5 text-justify tracking-wider text-orange-500">
        {answer}
      </p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto font-common mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-2xl p-2 mb-10">
      {/* Blog-1 */}
      <BlogCard
        question="Differences between uncontrolled and controlled components"
        answer={
          "React's controlled components make it simple to control the state and behavior of your components. This improves the predictability and debuggability of your code and enables effective state management in bigger projects. Uncontrolled components, on the other hand, rely on controlling their own state internally, which can cause confusion and make it challenging to trace changes. Explore controlled components in greater detail and discover how to use React's state management features in your next work."
        }
      />
      {/* Blog-2 */}
      <BlogCard
        question="How to validate React props using PropTypes?"
        answer={
          "React has an internal mechanism for props validation called PropTypes. First we need to install propTypes package then import it. Then we can get propTypes property from our functional component. and check the type under the scope. Suppose my functional component is receiving a props called name and age. so we can check it like name: PropTypes.string, age: PropTypes.number in the scope of the proptypes checking."
        }
      />
      {/* Blog-3 */}
      <BlogCard
        question="Difference between nodejs and express js."
        answer={
          "Nodejs is detailed as A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.  On the other hand, ExpressJs is a minimal and flexible NodeJs web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications."
        }
      />
      {/* Blog-4 */}
      <BlogCard
        question="What is a custom hook, and why will you create a custom hook?"
        answer={
          "Sometimes we need to make our own customized hook like useState, useEffect. By Using Custom hook we can use it multiple times. We can return multiple value through object and next time when we use it wen can silply destructures by calling the hook and we get the data. Data can be anything. Its work like a function but we need to give the name like useSomething. ex: useAuth, useFetch etc."
        }
      />
    </div>
  );
}
