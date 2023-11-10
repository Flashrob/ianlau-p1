# Rocket Academy Coding Bootcamp: Project 1: Frontend App

# App:

Simplified version of board game "Bullet"

# User Stories

https://docs.google.com/document/d/1XpHUTHpNqi8hqvm0bCkjZ_3Jt0eIYnaxVusIJbq9pqc/edit?usp=sharing

# wireframe:

https://www.figma.com/file/205aPtCAc3zAcSb4aKezCs/Project-1?type=design&node-id=0%3A1&mode=design&t=AXYPjAnwbssU8odS-1

# How to use:

1. You can choose solo mode or tutorial in the main menu
2. The game will return to the main menu after displaying the game result.
3. If you are playing this game for the first time, I recommend that you play the tutorial in the app first.

# General Game rules:

In this game, you have to survive from the incoming bullets for as many rounds as you can.
In each round, you must place all incoming bullets and clear them in order to prevent them from deducting your health.
You have three options to choose from in each round, and you can perform them in any order and as many times as you are able:

1. Place Bullets: You can place the incoming bullets on your play area (according to the bullet placing rules below).
2. Use Energy to perform actions.
3. Use Patterns to clear bullets.

When the timer counts down to 0, all options are no longer available, and any unplaced bullets must be placed before ending the round.

# Bullet placing rules:

The bullet will be placed in the column according to its color, and the placement row is determined by the number of vacancies in that column.
For example, if a red bullet with the number 3 is drawn, it will be placed in the third vacant row of the red column. When there are bullets placed in the middle of the column, consider that row as not vacant.

# Actions:

Each Action cost energy.
Here are the cost and effect of each Action

1. Cost 1 : You can move one bullet left/right/down by one space.
2. Cost 2 : You can move one bullet up by one space.
3. Cost 2 : You can move one bullet down by any space.
4. Cost 2 : You can draw another patterns card from the deck.

# Patterns:

You can use your patterns card to clear bullet.
Each patterns have unique requirments to play.
If the requirement is met, you can remove the bullet for the cleanup logo.

# Solo mode:

In Solo mode, Player will have to survived as many round as possible.
Here are the incoming bullet no. of each round.

1. 10 bullets,
2. 4 bullets + no. of all the bullets you cleared in the 1st rd.
3. 5 bullets + no. of all the bullets you cleared in the 2nd rd.
4. 6 bullets + no. of all the bullets you cleared in the 3rd rd.
   ...and so on

# Tutorial Mode:

In tutorial mode, the app will guide the users to acknowledge the basic rules of this game and how to control the interfence of this game.

# Player Versus player mode:

In Player Versus player mode, user will have to play against another user on the same computer.
First start with player1 playing the round, then player2 will playing the same round.
After player2 played that round, it will continue with player1 playing the next round.
If two players is down in the same round, they draw.
If player2 is down, player1 win.
If player1 is down, player2 will continue play the same round to see if player2 survived this round.
If yes, player 2 win.

Here are the incoming bullet no. of each round.

1. 10 bullets,
2. 4 bullets + no. of all the bullets your opponent cleared in the 1st rd.
3. 5 bullets + no. of all the bullets your opponent cleared in the 2nd rd.
4. 6 bullets + no. of all the bullets your opponent cleared in the 3rd rd.
   ...and so on
