const matrixCharacters = [
    {
        pic: `<img src="assets/images/agent-smith.webp">`,
       answers: [
        {options: `<li class="align-center"><input class="wrong" type="radio" id="cypher" name="character" value="Cypher"><label for="cypher"> Cypher</label></li>`},

         {options: `<li class="align-center"><input class="correct" type="radio" id="agent-smith" name="character" value="Agent-smith"><label for="agent-smith"> Agent Smith</label></li>`} ,

         {options: `<li class="align-center"><input class="wrong" type="radio" id="neo" name="character" value="Neo"><label for="neo">Neo</label></li>`},

         {options: `<li class="align-center"><input class="wrong" type="radio" id="apoc" name="character" value="Apoc"><label for="apoc">Apoc</label></li>`},

         {options: `<li class="align-center"><input class="wrong" type="radio" id="anderson" name="character" value="Mr Anderson"><label for="anderson"> Mr Anderson </label></li>`}   
        
        ]
    },
    {
        pic:`<img src="assets/images/apoc.webp">`,
        answers: [
            {options: `<li class="align-center"><input class="wrong" type="radio" id="tank" name="character" value="Tank"><label for="tank"> Tank </label></li>`}, 

             {options: `<li class="align-center"><input class="wrong" type="radio" id="white-rabbit" name="character" value="White-Rabbit"><label for="white-rabbit"> White Rabbit </label></li>`} , 

             {options: `<li class="align-center"><input class="wrong" type="radio" id="mouse" name="character" value="Mouse"><label for="mouse"> Mouse </label></li>`},

             {options: `<li class="align-center"><input class="wrong" type="radio" id="switch" name="character" value="Switch"><label for="switch"> Switch </label></li>`}, 

             {options: `<li class="align-center"><input class="correct" type="radio" id="apoc" name="character" value="Apoc"><label for="apoc"> Apoc </label></li>`},   
        
            ]
    },
    {
        pic: `<img src="assets/images/neo.webp">`,
        answers: [
            {options: `<li class="align-center"><input class="wrong" type="radio" id="trinity" name="character" value="Trinity"><label for="trinity"> Trinity </label></li>`}, 

             {options: `<li class="align-center"><input class="correct" type="radio" id="neo" name="character" value="Neo"><label for="neo"> Neo </label></li>`},

             {options: `<li class="align-center"><input class="wrong" type="radio" id="morpheus" name="character" value=" Morpheus"><label for="morpheus"> Morpheus </label></li>`} , 

             {options: `<li class="align-center"><input class="wrong" type="radio" id="tank" name="character" value="Tank"><label for="tank"> Dozer </label></li>`},

             {options: `<li class="align-center"><input class="wrong" type="radio" id="agent-smith" name="character" value="Agent Smith"><label for="agent-smith"> Agent Smith </label></li>`},
            ]
    },
    {
        pic: `<img src="assets/images/trinity.webp">`,
        answers: [
            {options: `<li class="align-center"><input type="radio" id="dozer" name="character" value="Dozer"><label for="dozer"> Dozer </label></li>`},

             {options: `<li class="align-center"><input type="radio" id="oracle" name="character" value="Oracle"><label for="oracle"> Oracle </label></li>`}, 

             {options: `<li class="align-center"><input type="radio" id="white-rabbit" name="character" value="White-Rabbit"><label for="white-rabbit"> White Rabbit </label></li>`} , 

             {options: `<li class="align-center"> <input  class="correct" type="radio" id="trinity" name="character" value="Trinity"><label for="trinity"> Trinity</label></li>`}, 

             {options: `<li class="align-center"><input type="radio" id="mouse" name="character" value="Mouse"><label for="mouse"> Mouse </label></li>`},
            ]
    },

    {
        pic: `<img src="assets/images/the-oracle.webp">`,
        answers: [
            {options: `<li class="align-center"><input class="wrong" type="radio" id="trinity" name="character" value="Trinity"><label for="trinity"> Trinity </label></li>`},

             {options: `<li class="align-center"><input class="correct" type="radio" id="oracle" name="character" value="Oracle"><label for="oracle"> Oracle </label></li>`}, 

             {options: `<li class="align-center"><input class="wrong" type="radio" id="morpheus" name="character" value=" Morpheus"><label for="morpheus"> Morpheus </label></li>`} , 

             {options: `<li class="align-center"><input class="wrong" type="radio" id="dozer" name="character" value="Dozer"><label for="dozer"> Dozer </label></li>`},

             {options: `<li class="align-center"><input class="wrong" type="radio" id="agent-brown" name="character" value="Agent Brown"><label for="agent-brown"> Agent Brown </label></li>`},
            ]
    },
    {
        pic: `<img src="assets/images/morpheus.webp">`,
        answers: [
            {options: `<li class="align-center"><input class="wrong" type="radio" id="trinity" name="character" value="Trinity"><label for="trinity"> Trinity </label></li>`}, 

             {options: `<li class="align-center"><input class="wrong" type="radio" id="oracle" name="character" value="Oracle"><label for="oracle"> Oracle </label></li>`},  

             {options: `<li class="align-center"><input  class="correct" type="radio" id="morpheus" name="character" value=" Morpheus"><label for="morpheus"> Morpheus </label></li>`} ,

             {options: `<li class="align-center"><input class="wrong" type="radio" id="dozer" name="character" value="Dozer"><label for="dozer"> Dozer </label></li>`},

             {options: `<li class="align-center"><input class="wrong" type="radio" id="agent-brown" name="character" value="Agent Brown"><label for="agent-brown"> Agent Brown </label></li>`},
            ]
    },
];







const levelTwo = [

   
    {
        pic:`<img src="assets/images/apoc.webp">`,
        answers: [
            {options: `<li class="align-center"><label for="tank"> Tank <input type="radio" id="tank" name="character" value="Tank"></label></li>`}, 
             {options: `<li class="align-center"><label for="white-rabbit"> White Rabbit <input type="radio" id="white-rabbit" name="character" value="White-Rabbit"></label></li>`} , 
             {options: `<li class="align-center"><label for="mouse"> Mouse <input type="radio" id="mouse" name="character" value="Mouse"></label></li>`},
             {options: `<li class="align-center"><label for="switch"> Switch <input type="radio" id="switch" name="character" value="Switch"></label></li>`}, 
             {options: `<li class="align-center"><label for="apoc"> Apoc <input class="correct" type="radio" id="apoc" name="character" value="Apoc"></label></li>`},   
        
            ]
    },
    {
        pic: `<img src="assets/images/neo.webp">`,
        answers: [
            {options: `<li class="align-center"><label for="trinity"> Trinity <input type="radio" id="trinity" name="character" value="Trinity"></label></li>`}, 
             {options: `<li class="align-center"><input class="correct" type="radio" id="neo" name="character" value="Neo"><label for="neo">Neo</label></li>`},  
             {options: `<li class="align-center"><label for="morpheus"> Morpheus <input type="radio" id="morpheus" name="character" value=" Morpheus"></label></li>`} , 
             {options: `<li class="align-center"><label for="tank"> Dozer <input type="radio" id="tank" name="character" value="Tank"></label></li>`},
             {options: `<li class="align-center"><label for="agent-smith"> Agent Smith <input type="radio" id="agent-smith" name="character" value="Agent Smith"></label></li>`},
            ]
    },
    {
        pic: `<img src="assets/images/Trinity.webp">`,
        answers: [
            {options: `<li class="align-center"><label for="dozer"> Dozer <input type="radio" id="dozer" name="character" value="Dozer"></label></li>`},
             {options: `<li class="align-center"><label for="oracle"> Oracle <input type="radio" id="oracle" name="character" value="Oracle"></label></li>`},  
             {options: `<li class="align-center"><label for="white-rabbit"> White Rabbit <input type="radio" id="white-rabbit" name="character" value="White-Rabbit"></label></li>`} , 
             {options: `<li class="align-center"><label for="trinity"> Trinity <input  class="correct" type="radio" id="trinity" name="character" value="Trinity"></label></li>`}, 
             {options: `<li class="align-center"><label for="mouse"> Mouse <input type="radio" id="mouse" name="character" value="Mouse"></label></li>`},
            ]
    },


    {
        pic: `<img src="assets/images/agent_smith.jpg">`,
       answers: [
        {options: `<li class="align-center"><label for="cypher"> Cypher <input type="radio" id="cypher" name="character" value="Cypher"></label></li>`}, 
         {options: `<li class="align-center"><label for="agent-smith"> Agent Smith <input class="correct" type="radio" id="agent-smith" name="character" value="Agent-smith"></label></li>`} , 
         {options: `<li class="align-center"><label for="neo"> Neo <input type="radio" id="neo" name="character" value="Neo"></label></li>`},
         {options: `<li class="align-center"><label for="apoc"> Apoc <input type="radio" id="apoc" name="character" value="Apoc"></label></li>`},
         {options: `<li class="align-center"><label for="anderson"> Mr Anderson <input type="radio" id="anderson" name="character" value="Mr Anderson"></label></li>`}   
        
        ]
    },

    {
        pic: `<img src="assets/images/The_Oracle.webp">`,
        answers: [
            {options: `<li class="align-center"><label for="trinity"> Trinity <input type="radio" id="trinity" name="character" value="Trinity"></label></li>`}, 
             {options: `<li class="align-center"><label for="oracle"> Oracle <input class="correct" type="radio" id="oracle" name="character" value="Oracle"></label></li>`},  
             {options: `<li class="align-center"><label for="morpheus"> Morpheus <input type="radio" id="morpheus" name="character" value=" Morpheus"></label></li>`} , 
             {options: `<li class="align-center"><label for="dozer"> Dozer <input type="radio" id="dozer" name="character" value="Dozer"></label></li>`},
             {options: `<li class="align-center"><label for="agent-brown"> Agent Brown <input type="radio" id="agent-brown" name="character" value="Agent Brown"></label></li>`},
            ]
    },
];


