import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navigation: {
            dashboard: 'Dashboard',
            balances: 'Balances',
            transactions: 'Transactions',
            analytics: 'Analytics',
            marketing: 'Marketing',
            exchange_rates: 'Exchange Rates',
            checkout: 'Checkout',
            payment_link: 'Payment Link',
            wire: 'Wire',
          },
          titles: {
            main_page: 'Main Page',
            accept_payments: 'Accept Payments',
            send_payments: 'Send Payments',
            sales_overview: 'Sales Overview',
            sales: 'Sales',
            transaction_history: 'Transaction History',
            nothing_to_see_here: 'Nothing to see here!',
            go_to_the_homepage: 'Go to the home page',
          },
          status: {
            all_status: 'All Status',
            failed: 'Failed',
            in_progress: 'In Progress',
            success: 'Success',
            cancelled: 'Cancelled',
          },
          // tedo: another one
          table_titles: {
            transaction_id: 'Transaction ID',
            source: 'Source',
            customer_name: 'Customer name',
            customer_email: 'Customer email',
            amount: 'Amount',
            request_date: 'Request Ddate',
            status: 'Status',
          },
          buttons: {
            support: 'Support',
            hide_panel: 'Hide panel',
            download_report: 'Download report',
            send_a_wire: 'Send a wire',
          },
          marketing: {
            klasha_wire:
              'KlashaWire - send money to businesses globally from Africa',
          },
          dates: {
            todays_sales: "Today's sales",
            this_week: 'This Week',
            this_month: 'This Month',
            last_month: 'Last Month',
          },
        },
      },

      fr: {
        translation: {
          navigation: {
            dashboard: 'Tableau de bord',
            balances: 'Soldes',
            transactions: 'Transactions',
            analytics: 'Analytique',
            marketing: 'Commercialisation',
            exchange_rates: "Taux d'échange",
            checkout: 'Vérifier',
            payment_link: 'Lien de paiement',
            wire: 'Fil',
          },
          titles: {
            main_page: "Page d'accueil",
            accept_payments: 'Accepter les paiements',
            send_payments: 'Envoyer des paiements',
            sales_overview: 'Aperçu des ventes',
            sales: 'Ventes',
            transaction_history: 'Historique des transactions',
            nothing_to_see_here: 'Rien à voir ici!',
            go_to_the_homepage: "Aller à la page d'accueil",
          },
          status: {
            all_status: 'Tous les statuts',
            failed: 'Échoué',
            in_progress: 'En cours',
            success: 'Succès',
            cancelled: 'Annulé',
          },
          table_titles: {
            transaction_id: 'identifiant de transaction',
            source: 'Source',
            customer_name: 'Nom du client',
            customer_email: 'Email client',
            amount: 'Montante',
            request_date: 'Date de la demande',
            status: 'Statut',
          },
          buttons: {
            support: 'Soutien',
            hide_panel: 'Masquer le panneau',
            download_report: 'Télécharger le rapport',
            send_a_wire: 'Envoyer un fil',
          },
          marketing: {
            klasha_wire:
              "KlashaWire - envoyer de l'argent aux entreprises du monde entier depuis l'Afrique",
          },
          dates: {
            todays_sales: 'Les soldes du jour',
            this_week: 'Cette semaine',
            this_month: 'Ce mois-ci',
            last_month: 'Le mois dernier',
          },
        },
      },
    },
  });

export default i18n;
