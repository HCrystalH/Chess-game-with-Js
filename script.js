/*Javascript to have king,queen and others*/
let main ={
    variables:{
        turn: 'white',
        selectedpiece: '',
        highlighted: [],
        pieces: {
            white_king:{
                position: '5_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'white_king'
            },
            white_queen:{
                position: '4_1',
                img: '&#9813;',
                captured: false,
                moved: false,
                type: 'white_queen'
            },
            white_bishop1:{
                position: '3_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'white_bishop1'
            },
            white_bishop2:{
                position: '6_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'white_bishop2'
            },
            white_knight1:{
                position: '2_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'white_knight1'
            },
            white_knight2:{
                position: '7_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'white_knight2'
            },
            white_rook1:{
                position: '1_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'white_rook1'
            },
            white_rook2:{
                position: '8_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'white_rook2'
            },
            white_pawn1:{
                position: '1_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn1'
            },
            white_pawn2:{
                position: '2_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn2'
            },
            white_pawn3:{
                position: '3_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn3'
            },
            white_pawn4:{
                position: '4_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn4'
            },
            white_pawn5:{
                position: '5_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn5'
            },
            white_pawn6:{
                position: '6_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn6'
            },
            white_pawn7:{
                position: '7_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn7'
            },
            white_pawn8:{
                position: '8_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'white_pawn8'
            },

            black_king:{
                position: '5_8',
                img: '&#9818;',
                captured: false,
                moved: false,
                type: 'black_king'
            },
            black_queen:{
                position: '4_8',
                img: '&#9819;',
                captured: false,
                moved: false,
                type: 'black_queen'
            },
            black_bishop1:{
                position: '3_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'black_bishop1'
            },
            black_bishop2:{
                position: '6_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'black_bishop2'
            },
            black_knight1:{
                position: '2_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'black_knight1'
            },
            black_knight2:{
                position: '7_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'black_knight2'
            },
            black_rook1:{
                position: '1_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'black_rook1'
            },
            black_rook2:{
                position: '8_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'black_rook2'
            },
            black_pawn1:{
                position: '1_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn1'
            },
            black_pawn2:{
                position: '2_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn2'
            },
            black_pawn3:{
                position: '3_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn3'
            },
            black_pawn4:{
                position: '4_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn4'
            },
            black_pawn5:{
                position: '5_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn5'
            },
            black_pawn6:{
                position: '6_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn6'
            },
            black_pawn7:{
                position: '7_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn7'
            },
            black_pawn8:{
                position: '8_7',
                img: '&#9823;',
                captured: false,
                moved: false,
                type: 'black_pawn8'
            },
            
        } 
    },
    
    methods: {
        gamesetup: function(){
            $('.gamecell').attr('chess','null');
            for (let gamepiece in main.variables.pieces){
                $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
                $('#' + main.variables.pieces[gamepiece].position).attr('chess',gamepiece);
            }
        },

        moveoptions: function(selectedpiece) {

            let position = {x: '', y:''};
            position.x = main.variables.pieces[selectedpiece].position.split(_)[0];
            position.y = main.variables.pieces[selectedpiece].position.split(_)[1];

            // these options need to be var instead of let
            var options = [];
            var coordinates = [];
            var startpoint = main.variables.pieces[selectedpiece].position;
            var c1,c2,c3,c4,c5,c6,c7,c8;

            if(main.variables.highlighted.length != 0){
                main.methods.togglehighlight(main.variables.highlighted);
            }

            switch (main.variables.pieces[selectedpiece].type){
                case 'white_king':

                    if ( $('#6_1').attr('chess') == 'null' 
                        && $('#7_1').attr('chess') =='null' 
                        && main.variables.pieces['white_king'].moved == false 
                        && main.variables.pieces['white_rook2'].moved == false )
                    {
                        coordinates = [ 
                            {x: 1,y: 1}, { x: 1, y:0}, {x:1, y:-1}, { x:0, y:-1}, {x: -1, y:-1}, 
                            {x:-1, y:0}, {x:-1, y:1},  {x:0, y:1},  {x:2, y:0}].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }else{
                        coordinates = [ 
                            {x: 1,y: 1}, { x: 1, y:0}, {x:1, y:-1}, { x:0, y:-1}, {x: -1, y:-1}, 
                            {x:-1, y:0}, {x:-1, y:1},  {x:0, y:1}].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    
                    break;
                case 'black_king':
                    break;
                
                case 'white_queen':
                    break;
                case 'black_queen':
                    break;

                case 'white_bishop':
                    break;
                case 'black_bishop':
                    break;

                case 'white_knight':
                    break;
                case 'black_knight':
                    break;

                case 'white_rook':
                    break;
                case 'black_rook':
                    break;
                
                case 'white_pawn':
                    break;
                case 'black_pawn':
                    break;
            }
        }

        // togglehighlight: function(options){
        //     options.forEach(function(element,index , array){
        //         $('#'+ element).toggleClass("green shake-little neongreen_txt");
        //     }
        // );
        // },
    }
};