// 재생 화면 > 댓글 부분
import "../css/playMusicComment.css"
import CommentBox from "./commentBox";

function PlayMusicComment() {
  return (
    <div className="PlayMusicCommentArea">
        <div id="commentRead">
          전체 코멘트 볼 수 있즘.
          <CommentBox/>
        </div>
        <div id="commentInput">
          <input placeholder="당신의 생각을 적어보세요:)"/>
          <button type="submit">작성</button>
        </div>
    </div>
  );
}

export default PlayMusicComment;