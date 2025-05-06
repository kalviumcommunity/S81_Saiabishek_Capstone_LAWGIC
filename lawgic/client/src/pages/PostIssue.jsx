import React, { useState } from "react";
import axios from "axios";

const PostIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/legalProblems/post",
        { title, description, category },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Your issue has been submitted!");
      setTitle("");
      setDescription("");
      setCategory("");
    } catch (err) {
      console.error(err);
      alert("Failed to post issue.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Post Your Legal Problem
        </h2>
        <p className="text-center text-gray-500 mb-6 italic">
          Tell us your legal problems — your information is 100% confidential.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="E.g. Family dispute"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Describe your issue..."
              rows="4"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g. Family, Civil, Criminal"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostIssue;
