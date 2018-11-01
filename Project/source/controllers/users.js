import { UserView } from '../views';
import { Router } from 'express';

const router = new Router();

router.route('/login')
    .post(async (req, res) => {
        UserView.login(req, res);
    });

export default router;