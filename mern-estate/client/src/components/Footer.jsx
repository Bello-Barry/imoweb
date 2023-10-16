import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-white">À propos</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">L'équipe</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Partenaires</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Responsabilité sociale</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Relations avec les investisseurs</a></li>
                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Sécurité</a></li>
                </ul>
              </div>
              
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-white">Produits</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Gestionnaire de projet</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Collaboration d'équipe</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Suivi du temps</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Gestionnaire de ressources</a></li>
                </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
          </footer>
)}
         