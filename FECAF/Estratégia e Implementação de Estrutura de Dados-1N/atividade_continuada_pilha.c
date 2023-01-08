#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int num;
    struct Node *prox;
}no;

int tam;

void inicia(no *PILHA);
int menu();
void opcao(no *PILHA, int op);
no *aloca();
void insereFim(no *PILHA);
void exibe(no *PILHA);
void retiraFim(no *PILHA);

main()
{
    no *PILHA = (no*) malloc(sizeof(no));
    if(!PILHA)
    {
        printf("Sem memoria disponivel!\n");
        exit(1);
    }else
    {
    inicia(PILHA);
    int opt;
        do
        {
        opt=menu();
        opcao(PILHA,opt);
           }
        while(opt);
    free(PILHA);
    }
}

int menu()
{
    int opt;
    printf("Escolha a opcao\n");
    printf("0. Sair\n");
    printf("1. Zerar pilha\n");
    printf("2. Exibir pilha\n");
    printf("3. Adicionar um Numero na pilha\n");
    printf("4. Retirar um Numero da pilha\n");
    printf("Opcao: ");
    scanf("%d", &opt);
    return opt;
}

void opcao(no *PILHA, int op)
{
    switch(op)
    {
        case 0:
            break;
        case 1:
            inicia(PILHA);
            break;
        case 2:
            exibe(PILHA);
            break; 
        case 3:
            insereFim(PILHA);
            break;
        case 4:
            retiraFim(PILHA);
            break;
        default:
            printf("Comando invalido\n\n");
    }
}

void inicia(no *PILHA)
{
    PILHA->prox = NULL;
    tam=0;
    printf("\n");
}

int vazia(no *PILHA)
{
    if(PILHA->prox == NULL)
        return 1;
    else
        return 0;
}

no *aloca()
{
    no *novo=(no*) malloc(sizeof(no));
    if(!novo)
    {
        printf("Sem memoria disponivel!\n");
        exit(1);
    }
    else
    {
        printf("Novo elemento: ");
        scanf("%d", &novo->num);
        printf("\n");
        return novo;
    }
}

void insereFim(no *PILHA)
{
    no *novo = aloca();
    novo->prox = NULL;
    if(vazia(PILHA))
        PILHA->prox = novo;
    else
    {
        no *tmp = PILHA->prox;
        while(tmp->prox != NULL)
            tmp = tmp->prox;
        tmp->prox = novo;
    }
    tam++;
}

void exibe(no *PILHA)
{
    system("cls");
    if(vazia(PILHA))
    {
        printf("Pilha vazia\n\n");
        return ;
    }
    no *tmp;
    tmp = PILHA->prox;
    printf("Pilha:");
    while( tmp != NULL)
    {
        printf("%6d", tmp->num);
        tmp = tmp->prox;
    }
    printf("\n\n");
}


void retiraFim(no *PILHA)
{
    if(PILHA->prox == NULL)
    {
        printf("Pilha vazia\n\n");
    }
    else
    {
        no *ultimo = PILHA->prox,*penultimo = PILHA;
        while(ultimo->prox != NULL)
        {
            penultimo = ultimo;
            ultimo = ultimo->prox;
        }
        penultimo->prox = NULL;
        tam--;
        printf("\n");
    }
}
