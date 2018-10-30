import { CategoriesView } from '../views';
import { Router } from 'express';

const router = new Router();

router.route('/login')
    .post(async (req, res) => {
        CategoriesView.get_all_categories(req, res);
    });

export default router;