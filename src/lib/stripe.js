import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro' : 'price_1TiL0pHQqbQkGOwX0v4LtHVg',
    'seeker_premium' : 'price_1TiMQVHQqbQkGOwXeiKM582C',
    'recruiter_growth' : 'price_1TiMRQHQqbQkGOwXPBCNAQfs',
    'recruiter_enterprise': 'price_1TiMSjHQqbQkGOwXgfsaaxOb'
}