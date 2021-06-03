import { Component, OnInit } from '@angular/core';
import { WORKOUTS } from '../mock-workouts';
import { Workout } from '../Workout';

// Component 정의 부분
@Component({
  selector: 'app-workouts', // Component의 css 요소 selector
  templateUrl: './workouts.component.html', // Component의 Template 파일
  styleUrls: ['./workouts.component.css'] // Compnonent의 Style 파일
})
export class WorkoutsComponent implements OnInit {
  workouts = WORKOUTS;
  selectedWorkout: Workout | undefined;
  constructor() { }
  ngOnInit(): void { }
  onSelect(workout: Workout): void { 
    this.selectedWorkout = workout
  }
}
