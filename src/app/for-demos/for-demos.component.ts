import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HueGroup } from './huegroup';
import { Light } from './light';
@Component({
  selector: 'app-for-demos',
  templateUrl: './for-demos.component.html',
  styleUrls: ['./for-demos.component.css'],
})
export class ForDemosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  employeeList: Employee[] = [
    new Employee('1', 'Steve', 'Male', 'Development'),
    new Employee('2', 'Bob', 'Male', 'Design'),
    new Employee('3', 'Alexa', 'Female', 'QA'),
  ];

  hueLightData: HueGroup[] = [
    { Name: 'group 1', Lights: [new Light('light 1'), new Light('light 2')] },
    { Name: 'group 2', Lights: [new Light('light 3')] },
  ];
}
