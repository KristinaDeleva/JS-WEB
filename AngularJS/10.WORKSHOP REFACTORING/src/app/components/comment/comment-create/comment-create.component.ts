import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { NgForm } from '@angular/forms';
import { decreaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {
  @ViewChild('f') commentCreateForm: NgForm;
  @Input() postId: string;
  @Output() postCommentEmitter = new EventEmitter<Object>();
  
  postComment() {
    const body = this.commentCreateForm.value;
    body['postId'] = this.postId;
    body['author'] = localStorage.getItem('username');

    this.postCommentEmitter.emit(body);
    this.commentCreateForm.reset()
  }
}
