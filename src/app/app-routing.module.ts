import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OrderDetailsComponent } from './order-details/order-details.component'
import { OrderListsComponent } from './order-lists/order-lists.component'

const routes: Routes = [
 {path:"",component:OrderListsComponent},
 {path:"order/:orderId",component:OrderDetailsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
