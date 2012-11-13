#Memory Games on NRICH

* [Multiplication Tables](http:nrich.maths.org/1252)
* [Flip Flop](http:nrich.maths.org/1257)

Start with 16 cards showing face down

Score should start at 100
Score should drop by 5 on each reveal
Score should increase by 50 on each reveal

SizeCombo should select:
  
 *  16 cards in 4x4 grid
 *  20 cards in 5x4 grid
 *  24 cards in 6x4 grid

DifficultyCombo should select:

* Tables 2x to 10x
* Tables 11x to 21x
*	Tables 2x to 21x
	
Cards for each of the Difficulty selections are in the pdf files 

## Sample HTML

    <table>
      <tr ng-repeat="row in game.grid">
        <td ng-repeat="tile in row" ng-click="game.flipTile(tile)">

          <!-- this entire block can be replaced with our custom component mgCard: -->
          <mg-card tile="tile" cpath="{{cpath}}"></mg-card>
        
    <!--
          <div class="container">
            <div class="card" ng-class="{flipped: tile.flipped}">
              <img class="front" ng-src="{{cpath}}/img/back.png">
              <img class="back" ng-src="{{cpath}}/img/{{tile.title}}.png">
            </div>
         </div>
    -->
        </td>
      </tr>
    </table>


## Directives
    <img ng-src="back.png" backface>

## JSON config

    {
		  rows: 4,
		  cols: 4,
    }