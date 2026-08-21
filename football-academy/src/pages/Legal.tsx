import { Link, useLocation } from "react-router";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const legalContent: Record<string, { title: string; content: string }> = {
  "/mentions-legales": {
    title: "Mentions légales",
    content: `Africa Football Academy est une association loi 1901 dont le siège social est situé à Dakar, Sénégal.

Directeur de la publication : Direction de l'Académie
Hébergeur : [Nom de l'hébergeur]
Contact : contact@africafootballacademy.com

Les informations présentes sur ce site sont données à titre général. Elles ne revêtent aucun caractère contractuel. Les informations, notamment les photographies, descriptions et tarifs, sont communiquées à titre indicatif et peuvent évoluer.

L'Académie se réserve le droit de modifier le contenu de son site à tout moment sans préavis.`
  },
  "/confidentialite": {
    title: "Politique de confidentialité",
    content: `Africa Football Academy s'engage à protéger la vie privée des utilisateurs de son site web.

Collecte des données : Les données personnelles collectées (nom, email, téléphone) sont destinées uniquement à l'usage interne de l'Académie pour le traitement de vos demandes.

Finalité : Vos données sont collectées pour : le traitement de candidatures, la gestion des partenariats, l'envoi d'informations relatives à l'Académie.

Conservation : Les données sont conservées pendant une durée maximale de 3 ans après le dernier contact.

Droit d'accès : Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant contact@africafootballacademy.com.

Cookies : Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez les désactiver dans les paramètres de votre navigateur.`
  },
  "/cgu": {
    title: "Conditions Générales d'Utilisation",
    content: `Les présentes CGU régissent l'utilisation du site Africa Football Academy.

Article 1 — Objet
Le présent site a pour objet de fournir des informations sur l'Académie, ses programmes, ses talents et ses projets.

Article 2 — Acceptation
L'utilisation du site implique l'acceptation pleine et entière des CGU.

Article 3 — Accès au site
Le site est accessible gratuitement à tout utilisateur disposant d'une connexion internet.

Article 4 — Propriété intellectuelle
L'ensemble du contenu du site (textes, images, vidéos, logos) est la propriété exclusive de l'Académie ou de ses partenaires. Toute reproduction est interdite sans autorisation.

Article 5 — Responsabilité
L'Académie ne saurait être tenue responsable des dommages résultant de l'utilisation du site.

Article 6 — Modification
L'Académie se réserve le droit de modifier les présentes CGU à tout moment.`
  },
  "/politique-dons": {
    title: "Politique de dons",
    content: `Africa Football Academy est reconnaissante de chaque contribution reçue.

Utilisation des fonds : Tous les dons sont intégralement utilisés pour : la formation sportive des jeunes, l'éducation et la scolarité, les infrastructures de l'Académie, les programmes sociaux.

Transparence : L'Académie publie régulièrement des rapports financiers détaillés présentant l'usage des fonds reçus.

Reçus fiscaux : Un reçu de don peut être délivré sur demande pour toute contribution. Contactez-nous à contact@africafootballacademy.com.

Droit de retrait : Tout don est définitif. En cas d'erreur, veuillez nous contacter dans les 48 heures suivant la contribution.

Projets de financement : Les montants collectés pour un projet spécifique sont exclusivement affectés à ce projet. En cas de non-atteinte de l'objectif, les fonds seront réalloués à un projet similaire ou remboursés selon les modalités communiquées.`
  },
};

export default function Legal() {
  const location = useLocation();
  const data = legalContent[location.pathname] || legalContent["/mentions-legales"];

  return (
    <PageLayout title={data.title}>
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              {data.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/" className="text-[#0B8F55] font-semibold text-sm hover:underline">
                ← Retour à l'accueil
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
