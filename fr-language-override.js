(() => {
  const languageKey = '3tstone-home-language';
  const french = {
    skipToContent: 'Aller au contenu',
    brandTagline: 'Technologie innovante, vie meilleure',
    navProducts: 'Produits', navAbout: 'À propos', navCompany: 'Entreprise',
    menuLabel: 'Ouvrir la navigation',
    eyebrow: 'Technologie innovante · vie meilleure',
    heroLead: 'Demain paraît', heroAccent: 'plus simple.',
    heroDescription: '3TStone conçoit des expériences numériques intelligentes qui aident chacun à avancer dans la vie avec confiance.',
    heroCta: 'Découvrir nos produits',
    principlesTitle: 'Conçu pour la vie réelle',
    valueOneTitle: 'Intuitif', valueOneText: 'Naturel dès le premier jour.',
    valueTwoTitle: 'Efficace', valueTwoText: 'Faire plus avec moins d’effort.',
    valueThreeTitle: 'Universel', valueThreeText: 'Conçu pour les personnes du monde entier.',
    productsEyebrow: 'Nos produits', productsLead: 'Des idées qui', productsAccent: 'créent du lien.',
    productsDescription: 'Découvrez les produits et les informations juridiques qui accompagnent l’expérience 3TStone.',
    productDescription: 'Accédez aux informations du produit et aux documents expliquant le traitement de vos données.',
    legalDocuments: 'Documents juridiques', privacyPolicy: 'Politique de confidentialité', termsOfService: 'Conditions d’utilisation',
    aboutEyebrow: 'À propos de 3TStone', aboutTitle: 'La technologie au service de la vie.',
    aboutText: 'Nous sommes une entreprise technologique innovante qui améliore la vie grâce à la technologie. Nous créons des produits qui offrent des expériences numériques pratiques, efficaces et nouvelles aux personnes du monde entier.',
    missionTitle: 'Notre mission', missionText: 'Par une technologie réfléchie et une conception facile à utiliser, nous créons des solutions numériques pratiques et efficaces qui améliorent la vie.',
    visionTitle: 'Notre vision', visionText: 'Façonner un avenir numérique plus intuitif grâce à des produits et services variés.',
    teamTitle: 'Notre équipe', teamText: 'Une équipe internationale réunissant des expériences en innovation technologique, design, ingénierie et optimisation de l’expérience.',
    rights: 'Tous droits réservés.', backToTop: 'Retour en haut ↑',
  };

  function setFrench() {
    document.documentElement.lang = 'fr';
    document.title = '3TStone LLC — Technologie innovante, vie meilleure';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = '3TStone LLC crée des produits numériques réfléchis pour la vie quotidienne.';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = french[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = french[element.dataset.i18nAria];
      if (value) element.setAttribute('aria-label', value);
    });
    const languageLabel = document.getElementById('languageLabel');
    if (languageLabel) languageLabel.textContent = 'FR';
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.setAttribute('aria-current', button.dataset.language === 'fr' ? 'true' : 'false');
    });
    document.querySelectorAll('[data-product="ieDiary"] a[data-doc="privacy"]').forEach((link) => { link.href = 'IE_Diary_privacy-policy_fr.html'; });
    document.querySelectorAll('[data-product="ieDiary"] a[data-doc="terms"]').forEach((link) => { link.href = 'IE_Diary_Terms_of_Service_fr.html'; });
  }

  function handleLanguage(event) {
    const button = event.currentTarget;
    if (button.dataset.language === 'fr') {
      localStorage.setItem(languageKey, 'fr');
      setFrench();
    } else {
      localStorage.removeItem(languageKey);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', handleLanguage));
    if (localStorage.getItem(languageKey) === 'fr') setFrench();
  });
})();
