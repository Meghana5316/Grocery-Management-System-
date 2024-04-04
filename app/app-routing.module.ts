import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:'',
component:MainComponent},
{path:'products',
component:ProductsComponent},
{path:'home',
component:HomeComponent},
{path:'order',
component:OrderComponent},
{path:'payment',
component:PaymentComponent},
{path:'login',
component:LoginComponent},
{path:'register',
component:RegisterComponent}



 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
