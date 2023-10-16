// eslint-disable-next-line no-unused-vars
import React from "react";


export function Pdf() {
    const Pdfu = () => {
      const link = document.createElement('a');
      link.href = 'http://localhost:5173/JOURNAL-OFFICIEL-LOI-n°-37-2012-du-12-décembre-2012-1.pdf';
      link.download = 'JOURNAL-OFFICIEL-LOI-n°-37-2012-du-12-décembre-2012-1.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const Pdfl = () => {
      const link = document.createElement('a');
      link.href = 'http://localhost:5173/Loi-Agents-Immo.pdf';
      link.download = 'Loi-Agents-Immo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div className="flex">
        <div className="flex-1 w-64">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Pdfu}>
          Télécharger LOI-n°-37-2012
        </button>
        </div>
       <div className="flex-1 w-32">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Pdfl}>
          Télécharger Loi-Agents-Immo
         </button>
       </div>
       
      </div>
    );
  }
  
 
export default function Juridique() {
  return (
    <div>
      <section className="py-20 px-4 max-w-6xl mx-auto text-slate-800">
        <div className="border-top-width: 2px; prose text-gray-400 py-3">
          <p className=" ">
            Au Congo, l’immobilier n’est pas totalement encadré par des lois
            fixant les prix des loyers, ou même régissant réellement la
            profession. Récemment, un travail a été fait dans ce sens, pour
            permettre de mieux encadrer la profession, avec l’arrivée de deux
            lois permettant de nous repérer correctement et de pratiquer le
            métier en toute sérénité : Les Loi n° 37 &#8211; 2011 réglementant
            les professions d’agent et de courtier immobiliers et n° 37-2012
            portant réglementation de la location à usage d’habitation.
          </p>
        </div>
        <div className="border-top-width: 2px; prose text-gray-400 py-3">
          <div >
            <h3 className="truncate text-lg font-semibold text-orange-500">
              <strong>
                La première en son Article 2 : Définit les appellations dans la
                profession{" "}
              </strong>
              :
            </h3>
            <hr />
            <ul className="">
              <li >
                <strong>agent immobilier</strong> : toute personne physique ou
                morale qui, ayant la qualité de commerçant, accomplit d’une
                manière professionnelle ou habituelle des opérations
                immobilières;
              </li>
              <li >
                <strong>courtier immobilier</strong> : toute personne physique
                ou morale qui, ayant la qualité de commerçant, accomplit d’une
                manière professionnelle ou habituelle des opérations
                immobilières, sert d’intermédiaire dans l’accomplissement des
                opérations immobilières et en fait sa profession habituelle;
              </li>
              <li >
                <strong>agence immobilière</strong> : tout établissement privé
                où s’exercent des activités relatives aux opération immobilières
                ;
              </li>
              <li >
                <strong>agence de courtage immobilier</strong> : tout
                établissement privé où s’exercent comme intermédiaires des
                opérations immobilières;
              </li>
              <li >
                <strong>mandat</strong> : convention écrite et bilatérale
                établie sous forme d’acte sous seing privé et soumise à la
                formalité d’enregistrement, par laquelle l’agent immobilier
                appelé mandataire s’engage à accomplir des opérations
                immobilières pour le compte et au profit d’une personne
                déterminée appelée mandant.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top-width: 2px; prose text-gray-400 py-3">
          <div >
            <h3 className="truncate text-lg font-semibold text-orange-500">
              L’article 3 définit plutôt la nature des opérations immobilières:
            </h3>
            <hr />
            <ul>
              <li >
                l’achat, la vente, la location ou la sous-location des immeubles
                bâtis ou non bâtis, en nu ou meublés ;
              </li>
              <li >
                l’achat, la vente, la location ou la sous-location des fonds de
                commerce ;
              </li>
              <li>
                la souscription, l’achat, la vente d’actions ou des parts des
                sociétés immobilières ayant vocation à une attribution des
                locaux en jouissance ou en propriété ;
              </li>
              <li >
                l’achat et la vente des parts sociales non négociables, quand
                l’actif social comprend un immeuble ou un fonds de commerce ;
              </li>
              <li >la gestion immobilière</li>
            </ul>
            <p>
              Au-delà de ces précisions, la loi n° 37-2012 portant
              réglementation de la location à usage d’habitation, n’apporte pas
              vraiment d’aide sur la fixation des prix qui se fait toujours de
              façon arbitraire ou en faisant de la spéculation un élément de
              fixation. Il reste quand même que cette loi la n° 37-2012 portant
              réglementation de la location à usage d’habitation fixe les règles
              des quelques mandats existant au Congo ainsi que les modalités
              pour pratiquer les indexations de loyers. Les commissions et
              autres avantages accordées à l’agence sont donc à la discrétion de
              chacune des agences immobilières.
            </p>
          </div>
        </div>
        <div className="border-top-width: 2px; prose text-gray-400 py-3">
          <div>
            <h3 className="truncate text-lg font-semibold text-orange-500">
              <strong>
                Les articles 36 et 37 par exemple traitent de la révision du
                loyer :
              </strong>
            </h3>
            <hr />
            <p >
              « Lorsque le contrat de location prévoit la révision du loyer,
              celle-ci intervient chaque année à la date convenue entre les deux
              parties, ou à défaut, au terme de chaque année de contrat.
              L’augmentation du loyer qui résulte d’une clause de révision ne
              peut excéder 2% du montant initial du loyer par année. »
            </p>
            <blockquote>
              <p >
                <strong>
                  Travailler avec une agence immobilière, c’est donc s’assurer
                  que vos biens soient bien gérés et bien protégés par des
                  contrats et procédures juridiques.
                </strong>
              </p>
            </blockquote>
            <p >
              L’agent immobilier travail uniquement sous un mandat signé entre
              lui et le client. Il existe plusieurs types de mandats qui
              autorise l’agent immobilier à travailler pour le compte d’un
              client (propriétaire ou celui qui recherche un bien) :
            </p>
            <ul>
              <li >
                <strong>Le mandat de vente</strong> : Au Congo, Le mandat de
                vente est toujours un mandat simple, le propriétaire confie la
                vente de son bien à plusieurs professionnels. Ce type de mandat
                lui permet aussi de vendre par lui-même. Cependant, le gros
                inconvénient est que le bien peut se retrouver en vente à
                différents prix selon la commission prise par les professionnels
                et les agents immobiliers concurrents, se marchent souvent sur
                les pates ayant parfois les mêmes prospects, sans compter
                parfois sur le propriétaire lui-même qui fait ses recherches
                pour trouver un prospect. Cette situation cependant est
                contractualisé par un mandat écrit et signé des deux parties
                permettant un minimum de garantie pour les deux parties.
              </li>
              <li >
                <strong>Le mandat de gestion locative</strong>, celui-ci est le
                mandat que nous pratiquons le plus à NBY Immobilier Conseils, il
                est confié par un propriétaire de biens immobiliers à notre
                agence dans le but de lui faire gérer ses biens. L&rsquo;agence
                peut alors être chargée (selon les conditions énoncées dans le
                mandat) de rechercher des locataires, d&rsquo;envoyer les avis
                d&rsquo;échéances, d&rsquo;envoyer les quittances de loyer et de
                percevoir les loyers avant de les rétribuer au propriétaire lors
                de redditions que nous faisons par trimestre. Dans ce type de
                mandat devront être obligatoirement précisées la méthode de
                suivi des comptes, le montant des honoraires de gestion courante
                (commissions) ainsi que d&rsquo;éventuels frais supplémentaires.
              </li>
              <li >
                <strong>Le mandat de placement</strong> (ou mandat « (de)
                recherche ») est confié par un acquéreur potentiel selon ses
                critères à un ou plusieurs mandataires. Il s’agit ici d’un
                prospect en recherche d’un bien à la location ou en recherche
                d’un client pour son bien mais qui ne vous confie pas la gestion
                du dit bien. Ici c’est un mandat ponctuel qui est rémunéré par
                une commission (en général l’équivalent d’un mois de loyer). A
                ce moment l’agence n’a qu’une seule mission : trouver un client
                ou un bien et tout engagement s’arrête après l’obtention de ce
                qui est demandé. La commission est normalement à la charge de
                celui qui recherche le client, mais nous observons parfois des
                propriétaires qui demandent que la commission soit payée par
                celui qui trouve le bien par ce biais.
              </li>
            </ul>
          </div>
        </div>
        <Pdf/>
      </section>
     
    </div>
  );
}
