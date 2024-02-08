# Crear un Subgraph con The Graph CLI

[Referencia a la doc](https://thegraph.com/docs/es/quick-start/)

Este README explica los pasos y el código necesario para crear un subgraph utilizando The Graph CLI.

## Paso 1: Instalar The Graph CLI

Para comenzar, asegúrate de tener instalado The Graph CLI en tu máquina. Puedes instalarlo ejecutando el siguiente comando:

Using npm:

```bash
npm install -g @graphprotocol/graph-cli
```

Using yarn:

```bash
yarn global add @graphprotocol/graph-cli
```

## Paso 2: Iniciar el Subgrafo

* Protocol: elige el protocolo desde el cual tu subgrafo indexará datos

* Subgraph slug: crea un nombre para tu subgrafo. El slug de tu subgrafo es un identificador para el mismo.

* Directorio para crear el subgrafo: elige el directorio local de tu elección

* Red Ethereum (opcional): Es posible que debas especificar desde qué red compatible con EVM tu subgrafo indexará datos

* Dirección del contrato: Localiza la dirección del contrato inteligente del que deseas consultar los datos

* ABI: Si el ABI no se completa automáticamente, deberás ingresar los datos manualmente en formato JSON

* Start Block: se sugiere que ingreses el bloque de inicio para ahorrar tiempo mientras tu subgrafo indexa los datos de la blockchain. Puedes ubicar el bloque de inicio encontrando el bloque en el que se deployó tu contrato.

* Nombre del contrato: introduce el nombre de tu contrato

* Indexar eventos del contrato como entidades: se sugiere que lo establezcas en "verdadero" ya que automáticamente agregará mapeos a tu subgrafo para cada evento emitido

### Consideraciones

* Manifest (subgraph.yaml) - El manifiesto define qué fuentes de datos indexarán tus subgrafos.

* Schema (schema.graphql) - El esquema GraphQL define los datos que deseas recuperar del subgrafo.

* AssemblyScript Mappings (mapping.ts) - Este es el código que traduce los datos de tus fuentes de datos a las entidades definidas en el esquema.

* Debemos tener el ABI del contrato, si el contrato esta verificado lo descarga automaticamente, si no hay que darle el path a donde tengamos el ABI que corresponde al contrato.

## Paso 3: Despliega en Subgraph Studio

```bash
$ graph codegen
$ graph build
```

Autentica y deploya tu subgrafo. La clave para deployar se puede encontrar en la página de Subgraph en Subgraph Studio.

```bash
$ graph auth --studio <DEPLOY_KEY>
$ graph deploy --studio <SUBGRAPH_SLUG>
```

**Nos preguntara por una etiqueta de versionado es recomendable usar la nomenclatura de [semver](https://semver.org)
