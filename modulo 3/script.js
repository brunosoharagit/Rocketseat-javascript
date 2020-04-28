var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var mixfoods = 
[
    'Feijão com udon',
    'Udon de abacaxi',
    'Carne com sorvete de baunilha',
    'Linguiça toscana com canela'
];

function renderMixes()
{
    listElement.innerHTML = '';

    for(mixfood of mixfoods)
    {
        //Renderiza a lista
        var mixElement = document.createElement('li');
        var mixText = document.createTextNode(mixfood);

        mixElement.appendChild(mixText);
        listElement.appendChild(mixElement);


        //Cria um link de remoção de um item
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir'); 

        linkElement.setAttribute('href', '#');

        var pos = mixfoods.indexOf(mixfood);
        linkElement.setAttribute('onclick', 'removeMix('+pos+')');

        linkElement.appendChild(linkText);
        mixElement.appendChild(linkElement);

        listElement.appendChild(mixElement);
    }
};

renderMixes();


function addMix()
{
    var mixText = inputElement.value;

    mixfoods.push(mixText);
    inputElement.value = '';
    renderMixes();
}


buttonElement.onclick = addMix;

function removeMix(pos)
{
    mixfoods.splice(pos, 1);
    renderMixes();
}

