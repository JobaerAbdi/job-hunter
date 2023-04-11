import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-20 bg-slate-200">
        Blogs
      </h1>

      <div className="px-16 pt-20 mb-10">
        <h1 className="text-3xl font-bold">When should use context api?</h1>
        <h1 className="font-bold mb-8">
          The Context API in React is used to manage global state that needs to
          be accessed by multiple components in a tree hierarchy, without the
          need to pass props down the components tree manually.
        </h1>

        <h1 className="text-3xl font-bold">What is custom hook?</h1>
        <h1 className="font-bold mb-8">
          A custom hook is a special javaScript function whose name starts with
          'use' and can be used to call other hooks.
        </h1>

        <h1 className="text-3xl font-bold">What is use ref?</h1>
        <h1 className="font-bold mb-8">
          The useRef hook allows to persist value between renders. It can be
          used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </h1>

        <h1 className="text-3xl font-bold">What is use memo?</h1>
        <h1 className="font-bold">
          useMemo is a react hook that lets us cache the result of a calculation
          between re-renders.
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
