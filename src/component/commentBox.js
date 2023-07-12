// 작성된 댓글 요소 하나
// 왼: 작성자 프로필 / 오: 닉네임, 댓글 순

import "../css/commentBox.css"
import Profile from "../images/profile.jpg"

function CommentBox(props) {
  return (
    <div className="commentBoxArea">
        <div id="com-left">
            <img id="com-img" src={Profile}/>
        </div>
        <div id="com-right">
            <span id="com-nickname">{props.nickname}</span>
            <span id="com-contents">{props.comment}</span>
        </div>
    </div>
  );
}

export default CommentBox;