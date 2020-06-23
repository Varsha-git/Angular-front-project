import { Component, OnInit } from '@angular/core';
import {userReview} from './reviewinterface';
import { reviews} from './totalreviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: userReview[];
  newReview: any = {};
  constructor() { }
  newReviewrating = '';
  newReviewname = '';
  newReviewemail = '';
  newReviewcomment = '';


  ngOnInit(): void {
    this.reviews = reviews;
  }

  addReview(newReview): any {
    console.log('Add contact has been called');
    newReview = {
    name : this.newReviewname,
    rating : this.newReviewrating,
    phoneNumber : this.newReviewemail,
    comment : this.newReviewcomment
  };
    this.reviews.unshift(newReview);
  }

}
