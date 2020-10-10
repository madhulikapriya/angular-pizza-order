import { Component, OnInit } from '@angular/core'
import { orders } from '../orders'
@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
  styleUrls: ['./order-lists.component.css'],
})
export class OrderListsComponent implements OnInit {
  orders = orders
  constructor() {}

  ngOnInit(): void {}

  changeOrderStatus(id, status) {
    this.orders=  this.orders.map((order) => {
      if (order.id == id) {
        return {
          ...order,
          status,
        }
      }
      return order
    })
  }
}
