import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import {ConsultarProductoComponent} from '../../pages/MenuProductos/consultar-producto/consultar-producto.component';
import {RegistrarProductoComponent} from '../../pages/MenuProductos/registrar-producto/registrar-producto.component';
import {ProviedersComponent} from '../../pages/provieders/provieders.component';
import {ProductsInAndOutComponent} from '../../pages/MenuProductos/products-in-and-out/products-in-and-out.component'
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'ConsultarProducto', component:ConsultarProductoComponent},
  {path:'RegistrarProducto', component:RegistrarProductoComponent},
  {path:'providers', component:ProviedersComponent},
  {path: 'productInOut', component:ProductsInAndOutComponent}
  // { path: "rtl", component: RtlComponent }
];
