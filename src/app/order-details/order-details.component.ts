import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { orders } from '../orders';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  order
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.order = orders.find(order=>order.id === +params.get("orderId"))
      console.log(this.order)
    })
  }


}
