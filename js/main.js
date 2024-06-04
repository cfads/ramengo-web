import { ChangeRadioProteinEvent } from "./events/changeRadioProteinEvent.js";
import { LogoClickEvent } from "./events/logoClickEvent.js";
import { NewOrderClickEvent } from "./events/newOrderClickEvent.js";
import { OrderNowClickEvent } from "./events/orderNowClickEvent.js";
import { SubmitOrderEvent } from "./events/submitOrderEvent.js";
import { FetchBroths } from "./modules/broths/fetchBroths.js";
import { FetchProteins } from "./modules/proteins/fetchProteins.js";

// Events
LogoClickEvent();
NewOrderClickEvent();
OrderNowClickEvent();
ChangeRadioProteinEvent();
SubmitOrderEvent();


FetchBroths();
FetchProteins();
