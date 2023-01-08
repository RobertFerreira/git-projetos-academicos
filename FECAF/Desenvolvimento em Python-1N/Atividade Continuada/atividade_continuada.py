import pymysql
conexao = pymysql.connect(db='bd_atividade_continuada', user='root', passwd='')
cursor = conexao.cursor()

acao_banco = input("Qual ação deseja realizar na Tabela de Livros? (SELECT, INSERT, DELETE, UPDATE)\n").upper()

# SELECT
if (acao_banco == "SELECT"):
     id_livro = input('\nDigite o ID de qual livro deseja visualizar:\n')

     if id_livro.isdigit():

          cmd = 'SELECT * FROM tbl_livros where id_livro =  ' + id_livro
          cursor.execute(cmd)
          resultado = cursor.fetchall()

          if len(resultado) == 0:
               print("Livro inexistente")

          else:     
               for linha in resultado :
                    print('\nid_livro | nome_livro | id_autor | id_editora')
                    print(linha)
                    print("")
          conexao.close()
     else:
          print("Isto não parece ser um ID")

# INSERT 
elif (acao_banco == "INSERT"):

     id_livro = input('\nDigite um ID para o livro que deseja inserir:\n')

     if id_livro.isdigit():

          cmd = 'SELECT id_livro FROM tbl_livros where id_livro ='+id_livro
          cursor.execute(cmd)
          resultado = cursor.fetchall()

          if len(resultado) == 0:
               nome_livro = input('Entre com o Nome do Livro:')
               id_autor = input('Entre com o ID do Autor:')
               id_editora = input('Entre com o ID da Editora:')
               print("")

               if id_autor.isdigit() and id_editora.isdigit():

                    cmd2 = 'insert into tbl_livros values ('+id_livro +',"'+nome_livro+'",'+id_autor+','+id_editora+')'

                    cmd_autor = 'SELECT id_autor FROM tbl_autores where id_autor ='+id_autor
                    cursor.execute(cmd_autor)
                    resultado_autor = cursor.fetchall()

                    cmd_editora = 'SELECT id_editora FROM tbl_editoras where id_editora ='+id_editora
                    cursor.execute(cmd_editora)         
                    resultado_editora = cursor.fetchall()

                    if len(resultado_autor) == 0:
                         print('Autor inexistente')

                    if len(resultado_editora) == 0:
                         print('Editora inexistente')

                    else:
                         cursor.execute(cmd2)
                         conexao.commit()
                         print('Livro: '+ id_livro +' inserido com sucesso!')
               else:
                    print("Isto não parece ser um ID")

          else:
               print('\nLivro já existente\n')
          conexao.close()
     else:
          print("Isto não parece ser um ID")
     
# DELETE
elif (acao_banco == "DELETE"):
     id_livro = input('\nDigite um ID para o livro que deseja excluir:\n')

     if id_livro.isdigit():

          cmd = 'SELECT id_livro FROM tbl_livros where id_livro ='+id_livro
          cursor.execute(cmd)
          resultado = cursor.fetchall()
          
          if len(resultado) == 0:
               print("Livro inexistente")
          else:
               cmd2 = 'delete from tbl_livros where id_livro = '+ id_livro
               cursor.execute(cmd2)
               conexao.commit()
               print('Livro: '+ id_livro +' deletado com sucesso!')
          conexao.close()
     else:
          print("Isto não parece ser um ID")

# UPDATE
elif (acao_banco == "UPDATE"):
     id_livro = input('\nDigite um ID para o livro que deseja atualizar:\n')

     if id_livro.isdigit():

          cmd = 'SELECT id_livro FROM tbl_livros where id_livro ='+id_livro
          cursor.execute(cmd)
          resultado = cursor.fetchall()
          
          if len(resultado) == 0:
               print("Livro inexistente")
          else:
               nome_livro = input('Entre com o novo Nome do Livro:')
               id_autor = input('Entre com o novo ID do Autor:')
               id_editora = input('Entre com o novo ID da Editora:')
               print("")

               if id_autor.isdigit() and id_editora.isdigit():

                    cmd2 = 'update tbl_livros set nome_livro = "'+nome_livro+'", id_autor = '+id_autor+', id_editora = '+id_editora+' where id_livro = '+ id_livro

                    cmd_autor = 'SELECT id_autor FROM tbl_autores where id_autor ='+id_autor
                    cursor.execute(cmd_autor)
                    resultado_autor = cursor.fetchall()

                    cmd_editora = 'SELECT id_editora FROM tbl_editoras where id_editora ='+id_editora
                    cursor.execute(cmd_editora)         
                    resultado_editora = cursor.fetchall()

                    if len(resultado_autor) == 0:
                         print('Autor inexistente')

                    if len(resultado_editora) == 0:
                         print('Editora inexistente')

                    else:
                         cursor.execute(cmd2)
                         conexao.commit()
                         print('Livro: '+ id_livro +' alterado com sucesso!')
                    conexao.close()
               else:
                    print("Isto não parece ser um ID")
     else:
          print("Isto não parece ser um ID")


     
else:
     print("Digite uma ação válida!")