import { useState, useEffect } from 'react';
import React from 'react';

import './style.css';

export default function Checkout() {
  const [checkOutEvent, setCheckOutEvent] = useState(0);

  useEffect(() => {
    var checkOutEvent = new Event('check-out-event', {
      user: {
        userId: '9e715c97-2448-45f7-b47c-1542b88d38b5',
        entitlements: {
          expresso: {
            diario: true,
            semanario: true,
          },
        },
        extended: {
          token: 'aqui vem o token do sso'            
        },
      },
      article: {
        id: '39ba4df2-0554-44db-9282-a78aee38b214',
        article_id: '39ba4df2-0554-44db-9282-a78aee38b214',
        author_id: 'Angela Silva',
        category: 'Política',
        locked: true,
      },
      source: {
        utm_source: 'remp_campaign',
        utm_medium: 'overlay',
        utm_campaign: 'f8d1c250-dbdb-4335-8395-97575a8bd764',
        utm_content: '6af0abc5-6b79-41f7-82b0-06c650cc3281',
        banner_variant: '71da2481-1d93-48db-96ca-b6c2485e1ac0',
      },
      transactionId: '79a91569-5b12-40ee-929f-8bc9462e55bd',
      amount: 127.32,
      currency: 'EUR',
      productIds: ['I=MX;P=000;A=COBS4']
    });
  });

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
}
