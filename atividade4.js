let idade; let sexo; let humor;
let mulherNerv  = 0; homemAgr = 0; outrosCal = 0; calm = 0; pNerv = 0; pCalm = 0; i = 0

while(i <= 150)
{
    idade = Number(prompt('Digite sua idade: '))
    sexo = Number(prompt('Digite seu sexo: 1 - feminino / 2 - masculino / 3 - outros '))
    humor = Number(prompt('Você é? 1 - Calma / 2 - nervosa / 3 agressiva '))
    if (humor === 1)
    {
        calm++;
    }
    if (sexo === 1 && humor === 2)
    {
        mulherNerv++;
    }
    if (sexo === 2 && humor === 3)
    {
        homemAgr++;
    }
    if (sexo === 3 && humor === 1)
    {
        outrosCal++;
    }
    if (humor === 2 && idade >= 40)
    {
        pNerv++;
    }
    if (humor === 1 && idade < 18)
    {
        pCalm++;
    }
    i++;
}

console.log(`O número de pessoas calmas é ${calm}`)
console.log(`O número de mulheres nervosas é ${mulherNerv}`)
console.log(`O número de homens agressivos é ${homemAgr}`)
console.log(`O número de outros calmos é ${outrosCal}`)
console.log(`O número de pessoas nervosas com mais de 40 anos é ${pNerv}`)
console.log(`O número de pessoas calmas com menos de 18 anos é ${pCalm}`)
