'use strict';

const DIM = {
    min: 1,
    max: 15
};

const table = document.createElement('table')
const topHeaderRow = document.createElement('tr')

$('#wrapper').append(table)
$(table).append(topHeaderRow)

$(table).append()
for(let i = 0; i <= DIM.max; i++)
{
    let topHeader = document.createElement('th')
    $(topHeader).append(document.createTextNode(i===0?"":i))
    $(topHeaderRow).append(topHeader)
}
for(let i = DIM.min; i <= DIM.max; i++)
{
    let newRow = document.createElement('tr')
    let leftHeader = document.createElement('th')
    leftHeader.append(document.createTextNode(i))
    $(newRow).append(leftHeader)

    for(let j = DIM.min; j <= DIM.max; j++)
    {
        let newCell = document.createElement('td')
        $(newCell).append(document.createTextNode(i*j))
        $(newRow).append(newCell)
    }
    $(table).append(newRow)
}