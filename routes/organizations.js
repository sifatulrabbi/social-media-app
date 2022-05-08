const {Organization, Profile} = require('../models');
const router = require('express').Router();

/**
 * Create an Organization
 */
router.post('/', async (req, res, next) => {
    try {
        const {ownerId, name} = req.body;
        if (!ownerId || !name) {
            res.status(400).json({
                success: false,
                message: 'Required filed "ownerId" and/or "name" not found',
            });
            return;
        }

        // Create org
        const org = await Organization.create({ownerId, name});
        const profile = await Profile.findByPk(ownerId);
        await profile.update({orgId: org.id});
        res.status(200).json({success: true, data: org});
    } catch (err) {
        next(err);
    }
});

/**
 * Get an Organization
 */
router.get('/:id', async (req, res, next) => {
    try {
        const org = await Organization.findOne({
            where: {id: req.params.id},
            include: Profile,
        });
        if (org) {
            res.status(200).json({success: true, data: org});
        } else {
            res.status(404).json({
                success: false,
                message: 'Organization not found',
            });
        }
    } catch (err) {
        next(err);
    }
});

/**
 * Get all Organizations
 */
router.get('/', async (req, res, next) => {
    try {
        const orgs = await Organization.findAll({include: Profile});
        res.status(200).json({success: true, data: orgs});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
