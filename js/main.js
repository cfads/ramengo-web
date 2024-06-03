import { ChangeImageBrothEvent } from "./events/changeImageBrothEvent.js";
import { ChangeImageProteinEvent } from "./events/changeImageProteinEvent.js";
import { ChangeRadioBrothEvent } from "./events/changeRadioBrothEvent.js";
import { ChangeRadioProteinEvent } from "./events/changeRadioProteinEvent.js";
import { LogoClickEvent } from "./events/logoClickEvent.js";
import { NewOrderClickEvent } from "./events/newOrderClickEvent.js";
import { OrderNowClickEvent } from "./events/orderNowClickEvent.js";
import { SubmitOrderEvent } from "./events/submitOrderEvent.js";

// Events
LogoClickEvent();
NewOrderClickEvent();
OrderNowClickEvent();
ChangeImageBrothEvent();
ChangeImageProteinEvent();
ChangeRadioProteinEvent();
ChangeRadioBrothEvent();
SubmitOrderEvent();
