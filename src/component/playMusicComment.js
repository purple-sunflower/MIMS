// 재생 화면 > 댓글 부분
import "../css/playMusicComment.css"
import CommentBox from "./commentBox";

function PlayMusicComment() {
  return (
    <div className="PlayMusicCommentArea">
        <div id="commentRead">
          전체 코멘트 볼 수 있즘.
          <CommentBox nickname ="카리나는 신" comment="유지민 사랑해"/>
          <CommentBox nickname ="지제리" comment="랩 쫀득한거 보소"/>
          <CommentBox nickname ="너와나의윈터" comment="겨울이 고음 대박"/>
          <CommentBox nickname ="아임닝닝스팬" comment="닝닝이 목소리 존예"/>
          <CommentBox nickname ="블랙맘바" comment="내가 낄 곳이 없네"/>
          <CommentBox nickname ="카리나는 신" comment="유지민 사랑해"/>
          <CommentBox nickname ="지제리" comment="랩 쫀득한거 보소"/>
          <CommentBox nickname ="너와나의윈터" comment="겨울이 고음 대박"/>
          <CommentBox nickname ="아임닝닝스팬" comment="닝닝이 목소리 존예"/>
          <CommentBox nickname ="블랙맘바" comment="내가 낄 곳이 없네"/>
        </div>
        <div id="commentInput">
          <input placeholder="당신의 생각을 적어보세요:)"/>
          <button type="submit">작성</button>
        </div>
    </div>
  );
}

export default PlayMusicComment;