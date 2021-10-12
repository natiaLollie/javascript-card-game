Natia Lollie 
Project III - Design a card web game 
ITSE 2402


------------------
Planning - 10/6/21 
------------------

• color scheme --> 5 colors 

    • web-background: #2b2d42
    • game-background: #8d99ae
    • score-background: #edf2f4

    • title: #ef233c
    • score: #ef233c
    • start-button: #ef233c

    • general-text: #edf2f4

• page layout -->

    • layer one - general webpage backgound 
    • layer two - game background
    • layer three - game 
        • header 
            - game title 
            - instructions 
            - player indicators 
            - player score boards 
        • middle 
            - card game playable area 
            - 3 rows 
            - 4 columns 
        • footer 
            - start button 


• Understanding the Javascript portions

    • wants -
        
        - on player turn, highlight player indicator.


    • logic -

        1 all cards start face down 
        2 player clicks face down card 
        3 face down card shows numbered card 
            (
                a. get script to change image
                b. get script to change to random image
            )





    • predictions - 

        - give each card image a number 
        - when player selects a card, random number is generated 
        - random generated number = corresponding card image number 
            - remove card from deck
        - add card number to current score 
    

------------------
Steps 
------------------

setup:

1. initalize project files 
    1a. link project files
2. construct structure/layout w/ filler content
3. add background and text colors 

Game:

4. add face down cards 
5. test row/col flex
6. build game using planned logic (see above)
