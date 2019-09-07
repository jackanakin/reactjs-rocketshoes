import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_detalhe1.jpg?resize=280:280"
                    alt="Ténis"
                />
                <strong>Tênis legal</strong>
                <strong>R$ 129,00</strong>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_detalhe1.jpg?resize=280:280"
                    alt="Ténis"
                />
                <strong>Tênis legal</strong>
                <strong>R$ 129,00</strong>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_detalhe1.jpg?resize=280:280"
                    alt="Ténis"
                />
                <strong>Tênis legal</strong>
                <strong>R$ 129,00</strong>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/36/COL-3586-036/COL-3586-036_detalhe1.jpg?resize=280:280"
                    alt="Ténis"
                />
                <strong>Tênis legal</strong>
                <strong>R$ 129,00</strong>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
