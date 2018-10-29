import * as user_router from './product';
import { router as courses_router} from './categories';
import { check_user_midd } from '../minddlewares';

export function register_route(base_url, app){
    app.use(base_url, user_router.default);
    app.use(base_url, check_user_midd, courses_router);
}