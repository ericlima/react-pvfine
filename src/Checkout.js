import React from 'react';

import './style.css';

export default function Checkout() {
  useEffect(() => {
    var checkOutEvent = new Event('check-out-event', {
      fields: {},
    });
  });

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
}
