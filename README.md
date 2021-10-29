# custom_mandelbrot 
## Atividade 1 de Computação Gráfica: desenvolvimento de uma aplicação gráfica interativa com gráficos 2D. 

link web: https://viborotto.github.io/custom_mandelbrot/

### O que é MandelBrot ?  
##### Um pouco de história:
A resposta viria do próprio Mandelbrot começou a estudar uma equação muito curiosa e estranhamente simples que poderia ser usada para desenhar uma forma bastante incomum: Conjunto Mandelbrot		
<img width="637" alt="Screen Shot 2021-10-29 at 20 21 56" src="https://user-images.githubusercontent.com/50744121/139510897-e9b81e07-7c53-4413-8bf1-f9790f2bd787.png">		
Cada forma dentro do conjunto contém um número de formas menores, que contêm um número de outras formas ainda menores... e, assim por diante, sem fim.

Uma das coisas mais surpreendentes sobre o conjunto de Mandelbrot é que, em teoria, ele continuaria criando infinitamente novos padrões a partir da estrutura original, o que demonstra que algo poderia ser ampliado para sempre.

No entanto, toda essa complexidade vem de uma equação incrivelmente simples:
Se reescrevermos a sequência em termos das partes real e imaginária (coordenadas x e y do plano complexo), a cada iteração n, substituindo zn pelo ponto xn + yni e c pelo ponto a + bi, temos:

{\displaystyle x_{n+1}={x_{n}}^{2}-{y_{n}}^{2}+a\,}x_{{n+1}}={x_{n}}^{2}-{y_{n}}^{2}+a\, e
{\displaystyle y_{n+1}=2{x_{n}}{y_{n}}+b\,}y_{{n+1}}=2{x_{n}}{y_{n}}+b\,

### Autores:    

🧑  *Felipe Moreira Temoteo da Silva*   RA: 11201811314 <BR>
👩  *Vittoria Ariel dos Santos Borotto* RA: 11201811288   <BR> 

**Conceitos utilizados durante a atividade 1** 💻:

- Representação vetorial no OpenGL (GLTRIANGLES) <BR>
	◼️ A representação vetorial é usada para definir a geometria que será usada processada durante toda a renderização, e pode ser vista na formação das primitivas que compõem o set MandelBrot. <BR>
	
- Dispositivos de E/S 🖱️ ⌨️(Teclado,mouse e monitor): <BR>
	◼️ Durante a atividade foram utilizados os conceitos de Dispositivos de entrada e saída. <BR>
	◼️ Dispositivos de entrada: temos como exemplo as setas e as letras F,V,B,C que ao utilizar um deles você interage com o programa navegando pelo espaço 2D do set.<BR>
	◼️ Dispositivos de saída: Toda interação com a atividade, reflete em mudanças que são exibidas no monitor do usuário.<BR>
	◼️ Processadores: Para os diversos processamentos do set se faz necessário o uso de CPU's,GPU's e seus subsistemas.<BR>

A aplicação desenvolvida consiste em uma navegação interativa com um set de Mandelbrot, fractais que são recalculados a cada interação do teclado por contas com números imaginários que geram lindas imagens.

#### Interação com Mandelbrot: 

1. Abra a aplicação por meio do link https://viborotto.github.io/custom_mandelbrot/ 
2. Para interagir aperte as seguintes teclas: 
    -  Seta para cima ou F: navegue para a parte inferior do mandelbrot
    -  Seta para baixo ou V: navegue para a parte superior do mandelbrot
    -  Seta para a esquerda ou B: navegue para a direita do mandelbrot
    -  Seta para a direta ou C: navegue para a esquerda do mandelbrot
    -  Tecla SPACE: de zoom do mandelbrot (teste se aprofundar no set para ver partes diferentes do fractal!) 
    -  Letra X: zoom out do mandelbrot (você pode utilizar também o scroll do mouse para dar zoom in e zoom out) 
    -  Letra N: diminui o número de iterações máximas 
    -  Letra M: aumenta o número de iterações máximas (aumenta a quantidade de detalhes na imagem) 
    -  Letra R: reseta do mandelbrot
