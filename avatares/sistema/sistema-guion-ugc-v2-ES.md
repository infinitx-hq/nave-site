# SISTEMA DE ESCRITURA DE GUIONES UGC — VERSIÓN 2

*Framework universal para guiones UGC generados con IA*

Agnóstico de nicho • Agnóstico de marca • Listo para producción

Construido para herramientas de generación de video con IA y flujos de producción por tomas (chunks)

> Traducción íntegra al español del "Universal UGC Script Writing System v2" — todo el contenido, sin reducir. El original en inglés se descarga al final junto con esta versión.

## Contenido

1. Los dos formatos de guion
2. Principios no negociables
3. La estructura universal del guion
4. Bloques de dirección universales
5. Arquitectura de la voz
6. Tipos de variación
7. Selección del punto de dolor
8. Estándares de cámara y b-roll
9. Fallos comunes
10. Variables de marca
11. Flujo de producción por tomas
12. Plantillas de desglose por duración de guion
13. Captions para alcance orgánico
14. Lógica de testeo y escalado
15. Cómo usar este documento

## 1. Los dos formatos de guion

El sistema produce dos formatos. Elige el que corresponde a la etapa del funnel.

| Atributo | Formato Full Stack | Mid-Funnel Punchy |
| --- | --- | --- |
| Duración | 28–32 segundos | 18–22 segundos |
| Cantidad de palabras | 150–180 palabras | 55–70 palabras |
| Estructura de beats | Cinco beats: hook, reframe, mecanismo, payoff, CTA | Tres beats: hook afilado con el reframe plegado adentro, mecanismo con analogía, payoff suave con cierre |
| Escenas por defecto | 3 escenas | 2 escenas (3 solo si la voz lo exige) |
| Tomas por defecto (flujo por chunks) | 5 tomas | 3 tomas |
| Úsalo para | Audiencias frías que necesitan el arco educativo completo para convertir | Audiencias más tibias que ya saben que tienen el problema y necesitan una señal de credibilidad rápida |

## 2. Principios no negociables

Estas reglas aplican a todo guion, todo formato, todo nicho. No son preferencias. Son el conjunto de reglas que separa un guion UGC ganador de uno perdedor.

### 2.1 El hook es dueño de las primeras cinco palabras

La línea de apertura identifica a la persona exacta a la que se le habla y confirma la frustración específica que carga. Nunca narra la mañana, el fin de semana ni la vida del creador. Llama a la persona correcta y repele a todos los demás.

### 2.2 Frases que fluyen, no fraseo entrecortado

Nada de patrones tartamudos de dos palabras. Las frases se conectan, respiran y llevan una a la otra. Usa conectores y pensamientos completos.

### 2.3 Mantén el mecanismo simple

Nombra el mecanismo propietario como lo nombra la marca, pero solo si un niño de 12 años lo entendería. Acompaña SIEMPRE el mecanismo con una analogía táctil de un segundo que el espectador pueda visualizar. La analogía es la frase más importante de todo el guion: es lo que el espectador le repite después a un amigo.

### 2.4 Los CTA suaves rinden más que la venta directa

La fórmula bloqueada de la competencia funciona para tráfico frío, pero suena a anuncio para audiencias más tibias. Por defecto, cierres estilo sugerencia.

### 2.5 Sin guiones largos en la voz. Sin negritas en la voz.

Los guiones largos (em dashes) rompen el ritmo natural del habla al leerse en voz alta. Las negritas no tienen función en audio. Usa comas, puntos y conectores cortos.

### 2.6 Evita palabras que las voces de IA pronuncian mal

Ofensores comunes: colágeno, hialurónico, niacinamida, queratosis, nombres de marca con escritura no estándar. O reemplázalas por alternativas en lenguaje llano, o incluye una nota fonética de pronunciación encima de la voz. Ante la duda, cambia la palabra.

### 2.7 Candado de pronunciación de la marca (cuando la marca se dice)

Si el nombre de la marca aparece en la voz, incluye un bloque de pronunciación: escritura exacta, fonética de diccionario y la instrucción de que no se permiten atajos ni variaciones. Si la marca se sigue pronunciando mal aun con la fonética, elimina las menciones de la marca de la voz.

### 2.2 Ejemplo: frases que fluyen

:::box RITMO INCORRECTO
"Sin químicos. Sin olores. Sin reemplazos."
:::

:::box RITMO CORRECTO
"No tiene químicos, no tiene olores, y no hay nada que reemplazar nunca más."
:::

### 2.4 Banco de CTA suaves

- "Te dejo abajo el link del que estoy usando."
- "Te dejo un link abajo por si quieres verlo."
- "Dejo el link abajo para que no tengas que buscarlo."
- "Dejo un link en los comentarios / en la bio para que lo revises tú mismo."

## 3. La estructura universal del guion

Toda salida de guion sigue el mismo esqueleto. Las variables se rellenan. Las secciones nunca se reordenan. Sin meta-comentarios sobre el proceso.

### 3.1 Esqueleto de producción estándar

Úsalo cuando generas un video como un solo prompt continuo.

```
Crea un anuncio [ESTILO] para [CATEGORÍA DE PRODUCTO]. El creador es [GÉNERO] de
[RANGO DE EDAD], [VIBRA — 2 a 3 palabras], [DESCRIPCIÓN DEL PELO], vistiendo
[OUTFIT]. Look natural, [NIVEL DE MAQUILLAJE]. Está en [ESPACIO CON ILUMINACIÓN].
[BLOQUE DE DIRECCIÓN DE PIEL] [BLOQUE DE DIRECCIÓN DE APLICACIÓN] @Image 1 es el
producto, [NOMBRE DEL PRODUCTO — qué es]. Úsala como referencia de cómo se ve
[TIPO DE EMPAQUE] al sostenerse o usarse, no como imagen estática. [BLOQUE DE
SECUENCIA DE B-ROLL] [BLOQUE DE REALISMO UGC] Estilo de cámara: [DIRECCIÓN DE
CÁMARA]. [DIRECCIÓN DE B-ROLL CON APERTURA EXPLÍCITA SIN PRODUCTO] [NOTA DE
CANTIDAD DE ESCENAS Y RITMO] Este es el guion completo: "[GUION DE VOZ]"
```

### 3.2 Esqueleto de producción por tomas

Úsalo cuando generas clips por tomas para coserlos en post, usando el mismo modelo y el mismo personaje a través de varias generaciones. La sección 12 tiene las plantillas completas de desglose.

```
[CHARACTER LOCK — se pega en cada toma]
[BLOQUES DE DIRECCIÓN UNIVERSALES — se pegan en cada toma]
  • Bloque de dirección de piel
  • Bloque de dirección de aplicación
  • Bloque de secuencia de b-roll
  • Bloque de realismo UGC
[DESGLOSE TOMA POR TOMA]
Por cada línea de la voz:
  • Número de línea y texto exacto de la voz
  • Duración estimada en segundos
  • Dirección visual específica de la escena
  • Notas de continuidad
  • Si @[asset del producto] se incluye o no
```

## 4. Bloques de dirección universales

Estos cuatro bloques fijan la calidad de producción y previenen los fallos de generación más comunes. Pégalos en cada guion. Adapta las variables al producto específico.

### 4.1 Bloque de dirección de piel

Evita que la IA genere la condición del "antes" en el creador en tiempo presente, que se supone muestra el resultado.

:::box BLOQUE DE DIRECCIÓN DE PIEL — pegar tal cual
*Dirección de piel importante: La creadora tiene piel naturalmente hermosa, lisa y limpia, de tono parejo y con un brillo suave y saludable. Su cutis se ve limpio y radiante durante todo el video — sin [CONDICIÓN QUE EL PRODUCTO TRATA] visible en ningún momento. Tiene el tipo de piel de quien ya lleva meses usando el producto, porque así es. Esto aplica a cada escena hablando a cámara, cada escena de aplicación del producto y cada close-up.*
:::

**Adaptación a otras categorías**

- Pelo: "La creadora tiene pelo naturalmente hermoso, sano y abundante, sin [caída/quiebre/frizz] visible en ningún momento."
- Dientes: "La creadora tiene dientes naturalmente brillantes, blancos y sanos, sin [manchas/amarillo] visibles en ningún momento."
- Hogar/limpieza: "La casa de la creadora está limpia, habitada y hermosa — sin [manchas/desorden/daños] visibles en ningún momento."

*Principio: fija visualmente al creador en la condición del DESPUÉS hacia la cual se le está mostrando el camino al espectador.*

### 4.2 Bloque de dirección de aplicación

Evita que la IA genere el producto como una marca mate o pigmentada visible cuando debería ser invisible, transparente o comportarse distinto.

:::box BLOQUE DE DIRECCIÓN DE APLICACIÓN — pegar tal cual
*Dirección de aplicación importante: Cuando la creadora [USA EL PRODUCTO], debe [COMPORTAMIENTO VISUAL DESEADO]. Sin [MODOS DE FALLO ESPECÍFICOS A LOS QUE LA IA TIENDE] visibles. [CÓMO DEBERÍA VERSE EN SU LUGAR]. Su [ZONA OBJETIVO] debe verse exactamente igual después de [APLICACIÓN/USO] que antes — [DESCRIPCIÓN] — con solo [EFECTO RESIDUAL REALISTA] donde el producto tocó.*
:::

*Principio: nombra el modo de fallo al que la IA tiende y anúlalo con descripción positiva más una regla visual clara.*

### 4.3 Bloque de secuencia de b-roll

Evita que la IA muestre el producto antes de que la voz se lo gane, lo que mata el hook al poner al espectador en modo "esto es un anuncio" demasiado pronto.

:::box BLOQUE DE SECUENCIA DE B-ROLL — pegar tal cual
*Secuencia de b-roll importante: El producto no debe aparecer en pantalla hasta que la voz lo introduce específicamente. Durante los beats de hook y reframe, la cámara se queda en la creadora. Sin cortes al entorno, sin tomas decorativas del departamento, sin tomas de muebles o arte. El producto solo se revela visualmente en el momento exacto en que la voz lo nombra.*
:::

*Principio: amarra la visibilidad del producto a una palabra específica de la voz, no a un tiempo vago. En producción por tomas, simplemente omite la referencia @[asset del producto] en los prompts donde el producto no debe aparecer — es un candado duro que la IA no puede saltarse.*

### 4.4 Bloque de realismo UGC

Evita que la IA genere tomas posadas, congeladas, con sensación de comercial. Fuerza el lenguaje corporal natural de alguien que se graba a sí mismo casualmente.

:::box BLOQUE DE REALISMO UGC — pegar tal cual
*Dirección de realismo UGC importante: Este es un video grabado casualmente. El teléfono está apoyado fuera de cámara, así que sus dos manos quedan libres todo el tiempo. Un temblor natural de mano y micro-movimientos pequeños le dan sensación de auto-grabado. Gesticula naturalmente con ambas manos mientras habla — se acomoda el pelo, se toca la cara cuando es relevante, hace pequeños gestos de palma abierta, cambia el peso entre los pies. Nunca está congelada en una pose con las manos en los bolsillos o detrás de la espalda. La energía es "solo te quiero contar algo", no "estoy posando para un comercial".*
:::

*Principio: nombra el modo de fallo (pose congelada, manos en bolsillos) y reemplázalo con conductas naturales específicas.*

## 5. Arquitectura de la voz

### 5.1 Estructura Full Stack de cinco beats

| Beat | Tiempo | Función |
| --- | --- | --- |
| 1. Hook | 0:00–0:03 | Llama a la persona exacta, confirma la frustración específica. Dos frases. |
| 2. Reframe del problema | 0:03–0:10 | Revela el mecanismo oculto detrás de por qué los intentos anteriores del espectador fallaron. Lo reorienta de "lo estoy haciendo mal" a "me dieron las herramientas equivocadas". |
| 3. Mecanismo + analogía | 0:10–0:20 | Introduce el producto, explica el mecanismo en lenguaje llano con una analogía táctil de un segundo. |
| 4. Payoff | 0:20–0:25 | Experiencia vivida, sensorial y específica después del producto. Visual e inmediata, no beneficios abstractos. |
| 5. CTA | 0:25–0:30 | Cierre suave estilo sugerencia. |

### 5.2 Estructura Mid-Funnel de tres beats

| Beat | Tiempo | Función |
| --- | --- | --- |
| 1. Hook afilado con el reframe plegado | 0:00–0:06 | Una frase que llama a la audiencia y descarta la suposición equivocada en el mismo aliento. |
| 2. Mecanismo con analogía | 0:06–0:16 | Mecanismo comprimido más la analogía táctil. La analogía se mantiene intacta a toda costa. |
| 3. Payoff suave y cierre | 0:16–0:21 | Un beat sensorial más el CTA estilo sugerencia. |

### 5.3 Frameworks de hook

Toma de esta lista. Rota entre guiones para prevenir fatiga.

- Si estás intentando ___, así es como por fin lo logras sin ___.
- Tu ___ está ___, y ___ no lo va a arreglar.
- El mito más grande sobre ___ es...
- Probé ___ para que tú no tengas que hacerlo.
- Ojalá alguien me hubiera dicho esto antes de empezar ___.
- Descubrí esto por accidente mientras ___.
- Lo que nadie te advierte sobre ___ es...
- Por qué ___ funciona cuando nada más funciona.
- Por qué tu ___ no está funcionando y cómo arreglarlo.
- No cometas este error con ___.
- Una cosa que nunca volveré a hacer en ___.
- Tres errores que te tienen atorado en ___.
- Esta única cosa lo cambió todo para mí en ___.
- Lo que nadie admite sobre ___ es...
- Cómo dejé de ___.
- La verdad detrás de mi ___.
- Si pudiera regresar y decirme una sola cosa sobre ___.

### 5.4 El patrón universal de reframe

A través de los nichos, los reframes más fuertes siguen esta forma:

:::box PATRÓN UNIVERSAL DE REFRAME
*"La mayoría cree que ___ es un problema de [SUPERFICIE], así que sigue [CONDUCTA SUPERFICIAL]. Pero en realidad es un problema [ESTRUCTURAL/OCULTO], y por eso [LA SOLUCIÓN SUPERFICIAL] físicamente no puede alcanzarlo."*
:::

Funciona porque absuelve al espectador de la culpa por los fracasos pasados y prepara la revelación del mecanismo. Adapta el encuadre estructura-vs-superficie a lo que sea que el producto resuelve.

## 6. Tipos de variación

La misma estructura de guion soporta varios registros emocionales. Rótalos a lo largo de la campaña.

| Tipo | Voz | Mejor para |
| --- | --- | --- |
| El confesional | Primera persona, tiempo presente, incluye una admisión personal | Categorías emocionales como belleza, bienestar, crianza |
| Lo probé para que tú no tengas que hacerlo | Sustituto de la audiencia que probó primero todas las soluciones equivocadas | Categorías saturadas donde la audiencia ya probó varios productos de la competencia |
| El rompe-mitos | Abre con un reframe correctivo | Categorías educativas donde la audiencia absorbió información equivocada |
| El descubrimiento accidental | El creador se topó con el insight | El encuadre de menor presión de venta — posiciona al creador como explorador igual que tú |
| El infomercial animado | Sin creador, puro b-roll del producto con voz en off | Escalar producción sin contratar talento, o cuando el producto es el héroe |

## 7. Selección del punto de dolor

Los primeros guiones de cualquier campaña deben apuntar a la queja de superficie (el síntoma visible). Cuando esos ya corren, expande hacia dolores más profundos. Los dolores de deseo masivo rinden más que los de nicho.

### 7.1 Quejas de superficie

El síntoma literal y visible del problema. Punto de entrada fácil pero saturado.

### 7.2 Dolores profundos

Ángulos de alto apalancamiento que van más allá del síntoma de superficie.

- **El dolor de la visibilidad pública —** ser visto en luz que no perdona (fotos, videollamadas, luz de día)
- **El impuesto mental —** el trabajo diario de vivir esquivando el problema
- **El dolor de la edad o del tiempo —** cargar el problema por años/décadas, el duelo extraño de lo que no se resuelve
- **El dolor de "ya arreglé todo lo demás" —** la frustración existencial de quien resuelve problemas y este es el único que no cede
- **El dolor de la intimidad y el close-up —** cómo se siente el problema en momentos privados, con gente que mira de cerca
- **El dolor del reconocimiento —** no reconocerte, la brecha entre cómo te sientes y cómo te ves

### 7.3 Filtro de deseo masivo

Los mejores dolores cruzan edad, género, profesión y estilo de vida. Prueba su universalidad. Si el dolor solo aplica a oficinistas, padres o una demografía específica, estrecha el alcance. Si casi cualquiera con el problema lo ha sentido, es de deseo masivo.

## 8. Estándares de cámara y b-roll

### 8.1 Regla de movimiento constante

Toda toma tiene movimiento. Nada de fotografía de producto fija. Nada de cabezas parlantes estáticas. Lo hablado a cámara usa temblor natural de mano. Las tomas con manos libres usan una deriva sutil o micro-push-ins. El b-roll usa tracking, empujes de dolly, órbitas, reveals o movimiento de mano.

### 8.2 Sincronía visual-voz

Cada visual coincide con lo que el narrador dice en ese momento exacto. Cuando el narrador dice "refrigerador", muestra un refrigerador. Cuando describe el mecanismo, muestra el mecanismo. Los visuales siguen la voz palabra por palabra.

### 8.3 Cortes continuos — los cortes se motivan, no decoran

Los cortes suceden cuando:

- El creador se mueve físicamente a un lugar nuevo a hacer algo
- La voz nombra el producto (corte al reveal del producto)
- Sucede una acción específica que el guion pide

Los cortes NO suceden por:

- Tomas decorativas del entorno: muebles, arte o diseño de interiores
- "Respiros visuales" sin relación con lo que se dice
- Momentos estéticos que existen por razones de cinematografía

### 8.4 Ritmo dentro de las escenas

Las escenas corren a velocidad normal. Sin cámara lenta. Sin material acelerado. Dentro de cada escena, los micro-cortes pueden ser rápidos en beats de alta energía y un poco más lentos en beats emocionales o explicativos.

### 8.5 Disciplina de cantidad de escenas

- Formato mid-funnel: 2 escenas por defecto, 3 solo si la voz lo exige
- Formato full stack: 3 escenas por defecto
- Infomercial animado: la IA determina los cortes según los beats de la voz

### 8.6 Variación de espacios a lo largo de la campaña

Rota entornos e iluminaciones entre guiones para que la audiencia no vea el mismo fondo en repetición. Opciones: cocina cálida y tenue de noche, mañana inundada de sol, ventana lateral suave de tarde, estudio de producto frío y clínico, cocina familiar habitada, tocador de recámara con sol, patio trasero con luz exterior, baño cálido de noche. Amarra cada variación al registro emocional de ese guion.

### 8.7 Variación demográfica a lo largo de la campaña

Rota la demografía de los creadores para que el algoritmo tenga señal de qué segmentos responden. Distribución estándar: edades 19-23, 24-32, 32-38, 35-45, más un equivalente masculino en al menos una variación. Cada demografía carga puntos de presión emocional distintos.

## 9. Fallos comunes

Son fallos recurrentes de la generación con IA. Auto-corrígete contra ellos en cada salida.

:::fail HOOKS QUE DIVAGAN
"Tallé mi refrigerador el sábado de rodillas" es un hook fallido. Las primeras palabras llaman a la audiencia, no narran la vida del creador.
:::

:::fail FRASEO ENTRECORTADO
Los fragmentos de dos palabras apilados matan el flujo conversacional.
:::

:::fail MECANISMOS CON JERGA
Si un niño de 12 años no entiende la palabra del mecanismo, reemplázala.
:::

:::fail CTAS QUE SE DESVÍAN
Usa las fórmulas bloqueadas. No inventes estructuras nuevas a menos que el testeo se lo haya ganado.
:::

:::fail B-ROLL ESTÁTICO
Toda toma se mueve.
:::

:::fail VISUALES QUE NO COINCIDEN
Si el narrador dice una cosa y el b-roll muestra otra, el guion falla.
:::

:::fail B-ROLL DECORATIVO
Cortes a muebles, arte o diseño de interiores sin relación con la voz. El UGC no tiene tomas de establecimiento cinemáticas. Mantén la cámara en el creador salvo que haya una razón específica para cortar.
:::

:::fail SOBRE-FORMATEAR LA SALIDA
El entregable es un bloque de prompt en prosa limpia. Sin encabezados, tablas ni notas de producción, salvo en el formato de producción por tomas.
:::

:::fail TELÉFONO EN MANO SIN NECESIDAD
Si el guion pide dirección estilo selfie, el teléfono en mano tiene sentido. Si no, deja el teléfono fuera de cámara para que las dos manos queden libres para gesticular natural.
:::

:::fail POSES CONGELADAS
Manos en los bolsillos, manos atrás, sin movimiento. Los creadores UGC reales gesticulan, cambian el peso, se tocan la cara cuando es relevante.
:::

:::fail PRODUCTO VISIBLE ANTES DE QUE LA VOZ LO GANE
Mostrar el producto en el beat del hook le dice al espectador que esto es un anuncio antes de que haya decidido seguir viendo.
:::

:::fail LA CONDICIÓN EQUIVOCADA EN EL CREADOR EN PRESENTE
Generar cicatrices/imperfecciones/daño visibles en el creador que se supone muestra el después.
:::

:::fail RESIDUO VISIBLE CUANDO DEBERÍA SER INVISIBLE
Generar una franja mate o una marca pigmentada cuando la aplicación debería ser transparente.
:::

## 10. Variables de marca

Antes de producir cualquier guion, reúne estas o pídelas. No inventes valores.

| Variable | Estatus | Notas |
| --- | --- | --- |
| Nombre de la marca y escritura exacta | Requerido | |
| Pronunciación de la marca (fonética de diccionario) | Requerido si se dice | |
| Si el nombre de la marca se dice en la voz | Requerido | |
| Nombre del producto y escritura exacta | Requerido | |
| Pronunciación del producto | Requerido si se dice | |
| Categoría del producto | Requerido | |
| Mecanismo central en lenguaje llano | Requerido | Debe entenderlo un niño de 12 años |
| Analogía táctil del mecanismo | Requerido | Formato: "Piénsalo menos como ___ y más como ___" |
| Alternativas fallidas que la audiencia ya probó | Requerido | |
| Demografía del avatar objetivo | Requerido | |
| Dolores específicos más allá de la queja de superficie | Requerido para ángulos profundos | |
| Preferencias de espacio e iluminación | Opcional | Por defecto: entorno de casa habitada |
| Imagen de referencia del producto | Requerido | Úsala como @Image 1 o @[asset del producto] |
| Palabras que la IA pronuncia mal en esta categoría | Opcional | Márcalas por adelantado para cambiarlas |

## 11. Flujo de producción por tomas

Para proyectos donde el mismo creador y el mismo espacio se usan a través de varios clips generados que se cosen en post.

### 11.1 Fija el personaje una vez

Escribe una descripción detallada del personaje que se pega tal cual en cada toma. Incluye rango de edad, energía, color y estilo de pelo, tono de piel, ojos, accesorios, outfit específico, y el departamento o espacio donde está.

### 11.2 Fija los bloques de dirección universales

Dirección de piel, dirección de aplicación, secuencia de b-roll y realismo UGC se pegan tal cual en cada toma.

### 11.3 Parte la voz en líneas

Cada línea de la voz se vuelve una toma. Cantidades por defecto:

- **Mid-funnel (18-22 seg):** 3 tomas
- **Full stack (28-32 seg):** 5 tomas

La sección 12 contiene las plantillas completas de desglose para ambos formatos.

### 11.4 El etiquetado de assets fija la visibilidad del producto

Usa @[nombre del asset del producto] (p. ej. @stick, @bottle, @canister) en los prompts donde el producto debe aparecer. NO incluyas la referencia del asset en las tomas donde el producto no debe aparecer. La IA no puede generar el producto si el asset no está referenciado — es un candado duro que hace cumplir la regla de secuencia de b-roll.

### 11.5 Estructura bookend

Haz que la primera y la última toma sean visualmente similares (mismo espacio, mismo encuadre) para que el video cosido se sienta intencional y cualquier pequeña inconsistencia entre las tomas del medio se lea como cortes naturales y no como errores de continuidad.

### 11.6 Identifica puntos de corte y cortes de respaldo

Anota qué tomas se pueden dejar caer de la edición si una sola falla al generar limpia. Normalmente las tomas de entorno o de transición son las más fáciles de quitar sin romper el guion.

## 12. Plantillas de desglose por duración de guion

Esta sección da la estructura exacta de tomas para cada formato de guion. Úsalas como plantilla operativa al construir guiones para producción por tomas. Cada toma es una generación de IA separada que se cose en post.

### 12.1 Plantilla de especificación por toma

Cada toma, sin importar la duración del guion, incluye este conjunto estructurado de campos:

| Campo | Propósito |
| --- | --- |
| Número de toma y etiqueta de beat | Identifica qué beat de la voz cubre esta toma (Hook, Reframe, Mecanismo, Payoff, CTA) |
| Texto de la voz | La línea exacta que se dice en esta toma, copiada tal cual del guion completo |
| Duración estimada (segundos) | Cuánto necesita durar la generación de IA para este clip |
| Inclusión de @[asset del producto] | Si la referencia del asset del producto aparece en el prompt de esta toma — esto controla la visibilidad del producto |
| Dirección visual | Ángulo de cámara, tiempo de los gestos, qué hace el creador durante la línea |
| Notas de continuidad | Qué debe coincidir con la toma anterior (outfit, pelo, espacio, luz, posición) |

### 12.2 Formato Mid-Funnel — desglose en 3 tomas

**Duración objetivo:** 18–22 segundos. **Palabras:** 55–70. **Tomas:** 3.

Este formato comprime la estructura de cinco beats en tres tomas operativas: el hook con el reframe plegado, la revelación del mecanismo con la introducción del producto, y el payoff con CTA suave.

:::box TOMA 1 — HOOK + REFRAME (plegados)
**Contenido de la voz:** La línea de apertura que llama a la audiencia y descarta la suposición equivocada en el mismo aliento.
**Duración estimada:** 5–7 segundos
**@[asset del producto] incluido:** **NO — el producto no debe aparecer en esta toma**
**Dirección visual:** Toma hablando a cámara en el espacio principal. Ambas manos libres. Gestos naturales en las palabras clave. La cámara se queda en el creador todo el tiempo. Sin cortes al entorno. Sin producto visible.
**Notas de continuidad:** Establece la línea base — outfit, pelo, luz, posición. Todas las tomas siguientes se refieren a esta.
:::

:::box TOMA 2 — MECANISMO + REVEAL DEL PRODUCTO
**Contenido de la voz:** El mecanismo comprimido más la analogía táctil. El producto se nombra aquí por primera vez.
**Duración estimada:** 8–10 segundos
**@[asset del producto] incluido:** **SÍ — aparece en el momento exacto en que la voz lo nombra**
**Dirección visual:** Corte a un ángulo nuevo motivado por movimiento físico (el creador camina a una barra o superficie). Teléfono apoyado, encuadre más estable. Secuencia rápida de aplicación: tomar el producto, girarlo para abrir, deslizarlo por la zona objetivo, close-up del resultado. La aplicación no deja residuo visible según el bloque de dirección de aplicación.
**Notas de continuidad:** Mismo outfit, pelo y luz que la toma 1. El lugar puede cambiar si el movimiento lo motiva. El producto coincide exactamente con la imagen de referencia.
:::

:::box TOMA 3 — PAYOFF + CTA SUAVE
**Contenido de la voz:** Un beat sensorial que describe la experiencia vivida después del producto, más el cierre estilo sugerencia.
**Duración estimada:** 5–6 segundos
**@[asset del producto] incluido:** **NO — se cierra en la cara del creador, no en el producto**
**Dirección visual:** Regreso a la toma hablando a cámara, idealmente haciendo bookend con el encuadre de la toma 1. Sonrisa suave y genuina en la línea del payoff. Gesto sutil hacia abajo en el CTA. Ambas manos libres.
**Notas de continuidad:** Iguala el encuadre de la toma 1 lo más posible para crear el bookend. Mismo outfit, pelo, luz.
:::

**Notas de cosido — Mid-Funnel**

- Costura natural entre la toma 1 y la toma 2 — ahí es donde la sección de hook sin producto transiciona a la sección del reveal.
- Si una toma falla al generar limpia, la toma 2 es la más difícil de soltar porque carga el reveal del producto. Las tomas 1 y 3 son más fáciles de regenerar o reformular porque son los bookends hablando a cámara.

### 12.3 Formato Full Stack — desglose en 5 tomas

**Duración objetivo:** 28–32 segundos. **Palabras:** 150–180. **Tomas:** 5.

Este formato le da a cada beat de la estructura de cinco beats su propia toma dedicada, que es lo que la duración mayor permite. Cada toma maneja un beat de la voz.

:::box TOMA 1 — HOOK
**Contenido de la voz:** Dos frases que llaman a la persona exacta y confirman la frustración específica.
**Duración estimada:** 5–6 segundos
**@[asset del producto] incluido:** **NO**
**Dirección visual:** Toma hablando a cámara en el espacio principal. Ambas manos libres, gestos naturales. Contacto visual sostenido. Sin cortes, sin tomas del entorno. El fondo es solo el espacio habitado detrás, no el foco.
**Notas de continuidad:** Establece la línea base del video entero. Fija outfit, pelo, luz, posición.
:::

:::box TOMA 2 — REFRAME PARTE 1
**Contenido de la voz:** Abre el reframe nombrando las cosas equivocadas que la audiencia ya probó. Prepara la distinción estructura-vs-superficie.
**Duración estimada:** 5–6 segundos
**@[asset del producto] incluido:** **NO**
**Dirección visual:** La misma toma a cámara que la toma 1, con un ligero cambio de ángulo o una deriva sutil de cámara para mantener frescura visual. Gesto de mano desestimando la lista de alternativas fallidas. Breve toque inconsciente de mejilla o auto-referencia si es relevante a la categoría.
**Notas de continuidad:** Mismo espacio que la toma 1. Mismo outfit, pelo, luz. El movimiento de cámara debe sentirse como un reencuadre natural dentro de una misma toma, no como un corte duro a otro lugar.
:::

:::box TOMA 3 — REFRAME PARTE 2 (la verdad estructural)
**Contenido de la voz:** La revelación del mecanismo: explica por qué los intentos de superficie físicamente no pueden funcionar, preparando el producto como la única opción viable.
**Duración estimada:** 5–6 segundos
**@[asset del producto] incluido:** **NO — el producto todavía no ha aparecido**
**Dirección visual:** Continúa hablando a cámara. Gesto breve opcional señalando la zona afectada en el cuerpo del creador. Gesto de descarte sobre las alternativas fallidas. Sin cortes al entorno. Sin visibilidad del producto.
**Notas de continuidad:** Mismo espacio, mismo outfit, misma luz. Es el beat final antes de introducir el producto — la tensión del hook llega a su pico aquí.
:::

:::box TOMA 4 — MECANISMO + REVEAL DEL PRODUCTO + APLICACIÓN
**Contenido de la voz:** Se nombra el producto, se explica el mecanismo en lenguaje llano, y la analogía táctil aterriza aquí. La frase más importante de todo el guion.
**Duración estimada:** 8–10 segundos
**@[asset del producto] incluido:** **SÍ — primera aparición, en el momento exacto en que la voz lo nombra**
**Dirección visual:** Corte a un ángulo nuevo motivado por movimiento físico (el creador camina a una barra o superficie). Teléfono apoyado en la barra, encuadre más estable con deriva sutil. Secuencia rápida de aplicación: toma cerrada del producto en mano, girar para abrir en la palabra donde se nombra, toma macro de la aplicación en la zona objetivo, push-in a un close-up que muestra el resultado inmediato. La aplicación no deja residuo visible según el bloque de dirección de aplicación.
**Notas de continuidad:** El cambio de lugar está motivado y se lee como movimiento natural. Mismo outfit, pelo, luz. El producto coincide exactamente con la imagen de referencia.
:::

:::box TOMA 5 — PAYOFF + CTA SUAVE
**Contenido de la voz:** Descripción sensorial y específica de la vida después del producto, seguida del cierre estilo sugerencia.
**Duración estimada:** 5–6 segundos
**@[asset del producto] incluido:** **NO — se cierra en la cara del creador, no en el producto**
**Dirección visual:** Regreso a la toma hablando a cámara, idealmente haciendo bookend con el encuadre de la toma 1. Sonrisa suave y genuina en la línea del payoff. Gesto sutil hacia abajo en el CTA. Ambas manos libres, sin posar.
**Notas de continuidad:** Iguala el encuadre de la toma 1 lo más posible para crear el bookend. Mismo outfit, pelo, luz. La sonrisa debe sentirse ganada, no actuada.
:::

**Notas de cosido — Full Stack**

- Costura natural entre la toma 3 y la toma 4 — ahí es donde la sección de reframe sin producto transiciona a la sección del reveal.
- Las tomas 1, 2, 3 y 5 son todas hablando a cámara en el espacio principal. Si alguna genera ligeramente distinta, la estructura bookend (tomas 1 y 5 iguales) enmascara las pequeñas inconsistencias porque el espectador registra la simetría visual como intencional.
- La toma 3 es la más fácil de soltar o comprimir si una sola toma falla al generar limpia. La línea de voz de la toma 3 puede plegarse al final de la toma 2 con el visual siendo simplemente la continuación hablando a cámara. Mantén eso como tu respaldo.
- La toma 4 es la más difícil de regenerar porque contiene el reveal del producto y la aplicación. Planea tiempo de generación extra para esta toma.

### 12.4 Formato infomercial animado — tomas variables

El infomercial animado no usa creador y es pura cinematografía de producto con voz en off. Como no hay requisito de continuidad sobre un creador humano entre tomas, la cantidad de tomas flexa según la duración del guion:

- **Duración mid-funnel:** 3–4 tomas alineadas a los beats de la voz
- **Duración full stack:** 5–6 tomas alineadas a los beats de la voz

Cada toma en este formato cubre un concepto visual distinto en vez de una escena con candado de continuidad: toma de órbita del producto, corte transversal animado mostrando el mecanismo, material macro de aplicación, toma héroe al cierre, etc. Como no hay continuidad de creador que mantener, las tomas tienen más libertad visual y la IA puede generar cada una con luz y ángulo distintos sin romper el video.

**Ajustes de campos por toma para el infomercial animado**

- Reemplaza "Dirección visual" por "Dirección de cinematografía" — órbita, dolly, macro, corte animado, toma héroe.
- Reemplaza "Notas de continuidad" por "Continuidad estética" — qué estilo visual se mantiene consistente (temperatura de luz, gradado de color, materiales de superficie).
- La inclusión de @[asset del producto] es SÍ en todas las tomas porque el producto es el héroe de cada una.

### 12.5 Referencia rápida — tomas por formato

| Formato | Duración | Tomas | Patrón del asset del producto |
| --- | --- | --- | --- |
| Mid-Funnel Punchy | 18–22 seg | 3 tomas | NO, SÍ, NO |
| Full Stack | 28–32 seg | 5 tomas | NO, NO, NO, SÍ, NO |
| Infomercial animado (mid) | 18–22 seg | 3–4 tomas | SÍ en todas |
| Infomercial animado (full) | 28–32 seg | 5–6 tomas | SÍ en todas |

### 12.6 Resumen del flujo

Para producir un guion por tomas desde cero:

- **Paso 1.** Decide el formato (mid-funnel o full stack) según la etapa del funnel.
- **Paso 2.** Escribe el guion completo de la voz con la estructura de beats de la sección 5.
- **Paso 3.** Fija la descripción del personaje y los cuatro bloques de dirección universales.
- **Paso 4.** Parte la voz en la cantidad de tomas de ese formato (3 o 5).
- **Paso 5.** Llena la plantilla de especificación por toma para cada una.
- **Paso 6.** Genera cada toma por separado, regenerando las que no aterricen limpias.
- **Paso 7.** Cose las tomas en post, priorizando el bookend entre la toma 1 y la final.

## 13. Captions para alcance orgánico

Los captions del post importan tanto como el guion para el alcance. Los captions que se sienten nativos rinden más que el copy de marca.

### 13.1 Principios de caption

- Minúsculas, sin sobre-puntuación, tono conversacional
- Máximo un emoji suave, opcional
- Sin hashtags salvo que el testeo demuestre que ayudan en la plataforma
- 1–2 frases cortas
- No vende directo — alude al tema del video y deja que el video haga el trabajo

### 13.2 Plantillas de caption por variación

| Tipo de variación | Plantilla |
| --- | --- |
| Confesional / Descubrimiento accidental | "nadie me dijo ___. ojalá lo hubiera descubierto hace años" |
| Lo probé | "gasté demasiado dinero en ___ antes de entender por qué nada funcionaba" |
| Rompe-mitos | "si has estado ___ pensando que iba a ___, lee esto" |
| Universal | "de verdad no sabía esto hasta hace poco. si tú ___, esto podría explicar por qué nada te ha funcionado" |

### 13.3 Primer comentario

Deja el link real en el primer comentario del post. Mantén el caption principal limpio. El primer comentario puede ser un poco más directo: "dejo en mi bio lo que estoy usando por si alguien quiere verlo."

## 14. Lógica de testeo y escalado

### 14.1 Set inicial de prueba

Construye un set de 6–10 guiones antes de escalar inversión. Cubre como mínimo:

- Los cinco tipos de variación
- 2–3 perfiles demográficos distintos
- 2–3 frameworks de hook distintos
- Ambos formatos (mid-funnel y full stack)
- Al menos un ángulo de dolor profundo de deseo masivo

### 14.2 Qué observar

- Tiempo de visualización y tasa de finalización, no solo CTR
- Costo por clic contra el ángulo creativo
- Sentimiento de los comentarios — **específicamente: ¿los espectadores se repiten la analogía entre ellos? Esa es la señal de que el guion está funcionando como se diseñó**
- Desglose demográfico de a quién le está sirviendo el algoritmo cada guion

### 14.3 Cuándo cortar y cuándo escalar

:::box CRITERIOS PARA MATAR
• El tiempo de visualización cae en los primeros 3 segundos — el hook no está funcionando
• Ven pero no hacen clic — el payoff o el CTA está débil
:::

:::box CRITERIOS PARA ESCALAR
• Los comentarios citan la analogía o la línea del payoff — eso es ajuste producto-lenguaje
• Cuando emerge un ganador, escribe variaciones de hook sobre él antes de que llegue la fatiga
:::

### 14.4 La variación demográfica y de espacios como defensa contra la fatiga

Rota demografías y espacios a lo largo de la campaña. El mismo guion, con otro creador y otro espacio, puede extender un ángulo ganador por semanas antes de que la audiencia se canse.

## 15. Cómo usar este documento

Este documento se despliega de tres maneras:

- **Como system prompt.** Pega las secciones 1–13 en el system prompt de cualquier LLM. Dale las variables de marca de la sección 10 y el framework de hook, formato, tipo de variación y dolor deseados. El modelo produce salida estructurada.
- **Como referencia de entrenamiento.** Úsalo como guía de estilo para copywriters humanos o contratistas. Las reglas de estructura aplican igual a guiones escritos por humanos o por IA.
- **Como checklist de auditoría.** Usa los fallos de la sección 9 y los principios de la sección 2 para calificar cualquier guion antes de aprobarlo para producción.

*Fin del documento — Sistema de Escritura de Guiones UGC v2 (traducción íntegra al español; el original en inglés se descarga junto a esta versión)*
