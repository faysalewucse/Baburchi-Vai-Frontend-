import React from "react";

export default function Button({ loading, text, style }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`w-full bg-secondary md:p-2 p-1 text-white rounded hover:bg-secondary2 ${style}`}
    >
      <div className="flex items-center justify-center text-xl">
        {loading ? (
          <span className="border h-6 w-6 border-white animate-spin rounded-full"></span>
        ) : (
          <span>{text}</span>
        )}
      </div>
    </button>
  );
}
