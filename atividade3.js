let idade = 0; let jovens = 0 ; let idosos = 0

while(idade !== -99)
{
    idade = Number(prompt("Digite sua idade: (-99 para sair)"))
    if (idade <= 21)
    {
        jovens++;
    }   
    else if (idade >= 50)
    {
        idosos++;
    }   
}
console.log(`Total de pessoas menores de 21 anos: ${jovens}`)
console.log(`Total de pessoas maiores de 50 anos: ${idosos}`)