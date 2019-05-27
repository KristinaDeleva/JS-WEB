import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { CommentInfo } from '../../shared/models/Coment-Info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent {
  @Input() commentInfo: CommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<string>();

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }

  isAuthor(commentInfo: Object) {
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }
}
