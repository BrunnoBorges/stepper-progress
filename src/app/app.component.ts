import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  
  stepperProgressForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    
  }

  ngOnInit() {
    this.stepperProgressForm = this.formBuilder.group({
      food: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  goReturn(progress: ProgressComponent) {
    progress.prev();
  } 
  onStateChange(event) {
    console.log(event);
  }

  ngAfterViewInit() {}
}