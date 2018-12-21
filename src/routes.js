import Home from "./components/Home";
import Attendants from "./components/Attendants";
import AddAttendant from "./components/AddAttendant";

export const routes = [
  {
    path: '/home', component: Home, name: 'home'
  },
  {
    path: '/attendants', component: Attendants, name: 'attendants'
  },
  {
    path: '/addAttendant', component: AddAttendant, name: 'AddAttendant'
  }
]