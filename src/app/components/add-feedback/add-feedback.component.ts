import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { FeedbackService } from 'src/app/service/feedback.service';
import { Feedback } from 'src/app/model/feedback';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  constructor(private feedbackservice:FeedbackService,
    private router:Router,
    private _flashMessage: FlashMessagesService
    ) { }

  feedback : Feedback=new Feedback();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  feedbacksaveform=new FormGroup({
    feedback_learnerempid: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    feedback_learnername: new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    feedback_coursename: new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    feedback_commets: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    feedback_proficiencylevel: new FormControl(),
    feedback_isrelevanthandson: new FormControl(),
    feedback_isrelevantcontent: new FormControl(),
    feedback_ratingoncontent: new FormControl(),
    feedback_ratingonhandson: new FormControl()

  });

  saveFeedback(saveFeedback){
    this.feedback=new Feedback();
    this.feedback.employeeId=this.FeedbackLearnerEmpid.value;
    this.feedback.name=this.FeedbackLearnerName.value;
    this.feedback.courseName=this.FeedbackCourseName.value;
    this.feedback.isContentRelevant=this.FeedbackIsRelevantContent.value;
    this.feedback.contentHandsOn=this.FeedbackIsReLevantHandson.value;
    this.feedback.proficiencyLevel=this.FeedbackProficiencyLevel.value;
    this.feedback.ratingContent=this.FeedbackRatingonContent.value;
    this.feedback.ratingHandsOn=this.FeedbackRatingonHandson.value;
    this.feedback.comment=this.FeedbackCommets.value;
    this.submitted = true;
    this.save();
    this.router.navigate(['home']);

  }

  save() {
    this.feedbackservice.createFeedback(this.feedback).subscribe(
      data => {console.log("returned object for create request");
      this._flashMessage.show('Submitted Successfully', { cssClass: 'alert-success', timeout: 2000 });

  }, 
      error => {
        console.log("Exception Occured");
        this._flashMessage.show('Not Submitted', { cssClass: 'alert-danger', timeout: 2000 });
        this.feedback = new Feedback();


      })
    
  }

  get FeedbackId(){
    return this.feedbacksaveform.get('id');
  }

  get FeedbackLearnerEmpid(){
    return this.feedbacksaveform.get('feedback_learnerempid');
  }

  get FeedbackLearnerName(){
    return this.feedbacksaveform.get('feedback_learnername');
  }

  get FeedbackCourseName(){
    return this.feedbacksaveform.get('feedback_coursename');
  }

  get FeedbackCommets(){
    return this.feedbacksaveform.get('feedback_commets');
  }

  get FeedbackProficiencyLevel(){
    return this.feedbacksaveform.get('feedback_proficiencylevel');
  }

  get FeedbackIsReLevantHandson(){
    return this.feedbacksaveform.get('feedback_isrelevanthandson');
  }

  get FeedbackIsRelevantContent(){
    return this.feedbacksaveform.get('feedback_isrelevantcontent');
  }

  get FeedbackRatingonContent(){
    return this.feedbacksaveform.get('feedback_ratingoncontent');
  }

  get FeedbackRatingonHandson(){
    return this.feedbacksaveform.get('feedback_ratingonhandson');
  }
  addFeedbackForm(){
    this.submitted=false;
    this.feedbacksaveform.reset();
  }
}
