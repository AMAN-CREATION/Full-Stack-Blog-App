import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../url";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + "/api/comments/" + id, {
        withCredentials: true,
      });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const editComment = async (id) => {
    try {
      await axios.put(
        URL + "/api/comments/" + id,
        { comment: newComment },
        { withCredentials: true }
      );
      setIsEditing(false);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (event, id) => {
    if (event.key === "Enter" && newComment.trim() !== "") {
      if (isEditing) {
        editComment(id);
      } else {
        // Add your code to submit a new comment here
        // You may use a similar approach to deleteComment and editComment
      }
    }
  };

  return (
    <div className="px-4 py-3 bg-gray-100 rounded-lg my-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500">
            {new Date(c.updatedAt).toLocaleDateString()}{" "}
            {new Date(c.updatedAt).toLocaleTimeString()}
          </p>
          {user?._id === c?.userId && (
            <div className="flex items-center space-x-2">
              <p
                className="text-red-500 cursor-pointer"
                onClick={() => deleteComment(c._id)}
              >
                <MdDelete />
              </p>
              <p
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setIsEditing(true);
                  setNewComment(c.comment);
                }}
              >
                <BiEdit />
              </p>
            </div>
          )}
        </div>
      </div>
      {isEditing ? (
        <input
          type="text"
          className="mt-2 px-2 py-1 border rounded-md w-full"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, c._id)}
        />
      ) : (
        <p className="mt-2">{c.comment}</p>
      )}
    </div>
  );
};

export default Comment;
