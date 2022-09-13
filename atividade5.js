let n; let soma = 0;

do
{
    n = Number(prompt("Digite um número: "))
    soma += n;
}
while(n !== 0)

alert(`A soma dos números digitados foi ${soma}`)