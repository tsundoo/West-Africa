import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div class="menu">
            <div className='menu-container'>
            <div class="menu-section">
                <h2>Entrées</h2>
                <ul>
                    <li>Accras de Morue x4 - 4.90</li>
                    <li>Pastels Thon x4 (sauces au choix) - 6.50</li>
                    <li>Pastels Viande Hachée x4 (sauces au choix) - 7.50</li>
                    <li>Salade West Veggie - 7.90</li>
                    <li>Salade West Thon - 8.90</li>
                    <li>Salade West Poulet - 9.90</li>
                </ul>
            </div>
            <div class="menu-section">
                <h2>Formules</h2>
                <ul>
                    <li>West-Libreville - 22.90</li>
                    <li>West-Conakry - 27.90</li>
                    <li>West-Kirikou (-12ans) - 8.50</li>
                </ul>
            </div>
            <div class="menu-section">
                <h2>Plats</h2>
                <ul>
                    <li>Mafé - 14.00</li>
                    <li>Yassa - 14.00</li>
                    <li>Thieb - 14.00</li>
                    <li>Attiéké - 16.00</li>
                    <li>Ailes de Poulet x4 - 12.50</li>
                </ul>
            </div>
            <div class="menu-section">
                <h2>Accompagnements</h2>
                <ul>
                    <li>Alloco - 4.50</li>
                    <li>Frites de Patate Douce - 4.50</li>
                    <li>Nuggets x4 - 4.50</li>
                    <li>Riz Blanc - 4.00</li>
                    <li>Riz Rouge - 4.00</li>
                </ul>   
            </div>
            <div class="menu-section">  
                <h2>Sauces</h2>
                <ul>
                    <li>Pastels - 1.50</li>
                    <li>Verte - 2.00</li>
                    <li>Piment - 1.00</li>
                </ul>
            </div>
            <div class="menu-section">
                <h2>Boissons</h2>
                <ul>
                    <li>Bissap ou Gingembre - 3.50</li>
                    <li>Vimto - 3.00</li>
                    <li>Boisson 33cl - 2.00</li>
                    <li>Eau Gazeuse - 2.00</li>
                    <li>Eau Plate - 2.00</li>
                    <li>Carafe de Bissap (1L) - 12.00</li>
                </ul>
            </div>
            <div class="menu-section">
                <h2>Desserts</h2>
                <ul>
                    <li>Thiakry / Dégué - 4.50</li>
                    <li>Tiramisu Maison - 4.50</li>
                    <li>Beignets x8 - 6.00</li>
                </ul>
            </div>
            </div>
      </div>
    )
}

export default Card;