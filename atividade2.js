let n; let par = 0; let impar = 0

for(let i = 1; i <= 10; i++)
{
    n = Number(prompt(`Digite o ${i}º número: `))
    if(n % 2 === 0)
    {
        par++;
    }
    else
    {
        impar++;
    }
}

alert(`Foram digitados ${par} par(es) e ${impar} impar(es)`)
