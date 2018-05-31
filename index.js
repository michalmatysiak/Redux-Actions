import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';



const addComment = text => {
	return {
		type: ADD_COMMENT,
		text
		id: uuid.v4(),
	}
};

const editComment = (id, text) => {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
};

const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
};

const thumbUpComment = (id) => {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
};

const thumbDownComment = (id) => {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
};

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(thumbs, id));
const boundThumbDownComment = id => dispatch(thumbDownComment(thumbs, id));

addComment('My first comment !!');
editComment('My next comment ');
removeComment(15);
thumbUpComment(14, 21);
thumbDownComment(9, 74);

