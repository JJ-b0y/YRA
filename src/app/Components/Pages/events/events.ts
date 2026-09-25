import { Component, OnInit } from '@angular/core';
import { eventList } from '../../../Services/eventList';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  events = eventList;

  viewEventDetails(id: number) {
    this.router.navigate(['/events/event-details', id]);
  }

  ngOnInit(): void {
    console.log("Event Page Successfully Mounted!");

    this.activatedRoute.queryParamMap.subscribe({
      next: (data) => {
        const type = data.get("type");
        const sort = data.get("sort");
        const filter = data.get("filter");

        console.log({ type, sort, filter });
      },
      error(err) {
        console.error("Error retrieving query: ", err);
      },
      complete() {
        console.log("Query Retrieved Successfully!");
      },
    })
  }

  singleQueryEvent(type: string) {
    this.router.navigate(
      ['/events'],
      {
        queryParams: {
          type,
        }
      }
    );

    console.log("Queried by types: ", { type });
  }

  multipleQueryEvent(type: string, sort: string, filter: string) {
    this.router.navigate(
      ['/events'],
      {
        queryParams: {
          type,
          sort,
          filter
        }
      }
    );

    console.log("Queried Parameters: ", { type, sort, filter });
  }
}
