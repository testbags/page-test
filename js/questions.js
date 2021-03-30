// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "¿Que es Stop Loss?",
    answer: "Es una orden que establece la pérdida máxima que el inversor desea asumir en una posición en el mercado",
    options: [
      "Son mercados extrabursátiles donde se negocian distintos instrumentos financieros",
      "Es una orden que establece la pérdida máxima que el inversor desea asumir en una posición en el mercado",
      "Son los fondos que se necesitan para abrir y mantener una posición de trading con apalancamiento.",
      "Es un cargo de interés que se paga o se cobra al final de cada sesión por mantener una posición abierta más de un día."
    ]
  },
    {
    numb: 2,
    question: "¿Que es Take Profit?",
    answer: "Es un método para garantizar que el trader obtenga ganancias si los precios se mueven a su favor.",
    options: [
      "Es un tipo de facilidad operativa que ofrece el broker al inversor, permitiendo hacer 'trading' con posiciones mayores que la cuantía de fondos requeridos.",
      "Es un indicador técnico que mide la fortaleza del movimiento del precio.",
      "Se trata de una herramienta para medir tanto la velocidad en los cambios de precios como también los posibles niveles de sobre compra o sobre venta.",
      "Es un método para garantizar que el trader obtenga ganancias si los precios se mueven a su favor."
    ]
  },
    {
    numb: 3,
    question: "¿Que es scalping?",
    answer: "Es una variante de day-trading que busca obtener ganancias reducidas en operaciones de un periodo de tiempo muy corto",
    options: [
      "Es una variante de day-trading que busca obtener ganancias reducidas en operaciones de un periodo de tiempo muy corto",
      "Son contratos establecidos entre un comprador y un vendedor en el que se pacta la compraventa de un activo con un precio determinado al momento de hacer el contrato y que será ejecutado a la fecha de vencimiento.",
      "Es el precio minimo de un activo",
      "Son representadas con líneas que salen de la parte superior o inferior de la vela y establecen los precios máximos y mínimos a los que llega el precio en la sesión."
    ]
  },
    {
    numb: 4,
    question: "¿Que es análisis fundamental?",
    answer: "Es el estudio de eventos financieros que pueden afectar la oferta y la demanda de las divisas dentro del mercado de divisas durante las sesiones bursátiles, con la finalidad de intentar predecir cómo cambiará el mercado.",
    options: [
      "Es una orden que establece la pérdida máxima que el inversor desea asumir en una posición en el mercado",
      "Es una variante de day-trading que busca obtener ganancias reducidas en operaciones de un periodo de tiempo muy corto",
      "Es un precio por encima del actual, la fuerza de venta superará a la de compra, poniendo fin al impulso alcistae",
      "Es el estudio de eventos financieros que pueden afectar la oferta y la demanda de las divisas dentro del mercado de divisas durante las sesiones bursátiles, con la finalidad de intentar predecir cómo cambiará el mercado."
    ]
  },
    {
    numb: 5,
    question: "¿Que es análisis técnico?",
    answer: "Es un sistema que permite examinar y predecir los movimientos de precios en los mercados financieros a partir de datos históricos y estadísticas de mercado",
    options: [
      "Es un sistema que permite examinar y predecir los movimientos de precios en los mercados financieros a partir de datos históricos y estadísticas de mercado",
      "Es una unidad estándar para el trading, formada por un número prefijado de unidades del activo con el que se quiere operar",
      "Es un compromiso vinculante para comprar o vender una determinada cantidad de instrumentos financieros como pueden ser acciones, divisas etc.",
      "Es un contrato entre dos partes que intercambian la diferencia entre el precio de entrada y el de salida, multiplicado por el número de acciones o índices que se acordaron."
    ]
  },
  
    {
    numb: 6,
    question: "¿Que es una tendencia bajista?",
    answer: "Es todo aquel movimiento que tiene máximos y mínimos decrecientes, no solo los máximos sino también los mínimos.",
    options: [
      "Es una medida del movimiento más pequeño del tipo de cambio en un par de divisas en Forex",
      "Es todo aquel movimiento que tiene máximos y mínimos decrecientes, no solo los máximos sino también los mínimos.",
      "En cambio en la dirección del precio de un activo tras un movimiento constante (alcista o bajista)",
      "Es un indicador técnico seguidor de tendencia que se basa en datos del pasado para ofrecer un valor promedio."
    ]
  },


    {
    numb: 7,
    question: "¿Que es una resistencia?",
    answer: "Es un precio por encima del actual, la fuerza de venta superará a la de compra, poniendo fin al impulso alcista",
    options: [
      "Se produce cuando un activo se mueve en la dirección opuesta a un indicador técnico, normalmente un oscilador de impulso o un indicador de fuerza relativa",
      "Es un precio por encima del actual, la fuerza de venta superará a la de compra, poniendo fin al impulso alcista",
      "Son las herramientas técnicas que ayudan a predecir una reversión de la tendencia dominante.",
      "Nos permite visualizar el precio medio de un activo en el mercado, en un período determinado."
    ]
  },


    {
    numb: 8,
    question: "¿Que es un soporte?",
    answer: "Es un nivel de precio por debajo del actual",
    options: [
      "Es un precio por encima del actual, la fuerza de venta superará a la de compra, poniendo fin al impulso alcista",
      "Es un nivel de precio por debajo del actual",
      "Es el punto minimo de compra",
      "Es el saldo negativo"
    ]
  },
      {
    numb: 9,
    question: "¿Que es un lote?",
    answer: "Es una unidad estándar para el trading, formada por un número prefijado de unidades del activo con el que se quiere operar",
    options: [
      "Es un sistema que permite examinar y predecir los movimientos de precios en los mercados financieros a partir de datos históricos y estadísticas de mercado",
      "Es una unidad estándar para el trading, formada por un número prefijado de unidades del activo con el que se quiere operar",
      "Es la diferencia de precio entre los precios de compra (offer) y de venta (bid)",
      "Son lo que indican la puja de los precios del mercado, su valor en la apertura y en el cierre de cada sesión bursátil. "
    ]
  },
      {
    numb: 10,
    question: "¿Que es un gap?",
    answer: "Es la falta de cotización durante un cierto período de tiempo, con un cambio en el precio del activo cuando éste vuelve a cotizar de nuevo en el mercado.",
    options: [
      "Es la falta de cotización durante un cierto período de tiempo, con un cambio en el precio del activo cuando éste vuelve a cotizar de nuevo en el mercado.",
      "Es una unidad estándar para el trading, formada por un número prefijado de unidades del activo con el que se quiere operar",
      "Es un movimiento de recuperación que el precio de un activo hace tras perder una zona de soporte en su caída.",
      "Es una estrategia de negociación o inversión direccional en la que el inversor vende acciones"
    ]
  }
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];