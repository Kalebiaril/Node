import { UsersView } from '../views';
import { Router } from 'express';

const router = new Router();

router.route('/login')
    .post(async (req, res) => {
        UsersView.login(req, res);
    });
router.route('/signUp')
    .post(async (req, res) => {
        UsersView.signUp(req, res);
    });
export default router;