import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-therapist-info',
  templateUrl: './therapist-info.component.html',
  styleUrls: ['./therapist-info.component.scss']
})
export class TherapistInfoComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.ActivatedRoute.params.subscribe((params) => {
  console.log(params);
  
})

  }

}
