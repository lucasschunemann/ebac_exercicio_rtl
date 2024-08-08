import React, { useState } from "react";

const PostComments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button data-testid="submit-button" onClick={handleAddComment}>
        Adicionar Comentário
      </button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
