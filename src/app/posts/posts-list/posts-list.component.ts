import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
  }
}
