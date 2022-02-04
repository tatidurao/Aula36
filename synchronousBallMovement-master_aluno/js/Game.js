class Game{
    constructor(){}
//ler o estado de jogo sendo eles 
    //0 = esperar
    //1 = jogar
    //2 = encerrar 

    //função para ler os estados de jogo
    getState(){ //ler o estado de jogo que esta no banco
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            //salva na variavel global declara no scktch.js
            gameState = data.val();
        })
    }

    //função que irá atualizar o estado de jogo no banco para o valor passado entre ()
    update(state){
        database.ref('/').update({
            gameState: state
        });
    
    }

    start(){
        if(gameState === 0){

        }
    }    


}   