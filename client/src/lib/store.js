import { createStore } from "redux";

const account = (state = [], action) => {
  switch (action.type) {
    case "ACCOUNT_ENTERED":
      return state.concat(action.payload);
    default:
      return state;
  }
};

const store = createStore(account);

export default store;

/*

const replies = (state=[], action) => {
  switch(action.type) {
    case 'COMMENTS_RECEIVED':
      const replies = action.payload.comment.reduce((accumulator, comment) => {
        const { replies, ...commentWithoutReplies } = comment;

        return accumulator.concat(replies);
      }, []);

      return state.concat(replies);

    case 'REPLIES_RECEIVED':
      return state.concat(action.payload.replies);
  }

  return state;
}

const comments = (state=[], action) => {
  switch(action.type) {
    case 'COMMENTS_RECEIVED': 
      const commentsWithoutReplies = action.payload.comments.reduce((accummulator, comment) => {
        const { replies, ...commentWithoutReplies } = comment;

        return accumulator.concat(commentWithoutReplies);
      }, []);
      return state.concat(commentsWithoutReplies);

    case 'COMMENT_CREATED':
      return state.concat(action.payload.comment);  
  }

  return state;
}

*/
