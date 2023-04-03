import Chart from 'assets/icons/chart';
import Exchange from 'assets/icons/exchange';
import PaymentLink from 'assets/icons/payment_link';
import ShoppingCart from 'assets/icons/shopping-cart';
import Wallet from 'assets/icons/wallet';
import Wire from 'assets/icons/wire';
import Dashboard from '../../assets/icons/piechart';
import Transactions from '../../assets/icons/transactions';

export const main_routes = [
  {
    url: '',
    title: 'Dashboard',
    title_lang: 'navigation.dashboard',
    Icon: Dashboard,
  },
  {
    url: 'balances',
    title: 'Balances',
    title_lang: 'navigation.balances',
    Icon: Wallet,
  },
  {
    url: 'transactions',
    title: 'Transactions',
    title_lang: 'navigation.transactions',
    Icon: Wire,
  },
  {
    url: 'analytics',
    title: 'Analytics',
    title_lang: 'navigation.analytics',
    Icon: Chart,
  },
  {
    url: 'marketing',
    title: 'Marketing',
    title_lang: 'navigation.marketing',
    Icon: Wire,
  },
  {
    url: 'exchange-rates',
    title: 'Exchange Rates',
    title_lang: 'navigation.exchange_rates',
    Icon: Exchange,
  },
];

export const accept_payments = [
  {
    url: 'checkout',
    title: 'Checkout',
    title_lang: 'navigation.checkout',
    Icon: ShoppingCart,
  },
  {
    url: 'payment-links',
    title: 'Payment Link',
    title_lang: 'navigation.payment_link',
    Icon: PaymentLink,
  },
];

export const send_payments = [
  {
    url: 'wire',
    title: 'Wire',
    title_lang: 'navigation.wire',
    Icon: Transactions,
  },
];
