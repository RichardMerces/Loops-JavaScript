let n; let media = 0; let soma = 0; let c = 0;

do
{
    n = Number(prompt("Digite um número: (0 para sair)"))
    if (n % 3 == 0)
    {
        soma += n;
        c++;
    }
}
while(n !== 0)

c--;
media = soma / c;

alert(`A média dos números multiplos de 3 é igual a ${media}`)