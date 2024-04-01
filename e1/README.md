```
Utilizando HTML para estruturar os conteúdos e CSS para estilizá-los, desenvolva a tela
apresentada na Figura 1.
```

Figura 1 – Tela do exercício sobre Grid e FlexBox

![1711937307540](image/README/1711937307540.png)

## INSTRUÇÕES GERAIS:

- Para inserir os ícones (imagens) utilize o conjunto de ferramentas de fontes e ícones disponível
  em https://fontawesome.com/
- Para trabalhar com as cores, utilize a declaração de variáveis personalizadas definidas dentro
  da pseudoclasse :root, para que possam ser aplicadas globalmente no documento HTML.
- Utilize em todo o documento a fonte Montserrat disponível em https://fonts.google.com/
- Utilize um CSS externo para estilizar o conteúdo.

# MENU SUPERIOR

- **HTML** : Estruturar em uma tag `<header>` `</header>` uma `<nav></nav>`. A logo deve ser
  estruturada em um elemento `<h1></h1>` e os ícones devem ser estruturados em uma lista não
  ordenada.
- **CSS** : deve ser fixo, com largura de 100%, posicionado no canto superior esquerdo (top e left
  com valor 0). Além disso, deve ter largura altura mínima e máxima de 80px. Deve ter prioridade
  maior (z-index) sobre os demais elementos com posição fixa.

# MENU LATERAL

- **HTML** : O menu lateral deve ser estruturado em uma lista não ordenada dentro de uma tag

<section></section>. Cada item da lista deve ser um link.
- **CSS** : deve ser fixo, posicionado à esquerda com valor 0 e a parte superior com 80px (valor da
altura do menu superior). A largura mínima e máxima deve ser de 240px.

**Ministério da Educação
Universidade Tecnológica Federal do Paraná
Campus de Pato Branco**
Curso de Tecnologia em Análise e Desenvolvimento de
Sistemas
Professora: Andreia Scariot Beulke

```
Disciplina: Linguagens de Estruturação de
Conteúdo – Turma: 3 SI
Exercício Grid e FlexBox
```

Os demais elementos que não são fixos devem ter uma margem no corpo da página para não
ficarem sobrepostos.

# CONTEÚDO PRINCIPAL

Estruturar todo o conteúdo da página inicial em uma `<main></main>`.

**CARDS**

**- HTML** : estruturar em tags `<div></div>`. Os elementos que compõe os cards são: ícone `<i></i>`,
número inserido como um título `<h1></h1>`, texto inserido como parágrafo `<p></p>` e link
`<a></a>` inserido dentro de uma `<div></div>`.
**- CSS para a estrutura dos cards** :

```
 Devem ser organizados em um grid de 4 colunas e com espaçamento horizontal e
vertical.
 A altura de cada card deve ser de 25% em relação à viewport e as bordas devem ter um
arredondamento.
 O texto deve ser alinhado à esquerda.
```

**- CSS para aplicar cor nos cards** : crie uma classe CSS para aplicar a cor em cada card e utilize
rgba para aplicar transparência.
**- CSS para o ícone:**

```
 Deve ser posicionado de forma absoluta dentro do seu ancestral que deve ter posição
relativa.
 A posição deve ser à direita e inferior com um espaço de 1rem.
 O tamanho da fonte deve ser de 5rem.
 A cor do ícone deve ser transparente (utilize rgba para aplicar a transparência).
```

**- CSS para o rodapé dos cards** :

```
 Devem ser posicionados de forma absoluta na parte inferior do elemento. A largura
deve ser de 100%. O canto inferior esquerdo e direito devem ter o mesmo
arredondamento do card. O texto deve ser centralizado. Aplicar a mesma cor do card
(com transparência).
 Os links devem ser de cor branca, sem decoração e com fonte de .8rem.
 Os títulos e parágrafos devem ter um espaçamento à esquerda de 1 rem.
```

## BOTÕES

**- HTML:** Em uma `<section></section>` estruturar os botões em uma `<div></div>` com um ícone
`<i></i>` e um link `<a></a>`. Se necessário inserir o ícone e o link em um bloco de divisão
individual.
**- CSS para a estrutura dos botões** :

```
 Devem ser organizados em um grid de 3 colunas e com espaçamento horizontal e
vertical.
```

**- CSS para os botões:**

```
 Devem ser posicionados com display: flex em linha.
 A largura deve ser de 100%.
 A cor de fundo deve ser branca.
 Aplicar sombreamento.
 O texto deve ser centralizado.
 CSS para o ícone dos botões:
 A cor de fundo deve ser azul em hexadecimal.
 Inserir espaçamento superior e inferior com valores de .5rem e 1rem, respectivamente.
 A cor do texto deve ser branca.
 A largura deve ser de .5rem.
 O texto deve ser centralizado.
```

A tela deve apresentar o conteúdo de forma responsiva para as seguintes telas:

```
 Celulares: com largura mínima de 320px e largura máxima de 480px.
 Tablets: com largura mínima de 481px e largura máxima de 768px.
 Computadores: com largura acima de 768px.
```
