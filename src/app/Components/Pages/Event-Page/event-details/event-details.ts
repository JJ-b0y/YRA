import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eventList } from '../../../../Services/eventList';
import { IEvent } from '../../../../Interface/eventInterface';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  clickedEvent: IEvent | undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (data) => {
        const id = Number(data.get("id"));

        this.clickedEvent = eventList.find(
          event => event.id === id
        );

        console.log("Clicked Event: ", this.clickedEvent);
      },
      error: (err) => {
        console.error("Error retrieving Event ID: ", err);
      }
    });
  }
}
