import Attendants from "./components/Attendants";
import AddAttendant from "./components/AddAttendant";

export const routes = [
  {
    path: '/attendants', component: Attendants, name: 'attendants'
  },
  {
    path: '/addAttendant', component: AddAttendant, name: 'AddAttendant'
  }
]