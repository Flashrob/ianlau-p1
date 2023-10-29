# Rocket Academy Coding Bootcamp: Project 1: Frontend App

# App:

Simplified version of board game "Bullet"

# How to use:

1. You can choose solo mode or two-player in the main menu
2. The game rules is also available in the main menu
3. The game will return to the main menu after displaying the game result.

# Layout:

(Include a photo representing the app layout)

1.
2.
3.
4.

# General Game rules:

In this game, you have to survive from the incoming bullets for as many rounds as you can.
In each round, you must place all incoming bullets and clear them in order to prevent them from deducting your health.
You have three options to choose from in each round, and you can perform them in any order and as many times as you are able:

1. Place Bullets: You can place the incoming bullets on your play area (according to the bullet placing rules below).
2. Use Energy to perform actions.
3. Use Patterns to clear bullets.

When the timer counts down to 0, all options are no longer available, and any unplaced bullets will be automatically placed.

# Bullet placing rules:

The bullet will be placed in the column according to its color, and the placement row is determined by the number of vacancies in that column. For example, if a red bullet with the number 3 is drawn, it will be placed in the third vacant row of the red column. When there are bullets placed in the middle of the column, consider that row as not vacant.

# Patterns:

(Include a photo representing the requirements and clearable bullets)
And here are the requirment of using the pattern
(Photo of requirement icon)
() represent the bullet you can clear using this pattern.
Whenever a star icon in the bullet is cleared, you will gain 1 energy.

# Solo mode:

In Solo mode, Player will have to survived as many round as possible.
Here are the incoming bullet no. of each round.

1. 10 bullets,
2. 4 bullets + no. of all the bullets you cleared in the 1st rd.
3. 5 bullets + no. of all the bullets you cleared in the 2nd rd.
4. 6 bullets + no. of all the bullets you cleared in the 3rd rd.
   ...and so on

# 2 player mode:

In 2 Player mode, players will have to survive until one player's health reaches 0.

In this game mode, players will take turns playing.
Player 1 will play first, then player 2 will play.
After player 2 has played, that round is finished.
If player 1's health reaches 0, player 2 will then play his/her round. If player 2 survives this round, player 2 will win. If not, it's a draw for both players.

Here are the incoming bullet no. of each round.

1. 10 bullets,
2. 4 bullets + no. of all the bullets you cleared in the 1st rd.
3. 5 bullets + no. of all the bullets you cleared in the 2nd rd.
4. 6 bullets + no. of all the bullets you cleared in the 3rd rd.
   ...and so on

# Disclaimer

This web-based game is a digital adaptation of a board game and is intended solely for educational purposes as part of a bootcamp project. It is not intended for commercial use or business purposes.
