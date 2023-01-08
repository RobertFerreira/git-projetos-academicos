#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int num;
    struct Node *prox;
}no;

int tam;

void inicia(no *FILA);
int menu();
void opcao(no *FILA, int op);
no *aloca();
void insereFim(no *FILA);
void exibe(no *FILA);
void retiraInicio(no *FILA);

main()
{
    no *FILA = (no*) malloc(sizeof(no));
    if(!FILA)
    {
        printf("Sem memoria disponivel!\n");
        exit(1);
    }else
    {
    inicia(FILA);
    int opt;
        do
        {
        opt=menu();
        opcao(FILA,opt);
           }
        while(opt);
    free(FILA);
    }
}

int menu()
{
    int opt;
    printf("Escolha a opcao\n");
    printf("0. Sair\n");
    printf("1. Zerar fila\n");
    printf("2. Exibir fila\n");
    printf("3. Adicionar um Numero no final da fila\n");
    printf("4. Retirar um Numero do inicio da fila\n");
    printf("Opcao: ");
    scanf("%d", &opt);
    return opt;
}

void opcao(no *FILA, int op)
{
    switch(op)
    {
        case 0:
            break;
        case 1:
            inicia(FILA);
            break;
        case 2:
            exibe(FILA);
            break;       
        case 3:
            insereFim(FILA);
            break;
        case 4:
            retiraInicio(FILA);
            break;
        default:
            printf("Comando invalido\n\n");
    }
}

void inicia(no *FILA)
{
    FILA->prox = NULL;
    tam=0;
    printf("\n");
}

int vazia(no *FILA)
{
    if(FILA->prox == NULL)
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
        return novo;
        printf("\n");
    }
}

void insereFim(no *FILA)
{
    no *novo = aloca();
    novo->prox = NULL;
    if(vazia(FILA))
        FILA->prox = novo;
    else
    {
        no *tmp = FILA->prox;
        while(tmp->prox != NULL)
            tmp = tmp->prox;
        tmp->prox = novo;
    }
    tam++;
    printf("\n");
}


void exibe(no *FILA)
{
    system("cls");
    if(vazia(FILA))
    {
        printf("Fila vazia\n\n");
        return ;
    }
    no *tmp;
    tmp = FILA->prox;
    printf("Fila:");
    while( tmp != NULL)
    {
        printf("%6d", tmp->num);
        tmp = tmp->prox;
    }
    printf("\n\n");
}

void retiraInicio(no *FILA)
{
    if(FILA->prox == NULL)
    {
        printf("Fila vazia\n");
    }
    else
    {
        no *tmp = FILA->prox;
        FILA->prox = tmp->prox;
        tam--;
        printf("\n");
    }
}
