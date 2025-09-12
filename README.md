# Pokemon API

## How it Works
- `assignmentTask()` chooses a random pokemon ID 1-151 calls `getPokemonData(Id)`.
- `getPokemonData(id)`: 
    - Fetches data from `/pokemon/{id}` (name, height, weight, types).
    - Fetches data from `/pokemon-species/{id}` (flavorText, habitat, isLegendary).
    - Returns a combines object.

    ## Run
    ```bash
    npm start